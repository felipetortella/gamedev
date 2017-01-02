/* Theme Name: Zodkoo - Responsive Landing page template
   Author: Coderthemes
   Author e-mail: coderthemes@gmail.com
   Version: 1.2.0
   Created: May 2016
   File Description:Main JS file of the template
*/

!function($) {
    "use strict";

    var Page = function() {
        this.$topSection = $('#home-fullscreen'),
        this.$topNavbar = $("#navbar-menu"),
        this.$stickyElem = $("#sticky-nav"),
        this.$backToTop = $('#back-to-top'),
        this.$contactForm = $("#contact-form"),
        this.$subscribeForm = $("#subscribe-form")
    };

    //
    Page.prototype.init = function () {
        var $this = this;
        //window related event

        //Handling load event
        $(window).on('load', function() {
            var windowHeight = $(window).height();
            // adding height attr to top section
            $('#home-fullscreen').css('height', windowHeight);

            //init sticky
            $("#sticky-nav").sticky({topSpacing: 0});
        });

        //Handling the resize event
        $(window).on('resize', function() {
            var windowHeight = $(window).height();
            $this.$topSection.css('height', windowHeight);
        });

        //Handling the scroll event
        $(window).scroll(function(){
            if ($(this).scrollTop() > 100) {
              console.log("fadeIn");
                $('#back-to-top').fadeIn();
            } else {
              console.log("fadeOut");
                $('#back-to-top').fadeOut();
            }
        });
    },
    //init
    $.Page = new Page, $.Page.Constructor = Page
}(window.jQuery),

//initializing
function($) {
    "use strict";
    $.Page.init()
}(window.jQuery);

$(function(){
  $('.nav-collapse').collapse('hide');
})
