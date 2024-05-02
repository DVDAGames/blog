import { useMouse } from "@uidotdev/usehooks";

import Ship from "./ship";

export interface GameProps {
  isPlayable?: boolean;
  quit?: () => void;
}

export function Game({ isPlayable = false, quit }: GameProps): React.ReactElement {
  const [mouse, ref] = useMouse();

  if (!isPlayable) {
    return <></>;
  }

  const classes = ["fixed", "top-0", "left-0", "w-full", "h-full", "justify-center", "items-center"];

  const shipPosition = {
    x: mouse.elementPositionX,
    y: mouse.elementPositionY,
  };

  // calculate rotation angle of the ship to point the nose of the ship towards mouse x and y
  const rotation = Math.atan2(shipPosition.y - mouse.y, shipPosition.x - mouse.x) * (180 / Math.PI);

  // get distance between ship and mouse
  const dx = mouse.x - shipPosition.x;
  const dy = mouse.y - shipPosition.y;

  const distance = Math.sqrt(dx * dx + dy * dy);

  const position = {
    x: shipPosition.x,
    y: shipPosition.y,
  };

  if (Math.abs(distance) >= 32) {
    position.x = shipPosition.x + dx;
    position.y = shipPosition.y + dy;
  }

  return (
    <section className={classes.join(" ")}>
      <Ship shipRef={ref} rotate={rotation - 90} x={position.x} y={position.y} onClickShip={quit} />
    </section>
  );
}

export default Game;
