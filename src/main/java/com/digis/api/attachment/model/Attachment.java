package com.digis.api.attachment.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Attachment {
	@Id
	@GeneratedValue
	private Long id;
	private String internalFileName;
	private String originalFileName;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getOriginalFileName() {
		return originalFileName;
	}

	public void setOriginalFileName(String originalFilename) {
		this.originalFileName = originalFilename;
	}

	public String getInternalFileName() {
		return internalFileName;
	}

	public void setInternalFileName(String internalFileName) {
		this.internalFileName = internalFileName;
	}
}
