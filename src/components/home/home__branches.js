(function () {
	var $branches = $('#block-branches');

	if($branches.length) {
		function handleScroll() {
			if (window.pageYOffset + (window.innerHeight * 0.8) > $branches.offset().top) {
				$branches.find('.block-branches__item').each(function () {
					var el = $(this);
					setTimeout(function () {
						el.removeClass('hidden--initial');
					}, Math.random() * 600);
				});
				window.removeEventListener('scroll', handleScroll);
			}
		}

		if (window.innerWidth > 629) {
			handleScroll();
			window.addEventListener('scroll', handleScroll);
		}
	}
})();