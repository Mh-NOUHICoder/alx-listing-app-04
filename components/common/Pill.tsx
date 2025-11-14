// components/common/Pill.tsx
import React from "react";
import { PillProps} from "@/interfaces";

const Pill: React.FC<PillProps> = ({ label, active = false, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`
        px-4 py-2 rounded-full text-sm font-medium
        border transition-colors
        ${active ? "bg-indigo-600 text-white border-indigo-600" : "bg-white text-gray-700 border-gray-300"}
        hover:bg-indigo-500 hover:text-white
      `}
    >
      {label}
    </button>
  );
};

export default Pill;
