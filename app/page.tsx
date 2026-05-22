export default function EcosDelOlvidoWebsite() {
  const screenshots = [
  "/images/gameplay-1.png",
  "/images/gameplay-2.png",
  "/images/gameplay-3.png",
];

  const characters = [
  {
    name: "Aren",
    role: "El protagonista",
    desc: "Un viajero atrapado entre recuerdos fragmentados que debe reconstruir su identidad mientras explora un mundo olvidado.",
    image: "/images/character-main.png",
  },
  {
    name: "Lyra",
    role: "La guía",
    desc: "Una presencia misteriosa que ayuda al jugador a comprender los secretos del universo y las memorias perdidas.",
    image: "/images/gameplay-2.png",
  },
  {
    name: "Los Ecos",
    role: "Fragmentos de memoria",
    desc: "Entidades dispersas por el escenario que representan recuerdos perdidos y permiten desbloquear nuevas zonas del mapa.",
    image: "/images/gameplay-3.png",
  },
];

  return (
    <div className="bg-[#0b1020] text-white min-h-screen font-sans">
      {/* HERO SECTION */}
      <section
        className="relative h-screen flex items-center justify-center text-center px-6"
        style={{
          backgroundImage:
            "url('/images/hero-banner.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-4xl">
          <div className="mb-6 inline-block border border-cyan-400 px-5 py-2 rounded-full text-cyan-300 text-sm tracking-widest uppercase">
            Demo Jugable Interactiva
          </div>

          <h1 className="text-6xl md:text-8xl font-black tracking-wide text-cyan-300 drop-shadow-xl">
            Ecos del Olvido
          </h1>

          <p className="mt-6 text-lg md:text-2xl text-gray-200 leading-relaxed">
            Un videojuego narrativo de exploración y memorias perdidas,
            donde cada decisión transforma el mundo y revela fragmentos del
            pasado.
          </p>

          <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-4">
            <a
              href="https://gd.games/instant-builds/c164458d-40a3-4454-8c7f-605d0e83f38c"
              target="_blank"
              className="bg-cyan-400 text-black px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition"
            >
              Jugar Demo
            </a>

            <a
              href="#gameplay"
              className="border border-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-black transition"
            >
              Explorar Sitio
            </a>
          </div>
        </div>
      </section>

      {/* IDENTIDAD VISUAL */}
      <section className="py-24 px-6 md:px-16 bg-[#10172c]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="text-4xl font-bold text-cyan-300 mb-6">
              Logo e Identidad Visual
            </h2>

            <p className="text-gray-300 leading-relaxed text-lg">
              La identidad visual del videojuego utiliza una combinación de
              tonos oscuros, azules y cian para transmitir una atmósfera
              melancólica y futurista. La interfaz fue diseñada bajo principios
              UX/UI, priorizando la claridad visual, la accesibilidad y la
              inmersión narrativa.
            </p>

            <div className="mt-8 flex gap-4">
              <div className="w-16 h-16 rounded-2xl bg-cyan-300" />
              <div className="w-16 h-16 rounded-2xl bg-[#1e293b] border border-white/20" />
              <div className="w-16 h-16 rounded-2xl bg-[#0f172a] border border-white/20" />
            </div>
          </div>

          <div className="bg-[#0b1020] border border-cyan-400/20 rounded-3xl p-10 shadow-2xl">
            <div className="text-center">
              <img
                src="/images/logo-ecos-del-olvido.png"
                alt="Logo Ecos del Olvido"
                className="w-64 mx-auto"
              />
              <h3 className="mt-4 text-3xl font-bold">Ecos del Olvido</h3>
              <p className="mt-4 text-gray-400">
                Una experiencia interactiva centrada en la exploración, la
                narrativa y la reconstrucción de recuerdos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GAMEPLAY */}
      <section id="gameplay" className="py-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-cyan-300">
              Gameplay y Mecánicas
            </h2>
            <p className="mt-6 text-gray-300 max-w-3xl mx-auto text-lg">
              El juego combina exploración narrativa, interacción con objetos,
              recolección de recuerdos y resolución de acertijos en un entorno
              inmersivo.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Exploración",
                desc: "El jugador recorre escenarios fragmentados descubriendo secretos y memorias ocultas.",
              },
              {
                title: "Interacción",
                desc: "Los objetos reaccionan a las decisiones del jugador mediante retroalimentación visual y sonora.",
              },
              {
                title: "Progresión",
                desc: "Recolectar recuerdos permite desbloquear nuevas áreas y expandir la narrativa del juego.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[#10172c] border border-cyan-400/10 rounded-3xl p-8 hover:-translate-y-2 transition shadow-xl"
              >
                <h3 className="text-2xl font-bold text-cyan-300 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PERSONAJES */}
      <section className="py-24 px-6 md:px-16 bg-[#10172c]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-cyan-300">
              Personajes y Lore
            </h2>
            <p className="mt-6 text-gray-300 max-w-3xl mx-auto text-lg">
              El universo de Ecos del Olvido gira en torno a recuerdos perdidos,
              identidades fragmentadas y un mundo consumido por el silencio.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {characters.map((character, index) => (
              <div
                key={index}
                className="bg-[#0b1020] rounded-3xl overflow-hidden shadow-2xl border border-cyan-400/10"
              >
                <img
                  src={character.image}
                  alt={character.name}
                  className="w-full h-72 object-cover"
                />

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-cyan-300">
                    {character.name}
                  </h3>

                  <p className="text-sm uppercase text-gray-400 mt-1">
                    {character.role}
                  </p>

                  <p className="mt-4 text-gray-300 leading-relaxed">
                    {character.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section className="py-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-cyan-300">
              Galería Multimedia
            </h2>
            <p className="mt-6 text-gray-300 max-w-3xl mx-auto text-lg">
              Capturas de pantalla y referencias visuales utilizadas durante el
              proceso de diseño y desarrollo del videojuego.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {screenshots.map((image, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-3xl shadow-2xl border border-cyan-400/10"
              >
                <img
                  src={image}
                  alt={`Screenshot ${index + 1}`}
                  className="w-full h-80 object-cover hover:scale-110 transition duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO */}
      <section className="py-24 px-6 md:px-16 bg-[#10172c]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-cyan-300 mb-10">
            Presentación del Juego
          </h2>

          <div className="aspect-video rounded-3xl overflow-hidden border border-cyan-400/20 shadow-2xl">
            <a
  href="https://youtu.be/HIno5Eh9BuY"
  target="_blank"
  className="block relative group"
>
  <img
    src="/images/gameplay-1.png"
    alt="Gameplay Video"
    className="w-full rounded-3xl"
  />

  <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-3xl group-hover:bg-black/20 transition">
    <div className="bg-cyan-400 text-black px-8 py-4 rounded-2xl font-bold text-xl">
      ▶ Ver Gameplay
    </div>
  </div>
</a>
          </div>
        </div>
      </section>

      {/* DEMO */}
      <section className="py-24 px-6 md:px-16">
        <div className="max-w-5xl mx-auto text-center bg-[#10172c] rounded-[40px] p-12 border border-cyan-400/10 shadow-2xl">
          <h2 className="text-5xl font-bold text-cyan-300">
            Demo Jugable
          </h2>

          <p className="mt-6 text-lg text-gray-300 leading-relaxed">
            Accede a la versión funcional del videojuego y experimenta el
            sistema de exploración, interacción y progresión desarrollado en la
            demo interactiva.
          </p>

          <a
            href="https://gd.games/instant-builds/c164458d-40a3-4454-8c7f-605d0e83f38c"
            target="_blank"
            className="inline-block mt-10 bg-cyan-400 text-black px-10 py-5 rounded-2xl font-black text-xl hover:scale-105 transition"
          >
            Abrir Demo
          </a>
        </div>
      </section>

      {/* CRÉDITOS */}
      <section className="py-24 px-6 md:px-16 bg-black">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold text-cyan-300 mb-8">
              Créditos del Proyecto
            </h2>

            <div className="space-y-6 text-gray-300 text-lg">
              <div>
                <h3 className="font-bold text-white">Luis Fernando Pérez Duran</h3>
                <p>Diseño interactivo, documentación, desarrollo UX/UI y creación de la demo jugable.</p>
              </div>

              <div>
                <h3 className="font-bold text-white">Daniel Enrique Bermejo Polo, Luis Alfredo López Carrillo</h3>
                <p>Diseño visual, apoyo en el prototipado, pruebas de usuario y organización del contenido multimedia.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-cyan-300 mb-8">
              Proceso de Desarrollo
            </h2>

            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                • Investigación sobre UX/UI y diseño interactivo.
              </p>
              <p>
                • Creación del prototipo inicial y validación de mecánicas.
              </p>
              <p>
                • Implementación de mejoras visuales y de accesibilidad.
              </p>
              <p>
                • Desarrollo de demo jugable y pruebas de usuario.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center border-t border-white/10 text-gray-500 text-sm bg-black">
        © 2026 Echoes of Oblivion — Proyecto académico de Diseño Interactivo desarrollado en GDevelop.
      </footer>
    </div>
  );
}