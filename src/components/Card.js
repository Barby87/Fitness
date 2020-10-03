// componente de clase
// Importar React
import React from 'react'
// Importando imagen
// import exerciseImg from '../images/exercise.png'
import circlesImage from '../images/circles.png'
// Importando estilos css
import './styles/Card.css'

// 1° Definir componente de clase
// Permite trabajar con el estado y el ciclo de vida del componente
class Card extends React.Component {
    // 2° Definir un constructor
    // constructor(props) {
    //     // Pasando props al constructor base
    //     super(props)
    //     // El estado de un componente suele comenzar con un valor predeterminado
    //     this.state = {
    //         image: 'https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercise.png?alt=media&token=b9c4b236-16a9-4a56-bba2-90c9660a0f06'
    //     }
    // }

    // Función didMount se ejecuta una vez que el componente se haya montado (ciclo de vida del componente)
    // Se puede utilizar para llamar API's, realizar suscripciones a eventos y modificar estado del componente
    // componentDidMount() {
    //     setTimeout(() => {
    //         // Actualizar el estado del componente, después de 5 segundos cambiará la imagen
    //         this.setState({
    //             image: 'https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercise.png?alt=media&token=b9c4b236-16a9-4a56-bba2-90c9660a0f06'
    //         })  
    //     }, 5000)
    // }

    // 3° Dentro de la clase definir una función (render)
    render() {
        // destructuring
        const { title, description, img, leftColor, rightColor } = this.props
        return (
            <div className="card mx-auto Fitness-Card my-3" 
            // Estilos en línea
            style={{
                backgroundImage: `url(${circlesImage}), linear-gradient(to right, ${leftColor}, ${rightColor})`
            }}>
                <div className="card-body">
                    <div className="row center">
                        <div className="col-6">
                            {/* Utilizando dato del state */}
                            <img src={img} className="float-right" alt=""/>
                        </div>
                        <div className="col-6 Fitness-Card-Info">
                            <h1>{title}</h1>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

// Exportar clase Card
export default Card