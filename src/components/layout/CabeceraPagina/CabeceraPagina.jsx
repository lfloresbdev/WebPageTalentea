import { useNavigationIndicator } from '../../hooks/UsarIndicadorNavegacion';
import { navItems } from '../../config/navegacion';

function CabeceraPagina() {
  const sectionIds = navItems.map((item) => item.href.slice(1));
  const { indicatorStyle, ulRef, liRefs, updateIndicator } =
    useNavigationIndicator(sectionIds);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm py-4 px-4 flex flex-wrap items-center gap-10 justify-between">
      <div className="logo w-50">
        <img src="src/assets/images/PerfilBlancoTransparenteTalentea.pe.png" alt="Logo de Talentea"/>
      </div>
      <div className="flex gap-10 items-center text-center">
        <div className="navegacion w-157">
          <ul ref={ulRef} className="flex gap-10 relative py-3">
            {navItems.map((item, index) => (
              <li
                key={index}
                ref={(el) => (liRefs.current[index] = el)}
                onClick={() => updateIndicator(index)}
                className="cursor-pointer"
              >
                <a href={item.href} className="text-sky-700 font-bold">
                  {item.label}
                </a>
              </li>
            ))}
            <span
              className="absolute bottom-0 h-1 bg-sky-700 transition-all duration-300 ease-in-out rounded-full"
              style={{ width: indicatorStyle.width, left: indicatorStyle.left }}
            />
          </ul>
        </div>
        <div className="boton-postula w-47">
          <a href="#landing" className="bg-pink-500 text-white font-bold py-2.5 px-6 rounded-3xl">POSTULA AHORA</a>
        </div>
      </div>
    </header>
  );
}

export default CabeceraPagina;
