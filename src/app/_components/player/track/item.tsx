import type { Track } from "../../../../lib/types";

import TrackButton from "./button";

export interface TrackItemProps {
  track: Track;
  onClick?: (track: Track) => void;
}

export function TrackItem({ track, onClick }: TrackItemProps) {
  return (
    <li className="w-full">
      <TrackButton {...track} onClick={onClick} />
    </li>
  );
}

export default TrackItem;
