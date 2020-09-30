package com.digis.api.attachment.controllers;

import com.digis.api.AbstractController;
import com.digis.api.attachment.dto.AttachmentInfo;
import com.digis.api.attachment.model.Attachment;
import com.digis.api.attachment.services.AttachmentService;
import com.digis.api.attachment.services.StoreFileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("api")
public class AttachmentController extends AbstractController {
	@Autowired
	private AttachmentService attachmentService;

	@Autowired
	private StoreFileService storeFileService;

	@GetMapping(value = "attachment", produces = "application/json")
	public String getAttachemnts() {
		return createStatusSuccess(attachmentService.getAttachments());
	}

	@PostMapping(value = "attachment")
	public String addFile(@RequestParam("file") MultipartFile file) throws IOException {
		final Attachment attachment = storeFileService.storeFile(file);
		final Attachment savedAttachment = attachmentService.addAttachment(attachment);
		final AttachmentInfo attachmentInfo = new AttachmentInfo();
		attachmentInfo.setId(savedAttachment.getId());
		attachmentInfo.setFileName(savedAttachment.getOriginalFileName());
		return createStatusSuccess(attachmentInfo);
	}

	@GetMapping(value = "attachment/{attachmentId}", produces = MediaType.MULTIPART_FORM_DATA_VALUE)
	public ResponseEntity<Resource> downloadAttachmentById(@PathVariable Long attachmentId) throws Exception {
		final Attachment attachment = attachmentService.findById(attachmentId);
		final Resource resource = storeFileService.loadFileAsResource(attachment.getInternalFileName());
		return ResponseEntity.ok()
				.contentLength(resource.contentLength())
				.header(HttpHeaders.CONTENT_TYPE, MediaType.MULTIPART_FORM_DATA_VALUE)
				.header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=".concat(attachment.getOriginalFileName()))
				.body(resource);
	}
}
