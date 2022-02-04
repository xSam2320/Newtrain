package com.shad.SpringBootRest.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.shad.SpringBootRest.entity.Admin;
import com.shad.SpringBootRest.entity.Customer;
import com.shad.SpringBootRest.repository.AdminRepository;
import com.shad.SpringBootRest.repository.CustomerRepository;

@Service
public class AdminService {

	@Autowired
	private AdminRepository adminRepository;

	public Admin saveAdmin(Admin admin) {
		return adminRepository.save(admin);
	}

	public Optional<Admin> getAdminCRE(String email, String password) {
		return adminRepository.findByEmailAndPassword(email, password);
	}

	public Optional<Admin> getAdmin(int id) {
		return adminRepository.findById(id);
	}

	
}
