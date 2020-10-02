import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';

import Home from '../Pages/Home';


export default function Routes(){
  return(
    <>
      <BrowserRouter>
        <Route path="/">
          <Home />
        </Route>
      </BrowserRouter>
    </>
  )
}