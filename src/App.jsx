import './App.css'
import CabeceraPagina from './components/CabeceraPagina'
import CuerpoInicio from './components/CuerpoInicio'
import CuerpoNosotros from './components/CuerpoNosotros'
import CuerpoTestimonio from './components/CuerpoTestimonio'
import CuerpoVacantes from './components/CuerpoVacantes'
import CuerpoMisionVision from './components/CuerpoMisionVision'
import PieDePagina from "./components/PieDePagina";
import CuerpoPrueba from './components/CuerpoPrueba'

function App() {
  return (
      <CabeceraPagina/>,
      <CuerpoInicio/>,
      <CuerpoNosotros/>,
      <CuerpoVacantes/>,
      <CuerpoTestimonio/>,
      <CuerpoMisionVision/>,
      <PieDePagina/>,
      <CuerpoPrueba/>
  )
}

export default App
