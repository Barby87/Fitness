import React from 'react'
import Loading from '../components/Loading.js'
import FatalError from './500.js'
import Exercises from './Exercises.js'
// Importando hook personalizado (custom hook)
import useFetch from '../hooks/useFetch.js'
import url from '../config'

// Componente funcional
const ExercisesContainer = () => {
    // Obteniendo toda la información que nuestro hook está retornando
    const { data, loading, error } = useFetch(`${url}/exercises`)

    if(loading)
        return <Loading/>
    if(error)
        return <FatalError/>
        
    return <Exercises
                data={data}
            />

}

export default ExercisesContainer

// Componente de clase
// class ExercisesContainer extends React.Component {
//     // Definir un estado, al cual le vamos a definir una data
//     state = {
//         data: [],
//         loading: true,
//         error: null
//     }

//     async componentDidMount(){
//         await this.fetchExercises()
//     } 

//     fetchExercises = async () => {
//         try {
//             let res = await fetch('http://localhost:8000/api/exercises')
//             let data = await res.json()

//             this.setState({
//                 data,
//                 loading: false
//             })

//             console.log(data)
//         } catch (error) {
//             this.setState({
//                 loading: false,
//                 error
//             })
//         }
//     }

//     render() {
//         if(this.state.loading)
//             return <Loading/>
//         if(this.state.error)
//             return <FatalError/>
            
//         return <Exercises
//                     data={this.state.data}
//                 />
//     }
// }

// export default ExercisesContainer