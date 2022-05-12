import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import Layout from '../components/Layout';
import Todo from './Todo';
import Cart from './Cart';
import Async from './Async';
import Counter from './Counter';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Todo />} />
        <Route path="cart" element={<Cart />} />
        <Route path="async" element={<Async />} />
        <Route path="counter" element={<Counter />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  )
};

export default App;

const NoMatch = () => {
  return (
    <div>
      <h1>Nothing to see here!</h1>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
