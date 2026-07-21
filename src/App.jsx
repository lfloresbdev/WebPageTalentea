import './App.css'
import CabeceraPagina from './components/layout/CabeceraPagina/CabeceraPagina'
import Inicio from './components/layout/Inicio/Inicio'
import Nosotros from './components/layout/Nosotros/Nosotros'
import Testimonios from './components/layout/Testimonios/Testimonios'
import Vacantes from './components/layout/Vacantes/Vacantes'
import MisionVision from './components/layout/MisionVision/MisionVision'
import PieDePagina from "./components/layout/PieDePagina/PieDePagina";
import Prueba from './components/layout/Prueba/Prueba'
import Landing from './components/layout/Landing/Landing'
import Widgets from './components/layout/WidgetsFlotantes/Widgtes'

function App() {
  return (
    <>
      <CabeceraPagina/>
      <Inicio/>
      <Nosotros/>
      <Vacantes/>
      <Testimonios/>
      <MisionVision/>
      <Landing/>
      <PieDePagina/>
      <Widgets/>
    </>
  )
}

export default App
