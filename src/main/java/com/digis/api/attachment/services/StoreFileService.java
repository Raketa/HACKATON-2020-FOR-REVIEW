package com.digis.api.attachment.services;

import com.digis.api.attachment.model.Attachment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.Calendar;

@Service
public class StoreFileService {
	private final Path fileStorageLocation;

	@Autowired
	public StoreFileService() {
		this.fileStorageLocation = Paths
				.get("./store/files")
				.toAbsolutePath()
				.normalize();

		try {
			Files.createDirectories(this.fileStorageLocation);
		} catch (Exception ex) {
			ex.printStackTrace();
		}
	}

	private String getNewFileName() {
		return String.valueOf(Calendar.getInstance().getTimeInMillis()) + Thread.currentThread().getId();
	}

	public Attachment storeFile(MultipartFile file) throws IOException {
		final String fileName = getNewFileName();
		final Path targetLocation = this.fileStorageLocation.resolve(fileName);
		Files.copy(file.getInputStream(), targetLocation, StandardCopyOption.REPLACE_EXISTING);

		final Attachment attachment = new Attachment();
		attachment.setOriginalFileName(file.getOriginalFilename());
		attachment.setInternalFileName(fileName);
		return attachment;
	}

	public Resource loadFileAsResource(String fileName) throws Exception {
		try {
			final Path filePath = this.fileStorageLocation.resolve(fileName).normalize();
			final Resource resource = new UrlResource(filePath.toUri());
			if (resource.exists()) {
				return resource;
			} else {
				throw new Exception("FILE NOT FOUND");
			}

		} catch (Exception e) {
			throw new Exception("FILE NOT FOUND", e);
		}
	}
}
