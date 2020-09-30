package com.digis.api.chat.model;

import com.digis.api.auth.model.Person;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.Calendar;
import java.util.List;

@Entity
public class Chat {

	@Id
	@GeneratedValue
	private Long id;

	private String title;

	@OneToMany
	private List<Message> messages;

	@OneToMany
	private List<Person> participant;

	private Calendar timestamp;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public List<Message> getMessages() {
		return messages;
	}

	public void setMessages(List<Message> messages) {
		this.messages = messages;
	}

	public List<Person> getParticipant() {
		return participant;
	}

	public void setParticipant(List<Person> participant) {
		this.participant = participant;
	}

	public Calendar getTimestamp() {
		return timestamp;
	}

	public void setTimestamp(Calendar timestamp) {
		this.timestamp = timestamp;
	}
}
