import React from "react";
import { ImagemCard, InfoUsuario } from "./style";

export default function (props){
    return(
        <InfoUsuario>
            <ImagemCard src={props.img}/>
            <p>{props.autor}</p>
        </InfoUsuario>
    )
}