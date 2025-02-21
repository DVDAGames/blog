"use client";

import { useEffect, useState } from "react";
import { useKonami } from "react-konami-code";

import Game from "./game";

export function EasterEgg(): React.ReactElement {
  const [lives, setLives] = useState(1);
  const [isPlayable, setIsPlayable] = useState(false);

  const togglePlayable = () => {
    if (!isPlayable) {
      setLives((prev) => prev + 1);
    }

    setIsPlayable((prev) => !prev);
  };

  useEffect(() => {
    if (isPlayable && lives > 0) {
      console.log("!! 1UP 👍 !!");
      console.log(`Lives: ${lives}`);
    }
  }, [isPlayable, lives]);

  useKonami(togglePlayable);

  return <Game isPlayable={isPlayable} quit={togglePlayable} />;
}

export default EasterEgg;
