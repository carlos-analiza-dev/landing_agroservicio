import Link from "next/link";
import { CTA } from "../interfaces/inicio";
import { getVariantClasses } from "@/funciones/getVarianteBotones";

interface Props {
  cta: CTA;
}

const ButtonLink = ({ cta }: Props) => {
  return (
    <Link
      href={cta.url}
      className={`
                  px-8 py-4 rounded-lg font-semibold text-center transition-all duration-300 transform hover:scale-105
                  ${getVariantClasses(cta.variant)}
                `}
    >
      {cta.label}
    </Link>
  );
};

export default ButtonLink;
