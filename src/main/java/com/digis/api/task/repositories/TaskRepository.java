package com.digis.api.task.repositories;

import com.digis.api.auth.model.Person;
import com.digis.api.task.model.Task;
import com.digis.api.task.model.TaskStatus;
import com.digis.api.task.model.TaskType;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TaskRepository extends CrudRepository<Task,Long> {

    @Query("select t from Task t where t.clients in (:clients)")
    List<Task> find(@Param("clients") List<Person> clients);
}
