(function () {
	var $searchBar = $('#search-bar');

	$('#search-bar__open').click(function (e) {
		e.preventDefault();
		e.stopPropagation();
		$searchBar.addClass('open');
	});

	$('#search-bar__close').click(function (e) {
		e.preventDefault();
		$searchBar.removeClass('open');
	});

	$(window).click(function () {
		$searchBar.removeClass('open');
	});

	$searchBar.click(function (e) {
		e.stopPropagation();
	});
})();

(function () {
	var $menuBar = $('#menu-bar');

	$('#menu-bar__open').click(function (e) {
		e.preventDefault();
		e.stopPropagation();
		$menuBar.addClass('open');
	});

	$('#menu-bar__close').click(function (e) {
		e.preventDefault();
		$menuBar.removeClass('open');
	});

	$(window).click(function () {
		$menuBar.removeClass('open');
	});

	$menuBar.click(function (e) {
		e.stopPropagation();
	});
})();
