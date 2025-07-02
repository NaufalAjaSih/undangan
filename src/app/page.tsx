"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin } from "lucide-react";
import Head from "next/head";
import Image from "next/image";

export default function KhitanInvitation() {
  const [isOpened, setIsOpened] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleOpenInvitation = () => {
    setIsOpened(true);
  };

  // const toggleMute = () => {
  //   if (audioRef.current) {
  //     audioRef.current.muted = !isMuted;
  //     setIsMuted(!isMuted);
  //   }
  // };

  const openMaps = () => {
    window.open("https://maps.app.goo.gl/y6HgbsWr69ctCdnSA", "_blank");
  };

  // useEffect(() => {
  //   if (isOpened && audioRef.current) {
  //     audioRef.current.volume = 0.3;
  //     audioRef.current.play().catch((error) => {
  //       console.error("Autoplay blocked:", error);
  //     });
  //   }
  // }, [isOpened]);

  return (
    <>
      <Head>
        <title>Undangan Khitan Umar & Khaled al-Farouq</title>
        <meta property="og:image" content="<generated>" />
      </Head>

      {/* Audio Element */}
      <audio ref={audioRef} loop src="/nasheed.mp3" />

      <div className="relative min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-4">
        <AnimatePresence mode="wait">
          {!isOpened ? (
            <EnvelopeComponent onOpen={handleOpenInvitation} />
          ) : (
            <>
              {/* Gambar Undangan Utama */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full"
              >
                <Image
                  src="/undangan.jpeg"
                  alt="Undangan Khitan"
                  width={800}
                  height={1200}
                  className="w-full h-auto max-h-screen object-contain"
                  priority
                />
              </motion.div>

              {/* Mute Button
              <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 }}
                onClick={toggleMute}
                className="fixed top-6 right-6 z-50 bg-white/90 p-3 rounded-full shadow-lg hover:bg-white transition flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {isMuted ? (
                  <VolumeX className="w-5 h-5 text-blue-600" />
                ) : (
                  <Volume2 className="w-5 h-5 text-blue-600" />
                )}
              </motion.button> */}

              {/* Tombol Lokasi - Posisi Bawah Tengah */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="fixed bottom-6 left-0 right-0 flex justify-center px-4 z-50"
              >
                <motion.button
                  onClick={openMaps}
                  className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 max-w-md w-full"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <MapPin className="w-5 h-5" />
                  <span>Lihat Lokasi Acara</span>
                </motion.button>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

function EnvelopeComponent({ onOpen }: { onOpen: () => void }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      {/* Envelope Shadow */}
      <div className="absolute inset-0 bg-black/10 rounded-lg transform translate-y-2 translate-x-2" />

      {/* Main Envelope - Warna Biru */}
      <motion.div
        className="relative w-80 h-56 bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg shadow-2xl cursor-pointer overflow-hidden border-2 border-blue-200"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onClick={onOpen}
      >
        {/* Envelope Flap */}
        <motion.div
          className="absolute top-0 left-0 w-full h-32 bg-gradient-to-br from-blue-200 to-blue-150 origin-top"
          style={{
            clipPath: "polygon(0 0, 100% 0, 50% 100%)",
          }}
          animate={{
            rotateX: isHovered ? -15 : 0,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Envelope Body */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-br from-blue-100 to-blue-50" />

        {/* Seal */}
        <motion.div
          className="absolute top-16 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full shadow-lg flex items-center justify-center"
          animate={{
            scale: isHovered ? 1.1 : 1,
            rotate: isHovered ? 5 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <svg
            className="w-6 h-6 text-blue-100"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
        </motion.div>

        {/* Letter Preview */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-64 h-20 bg-white/80 rounded shadow-sm flex items-center justify-center"
          animate={{
            y: isHovered ? -5 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="text-center">
            <p className="text-blue-800 font-regular text-sm">
              Undangan Khitan
            </p>
            <p className="text-blue-600 font-semibold text-xs mt-1">
              Sentuh untuk membuka
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating Decorations */}
      <motion.div
        className="absolute -top-4 -right-4"
        animate={{
          y: [0, -10, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <svg className="w-6 h-6 text-blue-300" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M12,2L4,5v6.09c0,5.05 3.41,9.76 8,10.91c4.59-1.15 8-5.86 8-10.91V5L12,2z"
          />
        </svg>
      </motion.div>

      <motion.div
        className="absolute -bottom-4 -left-4"
        animate={{
          y: [0, -10, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <svg className="w-6 h-6 text-blue-300" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M12,2L4,5v6.09c0,5.05 3.41,9.76 8,10.91c4.59-1.15 8-5.86 8-10.91V5L12,2z"
          />
        </svg>
      </motion.div>
    </motion.div>
  );
}
