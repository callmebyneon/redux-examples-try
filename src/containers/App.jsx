import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from '~/components/Layout';
import Todo from './Todo';
import Cart from './Cart';
import Async from './Async';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Cart />} />
        <Route path="todo" element={<Todo />} />
        <Route path="async" element={<Async />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  )
};

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

export default App;