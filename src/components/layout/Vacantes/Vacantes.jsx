import { Card } from "@/components/ui/card";
import { HiArrowNarrowRight } from "react-icons/hi";
import { IoMdMegaphone } from "react-icons/io";
import { FaUserTie } from "react-icons/fa";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { LiaUserAstronautSolid } from "react-icons/lia";

function Vacantes() {
  return (
    <main id="vacantes" className="cuerpo-vacantes px-8 pb-14 h-162 mx-auto content-center scroll-mt-30">

      <div className="encabezado-vacantes flex justify-between items-center mb-11 pl-8">
        
        <h2 className="text-3xl font-bold text-sky-700"><a className="underline decoration-pink-500 decoration-3 underline-offset-10">Exp</a>lora nuestras áreas</h2>
        
        <a className="text-2xl font-semibold text-sky-700 flex gap-1.5" href="#">
          Ver todas las áreas <HiArrowNarrowRight className="size-8 text-sky-700"/>
        </a>
        
      </div>

      <div className="cards-vacantes flex justify-center gap-10 items-center pt-10">

        <Card className="group bg-gray-50/35 text-white p-4 rounded-lg shadow-md w-67.5 h-106 text-center items-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
          <IoMdMegaphone className="size-35 text-sky-700 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"/>
          <h3 className="text-2xl font-bold text-pink-500 transition-colors duration-300 group-hover:text-pink-400">Practicante de Marketing</h3>
          <p className="text-xl text-neutral-600 w-56">Estrategas, creativos y analistas que hacen crecer marcas</p>
          <a href="#landing" className="text-sky-700 font-semibold mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 block">Postular →</a>
        </Card>

        <Card className="group bg-gray-50/35 text-white p-4 rounded-lg shadow-md w-67.5 h-106 text-center items-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
          <FaUserTie className="size-35 text-sky-700 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"/>
          <h3 className="text-2xl font-bold text-pink-500 transition-colors duration-300 group-hover:text-pink-400">Practicante de Administración</h3>
          <p className="text-xl text-neutral-600 w-56">Talento organizado que asegura el buen funcionamiento</p>
          <a href="#landing" className="text-sky-700 font-semibold mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 block">Postular →</a>
        </Card>

        <Card className="group bg-gray-50/35 text-white p-4 rounded-lg shadow-md w-67.5 h-106 text-center items-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
          <FaHandHoldingDollar className="size-35 text-sky-700 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"/>
          <h3 className="text-2xl font-bold text-pink-500 w-55 transition-colors duration-300 group-hover:text-pink-400">Área de Cobranzas</h3>
          <p className="text-xl text-neutral-600 w-56">Personas enfocadas en resultados y gestión efectiva</p>
          <a href="#landing" className="text-sky-700 font-semibold mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 block">Postular →</a>
        </Card>

        <Card className="group bg-gray-50/35 text-white p-4 rounded-lg shadow-md w-67.5 h-106 text-center items-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
          <LiaUserAstronautSolid className="size-35 text-sky-700 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"/>
          <h3 className="text-2xl font-bold text-pink-500 w-55 transition-colors duration-300 group-hover:text-pink-400">Área de Supervisión</h3>
          <p className="text-xl text-neutral-600 w-56">Líderes que guían equipos hacia el logro de objetivos</p>
          <a href="#landing" className="text-sky-700 font-semibold mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 block">Postular →</a>
        </Card>

      </div>

    </main>
  );
}

export default Vacantes;

