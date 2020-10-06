import React from 'react'
import ExerciseForm from '../components/ExerciseForm'
import Card from '../components/Card'

class ExerciseNew extends React.Component {

    state = {
        form: {
            title: '', 
            description: '', 
            img: '', 
            leftColor: '', 
            rightColor: ''
        }
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

    render() {
        return (
            <div className="row">
                <div className="col-sm">
                    <Card {...this.state.form}/>
                </div>
                <div className="col-sm">
                    <ExerciseForm
                        // Enviando controlador handleChange mediante props a ExerciseForm
                        onChange={this.handleChange}
                        form={this.state.form}
                    />
                </div>
            </div>
        )
    }
}

export default ExerciseNew