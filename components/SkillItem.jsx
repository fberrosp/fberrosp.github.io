import Image from "next/image";
import React from "react";

export const SkillItem = ({ techName, techLogo }) => {
  return (
    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
      <div className="grid grid-cols-2 gap-4 justify-center items-center">
        <div className="m-auto">
          <div
            style={{ borderRadius: "50px" }}
            className="p-1 rounded-lg dark:bg-gray-200"
          >
            <Image width="64" height="64" src={techLogo} alt={techName} />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3>{techName}</h3>
        </div>
      </div>
    </div>
  );
};

export default SkillItem;
