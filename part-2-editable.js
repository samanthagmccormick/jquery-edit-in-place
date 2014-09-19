$(document).on('ready', function() {

	$(document).on("click", "p", function() {
		$("p").addClass("editable");
		$(this).after("<textarea></textarea>");
		$("textarea").defaultValue = $(this);
		$("textarea").focus();  // Auto-focus the textarea

	});

	$(document).on("blur", "textarea", function() {
		var enteredText = $("textarea").val();
		$("textarea").hide();
		$("img").after(enteredText);
	});






  
});  // end document ready