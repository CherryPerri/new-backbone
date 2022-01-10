package com.daviteq.vizuo_portable.controller;

import java.io.IOException;
import java.util.Locale;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.daviteq.vizuo_portable.consts.ControllerMapping;
import com.daviteq.vizuo_portable.consts.GlobalConsts;
import com.daviteq.vizuo_portable.utils.GlobalUtils;
import com.google.code.kaptcha.servlet.KaptchaExtend;

@Controller
public class AuthController extends KaptchaExtend {
	private static final Logger logger = LogManager.getLogger(AuthController.class);
	
	@RequestMapping(value = ControllerMapping.DASH + ControllerMapping.LOGIN, method = RequestMethod.GET)
    public String getLoginView(HttpServletRequest req, HttpServletResponse res) {
        return ControllerMapping.LOGIN_VIEW2;
    }
	

	@RequestMapping(value = ControllerMapping.DASH + ControllerMapping.DO_LOGIN, method = RequestMethod.POST)
    public void doLogin(HttpServletRequest request,
            HttpServletResponse response) {
       
	        String inputCaptcha = request.getParameter(GlobalConsts.CAPTCHA);
        try {
            if (inputCaptcha != null && !inputCaptcha.isEmpty()) {
                boolean checkCaptcha = GlobalUtils.checkCaptcha(request);
                if (!checkCaptcha) {
                    response.sendRedirect(ControllerMapping.LOGIN + "?error=2");
                    return;
                }
            }
        	
            request.getRequestDispatcher(ControllerMapping.DASH + ControllerMapping.SPRING_SECURITY_LOGIN).forward(
                    request, response); // spring 4 and later
        } catch (Exception ex) {
        	logger.warn(GlobalUtils.convertExceptionToString(ex));
            ex.printStackTrace();
        }
    }
	
	
	@RequestMapping(value = ControllerMapping.DASH + ControllerMapping.DO_LOGOUT, method = RequestMethod.GET)
	public void doLogout(HttpServletRequest request, HttpServletResponse response) {
		 logger.info(String.format(
                 "[%s][%s]",
                 RequestMethod.GET,
                 ControllerMapping.DASH + ControllerMapping.DO_LOGOUT));
		
		 try {
			 SecurityContextHolder.clearContext();
			 response.sendRedirect(ControllerMapping.SPRING_SECURITY_LOGOUT);
         } catch (Exception e) {
         	logger.warn(GlobalUtils.convertExceptionToString(e));
         }
    }
	
	@RequestMapping(value = ControllerMapping.DASH + ControllerMapping.EXPIRED_SESSION, method = RequestMethod.GET)
    public void expiredSessionHandler(HttpServletRequest req,
            HttpServletResponse resp, Locale locale) {
        
		SecurityContextHolder.getContext().setAuthentication(null);
		
        String ajaxHeader = ((HttpServletRequest) req).getHeader(GlobalConsts.AJAX_HEADER_ATTRIBUTE);
        if (GlobalConsts.AJAX_HEADER.equals(ajaxHeader)) {
            try {
            	logger.info("Session is expired. Send default expired session code is 901");
                resp.sendError(901);
            } catch (IOException e) {
            	logger.warn(GlobalUtils.convertExceptionToString(e));
            }
        } else {
            try {
                resp.sendRedirect(ControllerMapping.LOGIN);
            } catch (Exception e) {
            	logger.warn(GlobalUtils.convertExceptionToString(e));
            }
        }
        
 
    }
	
	@RequestMapping(value = ControllerMapping.DASH + ControllerMapping.CAPTCHA, method = RequestMethod.GET)
    public void captcha(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        super.captcha(req, resp);
    }
}
