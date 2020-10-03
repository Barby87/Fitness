import React from 'react'
// Switch renderiza el primer hijo que hace match con el path
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Exercises from '../pages/Exercises'
import ExerciseNew from '../pages/ExerciseNew'
import NotFound from '../pages/NotFound'

function App() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/exercise" component={Exercises}/>
                <Route exact path="/exercise/new" component={ExerciseNew}/>
                <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
    )
}

export default App