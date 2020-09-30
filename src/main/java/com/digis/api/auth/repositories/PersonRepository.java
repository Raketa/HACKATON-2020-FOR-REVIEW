package com.digis.api.auth.repositories;

import com.digis.api.auth.model.Person;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PersonRepository extends CrudRepository<Person, Long> {

	@Query("select p from Person p where p.username = :username and p.enabled=true")
	Optional<Person> findByUsername(@Param("username") String username);
}
