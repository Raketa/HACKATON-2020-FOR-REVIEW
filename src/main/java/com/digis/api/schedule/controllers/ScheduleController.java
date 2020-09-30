package com.digis.api.schedule.controllers;


import com.digis.api.AbstractController;
import com.digis.api.schedule.model.Schedule;
import com.digis.api.schedule.services.ScheduleService;
import com.digis.common.dto.Status;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Optional;

import static com.digis.common.utils.JsonHelper.fromJson;
import static com.digis.common.utils.JsonHelper.toJson;

@RestController
@RequestMapping("api/schedule")
public class ScheduleController extends AbstractController {

	@Autowired
	private ScheduleService scheduleService;

	@GetMapping
	public String findAll() {
		return createStatusSuccess(scheduleService.findAll());
	}

	@PostMapping
	public String register(@RequestBody String data) {
		final Map map = fromJson(data, Map.class);
		final Long scheduleId = Long.valueOf((String) map.get("schedule-id"));

		final Optional<Schedule> optionalSchedule = scheduleService.findById(scheduleId);
		if (optionalSchedule.isPresent()) {
			final Schedule schedule = optionalSchedule.get();
			schedule.setBusy(true);

			scheduleService.save(schedule);
			return createStatusSuccess(schedule);
		}

		final Status status = new Status();
		status.setCode(400L);
		status.setDescription("Schedule not found.");
		return toJson(status);
	}
}
