// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require turbolinks
//= require_tree .
//= require sweetalert2

$(function(){

    $("#typed").typed({
        // strings: ["Typed.js is a <strong>jQuery</strong> plugin.", "It <em>types</em> out sentences.", "And then deletes them.", "Try it out!"],
        stringsElement: $('#typed-strings'),
        typeSpeed: 40,
        backDelay: 800,
        loop: true,
        contentType: 'html', // or text
        // defaults to false for infinite loop
        loopCount: false,
        callback: function(){ foo(); },
        resetCallback: function() { newTyped(); }
    });

    $(".reset").click(function(){
        $("#typed").typed('reset');
    });

});

function newTyped(){ /* A new typed object */ }

function foo(){ console.log("Callback"); }

//on click on navbar - Smooth Scroll To Anchor (requires jQuery Easing plugin)
$(function(){
  $("#navbar-menu").on('click', function(event) {
    console.log("navbar");
      var $anchor = $(event.target);
      if ($($anchor.attr('href')).length > 0 && $anchor.is('a.nav-link')) {
          $('html, body').stop().animate({
              scrollTop: $($anchor.attr('href')).offset().top - 0
          }, 1500, 'easeInOutExpo');
          event.preventDefault();
      }
  });
})

//back-to-top button
$(function(){
  $('#back-to-top').on('click', function(){
      $("html, body").animate({ scrollTop: 0 }, 1000);
      return false;
  });
})
