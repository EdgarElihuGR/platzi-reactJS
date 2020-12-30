import React from 'react'

const HolaMundo = () => {
    const Hello = 'Hola mundo!'
    const isTrue = true;
    return (
        <div className="HolaMundo">
            <h1>{Hello}</h1>
            <h2>Curso ReactJS</h2>
            <img src="C:\Users\ragde\Pictures" alt="React"/> {/* Cerrar tags simples con '/>' */}
            {isTrue ? <h4>Es verdadero</h4> : <h5>Es falso</h5>} {/* Validación ternaria if else */}
            {isTrue && <h4>Soy verdadero</h4>} {/*Validación ternaria if*/}
        </div>
    )
}

export default HolaMundo