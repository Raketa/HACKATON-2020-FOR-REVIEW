package com.digis.api.chat.services;

import com.digis.api.chat.model.Chat;
import com.digis.api.chat.model.Message;
import com.digis.api.chat.repository.ChatRepository;
import com.digis.api.chat.repository.MessageRepository;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class MessageService {

	@Resource
	private MessageRepository messageRepository;

	@Resource
	private ChatRepository chatRepository;

	public void save(Message message) {
		messageRepository.save(message);
	}

	public Optional<Message> find(Long messageId) {
		return messageRepository.findById(messageId);
	}

	public List<Message> findAll(Long id) {
		return new ArrayList<>(messageRepository.findAllOrdered(id));
	}

	public Optional<Chat> findChat(Long chatId) {
		return chatRepository.findById(chatId);
	}

	public void addChat(Chat chat) {
		chatRepository.save(chat);
	}
}
