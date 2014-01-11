/*---------------------------------------------------------------
	A simple script for making clickable navigation menu elements
---------------------------------------------------------------*/
//DOM loaded
$(document).ready(function() {

	/* attach click event to buttons */
	/* menu1 */
	var $menu1 = $('#menu1');
	var $menu1button = $('#menu1button');
	var $menu2 = $('#menu2');
	var $menu2button = $('#menu2button');

	$menu1button.click(function (e) {
		e.stopPropagation();
		/* Close menu2 if it is visible first and then open menu1 */
		if ($menu2.is(':visible')) {
			$menu2button.toggleClass('active');
			$menu2.hide();
		}
		/* show menu1 */
		$menu1button.toggleClass('active');
		$menu1.fadeToggle(300);
	});

	/* menu2 */
	$menu2button.click(function (e) {
		e.stopPropagation();
		/* Close menu1 if it is visible first and then open menu2 */
		if ($menu1.is(':visible')) {
			$menu1button.toggleClass('active');
			$menu1.hide();
		}
		/* show menu2 */
		$menu2button.toggleClass('active');
		$menu2.fadeToggle(300);
	});

	/* hide the submenus if clicked anywhere else on the document */
	$(document).click(function (e) {
		if (! $(e.target).is('footer')) {
			if ($menu1.is(':visible')) {
				$menu1button.toggleClass('active');
				$menu1.fadeToggle(1);
			}
			if ($menu2.is(':visible')) {
				$menu2button.toggleClass('active');
				$menu2.fadeToggle(1);
			}
		}
	});
});
