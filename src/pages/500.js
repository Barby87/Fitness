import React from 'react'
// import '../components/styles/Errors.css'
import FatalErrorImg from '../images/500.png'

const FatalError = () => (
    <div className="text-center">
        <h1>Error 500: Unexpected error</h1>
        <img src={FatalErrorImg} alt="Fatal Error"/>
    </div>
)

export default FatalError