package com.daviteq.vizuo_portable.init;

//import javax.servlet.MultipartConfigElement;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.ServletRegistration;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.web.WebApplicationInitializer;
import org.springframework.web.context.support.XmlWebApplicationContext;
import org.springframework.web.servlet.DispatcherServlet;


public class VizuoInitializer implements WebApplicationInitializer {
	private static final Logger logger = LogManager.getLogger(VizuoInitializer.class);
	
	public void onStartup(ServletContext servletContext) throws ServletException {
		StringBuilder sb = new StringBuilder();
		sb.append("############ VIZUO PORTABLE WEB START INIT ########### \n");
        XmlWebApplicationContext springWebAppContext = new XmlWebApplicationContext();

        springWebAppContext.setConfigLocation("/WEB-INF/spring/appServlet/servlet-context.xml");
       
        
        ServletRegistration.Dynamic dispatcher =
        		servletContext.addServlet("appServlet", new DispatcherServlet(springWebAppContext));
        
        /** start for Multipart Config http config */
//        MultipartConfigElement multipartConfigElement =
//                new MultipartConfigElement(null, 5000000, 5000000, 0);
//        dispatcher.setMultipartConfig(multipartConfigElement);
        /** end for Multipart Config http config */
        
        dispatcher.setLoadOnStartup(1);
        dispatcher.addMapping("/");
        
        // START LOG INFO
        sb.append(String.format("%s - %s \n", "Load file servlet-context.xml", "/WEB-INF/spring/appServlet/servlet-context.xml"));
        // ENSD LOG INFO
        sb.append("############ VIZUO PORTABLE WEB END INIT ########### \n");
        logger.info(sb.toString());
    }
}
