import LocalStoragePage from '@/presentation/pages/search-local-storage-page/search-local-storage-page'
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { makeMainList } from '../factories/pages/main-page'

const Router: React.FC = () => {
  return (

    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={makeMainList} />
        <Route path="/history-search" exact component={LocalStoragePage} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
