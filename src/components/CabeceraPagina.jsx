function CabeceraPagina() {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold">Talentea</h1>
      </div>
      <ul className="flex space-x-4">
        <li><a href="#" className="hover:text-gray-300">INICIO</a></li>
        <li><a href="#" className="hover:text-gray-300">NOSOTROS</a></li>
        <li><a href="#" className="hover:text-gray-300">VACANTES</a></li>
        <li><a href="#" className="hover:text-gray-300">TESTIMONIOS</a></li>
        <li><a href="#" className="hover:text-gray-300">MISIÓN Y VISIÓN</a></li>
      </ul>
      <button className="bg-pink-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        POSTULA AHORA
      </button>
    </header>
  );
}

export default CabeceraPagina;