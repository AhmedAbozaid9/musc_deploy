import React from "react";

interface ColorPickerProps {
  colors: string[];
  color: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
}

const ColorPicker = ({ colors, color, setColor }: ColorPickerProps) => {
  return (
    <div>
      <h3>اختر اللون</h3>
      <div className="flex gap-[8px] mt-4">
        {colors.map((colorItem) => (
          <button
            key={colorItem}
            className={`w-[32px] h-[32px] rounded-full border border-[#EDEDED] ${
              color === colorItem ? "border-[3px] border-[#333]" : ""
            }`}
            style={{ backgroundColor: colorItem }}
            onClick={() => setColor(colorItem)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ColorPicker;
