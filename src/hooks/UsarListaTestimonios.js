import { useState } from "react";
import testimonios from "../config/testimonios";

export function UsarListaTestimonios() {
  const [showAll, setShowAll] = useState(false);
  const toggleShowAll = () => setShowAll((prev) => !prev);

  return { showAll, toggleShowAll, testimonios };
}
