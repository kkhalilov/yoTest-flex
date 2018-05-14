var levels = [
    {
        instruction: '<p>Направь окружность на свой цвет используя свойство <code>justify-content</code>, которое выравнивает элементы горизонтально и принимает следующие значения:</p><ul><li><code>flex-start</code>: Элементы выравниваются по левой стороне контейнера.</li><li><code>flex-end</code>: Элементы выравниваются по правой стороне контейнера.</li><li><code>center</code>: Элементы выравниваются по центру контейнера.</li><li><code>space-between</code>: Элементы отображаются с одинаковыми отступами между ними.</li><li><code>space-around</code>: Элементы отображаются с одинаковыми отступами вокруг них.</li></ul><p>Например, <code>justify-content: flex-end;</code> сдвинет лягушонка вправо.</p>',
        styles: 'justify-content: flex-end',
        board: 'g',
        before: '#pond { <br> display: flex',
        after: '}'
    },
    {
        instruction: '<p>Теперь, зная свойства <code class="help">justify-content</code>, перемести этии окружности на свои лилии.</p>',
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
        instruction: '<p>Теперь ты все знаешь о свойстве <code class="help">justify-content</code>, пришло время познакомиться с новым, а имменно<code class="help">align-items</code>. Это свойство так же как и ранне изученное выравнивает элементы по странице, только теперь это происходит по вертикале. Попробуй переместить лягушенка на его лилию внизу странице используя атрибуты, котоыре ты использовал ранее, а именно <ul><li><code>flex-start</code>: Элементы выравниваются по левой стороне контейнера.</li><li><code>flex-end</code>: Элементы выравниваются по правой стороне контейнера.</li><li><code>center</code>: Элементы выравниваются по центру контейнера.</li><li><code>space-between</code>: Элементы отображаются с одинаковыми отступами между ними.</li><li><code>space-around</code>: Элементы отображаются с одинаковыми отступами вокруг них.</li></ul></p>',
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
        instruction: '<p>Выстрои окружности в порядке их цветов, используя <code>flex-direction</code>. Это CSS свойство задает направление, в котором будут расположены элементы в контейнере и принимает следующие значения:</p><ul><li><code>row</code>: Элементы размещаются по направлению текста.</li><li><code>row-reverse</code>: Элементы отображаются в обратном порядке к направлению текста.</li><li><code>column</code>: Элементы распологаются сверху вниз.</li><li><code>column-reverse</code>: Элементы распологаются снизу вверх.</li></ul>',
        styles: 'flex-direction: row-reverse',
        board: 'gyr',
        before: '#pond { <br> display: flex',
        after: '}'
    },
    {
        instruction: '<p>Используя <code>flex-direction</code> размести окружности по своим местам так, чтобы каждая окружность была на своем окр своего цвета</p>',
        styles: 'flex-direction: column',
        board: 'gyr',
        before: '#pond { <br> display: flex',
        after: '}'
    },
    {
        instruction: '<p>Задействуя свойства <code>flex-direction</code>, <code>justify-content</code>, <code>align-items</code> размести окружности по своим местам так, чтобы каждая окружность была на своем окр своего цвета</p>',
        styles: 'flex-direction: column; align-items: center; justify-content: space-between;',
        board: 'gyr',
        before: '#pond { <br> display: flex',
        after: '}'
    },
    {
        instruction: '<p>Задействуя свойства <code>flex-direction</code>, <code>justify-content</code>, <code>align-items</code> размести окружности по своим местам так, чтобы каждая окружность была на своем окр своего цвета</p>',
        styles: 'flex-direction: row-reverse; align-items: flex-end; justify-content: center;',
        board: 'gyr',
        before: '#pond { <br> display: flex',
        after: '}'
    },
    {
        instruction: '<p>Задействуя свойства <code>flex-direction</code>, <code>justify-content</code>, <code>align-items</code>размести окружности по своим местам так, чтобы каждая окружность была на своем окр своего цвета</p>',
        styles: 'flex-direction: column; align-items: center; justify-content: space-between;',
        board: 'gyr',
        before: '#pond { <br> display: flex',
        after: '}'
    },
    {
        instruction: '<p>Иногда изменения порядка отображения элементов в контейнере недостаточно. В таких случаях мы можем применить свойство <code class="help">order</code> для конкретных элементов. По умолчанию, значение этого свойства у элементов равно 0, но мы можем задать положительное или отрицательное целое число этому свойству.</p> <p>Используй <code class="help">order</code></p>',
        styles: 'flex-direction: column; align-items: center; justify-content: space-between;',
        board: 'gyr',
        before: '#pond { <br> display: flex',
        after: '}'
    }
];