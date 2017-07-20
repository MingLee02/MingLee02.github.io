$(function() {
	const tab1Content = $('#2016-17');
	const tab2Content = $('#2017-18');
	const tab1 = $('#2016-17-tab');
	const tab2 = $('#2017-18-tab');

	const show2017 = function () {
		tab2Content.hide();
		tab1Content.show();
		tab1.addClass('active');
		tab2.removeClass('active');
	}

	// Initialise page with tab2 hidden.
	show2017();

	tab1.click(function() {
		show2017();
	});

	tab2.click(function() {
		tab1Content.hide();
		tab2Content.show();
		$(this).addClass('active');
		tab1.removeClass('active');
	});
});