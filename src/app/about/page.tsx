'use client';
import React from "react";
import Head from "next/head";
import Link from "next/link";

export default function About() {
  return (
    <div 
      className="flex flex-col min-h-screen bg-gray-100 bg-cover bg-center"
      style={{ backgroundImage: "url('https://png.pngtree.com/background/20210710/original/pngtree-vintage-ink-food-background-material-picture-image_1055740.jpg')" }}
    >
      <Head>
        <title>Tentang Kami</title>
        <meta name="description" content="Tentang website Makanan Indonesia" />
      </Head>

      <header className="bg-green-600 text-white p-4 text-center bg-opacity-90">
        <h1 className="text-3xl font-bold">Tentang Kami</h1>
        <nav className="mt-2">
          <Link href="/" className="mx-2 text-white hover:underline">Home</Link>
        </nav>
      </header>

      <main className="flex-1 p-6 max-w-3xl mx-auto bg-white bg-opacity-90 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Selamat Datang di Makanan Indonesia</h2>
        <p className="text-gray-700 mb-4">
          Makanan Indonesia adalah platform yang didedikasikan untuk mengenalkan berbagai
          kuliner khas Nusantara kepada masyarakat luas. Kami percaya bahwa makanan
          adalah bagian penting dari budaya, dan Indonesia memiliki kekayaan kuliner yang luar biasa.
        </p>
        <p className="text-gray-700 mb-4">
          Dari Sabang sampai Merauke, setiap daerah memiliki hidangan khas yang unik dan lezat.
          Mulai dari Mi Aceh yang pedas, Ayam Taliwang yang menggugah selera, hingga
          Bika Ambon yang manis dan lembut, kami menghadirkan artikel-artikel menarik
          yang membahas asal-usul, bahan, dan cara pembuatan makanan-makanan tradisional ini.
        </p>
        <p className="text-gray-700 mb-4">
          Website ini bertujuan untuk menjadi sumber informasi bagi pencinta kuliner
          yang ingin lebih mengenal warisan rasa Indonesia. Kami juga berharap bisa menginspirasi
          banyak orang untuk mencoba memasak hidangan khas daerah sendiri di rumah.
        </p>
        <p className="text-gray-700 mb-4">
          Selain itu, kami terus memperbarui konten kami dengan informasi terbaru tentang kuliner
          Indonesia. Jika Anda memiliki rekomendasi makanan khas daerah yang ingin dibahas,
          jangan ragu untuk menghubungi kami. Kami sangat antusias untuk menjelajahi lebih banyak
          keanekaragaman kuliner di negeri ini.
        </p>
        <p className="text-gray-700 mb-4">
          Terima kasih telah berkunjung ke Makanan Indonesia. Semoga Anda menikmati perjalanan
          kuliner ini dan menemukan inspirasi untuk mencicipi berbagai hidangan lezat Nusantara!
        </p>
        
        <h3 className="text-xl font-semibold mt-6">Hubungi Kami</h3>
        <p className="text-gray-700">📧 Email: info@makananindonesia.com</p>
        <p className="text-gray-700">📞 Telepon: +62 812-3456-7890</p>
        <p className="text-gray-700">📱 WhatsApp: +62 812-9876-5432</p>
        <p className="text-gray-700">🔗 Instagram: <a href="https://instagram.com/makananindonesia" className="text-blue-600 hover:underline">@makananindonesia</a></p>
        <p className="text-gray-700">🔗 Facebook: <a href="https://facebook.com/makananindonesia" className="text-blue-600 hover:underline">Makanan Indonesia</a></p>
      </main>

      <footer className="bg-gray-800 text-white text-center p-4 mt-4 bg-opacity-90">
        <p>&copy; 2025 Makanan Indonesia. All Rights Reserved.</p>
      </footer>
    </div>
  );
}


