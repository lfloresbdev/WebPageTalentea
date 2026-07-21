import { FaUser } from "react-icons/fa";
import { IoIosArrowDropright } from "react-icons/io";

function Testimonios() {
  return (
        <main id="testimonios" className="cuerpo-testimonio px-8 py-8 mx-auto content-center scroll-mt-36">
            <div className="cabecera-de-testimonios mx-auto px-4">
                
                <h2 className="text-3xl font-bold mb-8 text-sky-700 w-115"><a className="underline decoration-pink-500 decoration-3 underline-offset-15">Lo q</a>ue dicen nuestros <span className="text-pink-500">talentos</span></h2>
            
            </div>
            
            <div className="testimonios pt-10 mx-auto px-4 flex flex-wrap gap-9 items-center justify-center">

                <div className="testimonio-1 w-128.5 h-50.25 flex gap-3">
                    <div className="foto-testimonio">
                        <FaUser className="size-30 text-sky-700"/>
                    </div>
                    
                    <div className="contenido-testimonio">
                        <p className="text-neutral-600">“Gracias a talentea encontré la oportunidad para crecer profesionalmente y seguir aprendiendo cada día”</p>
                        <p className="text-sky-700 font-bold">Diego Lopez</p>
                        <p className="text-neutral-600">Área de Marketing</p>
                    </div>
                </div>

                <div className="testimonio-2 w-128.5 h-50.25 flex gap-3">
                    <div className="foto-testimonio">
                        <FaUser className="size-30 text-sky-700"/>
                    </div>
                    
                    <div className="contenido-testimonio">
                        <p className="text-neutral-600">“Gracias a talentea encontré la oportunidad para crecer profesionalmente y seguir aprendiendo cada día”</p>
                        <p className="text-sky-700 font-bold">Diego Lopez</p>
                        <p className="text-neutral-600">Área de Marketing</p>
                    </div>
                </div>

                <div className="testimonio-3 w-128.5 h-50.25 flex gap-3">
                    <div className="foto-testimonio">
                        <FaUser className="size-30 text-sky-700"/>
                    </div>
                    
                    <div className="contenido-testimonio">
                        <p className="text-neutral-600">“Gracias a talentea encontré la oportunidad para crecer profesionalmente y seguir aprendiendo cada día”</p>
                        <p className="text-sky-700 font-bold">Diego Lopez</p>
                        <p className="text-neutral-600">Área de Marketing</p>
                    </div>
                </div>

                <div className="testimonio-4 w-128.5 h-50.25 flex gap-3">
                    <div className="foto-testimonio">
                        <FaUser className="size-30 text-sky-700"/>
                    </div>
                    
                    <div className="contenido-testimonio">
                        <p className="text-neutral-600">“Gracias a talentea encontré la oportunidad para crecer profesionalmente y seguir aprendiendo cada día”</p>
                        <p className="text-sky-700 font-bold">Diego Lopez</p>
                        <p className="text-neutral-600">Área de Marketing</p>
                    </div>
                </div>

                <div className="testimonio-5 w-128.5 h-50.25 flex gap-3">
                    <div className="foto-testimonio">
                        <FaUser className="size-30 text-sky-700"/>
                    </div>
                    
                    <div className="contenido-testimonio">
                        <p className="text-neutral-600">“Gracias a talentea encontré la oportunidad para crecer profesionalmente y seguir aprendiendo cada día”</p>
                        <p className="text-sky-700 font-bold">Diego Lopez</p>
                        <p className="text-neutral-600">Área de Marketing</p>
                    </div>
                </div>

                <div className="testimonio-6 w-128.5 h-50.25 flex gap-3">
                    <div className="foto-testimonio">
                        <FaUser className="size-30 text-sky-700"/>
                    </div>
                    
                    <div className="contenido-testimonio">
                        <p className="text-neutral-600">“Gracias a talentea encontré la oportunidad para crecer profesionalmente y seguir aprendiendo cada día”</p>
                        <p className="text-sky-700 font-bold">Diego Lopez</p>
                        <p className="text-neutral-600">Área de Marketing</p>
                    </div>
                </div>

                <div className="testimonio-7 w-128.5 h-50.25 flex gap-3">
                    <div className="foto-testimonio">
                        <FaUser className="size-30 text-sky-700"/>
                    </div>
                    
                    <div className="contenido-testimonio">
                        <p className="text-neutral-600">“Gracias a talentea encontré la oportunidad para crecer profesionalmente y seguir aprendiendo cada día”</p>
                        <p className="text-sky-700 font-bold">Diego Lopez</p>
                        <p className="text-neutral-600">Área de Marketing</p>
                    </div>
                </div>

                <div className="testimonio-8 w-128.5 h-50.25 flex gap-3">
                    <div className="foto-testimonio">
                        <FaUser className="size-30 text-sky-700"/>
                    </div>
                    
                    <div className="contenido-testimonio">
                        <p className="text-neutral-600">“Gracias a talentea encontré la oportunidad para crecer profesionalmente y seguir aprendiendo cada día”</p>
                        <p className="text-sky-700 font-bold">Diego Lopez</p>
                        <p className="text-neutral-600">Área de Marketing</p>
                    </div>
                </div>
                
            </div>

            <div className="footer-testimonios mx-auto px-4 flex relative items-center justify-center gap-10 mt-10">
                <div className="bg-sky-700 w-176.5 h-59 rounded-lg p-6">
                    <h1 className="text-white font-bold text-3xl w-87 mb-3">¿Listos para su próximo desafío profesional?</h1>
                    <p className="text-white font-light text-sm w-74 mb-3">Postula ahora y da el siguiente paso a tu carrera o experiencia laboral</p>
                    <button className="px-4 rounded font-bold bg-white border-2 border-sky-700 text-sky-700 hover:bg-sky-700 hover:text-white flex items-center">
                        Postula Ahora
                        <IoIosArrowDropright className="pl-3 size-12 text-sky-700 hover:text-white"/>
                    </button>
                </div>

                <div className="size-50 relative -ml-60 z-10">
                    <img src="src/assets/images/IconoTransparenteTalentea.pe.png" alt="Icono Talentea"/>
                </div>
            
            </div>
    </main>
  );
}

export default Testimonios;

