import { IoIosArrowDropright } from "react-icons/io";

function Inicio() {
  return (
    <main id="inicio" className="cuerpo-inicio w-full h-full pl-15 pb-8 flex justify-between items-center scroll-mt-50">
      
      <div className="contenido-izquierdo">

        <div className="titulo-inicio">
          
          <h2 className="text-6xl font-bold mb-8 text-sky-700 w-150">CONECTAMOS <span className="text-pink-500">TALENTO</span> CON OPORTUNIDADES</h2>

        </div>

        <div className="descripcion-inicio">
          
          <p className="text-sky-700 mb-8 w-140 text-2xl font-light">En talentea encontramos a las personas que impulsan el crecimiento delas mejores empresas del sector comercial</p>

        </div>

        <div className="botones-inicio flex gap-4">
          
          <button className="px-4 rounded font-bold bg-pink-500 border-2 border-pink-500 text-white hover:bg-white hover:text-pink-500 flex items-center">
            Ver Vacantes
            <IoIosArrowDropright className="pl-3 size-12 text-white hover:text-pink-500"/>
          </button>

          <button className="px-4 rounded font-bold bg-white border-2 border-sky-700 text-sky-700 hover:bg-sky-700 hover:text-white flex items-center">
            Postula Ahora
            <IoIosArrowDropright className="pl-3 size-12 text-sky-700 hover:text-white"/>
          </button>

        </div>

      </div>

      <div className="contenido-derecho w-150">
        <img src="src/assets/images/ImagenDeInicio.png" alt="Imagen de inicio"/>
      </div>

    </main>
  );
}

export default Inicio;

