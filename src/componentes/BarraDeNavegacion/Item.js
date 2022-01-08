import styled, {css} from "styled-components";
import {negroTenue} from "../constantes/Colores";

const pixel = 1;
const evaluate = props => props.first ? pixel : 0

const border = css`
  border-left: solid ${negroTenue} ${evaluate}px;
  border-right: solid ${negroTenue} ${pixel}px;
`
const flex = css`
  justify-content: center;
  align-items: center;
  display: flex;
`

export const Link = styled.a`
  font-family: "Ubuntu", sans-serif;
  font-size: 12px;
  color: white;
  text-decoration: none;
`

const Item = styled.div`
  width: 100%;
  ${flex};
  ${border};
  
  &&:hover {
    background-color: ${negroTenue}
  }
`

export default Item