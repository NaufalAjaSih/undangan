"use client";

import Head from "next/head";
import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function Home() {
  const handleOpenMaps = () => {
    const mapsUrl =
      "https://www.google.com/maps?q=Perum+Villa+Batu+Ampar,+Kilo+3";
    window.open(mapsUrl, "_blank");
  };

  return (
    <div className="relative min-h-screen bg-gray-100">
      <Head>
        <title>Undangan Khitan Umar & Khaled al-Farouq</title>
      </Head>

      {/* Gambar Undangan - Full Width */}
      <div className="w-full">
        <Image
          src="/undangan.png"
          alt="Undangan Khitan"
          width={800}
          height={1200}
          layout="responsive"
          className="w-full h-auto"
          priority
        />
      </div>

      {/* Tombol Maps - Sticky di bagian bawah */}
      <div className="fixed bottom-0 left-0 right-0 z-10 px-4 pb-4">
        <button
          onClick={handleOpenMaps}
          className="w-full bg-blue-500/60 text-white py-3 px-6 rounded-full flex items-center justify-center gap-2 hover:bg-blue-600 transition duration-200 shadow-lg"
        >
          <FaMapMarkerAlt size={18} />
          <span>Lihat Lokasi</span>
        </button>
      </div>
    </div>
  );
}
