var levels = [
    {
        instruction: '<p>Направь окружность на свой цвет используя свойство <code>justify-content</code>, которое выравнивает элементы горизонтально и принимает следующие значения:</p><ul><li><code>flex-start</code>: Элементы выравниваются по левой стороне контейнера.</li><li><code>flex-end</code>: Элементы выравниваются по правой стороне контейнера.</li><li><code>center</code>: Элементы выравниваются по центру контейнера.</li><li><code>space-between</code>: Элементы отображаются с одинаковыми отступами между ними.</li><li><code>space-around</code>: Элементы отображаются с одинаковыми отступами вокруг них.</li></ul><p>Например, <code>justify-content: flex-end;</code> сдвинет окружность вправо.</p>',
        styles: 'justify-content: flex-end',
        board: 'g',
        before: '#pond { <br> display: flex',
        after: '}'
    },
    {
        instruction: '<p>Теперь, зная свойства <code class="help">justify-content</code>, перемести динамические окружности на свои места.</p>',
        styles: 'justify-content: center',
        board: 'gy',
        before: '#pond { <br> display: flex',
        after: '}'
    },
    {
        instruction: '<p>Используя свойство <code class="help">justify-content</code>, расположи окружности с одинаковыми отступами между ними:</p>',
        styles: 'justify-content: space-between',
        board: 'gyr',
        before: '#pond { <br> display: flex',
        after: '}'
    },
    {
        instruction: '<p>Используя свойство <code class="help">justify-content</code>, расположи окружности с одинаковыми отступами вокруг них:</p>',
        styles: 'justify-content: space-around',
        board: 'gyr',
        before: '#pond { <br> display: flex',
        after: '}'
    },
    {
        instruction: '<p>Теперь ты все знаешь о свойстве <code class="help">justify-content</code>, пришло время познакомиться с новым, а имменно<code class="help">align-items</code>. Это свойство так же как и ранне изученное выравнивает элементы по странице, только теперь это происходит по вертикале. Попробуй переместить динамические блоки на татические внизу страницы используя атрибуты, котоыре ты использовал ранее, а именно <ul><li><code>flex-start</code>: Элементы выравниваются по левой стороне контейнера.</li><li><code>flex-end</code>: Элементы выравниваются по правой стороне контейнера.</li><li><code>center</code>: Элементы выравниваются по центру контейнера.</li><li><code>space-between</code>: Элементы отображаются с одинаковыми отступами между ними.</li><li><code>space-around</code>: Элементы отображаются с одинаковыми отступами вокруг них.</li></ul></p>',
        styles: 'align-items: flex-end',
        board: 'gr',
        before: '#pond { <br> display: flex',
        after: '}'
    },
    {
        instruction: '<p>Молодец, теперь попробуем со свойством <code class="help">align-items</code> сделать такое. Расположи окружность вертикально по середине</p>',
        styles: 'align-items: center',
        board: 'g',
        before: '#pond { <br> display: flex',
        after: '}'
    },
    {
        instruction: '<p>С помощью свойств <code class="help">align-items</code> и <code class="help">justify-content</code> направь окружность на свое место</p>',
        styles: 'align-items: center; justify-content: center',
        board: 'g',
        before: '#pond { <br> display: flex',
        after: '}'
    },
    {
        instruction: '<p>Вновь комбинируя свойтсва <code class="help">align-items</code> и <code class="help">justify-content</code> расположи окружности по своим местам</p>',
        styles: 'align-items: flex-end; justify-content: space-around',
        board: 'gyr',
        before: '#pond { <br> display: flex',
        after: '}'
    },
    {
        instruction: '<p>Выстрой окружности в порядке их цветов, используя <code>flex-direction</code>. Это CSS свойство задает направление, в котором будут расположены элементы в контейнере и принимает следующие значения:</p><ul><li><code>row</code>: Элементы размещаются по направлению текста.</li><li><code>row-reverse</code>: Элементы отображаются в обратном порядке к направлению текста.</li><li><code>column</code>: Элементы распологаются сверху вниз.</li><li><code>column-reverse</code>: Элементы распологаются снизу вверх.</li></ul>',
        styles: 'flex-direction: row-reverse',
        board: 'gyr',
        before: '#pond { <br> display: flex',
        after: '}'
    },
    {
        instruction: '<p>Задействуя свойства <code>flex-direction</code> размести окружности по своим местам так, чтобы каждая динамическая окружность была на статичкской окружности своего цвета</p>',
        styles: 'flex-direction: column-reverse;',
        board: 'gyr',
        before: '#pond { <br> display: flex',
        after: '}'
    },
    {
        instruction: '<p>Используя <code>flex-direction</code> размести окружности по своим местам так, чтобы каждая динамическая окружность была на статичкской окружности своего цвета</p>',
        styles: 'flex-direction: column',
        board: 'gyr',
        before: '#pond { <br> display: flex',
        after: '}'
    },
    {
        instruction: '<p>Задействуя свойства <code>flex-direction</code>, <code>justify-content</code>, <code>align-items</code> размести окружности по своим местам так, чтобы каждая окружность была на окружности своего цвета</p>',
        styles: 'flex-direction: column; align-items: center; justify-content: space-between;',
        board: 'gyr',
        before: '#pond { <br> display: flex',
        after: '}'
    },
    {
        instruction: '<p>Задействуя свойства <code>flex-direction</code>, <code>justify-content</code>, <code>align-items</code> размести окружности по своим местам так, чтобы каждая окружность была на окружности своего цвета</p>',
        styles: 'flex-direction: row-reverse; align-items: flex-end; justify-content: center;',
        board: 'gyr',
        before: '#pond { <br> display: flex',
        after: '}'
    },
    {
        instruction: '<p>О нет! Окружности сплющило на одном ряду. Раздвинь их с помощью свойства <code class="help">flex-wrap</code>, которое принимает следующие значения:</p><ul><li><code>nowrap</code>: Размеры элементов устанавливаются автоматически, чтоб они поместились в один ряд.</li><li><code>wrap</code>: Элементы автоматически переносятся на новую строку.</li><li><code>wrap-reverse</code>: Элементы автоматически переносятся на новую строку, но строки расположены в обратном порядке.</li></ul>',
        styles: 'flex-wrap: wrap;',
        board: 'gggrygyrgg',
        before: '#pond { <br> display: flex',
        after: '}'
    },
    {
        instruction: '<p>Помоги этим окружностям выстроиться в три колонки с помощью комбинации <code class="help">flex-direction</code> и <code class="help">flex-wrap</code>.</p>',
        styles: 'flex-wrap: wrap; flex-direction: column;',
        board: 'ggggggrrrrrryyyyyy',
        before: '#pond { <br> display: flex',
        after: '}'
    },
    {
        instruction: '<p>Два свойства <code class="help">flex-direction</code> и <code class="help">flex-wrap</code> используются так часто вместе, что было создано свойство <code class="help">flex-flow</code> для их комбинирования. Это свойство принимает значения двух этих свойств, разделеные пробелом.</p><p>Например, ты можешь использовать <code>flex-flow: row wrap</code>, чтоб элементы располагались в ряд и автоматически переносились на новую строку.</p><p>Попробуй использовать <code class="help">flex-flow</code>, чтоб повторить предыдущий уровень.</p>',
        styles: 'flex-flow: wrap column;',
        board: 'ggggggrrrrrryyyyyy',
        before: '#pond { <br> display: flex',
        after: '}'
    },
    {
        instruction: '<p>Динамические блоки раскидало по всему полю, но статические сгруппированы в верхней части. Ты можешь использовать <code class="help">align-content</code>, чтобы указать, как несколько рядов должны отделяться друг от друга. Данное свойство принимает следующие значения:</p><ul><li><code>flex-start</code>: Ряды группируются в верхней части контейнера.</li><li><code>flex-end</code>: Ряды группируются в нижней части контейнера.</li><li><code>center</code>: Ряды группируются вертикально по центру контейнера.</li><li><code>space-between</code>: Ряды отображаются с одинаковыми расстояниями между ними.</li><li><code>space-around</code>: Ряды отображаются с одинаковыми расстояниями вокруг них.</li><li><code>stretch</code>: Ряды растягиваются, чтоб заполнить контейнер равномерно.</li></ul><p>Это может запутать, но <code class="help">align-content</code> отвечает за расстояние между рядами, в то время как <code class="help">align-items</code> отвечает за то, как элементы в целом будут выровнены в контейнере. Когда только один ряд, <code class="help">align-content</code> ни на что не влияет.</p>',
        styles: 'align-content: flex-start; flex-wrap: wrap;',
        board: 'ggggggrrrrrryyyyyy',
        before: '#pond { <br> display: flex <br> flex-wrap: wrap;',
        after: '}'
    },
    {
        instruction: '<p>Теперь статические окружности сгруппировались в нижней части. Используй <code class="help">align-content</code>, чтоб направить динамические окружности туда.</p>',
        styles: 'align-content: flex-end; flex-wrap: wrap;',
        board: 'ggggggrrrrrryyyyyy',
        before: '#pond { <br> display: flex <br> flex-wrap: wrap;',
        after: '}'
    },
    {
        instruction: '<p>Используй комбинацию <code class="help">flex-direction</code> и <code class="help">align-content</code>, чтоб отправить динамические блоки на свои места.</p>',
        styles: 'flex-direction: column; align-content: center; flex-wrap: wrap;',
        board: 'ggggggrrrrrryyyyyy',
        before: '#pond { <br> display: flex <br> flex-wrap: wrap;',
        after: '}'
    },
    {
        instruction: '<p>Доставь динамические блоки на свои места в последний раз, используя CSS свойства, которые ты выучил:</p><ul><li><code class="help">justify-content</code></li><li><code class="help">align-items</code></li><li><code class="help">flex-direction</code></li><li><code class="help">flex-wrap</code></li><li><code class="help">flex-flow</code></li><li><code class="help">align-content</code></li></ul>',
        styles: 'flex-flow: column-reverse wrap-reverse; place-content: space-between center;',
        board: 'rggggyy',
        before: '#pond { <br> display: flex <br> flex-wrap: wrap;',
        after: '}'
    }
];