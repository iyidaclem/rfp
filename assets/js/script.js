$(function () {

    // toggler navbar
    $(".toggler1").click(function () {
        $(this).toggle();
        $(".toggler2").toggle();
        $(".navbar ul").css("display", "flex")
    })

    $(".toggler2").click(function () {
        $(this).toggle();
        $(".toggler1").toggle();
        $(".navbar ul").css("display", "none")
    })

    $(".navbar ul *").click(function () {

        if ($(window).width() <= 560) {
            $(".toggler2").hide();
            $(".toggler1").show();
            $(".navbar ul").css("display", "none")
        }
    })

    $(window).scroll(function () {
        if ($(window).width() <= 560) {
            $(".toggler1").css("display", "flex");
            $(".toggler2").css("display", "none");
            $(".navbar ul").css("display", "none")
        }
    })

    $(window).resize(function () {
        if ($(window).width() > 560) {
            $(".toggler").css("display", "none");
            $(".navbar ul").css("display", "flex")
        }
        else {
            $(".toggler1").css("display", "block");
            $(".navbar ul").css("display", "none")
        }
    });

});