import styled from "styled-components";
import {bluePage} from "../constantes/Colores";

export const StyleSquare = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    justify-items: center;
    align-items: start;


    padding: 60px 15%;
    background-color: ${props => props.blue ? bluePage : "white"};
    color: ${props => props.blue ? "white" : "black"};
    
    p {
      margin: 0;
    }
`
export const Texto = styled.p`
    line-height: 1em;
`

export const Titulo = styled.p`
    font-size: 2em;
`

export const Dommy = styled.div`
    width: auto;
`
