import { useState, useRef, useEffect, useCallback } from 'react';

export function useNavigationIndicator(sectionIds) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [indicatorStyle, setIndicatorStyle] = useState({ width: 0, left: 0 });
  const ulRef = useRef(null);
  const liRefs = useRef([]);

  const updateIndicator = useCallback((index) => {
    const ul = ulRef.current;
    const li = liRefs.current[index];
    if (ul && li) {
      const ulRect = ul.getBoundingClientRect();
      const liRect = li.getBoundingClientRect();
      setIndicatorStyle({
        width: liRect.width,
        left: liRect.left - ulRect.left,
      });
    }
    setActiveIndex(index);
  }, []);

  useEffect(() => {
    updateIndicator(activeIndex);
    const handleResize = () => updateIndicator(activeIndex);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activeIndex, updateIndicator]);

  useEffect(() => {
    const observers = sectionIds.map((id, index) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              updateIndicator(index);
            }
          });
        },
        { rootMargin: '-50% 0px -50% 0px' }
      );

      observer.observe(el);
      return observer;
    });

    return () => {
      observers.forEach((obs) => obs?.disconnect());
    };
  }, [sectionIds, updateIndicator]);

  return { activeIndex, indicatorStyle, ulRef, liRefs, updateIndicator };
}
