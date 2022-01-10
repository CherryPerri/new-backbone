<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="content-type" content="text/html; charset=UTF-8">
	<meta charset="utf-8">
	<link rel="icon" type="image/ico" href="resources/img/favicon/EMS_favicon.ico">
	<title>Vizuo Portable - Login</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no">
	<!-- STYLESHEETS --><!--[if lt IE 9]><script src="js/flot/excanvas.min.js"></script><script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script><script src="http://css3-mediaqueries-js.googlecode.com/svn/trunk/css3-mediaqueries.js"></script><![endif]-->
	<!-- thanhuy.nguyen ADD START -->
	<link rel="stylesheet" type="text/css"
		href="resources/ext/css/cloud-admin-daviteq.css">
	<!-- thanhuy.nguyen ADD END -->
	
	<link rel="stylesheet" type="text/css" 
		href="resources/ext/css/font-awesome/css/font-awesome.min.css"> 
	
	<!-- ANIMATE -->
	<link rel="stylesheet" type="text/css" href="resources/ext/css/animatecss/animate.min.css" />
	
	<style type="text/css">
	.login {
		background: url(resources/img/daviteq-icon/back-ground-login.png) no-repeat center center fixed; 
		-webkit-background-size: 100% 100%;
		-moz-background-size: 100% 100%;
		-o-background-size: 100% 100%;
		background-size: 100% 100%;
	}
	#i_username {
		min-width: 250px;
	}
	#i_password {
		min-width: 250px;
	}
	#btnSubmit {
		min-width: 250px;
	}
	
	</style>
	<!-- FONTS -->
	<!-- <link rel='stylesheet' type='text/css' 
		href='http://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700'> -->
		
	<script type="text/javascript" src="resources/js/backbone/utils/ajax_wrapper.js"></script>
</head>
<body class="login">
	<!-- PAGE -->
	<section id="page" style="display: none">
		<!-- HEADER -->
		<header>
			<!-- NAV-BAR -->
			<div class="container">
				
			</div>
			<!--/NAV-BAR -->
		</header>
		<!--/HEADER -->
		
		<div id="ajax-content">
			<section id="login_bg">
				<div class="container">
					<div class="row">
						<div class="col-md-3" style="margin-left: 10%; margin-top: 3%">
							<div class="login-box-plain">
								<!-- <h2 class="bigintro">Sign in</h2>
								<div class="divide-40"></div> -->
								<!-- <form action='j_spring_security_check' name="login-form" method="POST" role="form"> -->
								<div class="row">
									<div class="col-md-3 col-md-offset-0">
										<div id="logo">
											<img src="resources/img/logo.bak.png" height="70" alt="logo name" style="width:280px;margin-left:-15px" />
										</div>
									</div>
								</div>
								
								<div style="clear: both; height: 30px;"></div>
								<form action='doLogin' name="login-form" method="POST" id="frmLogin">
									<div class="form-group" id="fg-un">
										<label for="exampleInputEmail1" style="color: #ffffff;">Username or email</label> 
										<i class="fa fa-envelope"></i> 
										<input type="text" class="form-control" placeholder="Please enter username or email"
											value="" name="username" id="username">
										<span class="error-span" id="un-error-span"></span>
									</div>
									<div class="form-group" id="fg-pw">
										<label for="exampleInputPassword1" style="color: #ffffff;">Password</label> 
										<i class="fa fa-lock"></i> 
										<input type="password" class="form-control" placeholder="Please enter password" 
											value="" name="password" id="password">
										<span class="error-span" id="pw-error-span"></span>
									</div>
									<div class="form-group">
										<div class="checkbox" style="color: #ffffff;">
											<label>
												<input type="checkbox" id="chkIsRemember" 
												style="width: auto; margin-top:3px" name="isRemember"> Remember me
											</label>
										</div>
									</div>
									<div class="form-group" style="display: none;">
										<input type="text" name="browser_info" id="txtBrowserInfo">
									</div>
									<div id="captcha-div">
										<div class="form-group">
											<label for="exampleInputPassword1">Captcha</label>
											<i class="fa fa-picture-o"></i>
												<input class="form-control" name='captcha' type="text"
												placeholder="Type character below" value="" />
										</div>
										<div class="form-group ">
											<img id="image-captcha" src="" /> <span
												style="vertical-align: middle" class="fa fa-refresh fa-2x"
												onclick="refreshCaptcha()"></span>
										</div>
									</div>
									<div id="error"></div>
									<div class="form-group">
										<button id="btnSubmit"  type="button" class="btn btn-danger" onclick="return doLogin()">Sign in</button>
									</div>
								</form>
								<div class="login-helpers" style="margin-top:-10px">
									<a href="forgot-password" style="color:#ffffff;">Forgot your password?</a>
								</div>
								<div class="login-helpers" style="margin-top:10px">
									<a href="https://play.google.com/store/apps/details?id=com.daviteq.vizou" 
										style="color:#ffffff; display:none" target="_blank">
										<img width="115px" height="35px" src="resources/img/google_play.png">
									</a>
									<a href="https://play.google.com/store/apps/details?id=com.daviteq.vizou" 
										style="color:#ffffff; display:none">
										<img width="115px" height="35px" src="resources/img/apple_app.png">
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<!--/LOGIN -->
		</div>
	</section>
	<!--/PAGE -->
	<!-- JAVASCRIPTS -->
	<!-- Placed at the end of the document so the pages load faster -->
	<!-- JQUERY -->
	<script type="text/javascript" 
		src="resources/js/jquery/jquery-2.1.0.min.js"></script>
	
	<script type="text/javascript" 
		src="resources/js/jquery/jquery.cookie.js"></script>
		
	<script type="text/javascript" 
		src="resources/js/authentication/authentication.js"></script>
	<!-- CUSTOM SCRIPT -->
	<script type="text/javascript">
		function swapScreen(id) {
			jQuery('.visible').removeClass('visible animated fadeInUp');
			jQuery('#'+id).addClass('visible animated fadeInUp');
		}
		jQuery(document).ready(function() {		
			swapScreen('login_bg');
			$("#i_username").focus();
		});
	</script>
	<!-- /JAVASCRIPTS -->
</body>
</html>