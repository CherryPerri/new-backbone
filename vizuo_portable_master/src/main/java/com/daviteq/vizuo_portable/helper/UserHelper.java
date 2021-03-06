package com.daviteq.vizuo_portable.helper;

import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.daviteq.vizuo_portable.entity.Animal;
import com.daviteq.vizuo_portable.entity.User;
import com.daviteq.vizuo_portable.service.IUserService;
import com.google.gson.Gson;

@Service
public class UserHelper {
	private static final Logger logger = LogManager.getLogger(UserHelper.class);

	@Autowired
	private IUserService userService;

	@Autowired
	private Gson gs;

	public User login(String usernameOrEmail, String password) {
		User user = new User();
		user.setUsername(usernameOrEmail);
		user.setPassword(password);
		return user;
	}

	public List<User> getListUser() {
		return userService.getListUser();
	}

	public List<Animal> getListAnimal() {
		return userService.getListAnimal();
	}
}
