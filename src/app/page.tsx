"use client";

import Head from "next/head";
import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function Home() {
  const handleOpenMaps = () => {
    // Ganti dengan koordinat lokasi acara Anda
    const mapsUrl =
      "https://www.google.com/maps?q=Perum+Villa+Batu+Ampar,+Kilo+3";
    window.open(mapsUrl, "_blank");
  };

  const metaData = {
    title: "Undangan Khitan Umar & Khaled al-Farouq",
    description:
      "Mohon doa restu untuk acara khitan Umar & Khaled pada 6 Juli 2025",
    imageUrl: "/undangan.jpg", // Buat gambar khusus untuk preview
    url: "https://undangan-khitan.vercel.app", // Ganti dengan URL Anda
  };

  return (
    <div className="relative min-h-screen bg-gray-100">
      <Head>
        <title>{metaData.title}</title>
        <meta name="description" content={metaData.description} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={metaData.url} />
        <meta property="og:title" content={metaData.title} />
        <meta property="og:description" content={metaData.description} />
        <meta property="og:image" content={metaData.imageUrl} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={metaData.url} />
        <meta name="twitter:title" content={metaData.title} />
        <meta name="twitter:description" content={metaData.description} />
        <meta name="twitter:image" content={metaData.imageUrl} />
      </Head>

      {/* Gambar Undangan - Full Width */}
      <div className="w-full">
        {" "}
        {/* Padding bottom untuk memberi ruang tombol */}
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
