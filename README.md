# Redux examples try

This repository follows below example from [redux document](https://ko.redux.js.org/introduction/getting-started).

- [#todomvc](https://ko.redux.js.org/introduction/examples/#todomvc)

- [#shopping-cart](https://redux.js.org/introduction/examples/#shopping-cart)

- [#async](https://redux.js.org/introduction/examples/#async)

And for Counter's advanced function, refer to the article below.

- [redux-saga가 해결하는 문제](https://min9nim.vercel.app/2020-04-23-redux-saga/) by min9nim

```
📂src
 ┣ 📂actions
 ┃ ┣ AsyncActions.jsx
 ┃ ┣ CartActions.jsx
 ┃ ┗ TodoActions.jsx
 ┣ 📂api
 ┃ ┣ number.js
 ┃ ┣ products.json
 ┃ ┗ shop.js
 ┣ 📂assets
 ┃ ┣ 📂image
 ┃ ┃ ┣ async_load-example-image.png
 ┃ ┃ ┣ cart-example-image.png
 ┃ ┃ ┣ todo-basic-example-image.png
 ┃ ┃ ┗ todo-example-image.png
 ┃ ┗ 📂scss
 ┃ ┃ ┗ index.scss
 ┣ 📂components
 ┃ ┣ 📂Async
 ┃ ┃ ┣ Picker.jsx
 ┃ ┃ ┗ Posts.jsx
 ┃ ┣ 📂Cart
 ┃ ┃ ┣ index.jsx
 ┃ ┃ ┣ Product.jsx
 ┃ ┃ ┣ ProductItem.jsx
 ┃ ┃ ┗ ProductsList.jsx
 ┃ ┣ 📂Layout
 ┃ ┃ ┣ index.jsx
 ┃ ┃ ┣ OuterSection.jsx
 ┃ ┃ ┗ Title.jsx
 ┃ ┗ 📂Todo
 ┃ ┃ ┣ Footer.jsx
 ┃ ┃ ┣ Footer.spec.jsx
 ┃ ┃ ┣ Header.jsx
 ┃ ┃ ┣ Header.spec.jsx
 ┃ ┃ ┣ Link.jsx
 ┃ ┃ ┣ Link.spec.jsx
 ┃ ┃ ┣ MainSection.jsx
 ┃ ┃ ┣ MainSection.spec.jsx
 ┃ ┃ ┣ TodoItem.jsx
 ┃ ┃ ┣ TodoItem.spec.jsx
 ┃ ┃ ┣ TodoList.jsx
 ┃ ┃ ┣ TodoList.spec.jsx
 ┃ ┃ ┣ TodoTextInput.jsx
 ┃ ┃ ┗ TodoTextInput.spec.jsx
 ┣ 📂constants
 ┃ ┣ ActionTypes.jsx
 ┃ ┗ TodoFilters.jsx
 ┣ 📂containers
 ┃ ┣ 📂Async
 ┃ ┃ ┗ index.jsx
 ┃ ┣ 📂Cart
 ┃ ┃ ┣ CartContainer.jsx
 ┃ ┃ ┣ index.jsx
 ┃ ┃ ┗ ProductsContainer.jsx
 ┃ ┣ 📂Counter
 ┃ ┃ ┗ index.jsx
 ┃ ┣ 📂Todo
 ┃ ┃ ┣ FilterLink.jsx
 ┃ ┃ ┣ Header.jsx
 ┃ ┃ ┣ index.jsx
 ┃ ┃ ┣ index.spec.jsx
 ┃ ┃ ┣ MainSection.jsx
 ┃ ┃ ┗ VisibleTodoList.jsx
 ┃ ┗ App.jsx
 ┣ 📂lib
 ┃ ┗ asyncUtils.jsx
 ┣ 📂reducers
 ┃ ┣ 📂Cart
 ┃ ┃ ┣ cart.jsx
 ┃ ┃ ┣ cart.spec.jsx
 ┃ ┃ ┗ products.jsx
 ┃ ┣ 📂Todo
 ┃ ┃ ┣ todos.jsx
 ┃ ┃ ┣ todos.spec.jsx
 ┃ ┃ ┗ visibilityFilter.jsx
 ┃ ┣ Async.jsx
 ┃ ┣ Counter.jsx
 ┃ ┗ index.jsx
 ┣ 📂selectors
 ┃ ┗ index.jsx
 ┣ 📂theme
 ┃ ┗ index.jsx
 ┗ index.jsx
```
