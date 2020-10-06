import React from 'react'

// Construyendo componente utilizando funciones de JavasScropt (Componente funcional)
// No trabaja con el estado y ciclo de vida
const Welcome = ({username}) => (
    <div className="container">
        <div className="Fitness-User-Info">
            <h1>Hello {username}!</h1>
            <p>Let's workout to get someone gains!</p>
        </div>
    </div>
)

export default Welcome