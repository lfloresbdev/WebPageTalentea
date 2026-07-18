function CuerpoNosotros() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="w-90">
        <h2 className="text-3xl font-bold mb-8 text-blue-800 w-120">
          ¿Por qué trabajar con <span className="text-pink-500">Talentea?</span>
        </h2>
        <ul className="list-disc pl-5 text-blue-800 mb-8 w-110">
          <li className="mb-2">Acceso a oportunidades en empresas líderes</li>
          <li className="mb-2">Acompañamineto en cada parte del proceso</li>
          <li className="mb-2">Desarrollo profesional y crecimiento constante</li>
          <li className="mb-2">Ambiente laboral basado en el respeto y la colaboración</li>
        </ul>
        <button className="mr-4 py-2 px-4 rounded font-bold bg-pink-500 border-2 border-pink-500 text-gray-50 hover:bg-gray-50 hover:text-pink-500">
          Conocenos más
        </button>
      </div>
    </main>
  );
}

export default CuerpoNosotros;