import './globals.css'

export const metadata = {
  title: 'Jeremías Ahmed | Chofer Profesional de Camiones y Maquinaria',
  description: 'Profesional polivalente con sólida trayectoria en logística, distribución y soporte administrativo. Licencias de conducir categorías A, C, F y H. Ubicado en Juan Lacaze, Colonia, Uruguay.',
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