function CabeceraPagina() {
  return (
    //Para centrar verticalmente los elementos dentro del header, se utiliza la clase flex y items-center. Esto asegura que todos los elementos hijos del header estén alineados verticalmente en el centro.
    //Para centrar horizontalmente los elementos dentro del header, se utiliza la clase text-center. Esto asegura que el contenido del header esté centrado horizontalmente en relación con el ancho del header.
    <header className="py-4 px-4 flex flex-wrap items-center gap-10 justify-between">
      
      <div className="logo w-50">

        <img src="src/assets/images/PerfilBlancoTransparenteTalentea.pe.png" alt="Logo de Talentea"/>
      
      </div>
      
      <div className="flex gap-10 items-center text-center">

        <div className="navegacion w-157">
          
          <ul className="flex gap-10">

            <li><a href="#" className="text-sky-700 font-bold">INICIO</a></li>

            <li><a href="#" className="text-sky-700 font-bold">NOSOTROS</a></li>

            <li><a href="#" className="text-sky-700 font-bold">VACANTES</a></li>
            
            <li><a href="#" className="text-sky-700 font-bold">TESTIMONIOS</a></li>
            
            <li><a href="#" className="text-sky-700 font-bold">MISIÓN Y VISIÓN</a></li>

          </ul>

        </div>

        <div className="boton-postula w-47">

          <button className="bg-pink-500 text-white font-bold py-2.5 px-6 rounded-3xl">POSTULA AHORA</button>
        
        </div>
      
      </div>
    
    </header>
  );
}

export default CabeceraPagina;
