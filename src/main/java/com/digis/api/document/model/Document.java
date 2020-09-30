package com.digis.api.document.model;

import com.digis.api.attachment.model.Attachment;

import javax.persistence.*;

@Entity
public class Document {
	@Id
	@GeneratedValue
	private Long id;
	private String description;
	@OneToOne(cascade = {CascadeType.ALL})
	private Attachment attachment;
	private byte[] clientSign;
	private byte[] notarySign;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String name) {
		this.description = name;
	}

	public Attachment getAttachment() {
		return attachment;
	}

	public void setAttachment(Attachment attachment) {
		this.attachment = attachment;
	}

	public byte[] getClientSign() {
		return clientSign;
	}

	public void setClientSign(byte[] clientSign) {
		this.clientSign = clientSign;
	}

	public byte[] getNotarySign() {
		return notarySign;
	}

	public void setNotarySign(byte[] notarySign) {
		this.notarySign = notarySign;
	}
}
