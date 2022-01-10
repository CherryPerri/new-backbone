package com.daviteq.vizuo_portable.authentication;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import com.daviteq.vizuo_portable.consts.ControllerMapping;
import com.daviteq.vizuo_portable.entity.User;
import com.daviteq.vizuo_portable.entity.UserInfoSession;
import com.daviteq.vizuo_portable.utils.GlobalUtils;
import com.google.gson.Gson;

/**
 * 
 * @author uy.dnt Reference link:
 *         https://www.baeldung.com/spring-security-session
 * 
 */

@Service
public class VizuoSession {

	private static final Logger logger = LogManager.getLogger(VizuoSession.class);
	
	@Autowired
	private Gson gs;

	public String accessLoginPage(HttpServletResponse response) {
		String result = null;
		try {

			ServletRequestAttributes servletRequestAttributes = (ServletRequestAttributes) RequestContextHolder
					.currentRequestAttributes();
			HttpSession session = servletRequestAttributes.getRequest().getSession(true);

			/**
			 * getSession(true) will return current session. If current session does not
			 * exist, then it will create a new session.
			 * 
			 * getSession(false) will return current session if current session exists, then
			 * it will not create a new session.
			 */

			if (session != null) {
				if (this.isAuthenticated()) {
					response.sendRedirect(ControllerMapping.VIEW_REDIRECT_WHEN_SUCESS);
				} else {
					response.sendRedirect(ControllerMapping.LOGIN);
				}
			}

		} catch (Exception ex) {
			System.out.println(ex.toString());
			logger.warn(GlobalUtils.convertExceptionToString(ex));
		}
		return result;
	}

	public boolean isAuthenticated() {
		// default : anonymous User
		// other wise : user of login
		return (SecurityContextHolder.getContext().getAuthentication().getPrincipal()) instanceof UserInfoSession;
	}

	public void updateUserInfoSession(User user) {
		((UserInfoSession) SecurityContextHolder.getContext().getAuthentication().getPrincipal()).setUserInfo(user);
	}

	public UserInfoSession getUserSession() {
		return (UserInfoSession) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
	}
}
