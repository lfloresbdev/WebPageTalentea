import { UsarFormularioLanding } from "../../../hooks/UsarFormularioLanding"

function Landing() {
    const {
        nombre, setNombre,
        email, setEmail,
        telefono, setTelefono,
        areaInteres, setAreaInteres,
        loading, error, exito,
        handleSubmit,
    } = UsarFormularioLanding()

    return (
        <div id="landing" className="cuerpo-landing pb-8 h-156 mt-8 scroll-mt-42">
            <div className="bg-gray-50/35 inset-shadow-sm shadow-xl rounded-xl p-12 max-w-lg mx-auto">
                {exito ? (
                    <div className="text-center">
                        <h1 className="landing-title text-5xl font-bold text-sky-700 mb-6">
                            ¡Registro Exitoso!
                        </h1>
                        <p className="text-gray-600">
                            Gracias por registrarte. Te contactaremos pronto.
                        </p>
                    </div>
                ) : (
                    <>
                        <h1 className="landing-title text-5xl font-bold text-sky-700 text-center mb-6">
                            Regístrate Ahora
                        </h1>
                        <form className="formulario-landing flex flex-col gap-4" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="nombre"
                                placeholder="Escribe tu nombre y apellidos"
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, ''))}
                                className="nombre-landing border-2 rounded-md border-gray-300 px-4 h-10 focus:border-sky-700 focus:ring-2 focus:ring-sky-700 focus:outline-none"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Escribe tu correo electrónico"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="correo-landing border-2 rounded-md border-gray-300 px-4 h-10 focus:border-sky-700 focus:ring-2 focus:ring-sky-700 focus:outline-none"
                            />
                            <input
                                type="text"
                                name="telefono"
                                placeholder="Escribe tu número de teléfono"
                                value={telefono}
                                onChange={(e) => setTelefono(e.target.value.replace(/\D/g, ''))}
                                className="telefono-landing border-2 rounded-md border-gray-300 px-4 h-10 focus:border-sky-700 focus:ring-2 focus:ring-sky-700 focus:outline-none"
                            />
                            <textarea
                                name="areaInteres"
                                placeholder="Escribe tu área de interés"
                                value={areaInteres}
                                onChange={(e) => setAreaInteres(e.target.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, ''))}
                                className="area-landing border-2 rounded-md border-gray-300 px-4 pt-2 h-40 focus:border-sky-700 focus:ring-2 focus:ring-sky-700 focus:outline-none resize-none"
                            />
                            {error && (
                                <p className="text-red-600 text-sm text-center">{error}</p>
                            )}
                            <button
                                type="submit"
                                disabled={loading}
                                className="boton-landing bg-sky-700 text-white py-2 px-15 rounded-2xl self-end border-2 border-sky-700 hover:bg-white hover:text-sky-700 transition-all duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading ? "Enviando..." : "Enviar"}
                            </button>
                        </form>
                    </>
                )}
            </div>
        </div>
    )
}

export default Landing;