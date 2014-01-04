/*---------------------------------------------------------------
    A simple script for making clickable navigation menu elements
---------------------------------------------------------------*/
//DOM loaded
$(document).ready(function() {

    /* attach click event to buttons */
    /* menu1 */
    $('li.clicker1').click(function(e) {
            /* Close menu2 if it is visible first and then open menu1 */
            if ($('#menu2 li').is(':visible')) {
                $('li.clicker2').toggleClass('active');
                $("#menu2 li").fadeToggle(1);
            }
            /* show menu1 */
            $('li.clicker1').toggleClass('active');
            $("#menu1 li").fadeToggle(300);
            e.stopPropagation();
    });

    /* menu2 */
    $('li.clicker2').click(function(e) {
            /* Close menu1 if it is visible first and then open menu2 */
            if ($('#menu1 li').is(':visible')) {
                $('li.clicker1').toggleClass('active');
                $("#menu1 li").fadeToggle(1);
            }
            /* show menu2 */
            $('.clicker2').toggleClass('active');
            $("#menu2 li").fadeToggle(300);
            e.stopPropagation();
    });

    /* disable hiding #menu1 and #menu2 when click is on footer */
    $('footer').click(function (e) {
            e.stopPropagation();
    });

    /* hide the submenus if clicked anywhere else on the document */
    $(document).click(function () {
            if ($('#menu1 li').is(':visible')) {
                $('li.clicker1').toggleClass('active');
                $("#menu1 li").fadeToggle(1);
            }
            if ($('#menu2 li').is(':visible')) {
                $('li.clicker2').toggleClass('active');
                $("#menu2 li").fadeToggle(1);
            }
    });
});
