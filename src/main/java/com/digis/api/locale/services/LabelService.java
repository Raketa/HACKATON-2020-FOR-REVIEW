package com.digis.api.locale.services;

import com.digis.api.locale.model.Label;
import com.digis.api.locale.repositories.LabelRepository;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class LabelService {
	@Resource
	LabelRepository labelRepository;

	public List<Label> findAll() {
		return labelRepository.findAll();
	}
}
