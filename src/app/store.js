import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

const counter = (state = 0, action) => {
    switch (action.type) {
        case "INCREMENT": {
            return state + 1;
        }
        case "DECREMENT": {
            return state - 1;
        }
        case "RESET": {
            return 0;
        }
        default: {
            return state;
        }
    }
};

// подключение мидлвери происходит в момент создания стора
// создадим мидлвер myLogger (логирование), это цепочка вызовов функций, 
// где store объект с всеми доступными ему методами store.getState(), store.dispatch()
// next обязательно должен быть внутри мидлвера, в него мы передаем текущее событие (action)

// в качестве мидлвейра можно использовать разные библиотеки, воспользуемся redux-logger
// npm i redux-logger
// как правило мидлвейры нужны на этапе тестирования или разроботчика, на этапе продакшна они не нужны
// можно запустить милдлвери только на любом режиме, выборочно
// режим разработчика
// process.env.NODE_ENV === "development" 

// создадим массив функций мидлверов, в нем бедем собирать все наши мидлверы, в нем, по умолчанию уже могут храниться статичные мидлверы
// но в данном случае у нас их нет, добавим туда логер при условии режима разраб
const middleware = [];

// сделаем проверку, если мы в режиме разрабротчика, то добавляем в наш массив мидлверов логер
if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}

const myLogger = (store) => (next) => (action) => {
    console.log("dispatched an action", action.type); //распечатаем инфо при экшине и укажем его тип
    next(action);
    // строчки 33, 34 выполняются синхронно
    // после некста можно выполнить еще другие децствия, достанем текущее значение стейта из стора store.getState()
    console.log("updated state is", store.getState());
};

// для подключения мидлвейри, нужно воспользоваться хелпером applyMiddleware, импортируем его из редакса 
// после єтого в криейтСтор, вторім или третим парамитром передаем enhaencer (усилитель), в данном случае это applyMiddleware()
// и передаем в него наши функции myLogger. передаем их, не вызываем. А дальше редакс выстраивает их в общую цепочку


export const store = createStore(
    counter,
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(...middleware), // можно добавить сразу несколько аргументов (разные мидлвейр)
    // воспользуемся спред оператором так как нам нужны функции из массива
);

// actions for hooks
export const increment = { type: "INCREMENT" };
export const decrement = { type: "DECREMENT" };
export const reset = { type: "RESET" };
