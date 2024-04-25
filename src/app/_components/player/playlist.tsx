import { Fragment } from "react";

import TrackItem from "./track/item";

import type { Track } from "../../../lib/types";

export interface PlaylistProps {
  tracks: Track[];
  playTrack?: (track: Track) => void;
}

export function Playlist({ tracks, playTrack }: PlaylistProps) {
  return (
    <div className="w-full flex flex-col bg-white p-[20px] max-h-[45%] overflow-x-hidden overflow-y-scroll">
      <ol className="w-full flex flex-col">
        {tracks.map((track) => (
          <Fragment key={track.title}>
            <TrackItem track={track} onClick={playTrack} />
          </Fragment>
        ))}
      </ol>
    </div>
  );
}

export default Playlist;
