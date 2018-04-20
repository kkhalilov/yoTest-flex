var levels = [
    {
        name: 'justify-content 1',
        instructions: {
            'ru': '<p>Добро пожаловать в Flexbox Froggy. Игра, в которой тебе нужно помочь лягушонку Фроги и его друзьям написанием CSS кода! Направь этого лягушонка на лилию справа используя свойство <code>justify-content</code>, которое выравнивает элементы горизонтально и принимает следующие значения:</p><ul><li><code>flex-start</code>: Элементы выравниваются по левой стороне контейнера.</li><li><code>flex-end</code>: Элементы выравниваются по правой стороне контейнера.</li><li><code>center</code>: Элементы выравниваются по центру контейнера.</li><li><code>space-between</code>: Элементы отображаются с одинаковыми отступами между ними.</li><li><code>space-around</code>: Элементы отображаются с одинаковыми отступами вокруг них.</li></ul><p>Например, <code>justify-content: flex-end;</code> сдвинет лягушонка вправо.</p>',
        },
        board: 'g',
        style: {'justify-content': 'flex-end'},
        before: "#pond {\n  display: flex;\n",
        after: "}"
    },
    {
        name: 'justify-content 2',
        instructions: {
            'ru': '<p>Используй <code>justify-content</code> еще раз, чтоб помочь этим лягушатам попасть на их лилии. Помни, что это свойство CSS выравнивает элементы горизонтально и принимает следующие значения:</p><ul><li><code>flex-start</code>: Элементы выравниваются по левой стороне контейнера.</li><li><code>flex-end</code>: Элементы выравниваются по правой стороне контейнера.</li><li><code>center</code>: Элементы выравниваются по центру контейнера.</li><li><code>space-between</code>: Элементы отображаются с одинаковыми отступами между ними.</li><li><code>space-around</code>: Элементы отображаются с одинаковыми отступами вокруг них.</li></ul>',
        },
        board: 'gy',
        style: {'justify-content': 'center'},
        before: "#pond {\n  display: flex;\n",
        after: "}"
    }
];