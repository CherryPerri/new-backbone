package com.daviteq.vizuo_portable.controller;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.daviteq.vizuo_portable.consts.ControllerMapping;
import com.daviteq.vizuo_portable.helper.UserHelper;
import com.google.gson.Gson;

@Controller
public class UserController {
	private static final Logger logger = LogManager.getLogger(UserController.class);

	@Autowired
	private UserHelper userHelper;
	
	@Autowired
	private Gson gs;

	@RequestMapping(value = ControllerMapping.USERS, method = RequestMethod.GET)
	@ResponseBody
	public String getPackageOfAccount() {
		return gs.toJson(userHelper.getListUser());
	}
	
	@RequestMapping(value = ControllerMapping.USERS_ANIMALS, method = RequestMethod.GET)
	@ResponseBody
	public String getAnimals() {
		return gs.toJson(userHelper.getListAnimal());
	}
}
