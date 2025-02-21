"use client";

import { useState } from "react";
import MarqueeText from "react-marquee-text";

import { displayDuration } from "../../../../lib/displayDuration";

import type { Track } from "../../../../lib/types";

export interface TrackButtonProps extends Track {
  onClick?: (track: Track) => void;
}

export function TrackButton({
  title,
  url,
  mime = "audio/mpeg",
  description = "",
  albumArt = "",
  onClick,
}: TrackButtonProps) {
  const [duration, setDuration] = useState(0);
  const [canPlay, setCanPlay] = useState(false);

  const onPlay = (): void => {
    if (canPlay) {
      onClick?.({ title, url, mime, description, albumArt });
    }
  };

  const onMetadataLoaded = (
    event: React.SyntheticEvent<HTMLAudioElement, Event>
  ): void => {
    const target = event.target as HTMLAudioElement;

    setDuration(target.duration);
    setCanPlay(true);
  };

  return (
    <>
      <audio src={url} preload="metadata" onLoadedMetadata={onMetadataLoaded} />
      <button
        className="flex flex-row w-full items-center"
        onClick={onPlay}
        disabled={!canPlay}
        title={`Play ${title}`}
      >
        <img src={albumArt} alt={title} className="w-10 h-10" />
        <div className="ml-2 flex flex-row items-start text-sm w-full">
          <span className="w-11/12">
            <MarqueeText
              direction="right"
              textSpacing="2rem"
              pauseOnHover
              playOnlyInView
            >
              {title}
            </MarqueeText>
          </span>
          <span className="w-1/12 ml-auto pr-4">
            {displayDuration(duration)}
          </span>
        </div>
      </button>
    </>
  );
}

export default TrackButton;
