import './App.css';
import Banner from "./componentes/Banner";
import BarraDeNavegacion from "./componentes/BarraDeNavegacion";
import ListaDePiezas from "./componentes/Cuadros/ListaDePiezas";
import Footer from "./componentes/Footer";

function App() {
  return <>
    <BarraDeNavegacion/>
    <Banner/>
    <ListaDePiezas/>
    <Footer/>
  </>

}

export default App;
