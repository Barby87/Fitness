import React from 'react'
import Loading from '../components/Loading'
import FatalError from './500.js'
import ExerciseNew from './ExerciseNew'
import url from '../config'

class ExerciseNewContainer extends React.Component {

    state = {
        form: {
            title: '', 
            description: '', 
            img: '', 
            leftColor: '', 
            rightColor: ''
        },
        loading: false,
        error: null
    }

    handleChange = e => {
        // Accediendo al atributo name y value del input 
        console.log(`${e.target.name}: ${e.target.value}`)
        // ALmacenando la información de los campos dentro del estado
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    handleSubmit = async e => {
        this.setState({
            loading: true
        })

        e.preventDefault()
        try {
            // Objeto de configuración
            let config = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state.form)
            }

            let res = await fetch(`${url}/exercises`, config) // Objeto de configuración es opcional
            let json = await res.json()
            console.log(json)
            
            this.setState({
                loading: false
            })
            
            // Redireccionar a página principal
            this.props.history.push('/')
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

        return <ExerciseNew
                // Enviando información a ExerciseNew
                form={this.state.form}
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                />
    }
}

export default ExerciseNewContainer