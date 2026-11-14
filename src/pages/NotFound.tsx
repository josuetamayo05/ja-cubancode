import { Link } from "react-router-dom";

/** Bloque de "no encontrado" que se muestra dentro del layout. */
export default function NotFound({ title = "Página no encontrada" }: { title?: string }) {
  return (
    <section className="container-page flex min-h-[70vh] flex-col items-start justify-center pt-24">
      <p className="font-mono text-sm text-accent">404</p>
      <h1 className="mt-3 text-4xl font-semibold">{title}</h1>
      <p className="mt-4 max-w-md">El enlace no existe o ha cambiado de dirección.</p>
      <Link to="/" className="btn-primary mt-8">
        Volver al inicio
      </Link>
    </section>
  );
}
