package com.digis.api.certificate.service;

import com.digis.api.certificate.model.Certificate;
import com.digis.api.certificate.repositories.CertificateRepository;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

@Service
public class CertificateService {

    @Resource
    private CertificateRepository certificateRepository;

    public List<Certificate> findAllCertificate() {
        List<Certificate> result = new ArrayList<>();
        certificateRepository.findAll().forEach(result::add);
        return result;
    }
}
