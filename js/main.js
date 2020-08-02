/*  ---------------------------------------------------
    Template Name: Violet 
    Description: Violet ecommerce Html Template
    Author: Colorlib
    Author URI: https://colorlib.com/
    Version: 1.0
    Created: Colorlib
---------------------------------------------------------  */

"use strict";

(function ($) {
  /*------------------
        Preloader
    --------------------*/
  $(window).on("load", function () {
    $(".loader").fadeOut();
    $("#preloder").delay(100).fadeOut("slow");
    
  });



   /*------------------
		Navigation
	--------------------*/
  $(".mobile-menu").slicknav({
    appendTo: ".header-section",
    allowParentLinks: true,
    closedSymbol: '<i class="fa fa-angle-right"></i>',
    openedSymbol: '<i class="fa fa-angle-down"></i>',
  });
})(jQuery);
