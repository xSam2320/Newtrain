package com.shad.SpringBootRest.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.shad.SpringBootRest.entity.Admin;
import com.shad.SpringBootRest.entity.Customer;
import com.shad.SpringBootRest.service.AdminService;
import com.shad.SpringBootRest.service.CustomerService;

@CrossOrigin(origins="http://127.0.0.1:5501")
@RequestMapping("/api")
@RestController
public class AdminController {

	@Autowired
	private AdminService adminService;

	

	@GetMapping("/adminlogin")
	public Optional<Admin> doLogin(@PathVariable String email,@PathVariable String password) {

		  return adminService.getAdminCRE(email, password);
	}
@GetMapping("/admin/{id}")
public Optional<Admin> getAdminByPhone(@PathVariable int id){
	return adminService.getAdmin(id);
}
}
