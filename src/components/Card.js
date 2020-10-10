// componente de clase
// Importar React
import React from 'react'
// Importando imagen
// import exerciseImg from '../images/exercise.png'
import circlesImage from '../images/circles.png'
import emptyImg from '../images/empty.png'
// Importando estilos css
import './styles/Card.css'

const Card = ({ title, description, img, leftColor, rightColor }) => (
    <div className="card mx-auto Fitness-Card my-3" 
    // Estilos en línea
    style={{
        backgroundImage: `url(${circlesImage}), linear-gradient(to right, ${leftColor || '#56CCF2'}, ${rightColor || '#2F80ED'})`
    }}>
        <div className="card-body">
            <div className="row center">
                <div className="col-6">
                    {/* Utilizando dato del state */}
                    <img src={img || emptyImg} className="float-right" alt="Exercise"/>
                </div>
                <div className="col-6 Fitness-Card-Info">
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    </div>
)

// Exportar clase Card
export default Card