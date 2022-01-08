import styled from "styled-components";
import img from "./../../static/header-bg.jpg"
import LogoUCN from "../LogoUCN";

const Image = styled.div`
    display: grid;
    grid-template-rows: 1fr auto 1fr;
    grid-template-columns: 1fr;
    justify-items: center;
    align-items: center;
    height: 60vh;
    background-image: url(${img});
`

const Letras = styled.h1`
    margin: 10px auto;
    font-family: Ubuntu, sans-serif ;
    font-weight: lighter;
    font-size: 5rem;
    color: white;
`

const SubLetras = styled(Letras)`
    grid-row: 1 / 3;
    margin-left: 10px;
    font-size: 1.5rem;
    font-weight: normal;
`



const FlexForSub = styled.div`
    display: flex;
    align-self: end;
    justify-content: center;
    align-content: center;
`

const Banner = () => <Image>
    <FlexForSub>
        <LogoUCN/>
        <SubLetras>Universidad de la Serena | Departamento de Fisica</SubLetras>
    </FlexForSub>
    <Letras>Doctorado en Fisica</Letras>
</Image>

export default Banner