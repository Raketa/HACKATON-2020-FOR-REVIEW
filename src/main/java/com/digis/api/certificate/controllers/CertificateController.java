package com.digis.api.certificate.controllers;

import com.digis.api.AbstractController;
import com.digis.api.auth.model.Person;
import com.digis.api.auth.service.PersonService;
import com.digis.api.certificate.model.Certificate;
import com.digis.api.certificate.service.CertificateService;
import com.digis.common.PersonContextHelper;
import com.digis.common.utils.SignHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.security.KeyPair;

import static com.digis.common.utils.JsonHelper.toJson;

@RestController
@RequestMapping("api/certificate")
public class CertificateController extends AbstractController {

    @Autowired
    private CertificateService certificateService;

    @Autowired
    private PersonService personService;

    @GetMapping("list")
    public String register() {
        return createStatusSuccess(certificateService.findAllCertificate());
    }

    @GetMapping(value = "generateCertificate")
    public String generateCertificate() throws Exception {
        String currentUsername = PersonContextHelper.getCurrentUsername();
        KeyPair pair = SignHelper.generateCertificate();
        Certificate certificate = new Certificate();
        certificate.setPrivateKey(pair.getPrivate());
        certificate.setPublicKey(pair.getPublic());
        Person person = personService.findByUsername(currentUsername).get();
        person.setCertificate(certificate);
        personService.save(person);
        return createStatusSuccess(certificate);
    }
}
