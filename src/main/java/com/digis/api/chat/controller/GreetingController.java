package com.digis.api.chat.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.Message;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "*")
@Controller
public class GreetingController {

	@Autowired
	private SimpMessagingTemplate template;

	@MessageMapping("/message")
	public void message(Message<String> message) {
		final String payload = message.getPayload();
		template.convertAndSend("/topic", String.format("answer(topic): %s", payload));
	}
}