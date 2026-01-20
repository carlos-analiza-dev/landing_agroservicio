import { getInfoInicio } from "@/lib/get-home-info";
import Image from "next/image";
import ButtonLink from "../ButtonLink";

const Hero = async () => {
  const info = await getInfoInicio();

  if (!info) {
    return <div className="text-center py-20">Cargando...</div>;
  }

  const { title, description, image, ctas } = info;

  return (
    <section className="relative flex items-center overflow-hidden bg-linear-to-br from-gray-900 to-black text-white pt-20 md:pt-24">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/60 z-0" />
        {image && (
          <Image
            src={image}
            alt="Hero background"
            fill
            className="object-cover object-center opacity-55"
            priority
            unoptimized
            sizes="100vw"
          />
        )}
      </div>

      <div className="relative z-10 mx-auto px-4 py-12 md:py-20 lg:py-24 w-full max-w-7xl">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            {title}
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-500 mt-2">
              Software que transforma
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 mb-8">
            {ctas?.map((cta, index) => (
              <ButtonLink key={index} cta={cta} />
            ))}
          </div>
        </div>
      </div>

      <div className="absolute top-1/4 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;
