/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: Apache Tomcat/8.5.65
 * Generated at: 2022-01-07 09:28:48 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp.WEB_002dINF.views;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;

public final class login2_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent,
                 org.apache.jasper.runtime.JspSourceImports {

  private static final javax.servlet.jsp.JspFactory _jspxFactory =
          javax.servlet.jsp.JspFactory.getDefaultFactory();

  private static java.util.Map<java.lang.String,java.lang.Long> _jspx_dependants;

  private static final java.util.Set<java.lang.String> _jspx_imports_packages;

  private static final java.util.Set<java.lang.String> _jspx_imports_classes;

  static {
    _jspx_imports_packages = new java.util.HashSet<>();
    _jspx_imports_packages.add("javax.servlet");
    _jspx_imports_packages.add("javax.servlet.http");
    _jspx_imports_packages.add("javax.servlet.jsp");
    _jspx_imports_classes = null;
  }

  private volatile javax.el.ExpressionFactory _el_expressionfactory;
  private volatile org.apache.tomcat.InstanceManager _jsp_instancemanager;

  public java.util.Map<java.lang.String,java.lang.Long> getDependants() {
    return _jspx_dependants;
  }

  public java.util.Set<java.lang.String> getPackageImports() {
    return _jspx_imports_packages;
  }

  public java.util.Set<java.lang.String> getClassImports() {
    return _jspx_imports_classes;
  }

  public javax.el.ExpressionFactory _jsp_getExpressionFactory() {
    if (_el_expressionfactory == null) {
      synchronized (this) {
        if (_el_expressionfactory == null) {
          _el_expressionfactory = _jspxFactory.getJspApplicationContext(getServletConfig().getServletContext()).getExpressionFactory();
        }
      }
    }
    return _el_expressionfactory;
  }

  public org.apache.tomcat.InstanceManager _jsp_getInstanceManager() {
    if (_jsp_instancemanager == null) {
      synchronized (this) {
        if (_jsp_instancemanager == null) {
          _jsp_instancemanager = org.apache.jasper.runtime.InstanceManagerFactory.getInstanceManager(getServletConfig());
        }
      }
    }
    return _jsp_instancemanager;
  }

  public void _jspInit() {
  }

  public void _jspDestroy() {
  }

  public void _jspService(final javax.servlet.http.HttpServletRequest request, final javax.servlet.http.HttpServletResponse response)
      throws java.io.IOException, javax.servlet.ServletException {

    final java.lang.String _jspx_method = request.getMethod();
    if (!"GET".equals(_jspx_method) && !"POST".equals(_jspx_method) && !"HEAD".equals(_jspx_method) && !javax.servlet.DispatcherType.ERROR.equals(request.getDispatcherType())) {
      response.sendError(HttpServletResponse.SC_METHOD_NOT_ALLOWED, "JSPs only permit GET, POST or HEAD. Jasper also permits OPTIONS");
      return;
    }

    final javax.servlet.jsp.PageContext pageContext;
    javax.servlet.http.HttpSession session = null;
    final javax.servlet.ServletContext application;
    final javax.servlet.ServletConfig config;
    javax.servlet.jsp.JspWriter out = null;
    final java.lang.Object page = this;
    javax.servlet.jsp.JspWriter _jspx_out = null;
    javax.servlet.jsp.PageContext _jspx_page_context = null;


    try {
      response.setContentType("text/html");
      pageContext = _jspxFactory.getPageContext(this, request, response,
      			null, true, 8192, true);
      _jspx_page_context = pageContext;
      application = pageContext.getServletContext();
      config = pageContext.getServletConfig();
      session = pageContext.getSession();
      out = pageContext.getOut();
      _jspx_out = out;

      out.write("<!DOCTYPE html>\n");
      out.write("<html lang=\"en\">\n");
      out.write("\n");
      out.write("<head>\n");
      out.write("<!-- Required meta tags -->\n");
      out.write("<meta charset=\"utf-8\">\n");
      out.write("<meta name=\"viewport\"\n");
      out.write("\tcontent=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\n");
      out.write("<title>Skydash Admin</title>\n");
      out.write("<!-- plugins:css -->\n");
      out.write("<link rel=\"stylesheet\" href=\"resources2/vendors/feather/feather.css\">\n");
      out.write("<link rel=\"stylesheet\"\n");
      out.write("\thref=\"resources2/vendors/ti-icons/css/themify-icons.css\">\n");
      out.write("<link rel=\"stylesheet\"\n");
      out.write("\thref=\"resources2/vendors/css/vendor.bundle.base.css\">\n");
      out.write("<!-- endinject -->\n");
      out.write("<!-- Plugin css for this page -->\n");
      out.write("<!-- End plugin css for this page -->\n");
      out.write("<!-- inject:css -->\n");
      out.write("<link rel=\"stylesheet\"\n");
      out.write("\thref=\"resources2/css/vertical-layout-light/style.css\">\n");
      out.write("<!-- endinject -->\n");
      out.write("<link rel=\"shortcut icon\" href=\"resources2/images/favicon.png\" />\n");
      out.write("</head>\n");
      out.write("\n");
      out.write("<body class=\"login\">\n");
      out.write("\t<div class=\"container-scroller\">\n");
      out.write("\t\t<div class=\"container-fluid page-body-wrapper full-page-wrapper\">\n");
      out.write("\t\t\t<div class=\"content-wrapper d-flex align-items-center auth px-0\">\n");
      out.write("\t\t\t\t<div class=\"row w-100 mx-0\">\n");
      out.write("\t\t\t\t\t<div class=\"col-lg-4 mx-auto\">\n");
      out.write("\t\t\t\t\t\t<div class=\"auth-form-light text-left py-5 px-4 px-sm-5\">\n");
      out.write("\t\t\t\t\t\t\t<div class=\"brand-logo\">\n");
      out.write("\t\t\t\t\t\t\t\t<img src=\"resources2/images/logo.svg\" alt=\"logo\">\n");
      out.write("\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t<h4>Hello! let's get started</h4>\n");
      out.write("\t\t\t\t\t\t\t<h6 class=\"font-weight-light\">Sign in to continue.</h6>\n");
      out.write("\t\t\t\t\t\t\t<div style=\"clear: both; height: 30px;\"></div>\n");
      out.write("\t\t\t\t\t\t\t<form action='doLogin' name=\"login-form\" method=\"POST\"\n");
      out.write("\t\t\t\t\t\t\t\tid=\"frmLogin\">\n");
      out.write("\t\t\t\t\t\t\t\t<div class=\"form-group\" id=\"fg-un\">\n");
      out.write("\t\t\t\t\t\t\t\t\t<label for=\"exampleInputEmail1\" style=\"color: #000000;\">Username or email</label> \n");
      out.write("\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-envelope\"></i> \n");
      out.write("\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\tplaceholder=\"Please enter username or email\" value=\"\" name=\"username\" id=\"username\"> \n");
      out.write("\t\t\t\t\t\t\t\t\t\t<span class=\"error-span\" id=\"un-error-span\"></span>\n");
      out.write("\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t<div class=\"form-group\" id=\"fg-pw\">\n");
      out.write("\t\t\t\t\t\t\t\t\t<label for=\"exampleInputPassword1\" style=\"color: #000000;\">Password</label>\n");
      out.write("\t\t\t\t\t\t\t\t\t<i class=\"fa fa-lock\"></i> \n");
      out.write("\t\t\t\t\t\t\t\t\t\t<input type=\"password\" class=\"form-control\" placeholder=\"Please enter password\" value=\"\" name=\"password\" id=\"password\"> \n");
      out.write("\t\t\t\t\t\t\t\t\t\t<span class=\"error-span\" id=\"pw-error-span\"></span>\n");
      out.write("\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t<div class=\"form-group\">\n");
      out.write("\t\t\t\t\t\t\t\t\t<div class=\"checkbox\" style=\"color:\t#000000;\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<label> <input type=\"checkbox\" id=\"chkIsRemember\" style=\"width: auto; margin-top: 3px\" name=\"isRemember\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\tRemember me\n");
      out.write("\t\t\t\t\t\t\t\t\t\t</label>\n");
      out.write("\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t<div class=\"form-group\" style=\"display: none;\">\n");
      out.write("\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"browser_info\" id=\"txtBrowserInfo\">\n");
      out.write("\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t<div id=\"captcha-div\">\n");
      out.write("\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<label for=\"exampleInputPassword1\">Captcha</label> <i\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-picture-o\"></i> <input class=\"form-control\"\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\tname='captcha' type=\"text\" placeholder=\"Type character below\"\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\tvalue=\"\" />\n");
      out.write("\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t\t<div class=\"form-group \">\n");
      out.write("\t\t\t\t\t\t\t\t\t\t<img id=\"image-captcha\" src=\"\" /> <span\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\tstyle=\"vertical-align: middle\" class=\"fa fa-refresh fa-2x\"\n");
      out.write("\t\t\t\t\t\t\t\t\t\t\tonclick=\"refreshCaptcha()\"></span>\n");
      out.write("\t\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t\t<div id=\"error\"></div>\n");
      out.write("\t\t\t\t\t\t\t\t<div class=\"form-group\">\n");
      out.write("\t\t\t\t\t\t\t\t\t<button id=\"btnSubmit\" type=\"button\" class=\"btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn\"\n");
      out.write("\t\t\t\t\t\t\t\t\t\tonclick=\"return doLogin()\">Sign in</button>\n");
      out.write("\t\t\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t\t\t</form>\n");
      out.write("\t\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t\t</div>\n");
      out.write("\t\t\t\t</div>\n");
      out.write("\t\t\t</div>\n");
      out.write("\t\t\t<!-- content-wrapper ends -->\n");
      out.write("\t\t</div>\n");
      out.write("\t\t<!-- page-body-wrapper ends -->\n");
      out.write("\t</div>\n");
      out.write("\t<!-- container-scroller -->\n");
      out.write("\t<!-- plugins:js -->\n");
      out.write("\t<script src=\"resources2/vendors/js/vendor.bundle.base.js\"></script>\n");
      out.write("\t<!-- endinject -->\n");
      out.write("\t<!-- Plugin js for this page -->\n");
      out.write("\t<!-- End plugin js for this page -->\n");
      out.write("\t<!-- inject:js -->\n");
      out.write("\t<script src=\"resources2/js/off-canvas.js\"></script>\n");
      out.write("\t<script src=\"resources2/js/hoverable-collapse.js\"></script>\n");
      out.write("\t<script src=\"resources2/js/template.js\"></script>\n");
      out.write("\t<script src=\"resources2/js/settings.js\"></script>\n");
      out.write("\t<script src=\"resources2/js/todolist.js\"></script>\n");
      out.write("\t<script type=\"text/javascript\"\n");
      out.write("\t\tsrc=\"resources/js/authentication/authentication.js\"></script>\n");
      out.write("\t<!-- CUSTOM SCRIPT -->\n");
      out.write("\t<script type=\"text/javascript\">\n");
      out.write("\t\tfunction swapScreen(id) {\n");
      out.write("\t\t\tjQuery('.visible').removeClass('visible animated fadeInUp');\n");
      out.write("\t\t\tjQuery('#' + id).addClass('visible animated fadeInUp');\n");
      out.write("\t\t}\n");
      out.write("\t\tjQuery(document).ready(function() {\n");
      out.write("\t\t\tswapScreen('login_bg');\n");
      out.write("\t\t\t$(\"#i_username\").focus();\n");
      out.write("\t\t});\n");
      out.write("\t</script>\n");
      out.write("\t<!-- endinject -->\n");
      out.write("</body>\n");
      out.write("\n");
      out.write("</html>\n");
    } catch (java.lang.Throwable t) {
      if (!(t instanceof javax.servlet.jsp.SkipPageException)){
        out = _jspx_out;
        if (out != null && out.getBufferSize() != 0)
          try {
            if (response.isCommitted()) {
              out.flush();
            } else {
              out.clearBuffer();
            }
          } catch (java.io.IOException e) {}
        if (_jspx_page_context != null) _jspx_page_context.handlePageException(t);
        else throw new ServletException(t);
      }
    } finally {
      _jspxFactory.releasePageContext(_jspx_page_context);
    }
  }
}
