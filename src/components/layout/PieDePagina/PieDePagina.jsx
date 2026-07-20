function PieDePagina() {
    return (
        <footer className="pie-pagina bg-sky-700 px-4 py-4 mx-auto content-center flex gap-110 items-center justify-end">
            <div className="logo-redes flex flex-col items-center">
                <img src="src/assets/images/TalenteaFooter.png" className="text-2xl font-bold text-white w-40" />
                <ul className="flex gap-2">
                    <li><a href="#" className="text-white font-bold">Facebook</a></li>
                    <li><a href="#" className="text-white font-bold">Instagram</a></li>
                    <li><a href="#" className="text-white font-bold">Tiktok</a></li>
                    <li><a href="#" className="text-white font-bold">LinkedIn</a></li>
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
                <p className="text-white font-bold text-2xl">Información</p>
                <ul>
                    <li><a href="#" className="text-white font-light text-lg">973195714</a></li>
                    <li><a href="#" className="text-white font-light text-lg">Lima, Perú. Los Olivos</a></li>
                </ul>
            </div>
        </footer>
    );
}

export default PieDePagina;
