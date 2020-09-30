package com.digis.api.task.model;

import com.digis.api.auth.model.Person;
import com.digis.api.document.model.Document;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

@Entity
public class Task {

    @Id
    @GeneratedValue
    private Long id;

    @ManyToOne
    private Person clients;

    @ManyToOne
    private Person notary;

    @ManyToOne
    private Person admin;

    @ManyToMany(cascade = {CascadeType.ALL})
    private List<Document> documents = new ArrayList<>();

    private Calendar creationDate;
    private TaskStatus taskStatus;
    private TaskType taskType;
    private BigDecimal amount;
    private boolean needPayment = true;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Person getClients() {
        return clients;
    }

    public void setClients(Person clients) {
        this.clients = clients;
    }

    public Person getNotary() {
        return notary;
    }

    public void setNotary(Person notary) {
        this.notary = notary;
    }

    public Person getAdmin() {
        return admin;
    }

    public void setAdmin(Person admin) {
        this.admin = admin;
    }

    public List<Document> getDocuments() {
        return documents;
    }

    public void setDocuments(List<Document> documents) {
        this.documents = documents;
    }

    public Calendar getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(Calendar creationDate) {
        this.creationDate = creationDate;
    }

    public TaskStatus getTaskStatus() {
        return taskStatus;
    }

    public void setTaskStatus(TaskStatus taskStatus) {
        this.taskStatus = taskStatus;
    }

    public BigDecimal getAmount() {
        return amount;
    }

    public void setAmount(BigDecimal amount) {
        this.amount = amount;
    }

    public TaskType getTaskType() {
        return taskType;
    }

    public void setTaskType(TaskType taskType) {
        this.taskType = taskType;
    }

    public boolean isNeedPayment() {
        return needPayment;
    }

    public void setNeedPayment(boolean needPayment) {
        this.needPayment = needPayment;
    }
}
