import { IoIosArrowDropright } from "react-icons/io";

function Inicio() {
  return (
    <main id="inicio" className="cuerpo-inicio w-full h-160 pl-15 flex justify-between items-center scroll-mt-50">
      
      <div className="contenido-izquierdo">

        <div className="titulo-inicio relative">
          <h2 className="text-6xl mb-8 text-sky-700 w-150 font-display">CONECTAMOS <span className="text-pink-500">TALENTO</span> CON OPORTUNIDADES</h2>
          <img src="src/assets/images/IconoEstrellaTransparente.png" alt="Estrella" className="absolute -top-2 right-27 size-20"/>
        </div>

        <div className="descripcion-inicio">
          
          <p className="text-sky-700 mb-8 w-140 text-2xl font-light">En talentea encontramos a las personas que impulsan el crecimiento delas mejores empresas del sector comercial</p>

        </div>

        <div className="botones-inicio flex gap-4">
          
          <a href="#vacantes" className="group px-4 rounded font-bold bg-pink-500 border-2 border-pink-500 text-white hover:bg-white hover:text-pink-500 flex items-center">
            Ver Vacantes
            <IoIosArrowDropright className="pl-3 size-12 text-white group-hover:text-pink-500"/>
          </a>

          <a href="#landing" className="group px-4 rounded font-bold bg-white border-2 border-sky-700 text-sky-700 hover:bg-sky-700 hover:text-white flex items-center">
            Postula Ahora
            <IoIosArrowDropright className="pl-3 size-12 text-sky-700 group-hover:text-white"/>
          </a>

        </div>

      </div>

      <div className="contenido-derecho size-290 relative -right-20 top-29.5 z-10">
        <img src="src/assets/images/ImagenDeInicio.png" alt="Imagen de inicio" className="w-full h-auto"/>
      </div>

    </main>
  );
}

export default Inicio;

