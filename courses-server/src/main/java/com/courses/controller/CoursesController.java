package com.courses.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/")
public class CoursesController {

	
	@GetMapping(value = "")  //handle HTTP get request
	public String welcome() {		
		return "Welcome.";
	}
	
	@GetMapping(value = "today")  //handle HTTP get request
	public String hello() {		
		return "Hello courses today. ";
	}
	
	
	@GetMapping(value = "tomorrow")  //handle HTTP get request
	public String hellotoday() {		
		return "Hello courses tomorrow.";
	}
}
