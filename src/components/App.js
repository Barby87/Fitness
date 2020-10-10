import React from 'react'
// Switch renderiza el primer hijo que hace match con el path
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ExercisesContainer from '../pages/ExercisesContainer'
import ExerciseNewContainer from '../pages/ExerciseNewContainer'
import NotFound from '../pages/NotFound'


const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ExercisesContainer}/>
            <Route exact path="/exercise/new" component={ExerciseNewContainer}/>
            <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>
)

export default App