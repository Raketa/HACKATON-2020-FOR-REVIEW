package com.digis.api;

import com.digis.common.dto.Status;
import com.digis.common.utils.JsonHelper;
import org.apache.log4j.Logger;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;

@CrossOrigin(origins = "*")
public class AbstractController {
	protected final Logger log = Logger.getLogger(AbstractController.class);

	@ExceptionHandler(Throwable.class)
	@ResponseStatus(HttpStatus.BAD_REQUEST)
	public String handleException(Throwable e) {
		log.error("AbstractController: ", e);

		final Status status = new Status();
		status.setCode(400L);
		status.setDescription(e.getMessage());
		return JsonHelper.toJson(status);
	}

	protected String createStatusSuccess(Object data) {
		final Status status = new Status();
		status.setCode(200L);
		status.setDescription("OK.");
		status.setData(data);
		return JsonHelper.toJson(status);
	}
}
