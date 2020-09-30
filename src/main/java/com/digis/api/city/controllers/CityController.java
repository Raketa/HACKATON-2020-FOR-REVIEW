package com.digis.api.city.controllers;

import com.digis.api.city.model.City;
import com.digis.api.city.service.CityService;
import com.digis.api.AbstractController;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

import static com.digis.common.utils.JsonHelper.fromJson;
import static com.digis.common.utils.JsonHelper.toJson;

@RestController
@RequestMapping("api")
public class CityController extends AbstractController {
	private final Logger log = Logger.getLogger(CityController.class);

	@Autowired
	private CityService cityService;

	@GetMapping(value = "city", produces = "application/json")
	public String findCities() {
		log.info("city");

		return toJson(cityService.findAll());
	}

	@GetMapping(value = "city", params = {"q"})
	public String findCities(@RequestParam(name = "q") Optional<String> query) {
		log.info("city?q=");

		if (!query.isPresent()) {
			return toJson(cityService.findAll());
		}

		return toJson(cityService.selectByNameLike(query.get()));
	}

	@GetMapping(value = "city/{cityId}", produces = "application/json")
	public String getCity(@PathVariable Long id) {
		log.info("City list.");
		return toJson(cityService.findById(id));
	}

	@PostMapping("city")
	public String addCity(@RequestBody String data) {
		log.info("add a city.");
		final City city = fromJson(data, City.class);
		final Optional<City> optionalCity = cityService.findByName(city.getName());
		if (!optionalCity.isPresent()) {
		    try {
                final City savedCity = cityService.addCity(city);
                return toJson(savedCity);
            } catch (Exception e) {
		        log.error("CityController: ", e);
            }
		}

		return toJson(optionalCity.get());
	}
}
