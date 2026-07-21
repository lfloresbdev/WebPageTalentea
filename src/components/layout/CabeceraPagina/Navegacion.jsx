import { useNavigationIndicator } from '../../../hooks/UsarIndicadorNavegacion';
import { navItems } from '../../../config/navegacion';

function Navegacion() {
  const sectionIds = navItems.map((item) => item.href.slice(1));

  const { indicatorStyle, ulRef, liRefs, updateIndicator } =
    useNavigationIndicator(sectionIds);

  return (
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
  );
}

export default Navegacion;
