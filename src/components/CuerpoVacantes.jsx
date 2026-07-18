import { Card } from '@/components/ui/card';

function CuerpoVacantes() {
  return (
    <div className="cuerpo-vacantes px-8 py-8 mx-auto content-center">
        <div className="encabezado-vacantes">
            <h2 className="text-xl font-bold text-blue-800 mb-4">
                Explora nuestras áreas
            </h2>
            <h2 className="text-lg font-semibold text-blue-800 mb-4">
                Ver todas las áreas
            </h2>
        </div>
        <div className="cards-vacantes grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <Card className="bg-blue-800 text-white p-4 rounded-lg shadow-md w-67.5 h-106">
                <h3 className="text-lg font-bold text-pink-500">Practicante de Marketing</h3>
                <p className="text-sm">Estrategas, creativos y analistas que hacen crecer marcas</p>
            </Card>
            <Card className="bg-blue-800 text-white p-4 rounded-lg shadow-md w-67.5">
                <h3 className="text-lg font-bold text-pink-500">Practicante de Administración</h3>
                <p className="text-sm">Talento organizado que asegura el buen funcionamiento</p>
            </Card>
            <Card className="bg-blue-800 text-white p-4 rounded-lg shadow-md w-67.5">
                <h3 className="text-lg font-bold text-pink-500">Área de Cobranzas</h3>
                <p className="text-sm">Personas enfocadas en resultados y gestión efectiva</p>
            </Card>
            <Card className="bg-blue-800 text-white p-4 rounded-lg shadow-md w-67.5">
                <h3 className="text-lg font-bold text-pink-500">Área de Supervisión</h3>
                <p className="text-sm">Líderes que guían equipos hacia el logro de objetivos</p>
            </Card>
        </div>
    </div>
  );
}

export default CuerpoVacantes;