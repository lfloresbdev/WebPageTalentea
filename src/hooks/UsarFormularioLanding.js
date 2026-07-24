import { useState, useEffect } from "react";

const URL = import.meta.env.VITE_GOOGLE_SHEETS_URL;

export function UsarFormularioLanding() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [areaInteres, setAreaInteres] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [exito, setExito] = useState(false);

  const reiniciar = () => {
    setNombre("");
    setEmail("");
    setTelefono("");
    setAreaInteres("");
    setError(null);
    setExito(false);
  };

  useEffect(() => {
    if (!exito) return;
    const timer = setTimeout(reiniciar, 3000);
    return () => clearTimeout(timer);
  }, [exito]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nombre.trim() || !email.trim()) {
      setError("Nombre y correo son obligatorios");
      return;
    }
    if (nombre.trim().split(/\s+/).length < 3) {
      setError("Ingresa nombre y apellidos");
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(URL, {
        method: "POST",
        body: JSON.stringify({ nombre, email, telefono, areaInteres }),
        headers: { "Content-Type": "text/plain" },
      });
      if (!res.ok) throw new Error("Error al enviar");
      setExito(true);
      setNombre("");
      setEmail("");
      setTelefono("");
      setAreaInteres("");
    } catch {
      setError("Ocurrió un error al enviar. Intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return {
    nombre, setNombre,
    email, setEmail,
    telefono, setTelefono,
    areaInteres, setAreaInteres,
    loading, error, exito,
    handleSubmit, reiniciar,
  };
}
