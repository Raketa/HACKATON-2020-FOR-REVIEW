package com.digis.api.auth.controllers;

import com.digis.api.AbstractController;
import com.digis.api.auth.model.Person;
import com.digis.api.auth.model.Role;
import com.digis.api.auth.service.PersonService;
import com.digis.api.certificate.model.Certificate;
import com.digis.common.PersonContextHelper;
import com.digis.common.utils.SignHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.security.*;
import java.security.cert.CertificateException;
import java.util.Calendar;
import java.util.Map;
import java.util.Optional;

import static com.digis.common.utils.JsonHelper.fromJson;

@RestController
@RequestMapping("api")
public class AuthController extends AbstractController {

	@Autowired
	private PersonService personService;


	@GetMapping("user")
	public String getUserInfo() {
		final Optional<Person> person = personService.findByUsername(PersonContextHelper.getCurrentUsername());

		if (!person.isPresent()) {
			throw new IllegalStateException("Usernot found.");
		}

		return createStatusSuccess(person.get());
	}

	@PostMapping("register")
	public String register(@RequestBody String data) throws CertificateException, NoSuchAlgorithmException, IOException, SignatureException, NoSuchProviderException, InvalidKeyException {
		final Map map = fromJson(data, Map.class);
		final Role role = Role.valueOf((String) map.get("role"));  // client, notary, admin
		final String username = (String) map.get("username");
		final String firstname = (String) map.get("firstname");
		final String lastname = (String) map.get("lastname");
		final String patronymic = (String) map.get("patronymic");
		final String password = encoder().encode((String) map.get("password"));

		final Person person = new Person();
		person.setUsername(username);
		person.setFirstname(firstname);
		person.setLastname(lastname);
		person.setPatronymic(patronymic);
		person.setBirthday(Calendar.getInstance());
		person.setRole(role);
		person.setPassword(password);
		person.setEnabled(true);

		KeyPair pair = SignHelper.generateCertificate();
		Certificate certificate = new Certificate();
		certificate.setPrivateKey(pair.getPrivate());
		certificate.setPublicKey(pair.getPublic());
		person.setCertificate(certificate);

		personService.save(person);

		return createStatusSuccess(person);
	}

	public PasswordEncoder encoder() {
		return new BCryptPasswordEncoder();
	}
}
