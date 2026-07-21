import { SiFacebook } from "react-icons/si";
import { SiInstagram } from "react-icons/si";
import { SiTiktok } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { SiWhatsapp } from "react-icons/si";
import { PiMapPinAreaBold } from "react-icons/pi";

function PieDePagina() {
    return (
        <footer className="pie-pagina bg-sky-700 px-4 py-4 mx-auto content-center flex gap-110 items-center justify-end">
            <div className="logo-redes flex flex-col items-center">
                <img src="src/assets/images/TalenteaFooter.png" className="text-2xl font-bold text-white w-60 h-auto"/>
                <ul className="flex gap-2 mb-5">
                    <li><a href="#" className="text-white font-bold"><SiFacebook className="size-6 text-white bg-sky-700" /></a></li>
                    <li><a href="#" className="text-white font-bold"><SiInstagram className="size-6 text-white bg-sky-700" /></a></li>
                    <li><a href="#" className="text-white font-bold"><SiTiktok className="size-6 text-white bg-sky-700" /></a></li>
                    <li><a href="#" className="text-white font-bold"><FaLinkedin className="size-6 text-white bg-sky-700"/></a></li>
                </ul>
            </div>

            {/*
            <div className="enlaces">
                <p className="text-white font-bold">Enlaces</p>
                <ul>
                    <li><a href="#" className="text-white font-light">Inicio</a></li>
                    <li><a href="#" className="text-white font-light">Nosotros</a></li>
                    <li><a href="#" className="text-white font-light">Vacantes</a></li>
                    <li><a href="#" className="text-white font-light">Testimonios</a></li>
                    <li><a href="#" className="text-white font-light">Misión y Visión</a></li>
                </ul>
            </div>
            */}
            
            <div className="informacion">
                <p className="text-white font-bold text-2xl flex-col">Información</p>
                <ul>
                    <li><a href="#" className="text-white font-light text-lg flex gap-2 align-center"> <SiWhatsapp className="size-6 text-white bg-sky-700 mt-0.5"/>973195714</a></li>
                    <li><a href="#" className="text-white font-light text-lg flex gap-2 align-center mt-2"> <PiMapPinAreaBold className="size-7 text-white bg-sky-700"/>Lima, Perú. Los Olivos</a></li>
                </ul>
            </div>
        </footer>
    );
}

export default PieDePagina;
