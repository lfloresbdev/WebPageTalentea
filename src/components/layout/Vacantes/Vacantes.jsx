import { Card } from "@/components/ui/card";

function Vacantes() {
  return (
    <main className="cuerpo-vacantes px-8 py-8 mx-auto content-center">

      <div className="encabezado-vacantes flex justify-between items-center mb-11 pl-8">
        
        <h2 className="text-xl font-bold text-sky-700"><a className="underline decoration-pink-500 decoration-3 underline-offset-10">Exp</a>lora nuestras áreas</h2>
        
        <h2 className="text-lg font-semibold text-sky-700">Ver todas las áreas</h2>
        
      </div>

      <div className="cards-vacantes flex justify-center gap-10 items-center">

        <Card className="bg-gray-50/35 text-white p-4 rounded-lg shadow-md w-67.5 h-106 text-center items-center">
          <h3 className="text-2xl font-bold text-pink-500">Practicante de Marketing</h3>
          <p className="text-xl text-neutral-600 w-56">Estrategas, creativos y analistas que hacen crecer marcas</p>
        </Card>

        <Card className="bg-gray-50/35 text-white p-4 rounded-lg shadow-md w-67.5 h-106 text-center items-center">
          <h3 className="text-2xl font-bold text-pink-500">Practicante de Administración</h3>
          <p className="text-xl text-neutral-600 w-56">Talento organizado que asegura el buen funcionamiento</p>
        </Card>

        <Card className="bg-gray-50/35 text-white p-4 rounded-lg shadow-md w-67.5 h-106 text-center items-center">
          <h3 className="text-2xl font-bold text-pink-500 w-55">Área de Cobranzas</h3>
          <p className="text-xl text-neutral-600 w-56">Personas enfocadas en resultados y gestión efectiva</p>
        </Card>

        <Card className="bg-gray-50/35 text-white p-4 rounded-lg shadow-md w-67.5 h-106 text-center items-center">
          <h3 className="text-2xl font-bold text-pink-500 w-55">Área de Supervisión</h3>
          <p className="text-xl text-neutral-600 w-56">Líderes que guían equipos hacia el logro de objetivos</p>
        </Card>

      </div>

    </main>
  );
}

export default Vacantes;

