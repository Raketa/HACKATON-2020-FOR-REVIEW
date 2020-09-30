package com.digis.api.task.services;

import com.digis.api.auth.model.Person;
import com.digis.api.task.model.Task;
import com.digis.api.task.model.TaskStatus;
import com.digis.api.task.model.TaskType;
import com.digis.api.task.repositories.TaskRepository;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class TaskService {

    @Resource
    private TaskRepository taskRepository;

    public void save(Task task) {
        taskRepository.save(task);
    }

    public Optional<Task> getById(Long id) {
        return taskRepository.findById(id);
    }

    public List<Task> getAllTasks() {
        List<Task> tasks = new ArrayList<>();
        taskRepository.findAll().forEach(tasks::add);
        return tasks;
    }

    public List<Task> getTasks(List<Person> clients, TaskStatus status, TaskType type) {
        List<Task> tasks = new ArrayList<>();
        taskRepository.find(clients).forEach(tasks::add);
        return tasks;
    }
}
