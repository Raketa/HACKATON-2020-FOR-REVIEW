package com.digis.common.error;

import org.apache.log4j.Logger;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
public class GlobalExceptionHandler extends ResponseEntityExceptionHandler {
    private final Logger log = Logger.getLogger(GlobalExceptionHandler.class);

    @ExceptionHandler(value = {Throwable.class})
    protected ResponseEntity<String> handleException(Throwable e, WebRequest request) {
        log.error(e);

        return new ResponseEntity<>(e.getMessage(), HttpStatus.CONFLICT);
    }
}