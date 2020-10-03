import React from 'react'
import Card from './Card'

function ExerciseLIst(props) {
    return(
        <div>
            { props.exercises.map((exercise) => {
                return(
                    // Por cada iteración retorna una card
                    <Card
                        title={exercise.title}
                        description={exercise.description}
                        img={exercise.img}
                        leftColor={exercise.leftColor}
                        rightColor={exercise.rightColor}
                    />
                )
            })}
        </div>
    )
}

export default ExerciseLIst