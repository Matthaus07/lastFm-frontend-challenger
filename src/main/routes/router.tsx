import { BrowserRouter, Switch, Route } from 'react-router-dom'
import React from 'react'

const Router: React.FC = () => {
  return (

    <BrowserRouter>
      <Switch>
        {/* <Route path="/login" exact component={MainLogin} /> */}
      </Switch>
    </BrowserRouter>
  )
}

export default Router
