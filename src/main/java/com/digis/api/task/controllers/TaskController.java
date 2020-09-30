package com.digis.api.task.controllers;

import com.digis.api.AbstractController;
import com.digis.api.attachment.services.StoreFileService;
import com.digis.api.auth.model.Person;
import com.digis.api.auth.service.PersonService;
import com.digis.api.document.model.Document;
import com.digis.api.task.model.Task;
import com.digis.api.task.model.TaskStatus;
import com.digis.api.task.model.TaskType;
import com.digis.api.task.services.TaskService;
import com.digis.common.PersonContextHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;
import java.util.Map;

import static com.digis.common.utils.JsonHelper.fromJson;
import static com.digis.common.utils.JsonHelper.toJson;

@RestController
@RequestMapping("api/task")
public class TaskController extends AbstractController {

    @Autowired
    private PersonService personService;

    @Autowired
    private TaskService taskService;

    @Autowired
    private StoreFileService storeFileService;

    @PostMapping
    public String register(@RequestBody String data) {
        final Map map = fromJson(data, Map.class);
        final Long clientId = Long.valueOf((String) map.get("clientId"));
        final Long notaryId = Long.valueOf((String) map.get("notaryId"));
        final TaskType taskType = TaskType.valueOf((String) map.get("taskType"));
        final String adminName = PersonContextHelper.getCurrentUsername();
        final Person client = personService.findById(clientId).get();
        final Person notary = personService.findById(notaryId).get();

        final Task task = new Task();
        task.setAdmin(personService.findByUsername(adminName).get());
        task.setClients(client);
        task.setCreationDate(Calendar.getInstance());
        task.setNotary(notary);
        task.setTaskType(taskType);
        task.setTaskStatus(TaskStatus.NEW);

        taskService.save(task);
        return createStatusSuccess(task);
    }

    @PostMapping("find")
    public String findTasks(@RequestBody String data) {
        final Map map = fromJson(data, Map.class);
        final String clientName = (String) map.get("username");
        final TaskType taskType = TaskType.valueOf((String) map.get("taskType"));
        final TaskStatus taskStatus = TaskStatus.valueOf((String) map.get("taskStatus"));
        List<Person> clients = new ArrayList<>();
        clients.add(personService.findByUsername(clientName).get());
        return createStatusSuccess(taskService.getTasks(clients, taskStatus, taskType));
    }

    @PostMapping(value = "{id}/addDocuments")
    public String addDocuments(@PathVariable("id") Long id, @RequestParam("file") MultipartFile file, @RequestParam("description") String description) throws IOException {
        final Document document = new Document();
        document.setDescription(description);
        document.setAttachment(storeFileService.storeFile(file));

        Task task = taskService.getById(id).get();
        task.getDocuments().add(document);
        taskService.save(task);

        return toJson(task);
    }

    @PostMapping(value = "{id}/changeStatus")
    public String changeStatus(@PathVariable("id") Long id, @RequestParam("status") TaskStatus status) {
        Task task = taskService.getById(id).get();
        task.setTaskStatus(status);
        taskService.save(task);

        return toJson(task);
    }

    @PostMapping(value = "{id}/setAmount")
    public String setAmount(@PathVariable("id") Long id, @RequestParam("amount") BigDecimal amount) {
        Task task = taskService.getById(id).get();
        task.setAmount(amount);
        taskService.save(task);

        return toJson(task);
    }

    @GetMapping("{id}/payment")
    public String payment(@PathVariable("id") Long id) {
        Task task = taskService.getById(id).get();
        task.setNeedPayment(false);
        taskService.save(task);

        return toJson(task);
    }
}
