$(document).ready(function () {
    $(".menu-item").on("click", function () {
        $(".caption").attr("hidden", true);
        let name = $(this).data("name")
        $("#" + name).attr("hidden", false);
        let $body = $("body");
        $body.css("background-image", "url(\"backgrounds/" + name + ".png\")");
        if (name === "contact") {
            $body.removeClass("background");
            $body.addClass("contact-page");
        } else {
            $body.addClass("background");
            $body.removeClass("contact-page");
        }
    })
});