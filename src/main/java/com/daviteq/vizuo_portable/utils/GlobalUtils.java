package com.daviteq.vizuo_portable.utils;

import java.util.Random;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import com.google.code.kaptcha.Constants;



public class GlobalUtils {
	private static final Logger logger = LogManager.getLogger(GlobalUtils.class);
	private GlobalUtils() {};
	
	/**
     * Parse the object of exception to string
     * 
     * @param e
     * @return String
     */
    public static String convertExceptionToString(Exception e) {
        StackTraceElement[] traces = e.getStackTrace();
        StringBuilder message = new StringBuilder();
        message.append(e.toString() + "\n");
        for (StackTraceElement element : traces)
            message.append(element).append("\n");

        return message.toString();
    }

	public static HttpServletRequest getRequest() {
        ServletRequestAttributes attributes = (ServletRequestAttributes) RequestContextHolder
                .currentRequestAttributes();
        HttpServletRequest request = attributes.getRequest();
        return request;
    }
	
	public static String getBaseUrl() {
		ServletRequestAttributes attributes = (ServletRequestAttributes) RequestContextHolder
	                .currentRequestAttributes();
		HttpServletRequest req = attributes.getRequest();
	    return req.getScheme() + "://" + req.getServerName() + ":" + req.getServerPort() + req.getContextPath();
	}
	
	public static void setResponseNoCache(HttpServletResponse response) {
		response.setContentType("text/plain;charset=UTF-8");
		response.setHeader("Cache-Control","no-cache"); //HTTP 1.1
		response.setHeader("Pragma","no-cache"); //HTTP 1.0
		response.setDateHeader ("Expires", 0); //prevents caching at the proxy server
	}
	
	public static Boolean checkCaptcha(HttpServletRequest request) {
        boolean result = false;
        try {
            String inputCaptcha = request.getParameter("captcha");
            Object captcha = request.getSession().getAttribute(Constants.KAPTCHA_SESSION_KEY);
            if(captcha != null && captcha.toString().equals(inputCaptcha)) {
                result = true;
            }
        } catch (Exception ex) {
        	logger.warn(GlobalUtils.convertExceptionToString(ex));
        }
        return result;
    }
	
	private static int getRandomNumberInRange(int min, int max) {

		if (min >= max) {
			return -1;
		}

		Random r = new Random();
		return r.nextInt((max - min) + 1) + min;
	}
	
}
