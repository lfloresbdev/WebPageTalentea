function CuerpoInicio() {
  return (
    <main className="cuerpo-inicio px-8 py-8 mx-auto content-center flex">
      
      <div className="contenido-izquierdo">

        <div className="titulo-inicio">
          
          <h2 className="text-3xl font-bold mb-8 text-sky-700 w-65">CONECTAMOS <span className="text-pink-500">TALENTO</span> CONOPORTUNIDADES</h2>

        </div>

        <div className="descripcion-inicio">
          
          <p className="text-sky-700 mb-8 w-90">En talentea encontramos a las personas que impulsan el crecimiento delas mejores empresas del sector comercial</p>

        </div>

        <div className="botones-inicio">
          
          <button className="mr-4 py-2 px-4 rounded font-bold bg-pink-500 border-2 border-pink-500 text-white hover:bg-white hover:text-pink-500">Ver Vacantes</button>

          <button className="py-2 px-4 rounded font-bold bg-white border-2 border-sky-700 text-sky-700 hover:bg-sky-700 hover:text-white">Postula Ahora</button>

        </div>

      </div>

      <div className="contenido-derecho w-100">
        <img src="src/assets/images/ImagenDeInicio.png" alt="Imagen de inicio"/>
      </div>

    </main>
  );
}

export default CuerpoInicio;
