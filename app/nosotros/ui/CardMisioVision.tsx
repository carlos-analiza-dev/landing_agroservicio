import React from "react";

interface Props {
  title: string;
  description: string;
  isMision?: boolean;
}

const CardMisioVision = ({ title, description, isMision = true }: Props) => {
  return (
    <div
      className={`${isMision ? " border-blue-500" : "bg-green-200"} mt-8 p-6 bg-blue-50 rounded-xl border-l-4`}
    >
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default CardMisioVision;
