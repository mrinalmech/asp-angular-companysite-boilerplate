$(document).ready(function () {

	var unselectedFb = $("#fb").attr("src");
	var selectedFb = unselectedFb.replace("img/fb.png", "img/fbselected.png");
	var unselectedTwitter = $("#twitter").attr("src");
	var selectedTwitter = unselectedTwitter.replace("img/twitter.png", "img/twitterselected.png");
	var fadeSpeed = 150;

	$("#fb")
	.mouseover(function () {
		$(this).fadeOut(fadeSpeed, function () {
			$(this).attr("src", selectedFb);
			$(this).fadeIn(fadeSpeed);
		});
	})
	.mouseout(function () {
		$(this).fadeOut(fadeSpeed, function () {
			$(this).attr("src", unselectedFb);
			$(this).fadeIn(fadeSpeed);
		});
	});

	$("#twitter")
	.mouseover(function () {
		$(this).fadeOut(fadeSpeed, function () {
			$(this).attr("src", selectedTwitter);
			$(this).fadeIn(fadeSpeed);
		});
	})
	.mouseout(function () {
		$(this).fadeOut(fadeSpeed, function () {
			$(this).attr("src", unselectedTwitter);
			$(this).fadeIn(fadeSpeed);
		});
	});

	$("#submit-btn").click(function () {
		var name = $("#name").val();
		var email = $("#email").val();
		var dataString = 'name=' + name + '&email=' + email;

		if (name == '') {
			$('#name').popover("show");

			setTimeout(function () {
				$('#name').popover("hide");
			}, 1000);

		} else if (email == '') {

			$('#email').popover("show");

			setTimeout(function () {
				$('#email').popover("hide");
			}, 1000);

		} else if (!isValidEmailAddress(email)) {

			$('#email').popover("show");

			setTimeout(function () {
				$('#email').popover("hide");
			}, 1000);

		} else {

			// AJAX Code To Submit Form.
			$.ajax({
				type : "POST",
				url : "php/macondo.php",
				data : dataString,
				cache : false,
				success : function () {
					$("#name").val("");
					$("#email").val("");
					alert("Confirmation email sent");
				}
			});
		}
		return false;
	});
});

function isValidEmailAddress(emailAddress) {
	var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
	return pattern.test(emailAddress);
};