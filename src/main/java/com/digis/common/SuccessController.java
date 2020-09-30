package com.digis.common;

import com.digis.common.dto.Status;
import com.digis.api.AbstractController;
import org.springframework.web.bind.annotation.*;

import static com.digis.common.utils.JsonHelper.toJson;

@RestController
@RequestMapping("api/status/success")
public class SuccessController extends AbstractController {

	@RequestMapping(value = "ok")
	public String success() {
		final Status status = new Status();
		status.setCode(200L);
		status.setDescription("OK.");
		return toJson(status);
	}
}
