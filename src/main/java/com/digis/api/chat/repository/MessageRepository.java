package com.digis.api.chat.repository;

import com.digis.api.chat.model.Message;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MessageRepository extends CrudRepository<Message, Long> {

	@Query("from Message m where m.chat.id=:id order by m.timestamp desc")
	List<Message> findAllOrdered(Long id);
}
