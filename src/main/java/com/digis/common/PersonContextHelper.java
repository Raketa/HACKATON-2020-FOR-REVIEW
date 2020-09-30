package com.digis.common;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;


public class PersonContextHelper {


	private PersonContextHelper() {
	}

	public static String getCurrentUsername() {
		return ((User) SecurityContextHolder.getContext().getAuthentication().getPrincipal()).getUsername();
	}
}
