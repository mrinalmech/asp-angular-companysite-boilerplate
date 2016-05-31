$(document).ready(function () {

	var toggle = false;

	$(".navbar-toggle").click(function () {
		toggle = !toggle;

		if (!toggle)
			$(".navbar-toggle").blur();
	});


});

