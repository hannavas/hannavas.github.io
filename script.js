// var start_side = 500;
// $(window).scroll(function() {
//     check_side();
// })
//
// function check_side() {
//     if ($(window).scrollTop() > start_side) {
//         $('#side_tab').fadeIn();
//     } else {
//         $('#side_tab').fadeOut();
//     }
// }

/* ref: http://codepen.io/markhillard/pen/iqnlh */
$(document).ready(function() {
    // bind click event to all internal page anchors
    $("a[href*=#]").bind("click", function(e) {
        // prevent default action and bubbling
        e.preventDefault();
        e.stopPropagation();
        // set target to anchor's "href" attribute
        var target = $(this).attr("href");
        // scroll to each target
        $(target).velocity("scroll", {
            duration: 1000,
            offset: -40,
            easing: "easeInOutQuint"
        });
    });
});
