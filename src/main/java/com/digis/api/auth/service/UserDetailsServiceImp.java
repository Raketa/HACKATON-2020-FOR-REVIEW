package com.digis.api.auth.service;

import com.digis.api.auth.model.Person;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import java.util.Optional;

public class UserDetailsServiceImp implements UserDetailsService {

	@Autowired
	private PersonService personService;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		final Optional<Person> person = findUserByUsername(username);
		if (person.isPresent()) {
			final User.UserBuilder builder = org.springframework.security.core.userdetails.User.withUsername(username);
			builder.password(person.get().getPassword());
			builder.roles(person.get().getRole().name());
			return builder.build();

		} else {
			throw new UsernameNotFoundException("User not found.");
		}
	}

	private Optional<Person> findUserByUsername(String username) {
		return personService.findByUsername(username);
	}
}
