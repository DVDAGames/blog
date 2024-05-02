"use client";

import { useState } from "react";
import { useKonami } from "react-konami-code";

import Game from "./game";

export function EasterEgg(): React.ReactElement {
  const [isPlayable, setIsPlayable] = useState(false);

  const togglePlayable = () => {
    console.log("KONAMI!");
    setIsPlayable((prev) => !prev);
  };

  useKonami(togglePlayable);

  return <Game isPlayable={isPlayable} quit={togglePlayable} />;
}

export default EasterEgg;
