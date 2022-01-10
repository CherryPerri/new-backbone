package com.daviteq.vizuo_portable.service;

import java.util.List;

import com.daviteq.vizuo_portable.entity.Animal;
import com.daviteq.vizuo_portable.entity.User;

public interface IUserService {
	public List<User> getListUser();
	public List<Animal> getListAnimal();
}
