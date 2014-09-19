$(document).on('ready', function() {

	$("p").on("click", function() {

		$(this).hide();
		$(this).after("<textarea></textarea>");
		$("textarea").focus();  // Auto-focus the textarea

	});

	$(document).on("blur", "textarea", function() {
		var enteredText = $("textarea").val();
		$("textarea").hide();
		$("img").after(enteredText);
	});


});  // end document ready