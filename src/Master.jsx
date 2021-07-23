import React from 'react'
import first from './components/first/App'
import sub from './components/Second/App'
import third from './components/third/App'
import {Switch, Route } from 'react-router-dom';
const Master = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={first}></Route>
                <Route exact path='/about' component={sub}></Route>
                <Route exact path='/third' component={third}></Route>
            </Switch>
        </div>
    )
}

export default Master
