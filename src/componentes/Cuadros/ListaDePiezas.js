import {StyleSquare, Texto, Titulo} from "./Piezes";
import lorem from "../test/lorem";
import LogoCNA from "../Logo";

const ListaDePiezas = () => (
    <>
        <StyleSquare id="a" blue>
            <Titulo> Doctorado </Titulo>
            <Texto> {lorem} </Texto>
            <LogoCNA/>
        </StyleSquare>

        <StyleSquare>
            <Titulo> Doctorado </Titulo>
            <Texto> {lorem} </Texto>
        </StyleSquare>

        <StyleSquare blue>
            <Titulo> Doctorado </Titulo>
            <Texto> {lorem} </Texto>
            <Titulo>PRUEBA</Titulo>
        </StyleSquare>

        <StyleSquare >
            <Titulo> Doctorado </Titulo>
            <Texto> {lorem} </Texto>
            <Titulo>PRUEBA</Titulo>
        </StyleSquare>

    </>
)

export default ListaDePiezas