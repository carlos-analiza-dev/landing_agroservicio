import { ReactNode } from "react";
import Link from "next/link";
import ButtonLink from "./ButtonLink";

interface EmptyStateProps {
  title?: string;
  description?: string;
  icon?: ReactNode;
  action?: {
    label: string;
    url: string;
    variant: "primary" | "secondary" | "third";
  };
}

const EmptyState = ({
  title = "No se encontraron resultados",
  description = "Parece que no hay contenido disponible en este momento.",
  icon,
  action,
}: EmptyStateProps) => {
  const getButtonClasses = () => {
    switch (action?.variant) {
      case "secondary":
        return "bg-gray-600 hover:bg-gray-700";
      case "third":
        return "bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-50";
      default:
        return "bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700";
    }
  };

  return (
    <div className="h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md mx-auto">
        <div className="mb-6">
          {icon || (
            <div className="relative inline-block">
              <div className="w-24 h-24 bg-linear-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mx-auto">
                <svg
                  className="w-12 h-12 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="absolute -top-2 -right-2 w-10 h-10 bg-linear-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.232 16.5c-.77.833.192 2.5 1.732 2.5z"
                  />
                </svg>
              </div>
            </div>
          )}
        </div>

        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
          {title}
        </h3>
        <p className="text-gray-600 mb-8">{description}</p>

        {action && (
          <div className="space-y-4">
            <ButtonLink cta={action} />

            <p className="text-sm text-gray-500 mt-4">
              ¿Necesitas ayuda?{" "}
              <Link
                href="/contacto"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Contáctanos
              </Link>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmptyState;
