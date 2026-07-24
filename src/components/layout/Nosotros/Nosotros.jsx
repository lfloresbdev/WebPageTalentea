import { FaCheckCircle } from "react-icons/fa";
import { IoIosArrowDropright } from "react-icons/io";

function Nosotros() {
  return (
    <main id="nosotros" className="cuerpo-nosotros w-full h-160 px-8 py-8 mt-7 mx-auto content-center flex relative h-110 justify-between items-start scroll-mt-27">
        
        <div className="contenido-izquierdo">
            
            <div className="titulo-nosotros">
                <h2 className="text-5xl font-bold mb-8 text-sky-700 w-auto"><a className="underline text-sky-700 decoration-4 underline-offset-25">¿Por q</a>ué elegir trabajar con <span className="text-pink-500">Talentea?</span></h2>
            </div>
            
            <div className="lista-nosotros">
                
                <ul className="text-sky-700 mb-8 w-auto space-y-3 pt-8 mt-25">
                    
                    <li className="flex items-center gap-3 text-2xl">
                        <FaCheckCircle className="size-9 text-pink-500 shrink-0" />
                        <span>Acceso a oportunidades en empresas líderes</span>
                    </li>
                    <li className="flex items-center gap-3 text-2xl">
                        <FaCheckCircle className="size-9 text-pink-500 shrink-0" />
                        <span>Acompañamineto en cada parte del proceso</span>
                    </li>
                    <li className="flex items-center gap-3 text-2xl">
                        <FaCheckCircle className="size-9 text-pink-500 shrink-0" />
                        <span>Desarrollo profesional y crecimiento constante</span>
                    </li>
                    <li className="flex items-center gap-3 text-2xl">
                        <FaCheckCircle className="size-9 text-pink-500 shrink-0" />
                        <span>Ambiente laboral basado en el respeto y la colaboración</span>
                    </li>
                
                </ul>

            </div>
            
            <div className="boton-nosotros">

                <a href="#testimonios" className="w-52 group px-4 rounded font-bold bg-pink-500 border-2 border-pink-500 text-white hover:bg-pink-600 hover:text-whitw flex items-center">
                    Conocenos más
                    <IoIosArrowDropright className="pl-3 size-12 text-white group-hover:text-white"/>
                </a>
            
            </div>
        
        </div>

        <div className="contenido-derecho w-140 flex flex-col relative right-5 top-30 z-10">
            <img src="src/assets/images/ImagenDeNosotros.png.jpeg" alt="Imagen de nosotros" className="mt-auto"/>
        </div>

    </main>
  );
}

export default Nosotros;

