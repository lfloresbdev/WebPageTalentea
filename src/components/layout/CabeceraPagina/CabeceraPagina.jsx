import Navegacion from './Navegacion';

function CabeceraPagina() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm py-4 px-4 flex flex-wrap items-center gap-10 justify-between">

      <div className="logo w-50">
        <img src="src/assets/images/PerfilBlancoTransparenteTalentea.pe.png" alt="Logo de Talentea"/>
      </div>

      <div className="flex gap-10 items-center text-center">

        <Navegacion />

        <div className="boton-postula w-47">
          <button className="bg-pink-500 text-white font-bold py-2.5 px-6 rounded-3xl">POSTULA AHORA</button>
        </div>

      </div>

    </header>
  );
}

export default CabeceraPagina;
