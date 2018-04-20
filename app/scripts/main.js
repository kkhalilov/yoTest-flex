function game() {
    $('#next').addClass('disabled');
    var bgStyle =$("#background").attr("style").replace(/\s/g, '');
    $("#code").on("keyup", function (e) {
        var code = $("#code").val().replace(/\s/g, '');
        $("#pond").attr("style", code);
        if(code === bgStyle) {
            $('#next').removeClass('disabled');
        } else {
            $('#next').addClass('disabled');
        }
        var k = e.keyCode || e.which;
        if(k === 13 && code === bgStyle) {
            $("#lvl_1").css("display", "none");
        } else {
            $("#lvl_1").css("display", "block");
        }
    });
}
$(document).ready(function () {
    game();
});