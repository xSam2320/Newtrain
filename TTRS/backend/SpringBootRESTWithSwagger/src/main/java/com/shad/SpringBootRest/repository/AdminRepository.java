package com.shad.SpringBootRest.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.shad.SpringBootRest.entity.Admin;
import com.shad.SpringBootRest.entity.Customer;

@Repository
public interface AdminRepository extends JpaRepository<Admin, Integer> {

	//SELECT * FROM customer WHERE email=? AND password=?
	Optional<Admin> findByEmailAndPassword(String email, String password);
	Optional<Admin> findById(int id);
}
