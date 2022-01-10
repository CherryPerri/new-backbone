package com.daviteq.vizuo_portable.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.daviteq.vizuo_portable.authentication.VizuoSession;
import com.daviteq.vizuo_portable.consts.ControllerMapping;


@Controller
public class IndexController {
	private static final Logger logger = LogManager.getLogger(IndexController.class);
	
	@Autowired
    private VizuoSession vizuoSession;
	
	@RequestMapping(value = "", method = RequestMethod.GET)
    public String defaultPageOne(HttpServletRequest request, HttpServletResponse response) {
		logger.info("default controller call!!");
		String sendDriectPage = vizuoSession.accessLoginPage(response);
		if(sendDriectPage != null) {
			return sendDriectPage;
		}
		return ControllerMapping.INDEX_VIEW2;
    }
    
    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String defaultPageTwo(HttpServletRequest request, HttpServletResponse response) {
    	logger.info("/ default controller call!!");
    	
    	String sendDriectPage = vizuoSession.accessLoginPage(response);
		if(sendDriectPage != null) {
			return sendDriectPage;
		}
		return ControllerMapping.INDEX_VIEW2;
    }
    
    @RequestMapping(value = "/index2", method = RequestMethod.GET)
    public String index() {
        return "index2";
    }
}
