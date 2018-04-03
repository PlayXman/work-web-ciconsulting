(function () {
	var $galleryItems = $('.gallery__item');
	if ($galleryItems.length) {
		$('.gallery__item').swipebox({
			afterOpen: function(){
				var $selectorClose = $("#swipebox-close");
				var clickAction = "touchend click";

				$selectorClose.unbind(clickAction);

				$selectorClose.bind(clickAction, function(event){
					event.preventDefault();
					event.stopPropagation();

					$.swipebox.close();
				});
			}
		});
	}
})();