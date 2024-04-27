import Image from "next/image";
import React from "react";

export const ExperienceItem = ({
  companyName,
  companyLogo,
  dates,
  description,
}) => {
  return (
    <div className="grid md:grid-cols-2 md:divide-x-4 items-center">
      <div className="flex items-center justify-center h-auto w-full p-4">
        <Image width="auto" height="64" src={companyLogo} alt={companyName} />
      </div>

      <div className="relative items-center justify-center h-auto w-full p-4">
        <div className="">
          <p className="p-2 text-center text-gray-500">{dates}</p>
          <h3 className="text-2xl tracking-wider text-center">{companyName}</h3>
          <p className="pb-4 pt-2 text-center">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;
