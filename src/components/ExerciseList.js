import React from 'react'
import Card from './Card'

const ExerciseLIst = ({exercises}) => (
    <div>
        { exercises.map((exercise) => {
            return(
                // Por cada iteración retorna una card
                <Card
                // destructuring
                {...exercise}
                />
            )
        })}
    </div>
)

export default ExerciseLIst