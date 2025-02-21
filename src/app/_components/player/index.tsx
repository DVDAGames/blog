"use client";

import { useState, useRef, useEffect } from "react";
import { useInterval } from "usehooks-ts";
import { useVisibilityChange } from "@uidotdev/usehooks";

import { useIsMobile } from "../../../lib/hooks";
import Playlist from "./playlist";
import TrackDisplay from "./track/display";
import { bars } from "./constants";
import type { Track } from "../../../lib/types";

import "../../react-marquee-text.css";

export interface PlayerProps {
  tracks?: Track[];
  autoplay?: boolean;
  loop?: boolean;
  showSpectrumAnalyzer?: boolean;
}

const audioContext = new AudioContext();
const analyzer = audioContext.createAnalyser();

export function Player({
  tracks = [],
  autoplay = false,
  loop = false,
  showSpectrumAnalyzer = false,
}: PlayerProps) {
  const isVisible = useVisibilityChange();
  const isMobile = useIsMobile();
  const [oldTitle] = useState<string>(document.title);

  const [currentTrack, setCurrentTrack] = useState<Track>(tracks[0]);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [showPlaylist, setShowPlaylist] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [source, setSource] = useState<AudioBufferSourceNode | null>();
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const playerRef = useRef<HTMLAudioElement>(null);

  const onPlayTrack = (track: Track): void => {
    setCurrentTrack(track);

    setShowPlaylist(false);
    setIsPlaying(true);
    setIsAnalyzing(false);
    setCurrentTime(0);
  };

  const connectAnalyzerToTrack = async (
    track: Track,
    abortSignal: AbortSignal
  ): Promise<void> => {
    if (track && !isMobile) {
      const srcBuffer = await fetch(track.url, {
        signal: abortSignal,
      }).then((res) => res.arrayBuffer());

      try {
        const buffer = await audioContext.decodeAudioData(srcBuffer);

        if (source) {
          source.stop();
          source.disconnect();
        }

        const newSource = new AudioBufferSourceNode(audioContext, {
          buffer,
          loop,
        });

        newSource.connect(analyzer);
        analyzer.connect(audioContext.destination);

        newSource.start(0, currentTime);

        setSource(newSource);
        setIsAnalyzing(true);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const togglePlay = (): void => {
    setIsAnalyzing((prev) => !prev);

    setIsPlaying((prev) => !prev);
  };

  const togglePlaylist = (): void => {
    setShowPlaylist((prev) => !prev);
  };

  const disconnectAnalyzer = (): void => {
    if (source) {
      setCurrentTime(audioContext.currentTime);
      source.stop();
      source.disconnect();
      analyzer.disconnect();
    }

    console.log(
      "disconnectAnalyzer",
      isAnalyzing,
      source,
      analyzer,
      isPlaying,
      currentTime
    );

    if (isAnalyzing) {
      document.title = oldTitle;

      try {
        location.hash = "<";
      } catch (error) {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    const analyzerTrackAbortController = new AbortController();

    if (playerRef.current && currentTrack) {
      if (isPlaying) {
        if (showSpectrumAnalyzer && !isMobile) {
          connectAnalyzerToTrack(
            currentTrack,
            analyzerTrackAbortController.signal
          );
        } else {
          playerRef.current.play();
        }
      } else {
        if (showSpectrumAnalyzer && !isMobile) {
          disconnectAnalyzer();
        } else {
          playerRef.current.pause();
        }
      }
    }

    return () => {
      document.title = oldTitle;
      analyzerTrackAbortController.abort();
      disconnectAnalyzer();
    };
  }, [
    isPlaying,
    playerRef.current,
    currentTrack,
    showSpectrumAnalyzer,
    isAnalyzing,
  ]);

  useEffect(() => {
    if (source) {
      source.addEventListener("timeupdate", (test) => {
        console.log(test);
      });
    }

    return () => {
      if (source) {
        source.removeEventListener("timeupdate", () => {});
      }
    };
  }, [source]);

  useInterval(
    () => {
      if (isAnalyzing && analyzer && !isMobile) {
        const dataArray = new Uint8Array(24);

        analyzer.getByteFrequencyData(dataArray);

        const spectrum = [];

        for (let i = 0; i < dataArray.length; i++) {
          spectrum.push(bars[Math.floor((dataArray[i] / 255) * bars.length)]);
        }

        const wave = spectrum.join("");

        try {
          if (isVisible) {
            location.hash = `<${wave}`;

            if (document.title !== oldTitle) {
              document.title = oldTitle;
            }
          } else {
            document.title = `🎧${wave}`;
          }
        } catch (error) {
          console.error(error);
        }
      }
    },
    isAnalyzing ? 50 : null
  );

  if (tracks.length > 0) {
    return (
      <section id="jukebox" className="flex flex-col w-full">
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
                <TrackDisplay
                  title={currentTrack.title}
                  key={currentTrack.title}
                  duration={isPlaying ? undefined : 250}
                />
              </button>
            )}
          </div>
          <audio
            ref={playerRef}
            className="flex"
            autoPlay={autoplay}
            loop={loop}
            preload="metadata"
            src={currentTrack.url}
          />
          <button
            className="h-[96px] w-[96px] appearance-none fixed right-0 bottom-0 bg-white"
            onClick={togglePlay}
            title={isPlaying ? "Pause" : "Play"}
          >
            <img
              className="mt-[-10px] ml-[10px]"
              src={`/assets/images/turntable-4x.${isPlaying ? "gif" : "png"}`}
              alt=""
            />
          </button>
        </div>
      </section>
    );
  }

  return <></>;
}

export default Player;
