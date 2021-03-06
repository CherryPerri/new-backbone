package com.daviteq.vizuo_portable.consts;


public class ControllerMapping {
	private ControllerMapping() {};
	 /* START CONSTANT FOR CONTROLLER */
	// SECURITES CONTROLLER
	public static final String DASH = "/";
	public static final String SPRING_SECURITY_LOGIN = "login"; 
	public static final String SPRING_SECURITY_LOGOUT = "logout";
	public static final String LOGIN = "login";
    public static final String DO_LOGIN = "doLogin";
    public static final String DO_LOGOUT = "doLogout";
    public static final String EXPIRED_SESSION = "expiredSession";
    public static final String CAPTCHA = "captcha.jpg";
    
    public static final String LOGIN_VIEW = "login";
    public static final String INDEX_VIEW = "index";
    public static final String LOGIN_VIEW2 = "login2";
    public static final String INDEX_VIEW2 = "index2";
    public static final String VIEW_REDIRECT_WHEN_SUCESS = INDEX_VIEW2;
    
    public static final String AUTHENTICATED = "authenticated";
    public static final String USERS = AUTHENTICATED + "/users";
    public static final String USERS_ANIMALS = AUTHENTICATED + "/animals";
}
