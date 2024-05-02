"use client";

import { useEffect, useRef } from "react";
import { useAnimate, AnimationPlaybackControls } from "framer-motion";

export interface ShipProps {
  x: number;
  y: number;
  rotate: number;
  shipRef: React.MutableRefObject<Element>;
  onClickShip?: () => void;
}

export function Ship({ shipRef, x, y, rotate, onClickShip }: ShipProps): React.ReactElement {
  // TODO: make ship fire bullets at the mouse position and trigger fire sound effect
  // TODO: garbage collect bullets that go off screen
  // TODO: make mouse take damage when hit by bullets
  // TODO: Game over screen after 5 hits
  const [scope, animate] = useAnimate();
  const animationPromises: React.MutableRefObject<AnimationPlaybackControls[]> = useRef([]);

  const quit = () => {
    animationPromises?.current?.forEach((promise) => {
      promise?.stop();
      promise?.cancel();
    });

    onClickShip?.();
  };

  useEffect(() => {
    const animation = async () => {
      if (
        typeof scope.current !== "undefined" &&
        scope.current !== null &&
        typeof shipRef.current !== "undefined" &&
        shipRef.current !== null
      ) {
        animationPromises.current.push(animate(scope.current, { rotate }, { duration: 0.5, ease: "circOut" }));
        animationPromises.current.push(animate(scope.current, { x, y }, { duration: 5, ease: "circOut", delay: 0.25 }));

        await Promise.all(animationPromises.current);
      }
    };

    if (
      typeof scope.current !== "undefined" &&
      scope.current !== null &&
      typeof shipRef.current !== "undefined" &&
      shipRef.current !== null
    ) {
      animation?.()
        .then(() => {
          animationPromises.current = [];
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [rotate, x, y]);

  return (
    <button onClick={quit} ref={scope} title="Click to dismiss" className="h-[32px] w-[32px] appearance-none">
      <img
        ref={shipRef as React.MutableRefObject<HTMLImageElement>}
        src="/assets/images/pulsar-ship.gif"
        alt=""
        width="32"
        height="32"
      />
    </button>
  );
}

export default Ship;
