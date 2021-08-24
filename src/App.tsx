import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

import Tops from './pages/Tops'
import Likes from './pages/Likes'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Tops} exact />
        <Route path='/tops' component={Tops} exact />
        <Route path='/likes' component={Likes} exact />
        <Redirect from='*' to='/' />
      </Switch>
    </BrowserRouter>
  )
}

export default App
