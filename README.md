# e-digital
test for frontend developer position

Тестовое задание на позицию Vue JS developer
Используя Vue 3 (composition api) + Pinia сделать мини-приложение для просмотра и конвертации валют на основе JSON данных от ЦБ РФ. https://www.cbr-xml-daily.ru/
https://www.cbr-xml-daily.ru/daily_json.js
PS: при отсутствии знаний и навыков работы с Pinia альтернативной заменой будет являться Vuex 4
В приложении будет две вкладки 

1. Список валют
Посмотреть весь список пар валют с переключением основной валюты.
Переключение:
Например, EUR - RUB 1 EUR - 92.0669 RUB 1 RUB - 0.0109 EUR
Экран будет содержать поле поиска и весь список валютных пар. Поле поиска должно фильтровать список по названию валюты или ее коду.
Также показывать на сколько выросла/упала валюта от предыдущего значения (поле "Previous"). Сделать индикацию цветом (выросла-зеленый, упала-красный) и стрелочкой (вверх и вниз соответственно)
   
2. Конвертер
Конвертер валют (перевод из одной валюты в другую через базовую RUB) Слева - базовый блок, справа - для которого рассчитывается значение Стрелка между ними меняет содержимое блоков друг с другом
Смена валюты в любом из блоков заставляет пересчитывать правый блок. Числовое значение можно редактировать только в левом блоке
Дизайн на ваше усмотрение.

Будет большим плюсом:
1. Декомпозиция компонентов.
2. Вынос логики из компонентов в стор.  
3. Написание на composition api

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
