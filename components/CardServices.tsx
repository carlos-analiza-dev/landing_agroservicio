import { ServicioCard } from "@/interfaces/servicios";
import Link from "next/link";

interface PropsCard {
  card: ServicioCard;
}

const CardServices = ({ card }: PropsCard) => {
  return (
    <Link
      href={`/servicios/${card.id}`}
      className="flex h-full flex-col rounded-2xl bg-gray-50 shadow"
    >
      <img
        className="h-48 w-full rounded-t-2xl object-cover"
        src={card.image.url}
        alt={card.title}
      />

      <div className="flex flex-1 flex-col p-6 text-center">
        <h5 className="text-base md:text-xl font-semibold text-heading">
          {card.title}
        </h5>

        <p className="mt-3 text-sm text-gray-600">{card.description}</p>

        <div className="mt-auto" />
      </div>
    </Link>
  );
};

export default CardServices;
