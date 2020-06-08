import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Main from './Pages/Main/main'
import Login from './Pages/Login/login'
import Register from './Pages/Register/register'
import Dashboard from './Pages/Dashboard/dashboard'
import Interview from './Pages/Interview/interview'
import Projects from './Pages/Projects/projects'
import NewInterview from './Pages/NewInterview/newinterview'

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/interview" exact component={Interview} />
                <Route path="/projects" exact component={Projects} />
                <Route path="/newinterview" exact component={NewInterview} />
            </Switch>        
        </BrowserRouter>       
    )
}

export default Routes
