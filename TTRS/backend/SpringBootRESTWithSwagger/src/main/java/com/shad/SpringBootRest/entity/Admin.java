package com.shad.SpringBootRest.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Admin {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;

	private String email;
	private String password;
	
	private long phone;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}


	

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	

	public long getPhone() {
		return phone;
	}

	public void setPhone(long phone) {
		this.phone = phone;
	}

	@Override
	public String toString() {
		return "Admin [id=" + id + ", email=" + email + ", password=" + password + ", phone=" + phone + "]";
	}

	
}
