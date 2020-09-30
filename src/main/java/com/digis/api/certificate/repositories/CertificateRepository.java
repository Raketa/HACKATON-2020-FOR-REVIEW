package com.digis.api.certificate.repositories;

import com.digis.api.certificate.model.Certificate;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CertificateRepository extends CrudRepository<Certificate, Long> {
}