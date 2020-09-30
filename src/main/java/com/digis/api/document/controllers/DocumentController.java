package com.digis.api.document.controllers;

import com.digis.api.AbstractController;
import com.digis.api.attachment.services.StoreFileService;
import com.digis.api.auth.model.Person;
import com.digis.api.auth.service.PersonService;
import com.digis.api.document.model.Document;
import com.digis.api.document.service.DocumentService;
import com.digis.common.PersonContextHelper;
import com.digis.common.dto.Status;
import com.digis.common.utils.SignHelper;
import org.apache.log4j.Logger;
import org.aspectj.util.FileUtil;
import org.bouncycastle.util.encoders.Hex;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.File;
import java.security.PublicKey;

import static com.digis.common.utils.JsonHelper.toJson;

/**
 * Описание документа.
 */
@RestController
@RequestMapping("api")
public class DocumentController extends AbstractController {
	private final Logger log = Logger.getLogger(DocumentController.class);

	@Autowired
	private DocumentService documentService;

	@Autowired
	private StoreFileService storeFileService;

	@Autowired
	private PersonService personService;

	@GetMapping(value = "document", produces = "application/json")
	public String findAll() {
		return toJson(documentService.findAll());
	}

	@GetMapping(value = "document/{id}", produces = "application/json")
	public String findById(@PathVariable Long id) {
		return toJson(documentService.findById(id));
	}

	@DeleteMapping(value = "document/{id}")
	public String deleteById(@PathVariable Long id) {
		documentService.deleteById(id);

		final Status status = new Status();
		status.setCode(200L);
		status.setDescription("OK.");
		return toJson(status);
	}

	@GetMapping(value = "document/{id}/sign", produces = "application/json")
	public String sign(@PathVariable Long id) throws Exception {
		Document document = documentService.findById(id).get();
		File file = storeFileService.loadFileAsResource(document.getAttachment().getInternalFileName()).getFile();
		Person person = personService.findByUsername(PersonContextHelper.getCurrentUsername()).get();
		byte[] sign = SignHelper.sign(FileUtil.readAsByteArray(file), person.getCertificate().getPrivateKey());
		switch (person.getRole())
		{
			case CLIENT:
				document.setClientSign(sign);
				break;
			case NOTARY:
				document.setNotarySign(sign);
				break;
			default:
				throw new IllegalAccessException();
		}
		documentService.save(document);
		return toJson(Hex.toHexString(sign));
	}

	@GetMapping(value = "document/{id}/verify", produces = "application/json")
	public String verify(@PathVariable Long id) throws Exception {
		Document document = documentService.findById(id).get();
		File file = storeFileService.loadFileAsResource(document.getAttachment().getInternalFileName()).getFile();
		Person person = personService.findByUsername(PersonContextHelper.getCurrentUsername()).get();
		byte[] sign;
		switch (person.getRole())
		{
			case CLIENT:
				sign = document.getClientSign();
				break;
			case NOTARY:
				sign = document.getNotarySign();
				break;
			default:
				throw new IllegalAccessException();
		}

		PublicKey publicKey = person.getCertificate().getPublicKey();
		return toJson(SignHelper.verify(publicKey, FileUtil.readAsByteArray(file), sign));
	}

	@GetMapping(value = "document/{id}/verify/{hex}", produces = "application/json")
	public String verifyHex(@PathVariable Long id, @PathVariable String hex) throws Exception {
		Document document = documentService.findById(id).get();
		File file = storeFileService.loadFileAsResource(document.getAttachment().getInternalFileName()).getFile();

		PublicKey publicKey = personService.findByUsername(PersonContextHelper.getCurrentUsername()).get().getCertificate().getPublicKey();
		return toJson(SignHelper.verify(publicKey, FileUtil.readAsByteArray(file), Hex.decode(hex)));
	}
}
