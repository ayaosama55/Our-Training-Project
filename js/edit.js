$(document).ready(function() {

    // Start According [about.html]  
    $(".according-head").click(function() {

        $(this).next().slideToggle(250);

        $(this).toggleClass('according-active');

        $(".according-head").not($(this)).removeClass('according-active');

        $(".according-content").not($(this).next()).slideUp(250);

    });
    // End According [about.html]

    $(function() {
        $(".links-nav li a").click(function() {
            $(this).css('text-decoration', 'none');
        });
        var ourmenu = $(".menu-navbar");
        $(".navbar .menu-icon").click(function() {
            ourmenu.toggleClass("show");
        });
        $(".menu-navbar .exit-icon").click(function() {
            ourmenu.toggleClass("show");
        })
    });
});