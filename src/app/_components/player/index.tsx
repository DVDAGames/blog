"use client";

import { useState, useRef, useEffect } from "react";
import MarqueeText from "react-marquee-text";

import Playlist from "./playlist";
import TrackDisplay from "./track/display";
import type { Track } from "../../../lib/types";

import "../../react-marquee-text.css";

export interface PlayerProps {
  tracks?: Track[];
  autoplay?: boolean;
  loop?: boolean;
}

export function Player({ tracks = [], autoplay = false, loop = false }: PlayerProps) {
  const [currentTrack, setCurrentTrack] = useState<Track>(tracks[0]);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [showPlaylist, setShowPlaylist] = useState<boolean>(false);
  const playerRef = useRef<HTMLAudioElement>(null);

  const onPlayTrack = (track: Track): void => {
    setCurrentTrack(track);
    setShowPlaylist(false);
    setIsPlaying(true);
  };

  const togglePlay = (): void => {
    setIsPlaying((prev) => !prev);
  };

  const togglePlaylist = (): void => {
    setShowPlaylist((prev) => !prev);
  };

  useEffect(() => {
    if (playerRef.current && currentTrack) {
      if (isPlaying) {
        playerRef.current.play();
      } else {
        playerRef.current.pause();
      }
    }
  }, [isPlaying, playerRef.current, currentTrack]);

  if (tracks.length > 0) {
    return (
      <section className="flex flex-col w-full">
        {showPlaylist && <Playlist tracks={tracks} playTrack={onPlayTrack} />}
        <div className="player flex flex-row w-full min-h-[64px] bg-white relative">
          <img
            src={currentTrack.albumArt}
            alt={currentTrack.title}
            className="w-[96px] h-[96px] border-solid border-white border-[5px]"
          />
          <div className="flex w-full min-h-[96px] pr-[20px] pl-[5px]">
            {currentTrack.title && (
              <button
                className="flex w-full min-h-[96px] items-center text-2xl apperance-none hover:underline"
                onClick={togglePlaylist}
                title={showPlaylist ? "Hide Playlist" : "Show Playlist"}
              >
                <TrackDisplay title={currentTrack.title} key={currentTrack.title} />
              </button>
            )}
          </div>
          <audio ref={playerRef} className="flex" autoPlay={autoplay} loop={loop} preload="metadata" src={currentTrack.url} />
          <button
            className="h-[96px] w-[96px] appearance-none fixed right-0 bottom-0 bg-white"
            onClick={togglePlay}
            title={isPlaying ? "Pause" : "Play"}
          >
            <img className="mt-[-10px] ml-[10px]" src={`/assets/images/turntable-4x.${isPlaying ? "gif" : "png"}`} alt="" />
          </button>
        </div>
      </section>
    );
  }

  return <></>;
}

export default Player;
