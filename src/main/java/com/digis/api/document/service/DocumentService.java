package com.digis.api.document.service;

import com.digis.api.document.model.Document;
import com.digis.api.document.repositories.DocumentRepository;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@Service
public class DocumentService {
	@Resource
	private DocumentRepository documentRepository;

	public void deleteById(Long id) {
		documentRepository.deleteById(id);
	}

	public void save(Document document) {
		documentRepository.save(document);
	}

	public Optional<Document> findById(Long id) {
		return documentRepository.findById(id);
	}

	public List<Document> findAll() {
		return StreamSupport.stream(documentRepository.findAll().spliterator(), false)
				.collect(Collectors.toList());
	}
}
