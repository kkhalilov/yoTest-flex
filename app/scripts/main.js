function game() {
    const isStorage = 'undefined' !== typeof localStorage;
    var correct = false;
    var lvl;
    if(localStorage.getItem('level') === null ) {
        lvl = 0;
    } else {
        lvl = parseInt(localStorage.getItem('level'));
    }

    console.log(localStorage.getItem('level'));
    addInstructions();
    addFrogsAndLilypads();
    addStyleToBg();
    addCssText();
    animateFrogs();
    $('#restart').addClass('disabled');
    if(lvl !== 0) {
        $('#restart').removeClass('disabled');
    }
    var currentLevel =  lvl + 1;
    $('.level').text('Уровень '+ currentLevel + ' из 24');
    $('#next').addClass('disabled');
    $('#code').on('keyup', function (e) {
        var k = e.keyCode || e.which;
        var code = $('#code').val();
        $('#css').removeClass('animate-code');
        $('#pond').attr('style', code);
        check();
        if(correct && k === 13) {
            $('.frog').addClass('animated bounceOutUp');
            setTimeout(function () {
                clearContent();
                saveLevel();
                addInstructions();
                addFrogsAndLilypads();
                addStyleToBg();
                addCssText();
                animateFrogs();
                $('.level').text('Уровень '+ currentLevel + ' из 24');
                $('.frog').removeClass('animated bounceOutUp');
            }, 1000);
        } else if(!correct && k ===13) {
            $('#css').addClass('animate-code');
        }
    });
    $('#code').keydown(function(e) {
        var lines = 1;
        var newLines = $(this).val().split('\n').length;
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
            var val = $(this).children().data('color');

            frogs[key] = val;
        });

        $('.lilypad').each(function() {
            var position = $(this).position();
            position.top = Math.floor(position.top);
            position.left = Math.floor(position.left);

            var key = JSON.stringify(position);
            var val = $(this).children().data('color');

            if (!(key in frogs) || frogs[key] !== val) {
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
        return correct;
    }

    function addInstructions() {
        $('.instructions').append(levels[lvl].instruction);
    }
    function addStyleToBg() {
        $('#background').attr('style', levels[lvl].styles);
    }
    function clearContent() {
        $('.instructions').text('');
        $('#code').val('');
        $('#next').addClass('disabled');
        $('#background').empty();
        $('#pond').empty();
        $('#background').attr('style', '');
        $('#pond').attr('style', '');
        $('.level').text('');
        $('#before').text('');
        $('#after').text('');
        $('#code').focus();
        lvl += 1;
        currentLevel += 1;
        isStorage && localStorage.setItem('level', lvl);
        if(lvl !== 0) {
            $('#restart').removeClass('disabled');
        }
    }
    $('#next').on('click', function () {
        $('.frog').addClass('animated bounceOutUp');
        setTimeout(function () {
            clearContent();
            saveLevel();
            addInstructions();
            addFrogsAndLilypads();
            addStyleToBg();
            addCssText();
            animateFrogs();
            $('.level').text('Уровень '+ currentLevel + ' из 24');
            $('.frog').removeClass('animated bounceOutUp');
        }, 1000);
    });
    function saveLevel() {
        if(isStorage && localStorage.getItem('level')) {
            lvl = localStorage.getItem('level');
            lvl = parseInt(lvl);
        }
    }
    function addFrogsAndLilypads() {
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
            $('<div/>').addClass('bg').addClass(color).appendTo(lilypad).data('color', color);
            $('<div/>').addClass('bg animated pulse infinite').addClass(color).appendTo(frog).data('color', color);

            $('#background').append(lilypad);
            $('#pond').append(frog);
        }

    }
    function addCssText() {
        $('#before').append(levels[lvl].before);
        $('#after').append(levels[lvl].after);
    }
    function animateFrogs() {
        $('.frog').children().addClass('bounceInDown');
        setTimeout(function () {
            $('.frog').children().removeClass('bounceInDown');
        }, 900);
    }
    $('#restart').on('click', function () {
        var isRestart = confirm('Вы вернетесь на первый уровень и начнете все заново.' + '\n\n' + 'Вы уверены в своем выборе?');
        if(isRestart) {
            localStorage.removeItem('level');
            location.reload();
        }
    });
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