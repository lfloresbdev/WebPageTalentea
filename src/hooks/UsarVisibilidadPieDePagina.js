import { useState, useEffect } from "react";

export function UsarVisibilidadPieDePagina() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const footer = document.querySelector(".pie-pagina");
        if (!footer) return;
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { threshold: 0 }
        );
        observer.observe(footer);
        return () => observer.disconnect();
    }, []);

    return isVisible;
}
