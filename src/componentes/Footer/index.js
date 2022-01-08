import {StyleSquare, Texto} from "../Cuadros/Piezes";
import styled from "styled-components";
import LogoUCN from "../LogoUCN";
import LogoCNA from "../Logo";

const BannerStyled = styled(StyleSquare)`
    align-items: center;
    justify-content: center;
    padding: 30px 25%;
`

const StyleP = styled.p`
    font-size: .8rem;
`

const Banner = () => <>
    <BannerStyled blue>
        <LogoUCN/>
        <StyleP>Departamento de Astronomía - Facultad de Ciencias - Universidad de La Serena - La Serena, Chile.    </StyleP>
        <LogoCNA/>
    </BannerStyled>
</>

export default Banner
