package com.digis.filters;

import com.digis.common.error.GlobalExceptionHandler;
import org.apache.log4j.Logger;
import org.springframework.stereotype.Component;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;

@Component
public class LogFilter implements Filter {
    private final Logger log = Logger.getLogger(GlobalExceptionHandler.class);

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {

    }

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        filterChain.doFilter(servletRequest, servletResponse);

        final HttpServletRequest httpServletRequest = (HttpServletRequest) servletRequest;
        log.info("requestURL: " + httpServletRequest.getRequestURL());
    }

    @Override
    public void destroy() {

    }
}
