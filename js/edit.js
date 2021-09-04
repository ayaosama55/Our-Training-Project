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