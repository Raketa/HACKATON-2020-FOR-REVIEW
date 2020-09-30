package com.digis.api.locale.repositories;

import com.digis.api.locale.model.Label;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LabelRepository extends CrudRepository<Label, String> {

	@Query("select l from Label l")
	List<Label> findAll();
}
