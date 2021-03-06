﻿$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        //autoplay: true,
        responsiveClass: true,
        navText: ["<img src='images/arrowleft.png'>", "<img src='images/arrowright.png'>"],
        responsive: {
            0: {
                items: 1,
                nav: false,
                dots: true
            },
            600: {
                items: 2,
                nav: true,
                dots: false
            },
            900: {
                items: 3,
                nav: true,
                dots: false
            }
        }
    });



    $('#collapsibleNavbar')
        .on('shown.bs.collapse', function () {
            $(".navbar-toggler").find("span").addClass("fa-times");
            $(".navbar-toggler").find("span").removeClass("fa-bars");
        })
        .on('hidden.bs.collapse', function () {
            $(".navbar-toggler").find("span").removeClass("fa-times");
            $(".navbar-toggler").find("span").addClass("fa-bars");
        });

    $("#collapsibleNavbar .navbar-nav a").click(function () {
        $(".navbar-toggler").find("span").removeClass("fa-times");
        $(".navbar-toggler").find("span").addClass("fa-bars");
        $(".navbar-collapse").removeClass("show");
    })

    var scroll = new SmoothScroll('a[href*="#"]');
    $("#getEarlyAccessFooterBtn").click(function () {
        $('html, body').animate({
            scrollTop: $("#getEarlyAccessInput").offset().top - 25
        }, 1000);
        $("#getEarlyAccessInput").focus();
    });
})