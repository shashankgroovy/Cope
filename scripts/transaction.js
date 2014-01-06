/*---------------------------------------------------------------
    Script to add and remove book items
---------------------------------------------------------------*/
// book element
var $book = '
                <div class="book">
                    <input type="text" name="bookno" class="textbox textbox-sm" placeholder="Book No."/>
                    <input type="text" name="bookname" class="textbox textbox-lg" placeholder="Book Name"/>
                    <a href="#" class="item-action"><i class="fa fa-repeat item-repeat"></i></a>
                    <a href="#" class="item-action"><i class="fa fa-check item-check"></i></a>
                </div>
           ';

//DOM loaded
$(document).ready(function() {

    /* Add a book */
    $('.item-add').click(function(e) {
        $(".content-book").append($book);
    });

    /* Remove a book */
    $('a .item-check').click(function(e) {
        $(".book").remove();
    });
});
