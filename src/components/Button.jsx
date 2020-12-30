import React from 'react'

class Button extends React.Component {

    state = {
        // State son los atributos del componente al ser inicializado
        count : 0,
    }

    handleClick = () => {
        this.setState({
            count : this.state.count+1
        })
    }

    render() {
        const {count} = this.state;
        return (
            <div>
                <h1>Manzanas: {count}</h1>
                {/* <button type="button">{props.text}</button> */}
                <button type="button" className="btn btn-orange" onClick={this.handleClick}>Agregar</button>
            </div>    
        )
    }
}

// Componente Stateful
// const Button = props => {
//     const { text } = props; {/*Destructuración de las props*/}
//     return (
//         <div>
//             {/* <button type="button">{props.text}</button> */}
//             <button type="button">{text}</button>
//         </div>
//     )
// }

export default Button