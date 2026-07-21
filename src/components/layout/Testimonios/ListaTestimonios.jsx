import { useState } from "react";
import { FaUser } from "react-icons/fa";

const testimonios = [
  { id: 1, nombre: "Diego Lopez", area: "Área de Marketing" },
  { id: 2, nombre: "Diego Lopez", area: "Área de Marketing" },
  { id: 3, nombre: "Diego Lopez", area: "Área de Marketing" },
  { id: 4, nombre: "Diego Lopez", area: "Área de Marketing" },
  { id: 5, nombre: "Diego Lopez", area: "Área de Marketing" },
  { id: 6, nombre: "Diego Lopez", area: "Área de Marketing" },
  { id: 7, nombre: "Diego Lopez", area: "Área de Marketing" },
  { id: 8, nombre: "Diego Lopez", area: "Área de Marketing" },
];

function ListaTestimonios() {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="testimonios pt-10 mx-auto px-4 flex flex-wrap gap-9 items-center justify-center">
      {testimonios.slice(0, 2).map((t) => (
        <div key={t.id} className="w-128.5 h-50.25 flex gap-3">
          <div className="foto-testimonio">
            <FaUser className="size-30 text-sky-700" />
          </div>
          <div className="contenido-testimonio">
            <p className="text-neutral-600 text-justify">“Gracias a talentea encontré la oportunidad para crecer profesionalmente y seguir aprendiendo cada día”</p>
            <p className="text-sky-700 font-bold">{t.nombre}</p>
            <p className="text-neutral-600">{t.area}</p>
          </div>
        </div>
      ))}

      {showAll &&
        testimonios.slice(2).map((t) => (
          <div key={t.id} className="w-128.5 h-50.25 flex gap-3">
            <div className="foto-testimonio">
              <FaUser className="size-30 text-sky-700" />
            </div>
            <div className="contenido-testimonio">
              <p className="text-neutral-600 text-justify">“Gracias a talentea encontré la oportunidad para crecer profesionalmente y seguir aprendiendo cada día”</p>
              <p className="text-sky-700 font-bold">{t.nombre}</p>
              <p className="text-neutral-600">{t.area}</p>
            </div>
          </div>
        ))}

      <button
        onClick={() => setShowAll(!showAll)}
        className="w-full text-sky-700 -mt-35 font-bold underline decoration-sky-700 underline-offset-4 cursor-pointer hover:text-pink-500 transition-colors"
      >
        {showAll ? "Ver menos testimonios" : "Ver más testimonios"}
      </button>
    </div>
  );
}

export default ListaTestimonios;
