import styled from "styled-components";
import Item, {Link} from "./Item";

const Style = styled.div`
    width: 60%;
    height: 100%;
    margin: auto;
    display: flex;
`

const Lista = () => <Style>
    <Item first><Link href="#a">PLAN DE ESTUDIO</Link></Item>
    <Item><Link>INGRESO</Link></Item>
    <Item> <Link>LINEAS DE INVESTIGACION </Link></Item>
    <Item> <Link>FINANCIAMIENTO </Link></Item>
    <Item> <Link>POSTULACIONES Y FECHAS </Link></Item>
    <Item> <Link>ACADEMICOS </Link></Item>
    <Item> <Link>CONTACTOS </Link></Item>
</Style>
export default Lista