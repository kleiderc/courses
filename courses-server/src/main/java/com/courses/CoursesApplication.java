package com.courses;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

/**
 * exclude = { DataSourceAutoConfiguration.class } ===> Bean instantiation via factory method failed; nested exception
 * is org.springframework.beans.BeanInstantiationException: Failed to instantiate [com.zaxxer.hikari.HikariDataSource]:
 * Factory method 'dataSource' threw exception
 * 
 * @author kleid
 *
 */
@SpringBootApplication(exclude = { DataSourceAutoConfiguration.class })
public class CoursesApplication extends SpringBootServletInitializer {

	// We overload the configure method of SpringBootServletInitializer. We tell spring to build the sources from our
	// Main class. Your final Main class should look like this:
	// This should be done after configuration file is completed to avoid the error message
	// No SpringApplication sources have been defined. Either override the configure method or add an @Configuration
	// annotation
	public static void main(String[] args) {
		System.out.println("main");
		System.setProperty("server.servlet.context-path", "/courses");
		SpringApplication.run(CoursesApplication.class, args);
	}
}
