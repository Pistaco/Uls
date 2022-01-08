import styled from "styled-components";
import Lista from "./Lista";

const pixel = "56px"

const Style = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    height: ${pixel};
    background-color: #111111;
`

const Relleno = styled.div`
  height: ${pixel};
`
const BarraDeNavegacion = () =>
    <>
        <Relleno/>
        <Style>
            <Lista/>
        </Style>
    </>



export default BarraDeNavegacion