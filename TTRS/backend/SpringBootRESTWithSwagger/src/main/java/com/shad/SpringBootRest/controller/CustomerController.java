package com.shad.SpringBootRest.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.shad.SpringBootRest.entity.Customer;
import com.shad.SpringBootRest.service.CustomerService;

@CrossOrigin(origins="http://127.0.0.1:5501")
@RequestMapping("/api")
@RestController
public class CustomerController {

	@Autowired
	private CustomerService customerService;

	@PostMapping("/signup")
	public Customer saveCustomer(Customer customer) {
		return customerService.saveCustomer(customer);
	}

	@PostMapping("/login")
	public String doLogin(String email, String password) {

		Optional<Customer> optonal = customerService.getCustomer(email, password);

		if (optonal.isEmpty()) {
			return "Failure";
		} else {

			return "home";
		}
	}

}
