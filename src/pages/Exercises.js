import React, { Fragment } from 'react'
import ExerciseList from '../components/ExerciseList.js'
import Welcome from '../components/Welcome.js'
import AddButton from '../components/AddButton'

const Exercises = ({data}) => (
        // React.Fragment permite retornar múltiples elementos, sin la necesidad de crear uno adicional dentro del dom
        <Fragment>
            <Welcome
                username="Raúl"
            /> 
            <ExerciseList
                exercises={data}
            />
            <AddButton/>             
        </Fragment>

)

export default Exercises
