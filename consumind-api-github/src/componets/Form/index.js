import React from 'react';
import Spinner from '../Spinner';

const Form = ({ user, loading, error,  ButtonAction, changeUser}) => (
    <div className= "formContainer">
        <input
        type = "text"
        className = "userInput"
        value = {user}
        placeholder = "Usuario ou organização"
        // e = evento
        onChange = { e => changeUser(e.target.value)} 
        ></input>

        <button className = "searchButton" onClick = {ButtonAction}> {loading ? <Spinner/>: "Buscar"} </button>

        <p className = "errorText">{error}</p>

  

    </div>
)

export default Form;