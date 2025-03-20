'use client';
import React from "react";
import Head from "next/head";
import Link from "next/link";

export default function AyamBetutu() {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('https://png.pngtree.com/background/20210711/original/pngtree-yellow-gradient-roast-chicken-poster-background-template-picture-image_1121582.jpg')",
      }}
    >
      <Head>
        <title>Ayam Betutu</title>
        <meta name="description" content="Artikel tentang Ayam Betutu, kuliner khas Bali." />
      </Head>
      <header className="bg-green-600 bg-opacity-80 text-white p-4 text-center">
        <h1 className="text-3xl font-bold">Ayam Betutu</h1>
        <nav className="mt-2">
          <Link href="/" className="mx-2 text-white hover:underline">Home</Link>
          <Link href="/about" className="mx-2 text-white hover:underline">Tentang</Link>
        </nav>
      </header>
      <main className="p-4 max-w-3xl mx-auto bg-white bg-opacity-90 rounded-lg shadow-md mt-4">
        <img 
          src="https://i.ytimg.com/vi/8L2FdhuVbQM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDJXguR3WgXOL8eb1lYlp2skcTOVg" 
          alt="Ayam Betutu" 
          className="w-full h-64 object-cover mt-4 rounded" 
        />
        <p className="text-gray-700 mt-4">
          Ayam Betutu adalah salah satu makanan khas Bali yang terkenal dengan cita rasa rempahnya yang kuat. 
          Hidangan ini berasal dari daerah Gilimanuk dan biasanya dibuat dengan ayam utuh yang dibumbui dengan 
          rempah khas seperti bawang merah, bawang putih, kunyit, jahe, lengkuas, kemiri, cabai, serta berbagai 
          daun aromatik seperti daun salam dan daun jeruk.
        </p>
        <h2 className="text-2xl font-semibold mt-4">Sejarah Ayam Betutu</h2>
        <p className="text-gray-700 mt-2">
          Ayam Betutu telah ada sejak zaman kerajaan Bali dan merupakan bagian dari tradisi upacara adat. 
          Dahulu, hidangan ini hanya dibuat untuk keperluan ritual dan disajikan kepada para raja serta bangsawan. 
          Seiring waktu, Ayam Betutu menjadi makanan sehari-hari yang dapat dinikmati oleh masyarakat umum dan 
          wisatawan.
        </p>
        <h2 className="text-2xl font-semibold mt-4">Variasi Ayam Betutu</h2>
        <p className="text-gray-700 mt-2">
          Ada dua jenis utama Ayam Betutu yang dikenal luas:
        </p>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li><strong>Ayam Betutu Gilimanuk</strong> - Dikenal dengan rasa yang lebih pedas dan proses memasak yang lebih lama.</li>
          <li><strong>Ayam Betutu Ubud</strong> - Memiliki rasa yang lebih ringan dengan bumbu yang lebih meresap.</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-4">Cara Membuat Ayam Betutu</h2>
        <p className="text-gray-700 mt-2">
          Untuk membuat Ayam Betutu, diperlukan beberapa langkah utama:
        </p>
        <ol className="list-decimal list-inside text-gray-700 mt-2">
          <li>Bersihkan ayam dan lumuri dengan bumbu yang sudah dihaluskan.</li>
          <li>Diamkan ayam selama beberapa jam agar bumbu meresap.</li>
          <li>Bungkus ayam dengan daun pisang dan masak dengan cara dipanggang atau dikukus selama 4-6 jam.</li>
          <li>Hidangkan dengan nasi, plecing kangkung, dan sambal matah.</li>
        </ol>
        <p className="text-gray-700 mt-2">
          Dengan cita rasa yang kaya rempah dan tekstur daging yang empuk, Ayam Betutu menjadi salah satu hidangan 
          yang tidak boleh dilewatkan ketika berkunjung ke Bali.
        </p>
      </main>
      <footer className="bg-gray-800 bg-opacity-80 text-white text-center p-4 mt-4">
        <p>&copy; 2025 Makanan Indonesia. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
