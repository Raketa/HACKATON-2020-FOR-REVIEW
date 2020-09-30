package com.digis.api.attachment.services;

import com.digis.api.attachment.model.Attachment;
import com.digis.api.attachment.repository.AttachmentRepository;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

@Service
public class AttachmentService {
	@Resource
	private AttachmentRepository attachmentRepository;

	public List<Attachment> getAttachments() {
		final List<Attachment> attachments = new ArrayList<>();
		for (Attachment attachment : attachmentRepository.findAll()) {
			attachments.add(attachment);
		}
		return attachments;
	}

	public Attachment addAttachment(Attachment attachment) {
		return attachmentRepository.save(attachment);
	}

	public Attachment findById(Long attachmentId) {
		return attachmentRepository.findById(attachmentId).get();
	}
}
