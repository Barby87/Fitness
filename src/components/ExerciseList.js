import React from 'react'
import Card from './Card'

const ExerciseLIst = ({exercises}) => (
    <div>
        { exercises.map((exercise) => {
            return(
                // Por cada iteración retorna una card
                <Card
                    key={exercise.id}
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

export default ExerciseLIst