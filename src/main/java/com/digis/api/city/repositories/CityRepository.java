package com.digis.api.city.repositories;

import com.digis.api.city.model.City;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CityRepository extends CrudRepository<City, Long> {

	@Query("from City c where upper(c.name) = upper(?1)")
	Optional<City> findByName(String name);

	@Query("from City c where upper(c.name) like upper(concat('%', :query, '%')) order by name")
	List<City> findByNameLike(String query);

	@Query("from City order by name")
	List<City> findAllSortedByName();
}
