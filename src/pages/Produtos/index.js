import React from "react";
import { useParams } from "react-router";

export default function Produtos(){
    const { id } = useParams();
    return(
        <h1>Produto: {id}</h1>
    )
}