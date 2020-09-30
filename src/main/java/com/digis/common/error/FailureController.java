package com.digis.common.error;

import com.digis.common.dto.Status;
import com.digis.api.AbstractController;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import static com.digis.common.utils.JsonHelper.toJson;

@RestController
@RequestMapping("api/status/error")
public class FailureController extends AbstractController implements ErrorController {

    @RequestMapping(value = "notfound", produces = "application/json")
    @ResponseStatus(code = HttpStatus.NOT_FOUND)
    public String error() {
        final Status status = new Status();
        status.setCode(404L);
        status.setDescription("Page not found.");
        return toJson(status);
    }

    @RequestMapping(value = "unauthorized", produces = "application/json")
    @ResponseStatus(code = HttpStatus.UNAUTHORIZED)
    public String unauthorized() {
        final Status status = new Status();
        status.setCode(401L);
        status.setDescription("Unauthorized.");
        return toJson(status);
    }

    @Override
    public String getErrorPath() {
        return null;
    }
}
