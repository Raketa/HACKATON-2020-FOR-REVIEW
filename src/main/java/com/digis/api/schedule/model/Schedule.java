package com.digis.api.schedule.model;

import com.digis.api.auth.model.Person;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import java.util.Calendar;

@Entity
public class Schedule {
	@Id
	@GeneratedValue
	private Long id;

	private Calendar start;
	private Calendar end;
	private boolean busy;

	@ManyToOne
	private Person notary;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Calendar getStart() {
		return start;
	}

	public void setStart(Calendar from) {
		this.start = from;
	}

	public Calendar getEnd() {
		return end;
	}

	public void setEnd(Calendar to) {
		this.end = to;
	}

	public Person getNotary() {
		return notary;
	}

	public void setNotary(Person notary) {
		this.notary = notary;
	}

	public boolean isBusy() {
		return busy;
	}

	public void setBusy(boolean busy) {
		this.busy = busy;
	}
}
