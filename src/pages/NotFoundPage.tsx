import { Link } from "react-router-dom";

/** Pantalla de error de rutas (se muestra fuera del layout). */
export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col items-start justify-center bg-ink-950 px-6 sm:items-center sm:text-center">
      <p className="font-mono text-sm text-accent">404</p>
      <h1 className="mt-3 text-4xl font-semibold">Página no encontrada</h1>
      <p className="mt-4 max-w-md">La ruta no existe o ocurrió un error.</p>
      <Link to="/" className="btn-primary mt-8">
        Volver al inicio
      </Link>
    </div>
  );
}
