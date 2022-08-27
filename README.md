## redux middleware

## Принцип редакс
UI - какое-то представление для пользователя 
=> дальше пользователь делает какие-то действия (actions) 
=> єти действия поступают в редюсер, там обрабатываются и передаются в стор. 
=> стейт в сторе на основании этих действий перезаписывается и передает новую картинку в UI

## redux middleware промежуточное звено между єшнами и редюсером, 
- их может быть несколько, своего рода модификации экшина
- например: логирование, отчеты об ошибках, асинъронная логика, модификация экшина или его отмена.
- как правило используются готовые библиотеки
- подключение мидлвери происходит в момент создания стора

## библиотека redux-logger
- npm i redux-logger

## режим разработчика
- process.env.NODE_ENV === "development" 

## использование REDUX_DEVTOOLS вместе с middlware
1. один из возможных вариантов это обернуть функцию applyMiddleware в composeEnhancers
- 'const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;'
- compose єто возможность последовательно вызывать функции, достаем из "redux"
2. второй вариант єто воспользоваться готовой функцией composeWithDevTools из "redux-devtools-extension"
- npm i redux-devtools-extension

## persist - библиотека помогающаю организовать процесс сохранения данных в локалСторидж
- npm i redux-persist
- не работает с middleware
- пример на проекте "список работ":
# [persist DEMO](https://react-job-listings-with-filtering.vercel.app/)
# [rersist REPO](https://github.com/maximmorenko/react-job-listings-with-filtering)
