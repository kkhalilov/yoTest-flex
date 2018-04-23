function game() {
    var bgStyle =$("#background").attr("style").replace(/\s/g, '');
    $('#next').addClass('disabled');

    $("#code").on("keyup", function (e) {
        var k = e.keyCode || e.which;
        var code = $("#code").val().replace(/\s/g, '');

        $("#pond").attr("style", code);
        $("#editor").removeClass("animate-code");
        if(code === bgStyle) {
            $('#next').removeClass('disabled');
        } else {
            $('#next').addClass('disabled');
        }

        if(k === 13 && code === bgStyle) {
            document.location = $("#next").attr('href');
        } else if(k === 13 && code !== bgStyle)  {
            $("#editor").addClass('animate-code');
        }
    });
    $('#code').keydown(function(e) {
        var lines = 1;
        var newLines = $(this).val().split("\n").length;

        if(e.keyCode === 13 && newLines >= lines) {
            return false;
        }
    });
}
$(document).ready(function () {
    game();
});