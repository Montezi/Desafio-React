import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Main from './pages/Main';
import New from './pages/New';

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Main} />
      <Route path="/new" exact component={New} />
      <Route path="/new/:id" component={New} />
    </BrowserRouter>
  );
}
