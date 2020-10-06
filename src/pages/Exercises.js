import React from 'react'
// Importar clase Card (componente)
import ExerciseList from '../components/ExerciseList.js'
import Welcome from '../components/Welcome.js'
import AddButton from '../components/AddButton'
import Loading from '../components/Loading.js'
import FatalError from './500.js'

class Exercises extends React.Component {
    // Definir un estado, al cual le vamos a definir una data
    state = {
        data: [],
        loading: true,
        error: null
    }

    async componentDidMount(){
        await this.fetchExercises()
    } 

    fetchExercises = async () => {
        try {
            let res = await fetch('http://localhost:8000/api/exercises')
            let data = await res.json()

            this.setState({
                data,
                loading: false
            })

            console.log(data)
        } catch (error) {
            this.setState({
                loading: false,
                error
            })
        }
    }

    render() {
        if(this.state.loading)
            return <Loading/>
        if(this.state.error)
            return <FatalError/>
            
        return (
            <div>
                <Welcome
                username="Raúl"
                /> 
                <ExerciseList
                    exercises={this.state.data}
                />
                <AddButton/>             
            </div>
        )
    }
}

export default Exercises