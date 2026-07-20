function Nosotros() {
  return (
    <main className="cuerpo-nosotros px-8 py-8 mx-auto content-center flex relative h-110">
        
        <div className="contenido-izquierdo">
            
            <div className="titulo-nosotros">
                <h2 className="text-3xl font-bold mb-8 text-sky-700 w-140"><a className="underline text-sky-700 decoration-3 underline-offset-25">¿Por q</a>ué elegir trabajar con <span className="text-pink-500">Talentea?</span></h2>
            </div>
            
            <div className="lista-nosotros">
                
                <ul className="list-disc pl-5 text-sky-700 mb-8 w-110">
                    
                    <li className="mb-2">Acceso a oportunidades en empresas líderes</li>
                    <li className="mb-2">Acompañamineto en cada parte del proceso</li>
                    <li className="mb-2">Desarrollo profesional y crecimiento constante</li>
                    <li className="mb-2">Ambiente laboral basado en el respeto y la colaboración</li>
                
                </ul>

            </div>
            
            <div className="boton-nosotros">

                <button className="mr-4 py-2 px-4 rounded bg-pink-500 border-2 border-pink-500 text-white hover:bg-white hover:text-pink-500">Conocenos más</button>
            
            </div>
        
        </div>

        <div className="contenido-derecho w-89 flex flex-col ml-20 relative z-10">
            <img src="src/assets/images/ImagenDeNosotros.png.jpeg" alt="Imagen de nosotros" className="mt-auto"/>
        </div>

    </main>
  );
}

export default Nosotros;

