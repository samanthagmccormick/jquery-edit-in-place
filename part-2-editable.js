$(document).on('ready', function() {

	$(document).on("click", "p", function() {
		$(".edit").addClass("editable");
		$(this).hide();
		$(this).replaceWith("<p class = 'edit'><textarea></textarea></p>");
		$("textarea").val( $(this).text() );   // Put the thing you clicked's text into the textarea val()
		$("textarea").focus();  // Auto-focus the textarea
	});

	$(document).on("click", "h1", function() {
		$(".edit").addClass("editable");
		$(this).hide();
		$(this).replaceWith("<h1 class = 'editHeader'><textarea></textarea></h1>");
		$("textarea").val( $(this).text() );   // Put the thing you clicked's text into the textarea val()
		$("textarea").focus();  // Auto-focus the textarea
	});

	$(document).on("blur", "textarea", function() {
		var enteredText = $("textarea").val();  // Entered text is the NEW textarea's val()
		$("textarea").hide();   // Hide the textarea
		$("textarea").replaceWith(enteredText);  // Put the entered text after the textarea
	});








  
});  // end document ready