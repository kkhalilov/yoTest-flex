function game() {
    var correct = false;

    $("#code").on("keyup", function (e) {
        var k = e.keyCode || e.which;
        var code = $("#code").val();
        $("#css").removeClass('animate-code');
        $("#pond").attr("style", code);
        check();
        if(correct && k ===13) {
            document.location = $("#next").attr('href');
        } else if(!correct && k ===13) {
            $("#css").addClass('animate-code');
        }

    });
    $('#code').keydown(function(e) {
        var lines = 1;
        var newLines = $(this).val().split("\n").length;
        if(e.keyCode === 13 && newLines >= lines) {
            return false;
        }
    });
    function check() {
        var lilypads = {};
        var frogs = {};

        $('.frog').each(function() {
            var position = $(this).position();
            position.top = Math.floor(position.top);
            position.left = Math.floor(position.left);

            var key = JSON.stringify(position);
            frogs[key] = key;
        });

        $('.lilypad').each(function() {
            var position = $(this).position();
            position.top = Math.floor(position.top);
            position.left = Math.floor(position.left);

            var key = JSON.stringify(position);

            if (!(key in frogs)) {
                correct = false;
            } else {
                correct = true;
            }
        });
        if(!correct) {
            $('#next').addClass('disabled');
        } else {
            $('#next').removeClass('disabled');
        }
        console.log(correct);
        return correct;
    }
    //Функция добавляет лягушек и лилии
    /*function addElements() {
        var lilypad = $('<div/>').addClass('lilypad');
        var frog = $('<div/>').addClass('frog');
        $('<div/>').addClass('bg green').appendTo(lilypad);
        $('<div/>').addClass('bg yellow animated pulse infinite').appendTo(frog);

        $('#background').append(lilypad);
        $('#pond').append(frog);
    }*/
}
$(document).ready(function () {
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });

    $('#next').addClass('disabled');

    game();
});

/*function game() {
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
});*/