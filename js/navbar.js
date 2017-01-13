$(document).ready(function(){       
			$(window).scroll(function() {
				var height = $(window).scrollTop();

				if(height  > 200) {
					$('.nav_home').css('background-color', '#252733');
					$('.nav_home h1').css('display', 'block');
				}else{
					$('.nav_home').css('background-color', 'transparent');
					$('.nav_home h1').css('display', 'none');
				}
			});
		});