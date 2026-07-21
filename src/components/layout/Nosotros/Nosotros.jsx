import { FaCheckCircle } from "react-icons/fa";
import { IoIosArrowDropright } from "react-icons/io";

function Nosotros() {
  return (
    <main id="nosotros" className="cuerpo-nosotros w-full h-146 px-8 py-8 mx-auto content-center flex relative h-110 justify-between items-center scroll-mt-37">
        
        <div className="contenido-izquierdo">
            
            <div className="titulo-nosotros">
                <h2 className="text-5xl font-bold mb-8 text-sky-700 w-auto"><a className="underline text-sky-700 decoration-4 underline-offset-25">¿Por q</a>ué elegir trabajar con <span className="text-pink-500">Talentea?</span></h2>
            </div>
            
            <div className="lista-nosotros">
                
                <ul className="text-sky-700 mb-8 w-auto space-y-3 pt-8">
                    
                    <li className="flex items-center gap-3 text-xl">
                        <FaCheckCircle className="size-8 text-pink-500 shrink-0" />
                        <span>Acceso a oportunidades en empresas líderes</span>
                    </li>
                    <li className="flex items-center gap-3 text-xl">
                        <FaCheckCircle className="size-8 text-pink-500 shrink-0" />
                        <span>Acompañamineto en cada parte del proceso</span>
                    </li>
                    <li className="flex items-center gap-3 text-xl">
                        <FaCheckCircle className="size-8 text-pink-500 shrink-0" />
                        <span>Desarrollo profesional y crecimiento constante</span>
                    </li>
                    <li className="flex items-center gap-3 text-xl">
                        <FaCheckCircle className="size-8 text-pink-500 shrink-0" />
                        <span>Ambiente laboral basado en el respeto y la colaboración</span>
                    </li>
                
                </ul>

            </div>
            
            <div className="boton-nosotros">

                <button className="group px-4 rounded font-bold bg-pink-500 border-2 border-pink-500 text-white hover:bg-white hover:text-pink-500 flex items-center">Conocenos más
                    <IoIosArrowDropright className="pl-3 size-12 text-white group-hover:text-pink-500"/>
                </button>
            
            </div>
        
        </div>

        <div className="contenido-derecho w-80 flex flex-col relative z-10">
            <img src="src/assets/images/ImagenDeNosotros.png.jpeg" alt="Imagen de nosotros" className="mt-auto"/>
        </div>

    </main>
  );
}

export default Nosotros;

