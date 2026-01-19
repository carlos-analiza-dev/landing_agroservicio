import { getDiferencial } from "@/lib/get-info-diferencial";
import DiferencialMotion from "../motion/DiferencialMotion";

const Diferencial = async () => {
  const infoDif = await getDiferencial();

  if (!infoDif) return null;

  return <DiferencialMotion infoDif={infoDif} />;
};

export default Diferencial;
