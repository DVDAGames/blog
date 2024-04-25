"use client";

import { useMouse } from "@uidotdev/usehooks";

export function Ship(): React.ReactElement {
  const [mouse, ref] = useMouse();

  const shipPosition = {
    x: mouse.elementPositionX,
    y: mouse.elementPositionY,
  };

  // calculate rotation angle of the ship to point the nose of the ship (0, 16) towards mouse x and y
  const angle = Math.atan2(mouse.y - shipPosition.y + 16, mouse.x - shipPosition.x + 16) * (180 / Math.PI);

  const styles: React.CSSProperties = {
    position: "fixed",
    top: "25px",
    right: "25px",
    transform: `translate3d(0, 0, 0) rotate(${angle + 90}deg)`,
    transformOrigin: "center",
    transition: "transform 0.1s",
  };

  // TODO: make ship fire bullets at the mouse position and trigger fire sound effect
  // TODO: garbage collect bullets that go off screen
  // TODO: make mouse take damage when hit by bullets
  // TODO: Game over screen after 5 hits

  // @ts-expect-error
  return <img ref={ref} src="/assets/images/pulsar-ship.gif" alt="" width="32" height="32" style={styles} />;
}

export default Ship;
