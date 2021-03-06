<!DOCTYPE html>
<html lang="en">

<head>
<!-- Required meta tags -->
<meta charset="utf-8">
<meta name="viewport"
	content="width=device-width, initial-scale=1, shrink-to-fit=no">
<title>Skydash Admin</title>
<!-- plugins:css -->
<link rel="stylesheet" href="resources2/vendors/feather/feather.css">
<link rel="stylesheet"
	href="resources2/vendors/ti-icons/css/themify-icons.css">
<link rel="stylesheet"
	href="resources2/vendors/css/vendor.bundle.base.css">
<!-- endinject -->
<!-- Plugin css for this page -->
<!-- End plugin css for this page -->
<!-- inject:css -->
<link rel="stylesheet"
	href="resources2/css/vertical-layout-light/style.css">
<!-- endinject -->
<link rel="shortcut icon" href="resources2/images/favicon.png" />
</head>

<body class="login">
	<div class="container-scroller">
		<div class="container-fluid page-body-wrapper full-page-wrapper">
			<div class="content-wrapper d-flex align-items-center auth px-0">
				<div class="row w-100 mx-0">
					<div class="col-lg-4 mx-auto">
						<div class="auth-form-light text-left py-5 px-4 px-sm-5">
							<div class="brand-logo">
								<img src="resources2/images/logo.svg" alt="logo">
							</div>
							<h4>Hello! let's get started</h4>
							<h6 class="font-weight-light">Sign in to continue.</h6>
							<div style="clear: both; height: 30px;"></div>
							<form action='doLogin' name="login-form" method="POST"
								id="frmLogin">
								<div class="form-group" id="fg-un">
									<label for="exampleInputEmail1" style="color: #000000;">Username or email</label> 
										<i class="fa fa-envelope"></i> 
										<input type="text" class="form-control"	placeholder="Please enter username or email" value="" name="username" id="username"> 
										<span class="error-span" id="un-error-span"></span>
								</div>
								<div class="form-group" id="fg-pw">
									<label for="exampleInputPassword1" style="color: #000000;">Password</label>
									<i class="fa fa-lock"></i> 
										<input type="password" class="form-control" placeholder="Please enter password" value="" name="password" id="password"> 
										<span class="error-span" id="pw-error-span"></span>
								</div>
								<div class="form-group">
									<div class="checkbox" style="color:	#000000;">
										<label> <input type="checkbox" id="chkIsRemember" style="width: auto; margin-top: 3px" name="isRemember">
											Remember me
										</label>
									</div>
								</div>
								<div class="form-group" style="display: none;">
									<input type="text" name="browser_info" id="txtBrowserInfo">
								</div>
								<div id="captcha-div">
									<div class="form-group">
										<label for="exampleInputPassword1">Captcha</label> <i
											class="fa fa-picture-o"></i> <input class="form-control"
											name='captcha' type="text" placeholder="Type character below"
											value="" />
									</div>
									<div class="form-group ">
										<img id="image-captcha" src="" /> <span
											style="vertical-align: middle" class="fa fa-refresh fa-2x"
											onclick="refreshCaptcha()"></span>
									</div>
								</div>
								<div id="error"></div>
								<div class="form-group">
									<button id="btnSubmit" type="button" class="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
										onclick="return doLogin()">Sign in</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
			<!-- content-wrapper ends -->
		</div>
		<!-- page-body-wrapper ends -->
	</div>
	<!-- container-scroller -->
	<!-- plugins:js -->
	<script src="resources2/vendors/js/vendor.bundle.base.js"></script>
	<!-- endinject -->
	<!-- Plugin js for this page -->
	<!-- End plugin js for this page -->
	<!-- inject:js -->
	<script src="resources2/js/off-canvas.js"></script>
	<script src="resources2/js/hoverable-collapse.js"></script>
	<script src="resources2/js/template.js"></script>
	<script src="resources2/js/settings.js"></script>
	<script src="resources2/js/todolist.js"></script>
	<script type="text/javascript"
		src="resources/js/authentication/authentication.js"></script>
	<!-- CUSTOM SCRIPT -->
	<script type="text/javascript">
		function swapScreen(id) {
			jQuery('.visible').removeClass('visible animated fadeInUp');
			jQuery('#' + id).addClass('visible animated fadeInUp');
		}
		jQuery(document).ready(function() {
			swapScreen('login_bg');
			$("#i_username").focus();
		});
	</script>
	<!-- endinject -->
</body>

</html>
