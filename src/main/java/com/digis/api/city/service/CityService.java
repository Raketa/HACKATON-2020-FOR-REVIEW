package com.digis.api.city.service;

import com.digis.api.city.model.City;
import com.digis.api.city.repositories.CityRepository;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;
import java.util.Optional;

@Service
public class CityService {
	@Resource
	private CityRepository cityRepository;

	public List<City> findAll() {
		return cityRepository.findAllSortedByName();
	}

	public City addCity(City city) {
		return cityRepository.save(city);
	}

	public Optional<City> findByName(String name) {
		return cityRepository.findByName(name);
	}

	public City findById(Long id) {
		return cityRepository.findById(id).get();
	}

	public List<City> selectByNameLike(String query) {
		return cityRepository.findByNameLike(query);
	}
}
