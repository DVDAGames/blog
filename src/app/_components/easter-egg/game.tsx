import Ship from "./ship";

export interface GameProps {
  isPlayable: boolean;
}

export function Game({ isPlayable }: GameProps): React.ReactElement {
  const classes = ["fixed", "top-0", "left-0", "w-full", "h-full", "justify-center", "items-center"];

  if (!isPlayable) {
    classes.push("hidden");
  }

  return <section className={classes.join(" ")}>{isPlayable && <Ship />}</section>;
}

export default Game;
