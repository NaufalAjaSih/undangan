"use client";

import Head from "next/head";
import Image from "next/image";
import {
  FaMapMarkerAlt,
  FaPlay,
  FaPause,
  FaVolumeUp,
  FaVolumeMute,
} from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [showPlayButton, setShowPlayButton] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(false);

  const handleOpenMaps = (): void => {
    const mapsUrl = "https://maps.app.goo.gl/y6HgbsWr69ctCdnSA";
    window.open(mapsUrl, "_blank");
  };

  const toggleMusic = async (): Promise<void> => {
    if (!audioRef.current) return;

    try {
      if (isPlaying) {
        await audioRef.current.pause();
      } else {
        await audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
      setShowPlayButton(false);
    } catch (error) {
      console.error("Audio error:", error);
      setShowPlayButton(true);
    }
  };

  const toggleMute = (): void => {
    if (!audioRef.current) return;
    audioRef.current.muted = !audioRef.current.muted;
    setIsMuted(!isMuted);
  };

  useEffect(() => {
    if (!audioRef.current) return;

    // Set default volume (30%)
    audioRef.current.volume = 0.3;

    // Cek support autoplay
    const checkAutoplay = async () => {
      try {
        await audioRef.current!.play();
        await audioRef.current!.pause();
        console.log("Autoplay mungkin didukung");
      } catch {
        console.log("Autoplay tidak didukung, perlu interaksi pengguna");
        setShowPlayButton(true);
      }
    };

    checkAutoplay();

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-100">
      <Head>
        <title>Undangan Khitan Umar & Khaled al-Farouq</title>
        <meta property="og:image" content="<generated>" />
      </Head>

      {/* Audio Element */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
        src="/nasheed.mp3" // Pastikan file ada di public folder
      />

      {/* Overlay tombol play utama */}
      {showPlayButton && (
        <div className="fixed inset-0 bg-black/80 flex flex-col items-center justify-center z-50 gap-6 p-4">
          <div className="text-center text-white max-w-md">
            <h2 className="text-2xl font-bold mb-2">Undangan Khitan</h2>
            <p className="mb-6">
              Silakan klik tombol di bawah untuk memulai musik
            </p>
            <button
              onClick={toggleMusic}
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold flex items-center gap-3 text-lg mx-auto"
            >
              <FaPlay size={24} />
              <span>Putar Musik</span>
            </button>
          </div>
        </div>
      )}

      {/* Kontrol musik */}
      {!showPlayButton && (
        <div className="fixed top-4 right-4 z-20 flex gap-2">
          <button
            onClick={toggleMute}
            className="bg-white/90 p-3 rounded-full shadow-lg hover:bg-white transition"
            aria-label={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? (
              <FaVolumeMute className="text-gray-700" size={18} />
            ) : (
              <FaVolumeUp className="text-blue-600" size={18} />
            )}
          </button>
          <button
            onClick={toggleMusic}
            className="bg-white/90 p-3 rounded-full shadow-lg hover:bg-white transition"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? (
              <FaPause className="text-blue-600" size={18} />
            ) : (
              <FaPlay className="text-gray-700" size={18} />
            )}
          </button>
        </div>
      )}

      {/* Konten undangan */}
      <div className="w-full">
        <Image
          src="/undangan.jpeg"
          alt="Undangan Khitan"
          width={800}
          height={1200}
          className="w-full h-auto"
          priority
        />
      </div>

      <div className="fixed bottom-0 left-0 right-0 z-10 px-4 pb-4">
        <button
          onClick={handleOpenMaps}
          className="w-full bg-blue-500/90 text-white py-3 px-6 rounded-full flex items-center justify-center gap-2 hover:bg-blue-600 transition shadow-lg"
        >
          <FaMapMarkerAlt size={18} />
          <span className="font-semibold">Lihat Denah Lokasi</span>
        </button>
      </div>
    </div>
  );
}
