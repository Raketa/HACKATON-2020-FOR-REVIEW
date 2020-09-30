package com.digis.api.auth.service;

import com.digis.api.auth.model.Person;
import com.digis.api.auth.repositories.PersonRepository;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.Optional;

@Service
public class PersonService {

	@Resource
	private PersonRepository personRepository;

	public Optional<Person> findByUsername(String username) {
		return personRepository.findByUsername(username);
	}

	public void save(Person person) {
		personRepository.save(person);
	}

	public Optional<Person> findById(Long id) {
		return personRepository.findById(id);
	}
}
