package com.digis.api.schedule.services;

import com.digis.api.schedule.model.Schedule;
import com.digis.api.schedule.repositories.ScheduleRepository;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@Service
public class ScheduleService {

	@Resource
	private ScheduleRepository scheduleRepository;

	public void save(Schedule schedule) {
		scheduleRepository.save(schedule);
	}

	public List<Schedule> findAll() {
		return StreamSupport.stream(scheduleRepository.findAll().spliterator(), false)
				.collect(Collectors.toList());
	}

	public Optional<Schedule> findById(Long id) {
		return scheduleRepository.findById(id);
	}

	public void deleteById(Long id) {
		scheduleRepository.deleteById(id);
	}
}
