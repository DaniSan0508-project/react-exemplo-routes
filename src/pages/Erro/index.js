import React from "react";
import { Link } from "react-router-dom";


export default function Error(){
    return(
        <>
            <h1>Parece que temos um Erro, Você pode estar procurando por</h1>
            <Link to="/">Home</Link><br/>
            <Link to="/contatos">Contatos</Link>
        </>

    )  

}