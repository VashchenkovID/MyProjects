# MyProjects

Sait - Предлагаю вам тестовое задание: https://www.figma.com/file/O85GHslhGdXmcA9Bxe5fUT/%D0%AD%D0%9C%D0%9C?node-id=0%3A1

Необходимо сверстать макет. По возможности сделать адаптивную вёрстку, подключить js. 

# PostList

-  Тестовое задание для middle Vue.js разработчика
Результат желательно опубликовать на Github и прислать нам ссылку.
Фреймворк Vue.js состоит из трех основных библиотек (
  [Vue](https://vuejs.org/),
  [VueRouter](https://router.vuejs.org/)
).
## Задача:
Реализовать web приложение с использованием фреймворка Vue.js, которое совершает
запрос 100 элементов со следующей структурой из любого открытого api
```
{
  id,
  name,
  items: [
    {
      id,
      name
    }
  ]
}
```
В приложении должно быть реализовано 2 страницы: главная и история.
**Главная страница** должна состоять из двух колонок:
- В первой колонке отображается список всех элементов, полученных из api и поле текстового ввода. При вводе текста в поле фильтровать отображаемые элементы списка по следующему правилу: показывать только те элементы, у которых введенная пользователем строка
входит в поле `name` или в `items.name` и сортировать список элементов по количеству вхождений строки в обратном порядке.
У каждого элемента должна быть кнопка [+] при нажатии на которую элемент списка попадает во вторую колонку и пропадает из первой
- Во второй колонке отображаются "выбранные" элементы списка. У каждого элемента должна быть кнопка [-] при нажатии на которую элемент списка возвращается в первую колонку и пропадает из второй соответственно
- На главной странице так-же присутствуют три кнопки: [история][история добавлений][история удалений]. При нажатии на кнопку должен происходить переход на страницу истории с соответствующим параметром.
**Страница истории** состоит из списка событий перемещения элементов из колонки в колонку на главной странице. Событие должно показывать, какой элемент `{id, name}` был перемещен, какого рода было перемещение (добавление/удаление) и когда (любое отображение времени события)


# Tracking System

Тестовое задание на middle frontend разработчика:

## Задача:
Нужно реализовать систему трэкинга статистики для Dota2.
Для этого нужно сверстать следующие страницы:
1) Главная страница
https://www.figma.com/proto/pK6SrWkafU4LaE5krZXPGH/OpenDota--
-dashboard?page-id=0%3A1&node-id=79%3A1713&viewport=340%2C
48%2C0.15&scaling=scale-down&starting-point-node-id=79%3A1713&
show-proto-sidebar=1
2) Модальную форму авторизации
3) Модальную форма регистрации
4) Страницу списка команд
https://www.figma.com/proto/pK6SrWkafU4LaE5krZXPGH/OpenDota--
-dashboard?page-id=0%3A1&node-id=2%3A2&viewport=340%2C48%
2C0.15&scaling=scale-down&starting-point-node-id=2%3A2&show-prot
o-sidebar=1
5) Страница список матчей
https://www.figma.com/proto/pK6SrWkafU4LaE5krZXPGH/OpenDota--
-dashboard?page-id=0%3A1&node-id=76%3A487&viewport=340%2C4
8%2C0.15&scaling=scale-down&starting-point-node-id=76%3A487&sh
ow-proto-sidebar=1
6) Детальная страница матча
https://www.figma.com/proto/pK6SrWkafU4LaE5krZXPGH/OpenDota--
-dashboard?page-id=0%3A1&node-id=79%3A2681&viewport=340%2C48%2
C0.15&scaling=scale-down&starting-point-node-id=79%3A2681&show-protosidebar=1
7) Всплывающее меню
Входные данные:
Исходники макетов
https://www.figma.com/file/pK6SrWkafU4LaE5krZXPGH/OpenDota---dashbo
ard?node-id=79%3A2681
Просмотр страниц
https://www.figma.com/proto/pK6SrWkafU4LaE5krZXPGH/OpenDota---dashb
oard?page-id=0%3A1&node-i...
Выходные данные:
1) Реализован фунционал с использования react или vue.js
2) Должно быть обращение к API https://docs.opendota.com/ и
обновление данных по интервалу раз в минуту
3) Должен быть организован роутинг страниц


Помимо пунктов ТЗ: реализованы запросы на сервер для получения никнеймов и иконок для точного отображения на странице деталей матча.
Реализованы иконки игровых персонажей на странице матчей ( в соответствии с данными страницы деталей матча)

