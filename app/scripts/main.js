function game() {
    var correct = false;
    var lvl = 0;
    addText();
    addElements();
    addStyle();
    var currentLevel =  1;
    $(".level").text("Уровень "+ currentLevel + " из 24");


    $('#next').addClass('disabled');
    $("#code").on("keyup", function (e) {
        var k = e.keyCode || e.which;
        var code = $("#code").val();
        $("#css").removeClass('animate-code');
        $("#pond").attr("style", code);
        check();
        if(correct && k ===13) {
            nextLvl();
            addText();
            addElements();
            addStyle();
            $(".level").text("Уровень "+ currentLevel + " из 24");
            /*document.location = $("#next").attr('href');*/
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
    //Функция добавляет лягушек и лилии с помошью объектов
    /*function addElements() {
        var lilypad = $('<div/>').addClass('lilypad');
        var frog = $('<div/>').addClass('frog');
        $('<div/>').addClass('bg green').appendTo(lilypad);
        $('<div/>').addClass('bg yellow animated pulse infinite').appendTo(frog);

        $('#background').append(lilypad);
        $('#pond').append(frog);
    }*/
    function addText() {
        $(".instructions").append(levels[lvl].instruction);
    }
    /*function addFrogs() {
        $("#pond").append(levels[lvl].frogs);
    }
    function addLilypads() {
        $("#background").append(levels[lvl].lilypads);
    }*/
    function addStyle() {
        $("#background").attr("style", levels[lvl].styles);
    }
    function nextLvl() {
        $(".instructions").text('');
        $("#code").val('');
        $("#next").addClass("disabled");
        $('#background').empty();
        $('#pond').empty();
        $("#background").attr("style", "");
        $("#pond").attr("style", "");
        $(".level").text("");
        lvl += 1;
        currentLevel += 1;
    }
    function addElements() {
        var string = levels[lvl].board;
        var colors = {
            'g': 'green',
            'r': 'red',
            'y': 'yellow'
        };
        for(var i = 0; i < string.length; i++) {
            var c = string.charAt(i);
            var color = colors[c];

            var lilypad = $('<div/>').addClass('lilypad');
            var frog = $('<div/>').addClass('frog');
            $('<div/>').addClass('bg').addClass(color).appendTo(lilypad);
            $('<div/>').addClass('bg animated pulse infinite').addClass(color).appendTo(frog);
            console.log(color);

            $('#background').append(lilypad);
            $('#pond').append(frog);
        }

    }
}






$(document).ready(function () {
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });


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