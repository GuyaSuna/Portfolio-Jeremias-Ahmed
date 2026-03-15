import {
  TruckIcon,
  ShieldCheckIcon,
  ClockIcon,
  ChatBubbleBottomCenterTextIcon,
  PaperAirplaneIcon,
  BriefcaseIcon,
  SparklesIcon,
  CheckCircleIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ShareIcon,
  GlobeAltIcon,
  CogIcon,
  DocumentTextIcon,
  BuildingOfficeIcon,
} from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-6 lg:px-40 py-4">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <TruckIcon className="w-8 h-8 text-accent" />
            <h2 className="text-xl font-bold tracking-tight">
              Jeremías<span className="text-accent">Ahmed</span>
            </h2>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a
              className="text-sm font-medium hover:text-accent transition-colors"
              href="#sobre-mi"
            >
              Sobre Mí
            </a>
            <a
              className="text-sm font-medium hover:text-accent transition-colors"
              href="#servicios"
            >
              Servicios
            </a>
            <a
              className="text-sm font-medium hover:text-accent transition-colors"
              href="#experiencia"
            >
              Experiencia
            </a>
            <a
              className="text-sm font-medium hover:text-accent transition-colors"
              href="#contacto"
            >
              Contacto
            </a>
          </nav>
          <button className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg text-sm font-bold transition-all shadow-lg shadow-primary/20">
            Contactar
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[85vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-background-dark via-background-dark/60 to-transparent z-10"></div>
          <img
            alt="Luxury Car Interior"
            className="w-full h-full object-cover"
            src="https://img3.wallspic.com/previews/5/8/1/2/2/122185/122185-freightliner_camiones-x750.jpg"
          />
        </div>
        <div className="relative z-20 max-w-[1200px] w-full px-6 lg:px-40">
          <div className="max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 px-3 py-1 rounded-full text-accent text-xs font-bold uppercase tracking-wider">
              <TruckIcon className="w-4 h-4" />
              Chofer Profesional Certificado
            </div>
            <h1 className="text-4xl md:text-6xl font-black leading-tight text-white">
              Chofer Profesional de{" "}
              <span className="text-accent">Camiones y Maquinaria Pesada</span>
            </h1>
            <p className="text-lg text-slate-300">
              Profesional polivalente con sólida trayectoria en logística, distribución y soporte administrativo.
              Cuento con licencias de conducir categorías A, C, F y H. Experiencia comprobada en gestión de mercadería,
              facturación y manejo de valores, destacándome por mi puntualidad, compromiso y capacidad para resolver problemas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-primary text-white px-8 py-4 rounded-lg font-bold hover:scale-105 transition-transform">
                Ver Experiencia
              </button>
              <button className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-lg font-bold hover:bg-white/20 transition-all">
                Contactar Ahora
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats/About Brief */}
      <section
        className="py-20 px-6 lg:px-40 bg-slate-50 dark:bg-slate-900/50"
        id="sobre-mi"
      >
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">Sobre Mí</h2>
            <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
              Chofer profesional con 4 años de experiencia en conducción de
              camiones y más de 2 años manejando maquinaria pesada. He trabajado
              en empresas reconocidas como Ponza Superga, Veleta AgroNegocios y
              Superga S.R.L. Me destaco por trabajar de forma ordenada, puntual
              y responsable, priorizando siempre la seguridad, el cuidado del
              vehículo y el cumplimiento de los tiempos de trabajo. Cuento con
              libretas A, C, F y H.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-accent">4</div>
                <div className="text-sm font-medium uppercase tracking-wide opacity-70">
                  Años de Experiencia
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-accent">4</div>
                <div className="text-sm font-medium uppercase tracking-wide opacity-70">
                  Licencias de Conducir
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-6 rounded-xl bg-white dark:bg-background-dark border border-slate-200 dark:border-slate-800 shadow-sm">
              <TruckIcon className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-bold mb-2">Experiencia en Camiones</h3>
              <p className="text-sm text-slate-500">
                4 años de experiencia en conducción de camiones de diferentes
                tipos y capacidades.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-white dark:bg-background-dark border border-slate-200 dark:border-slate-800 shadow-sm">
              <ShieldCheckIcon className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-bold mb-2">Responsabilidad</h3>
              <p className="text-sm text-slate-500">
                Trabajo ordenado, responsable y comprometido con la seguridad en
                todo momento.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-white dark:bg-background-dark border border-slate-200 dark:border-slate-800 shadow-sm">
              <ClockIcon className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-bold mb-2">Puntualidad</h3>
              <p className="text-sm text-slate-500">
                Cumplimiento estricto de horarios y tiempos de trabajo
                establecidos.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-white dark:bg-background-dark border border-slate-200 dark:border-slate-800 shadow-sm">
              <BriefcaseIcon className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-bold mb-2">Formación Especializada</h3>
              <p className="text-sm text-slate-500">
                Curso de Retrista CTU y Curso de Seguridad Vial CTU. Educación en Gastronomía UTU (2018-2021).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 lg:px-40" id="servicios">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl font-bold">Especialidades Profesionales</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Servicios de conducción profesional especializados en transporte
              pesado y operación de maquinaria, garantizando seguridad y
              eficiencia en cada trabajo.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="group relative overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 p-8 transition-all hover:-translate-y-2">
              <div className="mb-6 inline-flex size-14 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <TruckIcon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Conducción de Camiones</h3>
              <p className="text-slate-500 mb-6 leading-relaxed">
                4 años de experiencia en conducción de camiones de diferentes
                tipos y capacidades. Manejo responsable y cumplimiento de
                normativas.
              </p>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-accent" />
                  Libretas A, C, F, H
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-accent" />
                  4+ años de experiencia
                </li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="group relative overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 p-8 transition-all hover:-translate-y-2">
              <div className="mb-6 inline-flex size-14 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <CogIcon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">
                Operación de Maquinaria
              </h3>
              <p className="text-slate-500 mb-6 leading-relaxed">
                Más de 2 años operando maquinaria pesada especializada.
                Conocimiento técnico y operación segura de equipos complejos.
              </p>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-accent" />
                  Maquinaria pesada
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-accent" />
                  2.5+ años de experiencia
                </li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="group relative overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 p-8 transition-all hover:-translate-y-2">
              <div className="mb-6 inline-flex size-14 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <DocumentTextIcon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Trabajo Profesional</h3>
              <p className="text-slate-500 mb-6 leading-relaxed">
                Enfoque ordenado, puntual y responsable. Priorización de la
                seguridad y el cuidado del vehículo en todo momento.
              </p>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-accent" />
                  Trabajo ordenado
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-accent" />
                  Puntualidad garantizada
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience/Licenses Section */}
      <section
        className="py-20 px-6 lg:px-40 bg-slate-50 dark:bg-slate-900/50"
        id="experiencia"
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl font-bold">
              Experiencia y Certificaciones
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Formación profesional y años de experiencia práctica en el manejo
              de vehículos pesados y maquinaria especializada.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white dark:bg-background-dark rounded-xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <TruckIcon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">
                    Experiencia con Camiones
                  </h3>
                  <p className="text-slate-500">4+ años de experiencia</p>
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Cuatro años sólidos de experiencia en la conducción de camiones
                de diferentes tipos y capacidades. Trabajo con unidades de
                carga, distribución y transporte pesado, siempre manteniendo los
                más altos estándares de seguridad y eficiencia.
              </p>
            </div>

            <div className="bg-white dark:bg-background-dark rounded-xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <CogIcon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Maquinaria Pesada</h3>
                  <p className="text-slate-500">2.5+ años de experiencia</p>
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Más de dos años y medio operando maquinaria pesada
                especializada. Experiencia en equipos de construcción,
                agricultura y minería, con conocimiento técnico profundo de
                funcionamiento y mantenimiento preventivo.
              </p>
            </div>
          </div>

          {/* Companies Section */}
          <div className="mb-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Experiencia Laboral</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Empresas donde he desarrollado mi carrera profesional
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white dark:bg-background-dark rounded-lg p-6 border border-slate-200 dark:border-slate-800 shadow-sm text-center hover:shadow-md transition-all">
                <div className="size-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <BuildingOfficeIcon className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-lg mb-1">Superga S.R.L</h4>
                <p className="text-sm text-slate-500 mb-1">Auxiliar Administrativo</p>
                <p className="text-xs text-slate-400">Enero 2021 - Dic 2021</p>
              </div>
              <div className="bg-white dark:bg-background-dark rounded-lg p-6 border border-slate-200 dark:border-slate-800 shadow-sm text-center hover:shadow-md transition-all">
                <div className="size-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <BuildingOfficeIcon className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-lg mb-1">Ponza Superga</h4>
                <p className="text-sm text-slate-500 mb-1">Chofer</p>
                <p className="text-xs text-slate-400">Sept 2024 - Actualidad</p>
              </div>
              <div className="bg-white dark:bg-background-dark rounded-lg p-6 border border-slate-200 dark:border-slate-800 shadow-sm text-center hover:shadow-md transition-all">
                <div className="size-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <BuildingOfficeIcon className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-lg mb-1">Veleta AgroNegocios</h4>
                <p className="text-sm text-slate-500 mb-1">Chofer</p>
                <p className="text-xs text-slate-400">Abril 2024 - Sept 2024
                </p>
              </div>
              <div className="bg-white dark:bg-background-dark rounded-lg p-6 border border-slate-200 dark:border-slate-800 shadow-sm text-center hover:shadow-md transition-all">
                <div className="size-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <BuildingOfficeIcon className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-lg mb-1">Ponza Superga</h4>
                <p className="text-sm text-slate-500 mb-1">Chofer</p>
                <p className="text-xs text-slate-400">Enero 2022 - Marzo 2024</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-8 border border-primary/20">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Licencias de Conducir</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Certificaciones oficiales que avalan mi capacidad profesional
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-white/50 dark:bg-background-dark/50 rounded-lg">
                <div className="text-2xl font-black text-primary mb-2">A</div>
                <div className="text-sm font-medium">Motocicletas</div>
              </div>
              <div className="text-center p-4 bg-white/50 dark:bg-background-dark/50 rounded-lg">
                <div className="text-2xl font-black text-primary mb-2">C</div>
                <div className="text-sm font-medium">Camiones</div>
              </div>
              <div className="text-center p-4 bg-white/50 dark:bg-background-dark/50 rounded-lg">
                <div className="text-2xl font-black text-primary mb-2">F</div>
                <div className="text-sm font-medium">Maquinaria</div>
              </div>
              <div className="text-center p-4 bg-white/50 dark:bg-background-dark/50 rounded-lg">
                <div className="text-2xl font-black text-primary mb-2">H</div>
                <div className="text-sm font-medium">Transporte Especial</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section
        className="py-20 px-6 lg:px-40 bg-slate-900 text-white relative overflow-hidden"
        id="contacto"
      >
        {/* Abstract gradient background */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/20 to-transparent pointer-events-none"></div>
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-16 relative z-10">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-black mb-4">
                ¿Necesita un chofer profesional?
              </h2>
              <p className="text-slate-400 text-lg">
                Contáctame para discutir tus necesidades de transporte. Chofer
                profesional con experiencia en camiones y maquinaria pesada.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="size-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <PhoneIcon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-slate-400">
                    Teléfono y WhatsApp
                  </div>
                  <div className="text-lg font-bold">
                    +598 92 413 034
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="size-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <EnvelopeIcon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-slate-400">
                    Correo Electrónico
                  </div>
                  <div className="text-lg font-bold">
                    jeremiasahmed21@gmail.com
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="size-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <MapPinIcon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-slate-400">Ubicación</div>
                  <div className="text-lg font-bold">Juan Lacaze, Colonia, Uruguay</div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10">
            <form
              action="https://formsubmit.co/jeremiasahmed21@gmail.com"
              method="POST"
              className="space-y-4"
            >
              {/* Formsubmit Configuration */}
              <input type="hidden" name="_subject" value="Nuevo mensaje desde Portfolio - Jeremías Ahmed" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_next" value="https://jeremiasahmed21.github.io/Portfolio-Jeremias-Ahmed/success" />

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Nombre
                  </label>
                  <input
                    name="nombre"
                    required
                    className="w-full bg-white/10 border-white/20 rounded-lg px-4 py-3 focus:ring-accent focus:border-accent text-white"
                    placeholder="Su nombre"
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Teléfono
                  </label>
                  <input
                    name="telefono"
                    required
                    className="w-full bg-white/10 border-white/20 rounded-lg px-4 py-3 focus:ring-accent focus:border-accent text-white"
                    placeholder="Tu teléfono"
                    type="tel"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Tipo de Trabajo
                </label>
                <select
                  name="tipo_trabajo"
                  required
                  className="w-full bg-white/10 border-white/20 rounded-lg px-4 py-3 focus:ring-accent focus:border-accent text-white appearance-none"
                >
                  <option className="bg-slate-900">
                    Conducción de Camiones
                  </option>
                  <option className="bg-slate-900">
                    Operación de Maquinaria Pesada
                  </option>
                  <option className="bg-slate-900">Transporte de Carga</option>
                  <option className="bg-slate-900">
                    Otro (especificar en mensaje)
                  </option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Mensaje
                </label>
                <textarea
                  name="mensaje"
                  required
                  className="w-full bg-white/10 border-white/20 rounded-lg px-4 py-3 focus:ring-accent focus:border-accent text-white h-32"
                  placeholder="Describe los detalles del trabajo, tipo de vehículo o maquinaria..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-accent text-background-dark font-black py-4 rounded-lg hover:bg-accent/90 transition-all uppercase tracking-widest"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 lg:px-40 border-t border-slate-200 dark:border-slate-800 text-center md:text-left">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <TruckIcon className="w-6 h-6 text-accent" />
            <span className="text-lg font-bold">
              Jeremías<span className="text-accent">Ahmed</span>
            </span>
          </div>
          <div className="text-sm text-slate-500">
            © 2026 Nahuel Pages. {"  "}
            <a
              className="hover:text-accent underline"
              href="https://guyasuna.github.io/my_profile/"
            >
              Portfolio
            </a>{" "}
          </div>
          <div className="flex gap-4">
            <a
              className="size-10 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all"
              href="#"
            >
              <ShareIcon className="w-5 h-5" />
            </a>
            <a
              className="size-10 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all"
              href="#"
            >
              <GlobeAltIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
