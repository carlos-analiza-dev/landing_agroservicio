import { getInfoFinaHome } from "@/lib/get-info-final";
import React from "react";
import ButtonLink from "../ButtonLink";

const Final = async () => {
  const finalInfo = await getInfoFinaHome();

  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-20">
      <div className="text-center">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          {finalInfo.title}
        </h1>
        <h3 className="text-lg text-gray-600 font-bold max-w-2xl mx-auto">
          {finalInfo.description}
        </h3>
      </div>
      <div className="flex justify-center mt-1 md:mt-5">
        {finalInfo.ctas.map((cta) => (
          <ButtonLink key={cta.url} cta={cta} />
        ))}
      </div>
    </section>
  );
};

export default Final;
