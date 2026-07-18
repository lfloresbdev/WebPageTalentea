function CuerpoInicio() {
  return (
    <main className="cuerpo-inicio container mx-auto px-4 py-8">
      <div className="w-90">
        <h2 className="text-3xl font-bold mb-8 text-blue-800 w-65">
          CONECTAMOS <span className="text-pink-500">TALENTO</span> CON OPORTUNIDADES
        </h2>
        <p className="text-blue-800 mb-8 w-90">
          En talentea encontramos a las personas que impulsan el crecimiento de
          las mejores empresas del sector comercial
        </p>
        <button className="mr-4 py-2 px-4 rounded font-bold bg-pink-500 border-2 border-pink-500 text-gray-50 hover:bg-gray-50 hover:text-pink-500">
          Ver Vacantes
        </button>
        <button className="py-2 px-4 rounded font-bold bg-gray-50 border-2 border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-gray-50">
          Postula Ahora
        </button>
      </div>
      <div></div>
    </main>
  );
}

export default CuerpoInicio;
