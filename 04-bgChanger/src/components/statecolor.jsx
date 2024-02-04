
import { useState } from "react";

export default function useColor(initialColor) {
  const [color, setColor] = useState(initialColor);

  const changeColor = (newColor) => {
    setColor(newColor);
  };

  return [color, changeColor];
}