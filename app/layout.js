import './globals.css'

export const metadata = {
  title: 'Jeremías Ahmed | Chofer Profesional de Camiones y Maquinaria',
  description: 'Chofer profesional con 4 años de experiencia en conducción de camiones y más de 2 años manejando maquinaria pesada. Libretas A, C, F y H.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="dark">
      <body className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100">
        {children}
      </body>
    </html>
  )
}