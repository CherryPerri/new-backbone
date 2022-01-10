package com.daviteq.vizuo_portable.authentication;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.security.web.authentication.logout.LogoutSuccessHandler;
import org.springframework.security.web.authentication.session.SessionAuthenticationException;
import org.springframework.stereotype.Component;

import com.daviteq.vizuo_portable.consts.ControllerMapping;
import com.daviteq.vizuo_portable.consts.GlobalConsts;
import com.daviteq.vizuo_portable.entity.User;
import com.daviteq.vizuo_portable.entity.UserInfoSession;
import com.daviteq.vizuo_portable.helper.UserHelper;
import com.daviteq.vizuo_portable.utils.GlobalUtils;
import com.google.gson.Gson;

/**
 * 
 * @author uy.dnt
 * Reference link:
 * https://www.baeldung.com/spring-security-authentication-provider
 * https://www.baeldung.com/security-spring
 * 
 */

@Component
public class AuthenticationHandler implements UserDetailsService, AuthenticationFailureHandler,
		AuthenticationSuccessHandler, LogoutSuccessHandler {
	private static final Logger logger = LogManager.getLogger(AuthenticationHandler.class);
	
	@Autowired
	private UserHelper userHelper;
	
	@Autowired
	private Gson gson;
	
	private PasswordEncoder encoder = PasswordEncoderFactories.createDelegatingPasswordEncoder();

	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		UserInfoSession userInfoSession = null;
		try {
			
			HttpServletRequest request = GlobalUtils.getRequest();
			String password = request.getParameter(GlobalConsts.SPRING_SECURITY_PASSWORD_FIELD);
			
			User user = userHelper.login(username, password);
//			User user = new User();
//			user.setUsername(username);
//			user.setPassword(password);
			if(user != null) {				
				userInfoSession = new UserInfoSession(username, encoder.encode(password), user);
			} 
			
		} catch (Exception ex) {
			System.out.print(GlobalUtils.convertExceptionToString(ex));
			logger.warn(GlobalUtils.convertExceptionToString(ex));
		}
		if(userInfoSession != null) {
            return userInfoSession;
        } else {
            throw new RuntimeException("Invalid username or password");
        }
	}
	
	public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
			Authentication authentication) throws IOException, ServletException {
		
		response.sendRedirect(ControllerMapping.VIEW_REDIRECT_WHEN_SUCESS);
	}
	
	public void onAuthenticationFailure(HttpServletRequest request, HttpServletResponse response,
			AuthenticationException exception) throws IOException, ServletException {
		if (exception.getClass().isAssignableFrom(SessionAuthenticationException.class)) {
		      response.sendRedirect( ControllerMapping.LOGIN + "?error=999");
		      return;
		}
		
		String urlResult = ControllerMapping.LOGIN + "?error=1";
		response.sendRedirect(urlResult);
	}
	
	public void onLogoutSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication)
			throws IOException, ServletException {
		
        
        response.sendRedirect("login");
//		Cookie[] cookies = request.getCookies();
//		if (cookies != null) {
//
//			response.sendRedirect(ControllerMapping.DO_LOGOUT);
//		} else {
//			response.sendRedirect(ControllerMapping.BROKER_LOGIN);
//		}
	}

}
