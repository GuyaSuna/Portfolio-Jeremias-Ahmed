import Link from 'next/link'
import { CheckCircleIcon } from '@heroicons/react/24/solid'

export default function Success() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8">
          <div className="w-20 h-20 mx-auto mb-6 bg-green-500/20 rounded-full flex items-center justify-center">
            <CheckCircleIcon className="w-12 h-12 text-green-400" />
          </div>

          <h1 className="text-2xl font-bold text-white mb-4">
            ¡Mensaje Enviado!
          </h1>

          <p className="text-slate-300 mb-8 leading-relaxed">
            Tu mensaje ha sido enviado correctamente. Jeremías se pondrá en contacto contigo pronto.
          </p>

          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  )
}