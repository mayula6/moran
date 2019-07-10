$(document).ready(function () {
    $("#q2").hide();
    $("#q22").hide();

    $("#t").click(function () {
        $(this).css("background-color", "#b0d9c8");
        $("#f1").css("background-color", "#e6e6e6");
        $("#f2").css("background-color", "#e6e6e6");
        $("#q2").show();
        $("#t").off("click");
        $("#f1").off("click");
        $("#f2").off("click");
    });

    $("#f1").click(function () {
        $("#t").css("background-color", "#b0d9c8");
        $(this).css("background-color", "#fb8a82");
        $("#f2").css("background-color", "#e6e6e6");
        $("#q2").show();
        $("#t").off("click");
        $("#f1").off("click");
        $("#f2").off("click");
    });

    $("#f2").click(function () {
        $("#t").css("background-color", "#b0d9c8");
        $("#f1").css("background-color", "#e6e6e6");
        $(this).css("background-color", "#fb8a82");
        $("#q2").show();
        $("#t").off("click");
        $("#f1").off("click");
        $("#f2").off("click");

    });

    $("#q2").click(function () {
        $("#q2").hide();
        $("#q22").show();
        $("#t2").click(function () {
            $(this).css("background-color", "#b0d9c8");
            $("#f12").css("background-color", "#e6e6e6");
            $("#f22").css("background-color", "#e6e6e6");
            $("#t2").off("click");
            $("#f12").off("click");
            $("#f22").off("click");
        });

        $("#f12").click(function () {
            $("#t2").css("background-color", "#b0d9c8");
            $(this).css("background-color", "#fb8a82");
            $("#f22").css("background-color", "#e6e6e6");
            $("#t2").off("click");
            $("#f12").off("click");
            $("#f22").off("click");
        });

        $("#f22").click(function () {
            $("#t2").css("background-color", "#b0d9c8");
            $("#f12").css("background-color", "#e6e6e6");
            $(this).css("background-color", "#fb8a82");
            $("#t2").off("click");
            $("#f12").off("click");
            $("#f22").off("click");
        });
    });

});