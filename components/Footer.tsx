import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-10 border-t border-default">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <Link
            href="/"
            className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left"
          >
            <img
              src="/images/logo.png"
              className="h-16 w-16 sm:h-20 sm:w-20"
              alt="El Sembrador Logo"
            />
            <span className="text-heading text-xl sm:text-2xl font-semibold">
              El Sembrador
            </span>
          </Link>

          <ul className="flex flex-col sm:flex-row items-center gap-4 text-sm font-medium text-body">
            <li>
              <Link href="/servicios" className="hover:underline">
                Servicios
              </Link>
            </li>
            <li>
              <Link href="/soluciones-industria" className="hover:underline">
                Soluciones por Industria
              </Link>
            </li>
            <li>
              <Link href="/proyectos-casos" className="hover:underline">
                Proyectos / Casos
              </Link>
            </li>
            <li>
              <Link href="/contacto" className="hover:underline">
                Contacto
              </Link>
            </li>
          </ul>
        </div>

        <hr className="my-6 border-default" />

        <p className="text-center text-sm text-body">
          © {currentYear}{" "}
          <Link href="/" className="hover:underline font-medium">
            El Sembrador
          </Link>
          . Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
