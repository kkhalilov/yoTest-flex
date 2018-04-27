var levels = [
    {
        instruction: '<p>Добро пожаловать в Flexbox Froggy. Игра, в которой тебе нужно помочь лягушонку Фроги и его друзьям написанием CSS кода! Направь этого лягушонка на лилию справа используя свойство <code>justify-content</code>, которое выравнивает элементы горизонтально и принимает следующие значения:</p><ul><li><code>flex-start</code>: Элементы выравниваются по левой стороне контейнера.</li><li><code>flex-end</code>: Элементы выравниваются по правой стороне контейнера.</li><li><code>center</code>: Элементы выравниваются по центру контейнера.</li><li><code>space-between</code>: Элементы отображаются с одинаковыми отступами между ними.</li><li><code>space-around</code>: Элементы отображаются с одинаковыми отступами вокруг них.</li></ul><p>Например, <code>justify-content: flex-end;</code> сдвинет лягушонка вправо.</p>',
        styles: 'justify-content: flex-end',
        board: 'g'
    },
    {
        instruction: '<p>Теперь, зная свойства <code class="help">justify-content</code>, перемести этих лягушек на свои лилии.</p>',
        styles: 'justify-content: center',
        board: 'gy'
    },
    {
        instruction: '<p>Используя свойство <code class="help">justify-content</code>, расположи лягушек с одинаковыми отступами между ними:</p>',
        styles: 'justify-content: space-between',
        board: 'gyr'
    },
    {
        instruction: '<p>Используя свойство <code class="help">justify-content</code>, расположи лягушек с одинаковыми отступами вокруг них:</p>',
        styles: 'justify-content: space-around',
        board: 'gyr'
    },
    {
        instruction: '<p>Теперь ты все знаешь о свойстве <code class="help">justify-content</code>, пришло время познакомиться с новым, а имменно<code class="help">align-items</code>. Это свойство так же как и ранне изученное выравнивает элементы по странице, только теперь это происходит по вертикале. Попробуй переместить лягушенка на его лилию внизу странице используя атрибуты, котоыре ты использовал ранее, а именно <ul><li><code>flex-start</code>: Элементы выравниваются по левой стороне контейнера.</li><li><code>flex-end</code>: Элементы выравниваются по правой стороне контейнера.</li><li><code>center</code>: Элементы выравниваются по центру контейнера.</li><li><code>space-between</code>: Элементы отображаются с одинаковыми отступами между ними.</li><li><code>space-around</code>: Элементы отображаются с одинаковыми отступами вокруг них.</li></ul></p>',
        styles: 'align-items: flex-end',
        board: 'g'
    },
    {
        instruction: '<p>Молодец, теперь попробуем со свойством <code class="help">align-items</code> сделать такое. РАсположи лягушенка по центру вертикально</p>',
        styles: 'align-items: center',
        board: 'g'
    }
];