package com.daviteq.vizuo_portable.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.stereotype.Service;

import com.daviteq.vizuo_portable.entity.Animal;
import com.daviteq.vizuo_portable.entity.User;
import com.daviteq.vizuo_portable.service.IUserService;

@Service
public class UserService implements IUserService{
	private static final Logger logger = LogManager.getLogger(UserService.class);

	public List<User> getListUser() {
		List<User> users = new ArrayList<User>();
		
		for(int i=0;i<6;i++) {
			User user = new User();
			user.setUsername("username"+ i);
			user.setFullName("FullName"+ i);
			user.setId("id"+ i);
			user.setAccountId("accountId" + i);
			user.setPassword("abc@123");
			users.add(user);
		}
		
		return users;
	}

	@Override
	public List<Animal> getListAnimal() {
		List<Animal> animals = new ArrayList<Animal>();
		
		for(int i = 0; i < 6; i++) {
			Animal animal = new Animal();
			animal.setName("Animal "+i);
			animal.setKind("Legend "+i);
			animals.add(animal);
		}
		return animals;
	}
	
}
