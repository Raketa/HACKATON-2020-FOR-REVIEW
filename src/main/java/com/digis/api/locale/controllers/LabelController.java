package com.digis.api.locale.controllers;

import com.digis.api.locale.model.Label;
import com.digis.api.locale.services.LabelService;
import com.digis.api.AbstractController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api")
public class LabelController extends AbstractController {

	@Autowired
	private LabelService labelService;

	@GetMapping(value = "label", produces = "application/json")
	public List<Label> findAll() {
		return labelService.findAll();
	}
}
