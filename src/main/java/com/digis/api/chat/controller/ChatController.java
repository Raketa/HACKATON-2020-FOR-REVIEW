package com.digis.api.chat.controller;

import com.digis.api.AbstractController;
import com.digis.api.auth.model.Person;
import com.digis.api.auth.service.PersonService;
import com.digis.api.chat.model.Chat;
import com.digis.api.chat.model.Message;
import com.digis.api.chat.services.MessageService;
import com.digis.common.PersonContextHelper;
import com.digis.common.exceptions.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Calendar;
import java.util.Map;
import java.util.Optional;

import static com.digis.common.utils.JsonHelper.fromJson;
import static com.digis.common.utils.JsonHelper.toJson;

@RestController
@RequestMapping("api")
public class ChatController extends AbstractController {

	@Autowired
	private MessageService messageService;

	@Autowired
	private PersonService personService;

	@GetMapping(value = "chat/{id}/message", produces = "application/json")
	public String find(@PathVariable Long id) {
		return createStatusSuccess(messageService.findAll(id));
	}

	@DeleteMapping("message/{messageId}")
	public String deleteMessage(@PathVariable Long messageId) throws NotFoundException {
		final Optional<Message> messageOptional = messageService.find(messageId);
		if (!messageOptional.isPresent()) {
			throw new NotFoundException("Message not found.");
		}

		final Message message = messageOptional.get();
		message.setDeleted(true);
		messageService.save(message);
		return createStatusSuccess(message);
	}

	@PostMapping("chat/{chatId}/message")
	public String addMessage(@PathVariable Long chatId, @RequestBody String data) throws NotFoundException {
		final Map map = fromJson(data, Map.class);
		final String text = (String) map.get("message");
		final Optional<Chat> chat = messageService.findChat(chatId);
		final Optional<Person> person = personService.findByUsername(PersonContextHelper.getCurrentUsername());
		final Message message = new Message();
		message.setDeleted(false);
		message.setTimestamp(Calendar.getInstance());
		message.setAuthor(person.get());
		message.setChat(chat.get());
		message.setText(text);
		messageService.save(message);
		return createStatusSuccess(message);
	}

	@PostMapping("chat")
	public String addChat(@RequestBody String data) {
		final Map map = fromJson(data, Map.class);
		final String title = (String) map.get("title");
		final Chat chat = new Chat();
		chat.setTitle(title);
		chat.setTimestamp(Calendar.getInstance());
		messageService.addChat(chat);
		return createStatusSuccess(chat);
	}


}
