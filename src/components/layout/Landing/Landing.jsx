function Landing() {
    return (
        <div className="cuerpo-landing py-10">
            <div className="bg-gray-50/35 inset-shadow-sm shadow-xl rounded-xl p-8 max-w-lg mx-auto">
                <h1 className="landing-title text-5xl font-bold text-sky-700 text-center mb-6">
                    Regístrate Ahora
                </h1>
                <form className="formulario-landing flex flex-col gap-4">
                    <input
                        type="text"
                        placeholder="Escribe tu nombre"
                        className="nombre-landing border-2 rounded-md border-gray-300 px-4 h-10 focus:border-sky-700 focus:ring-2 focus:ring-sky-700 focus:outline-none"
                    />
                    <input
                        type="email"
                        placeholder="Escribe tu correo electrónico"
                        className="correo-landing border-2 rounded-md border-gray-300 px-4 h-10 focus:border-sky-700 focus:ring-2 focus:ring-sky-700 focus:outline-none"
                    />
                    <input
                        type="text"
                        placeholder="Escribe tu número de teléfono"
                        className="telefono-landing border-2 rounded-md border-gray-300 px-4 h-10 focus:border-sky-700 focus:ring-2 focus:ring-sky-700 focus:outline-none"
                    />
                    <textarea
                        placeholder="Escribe tu área de interés"
                        className="area-landing border-2 rounded-md border-gray-300 px-4 pt-2 h-40 focus:border-sky-700 focus:ring-2 focus:ring-sky-700 focus:outline-none resize-none"
                    />
                    <button
                        type="submit"
                        className="boton-landing bg-sky-700 text-white py-2 px-15 rounded-2xl self-end border-2 border-sky-700 hover:bg-white hover:text-sky-700 transition-all duration-300 ease-in-out"
                    >
                        Enviar
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Landing;