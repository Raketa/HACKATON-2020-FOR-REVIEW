package com.digis.api.chat.repository;

import com.digis.api.chat.model.Chat;
import org.springframework.data.repository.CrudRepository;

public interface ChatRepository extends CrudRepository<Chat, Long> {
}
