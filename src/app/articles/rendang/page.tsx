'use client';
import React from "react";
import Head from "next/head";
import Link from "next/link";

export default function RendangArticle() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Head>
        <title>Rendang - Makanan Indonesia</title>
        <meta name="description" content="Artikel tentang Rendang, makanan khas Minangkabau yang terkenal di seluruh dunia." />
      </Head>
      <header className="bg-green-600 text-white p-4 text-center flex items-center">
        <Link href="/" className="text-white font-bold text-xl">&larr; Kembali</Link>
        <h1 className="text-3xl font-bold flex-grow text-center">Rendang</h1>
      </header>
      <main className="p-4 max-w-3xl mx-auto flex-grow">
        <img 
          src="https://statik.tempo.co/data/2024/04/04/id_1292888/1292888_720.jpg" 
          alt="Rendang" 
          className="w-full h-64 object-cover mt-2 rounded"
        />
        <p className="text-gray-700 mt-4">
          Rendang adalah salah satu makanan khas Minangkabau, Sumatera Barat, yang terkenal hingga ke mancanegara. 
          Hidangan ini berbahan dasar daging sapi yang dimasak perlahan dalam santan dan campuran bumbu rempah khas seperti 
          lengkuas, serai, bawang putih, bawang merah, cabai, dan rempah lainnya.
        </p>
        <p className="text-gray-700 mt-4">
          Proses memasaknya yang lama, bahkan bisa mencapai beberapa jam, membuat rendang memiliki rasa yang kaya dan mendalam. 
          Semakin lama dimasak, bumbu semakin meresap ke dalam daging, memberikan cita rasa yang khas dan tekstur daging yang empuk. 
          Karena proses memasaknya yang unik, rendang juga dikenal sebagai makanan yang tahan lama tanpa bahan pengawet.
        </p>
        <p className="text-gray-700 mt-4">
          Rendang sering disajikan dalam berbagai acara adat dan perayaan, serta menjadi ikon kuliner Indonesia di dunia. 
          Bahkan, pada tahun 2011, rendang dinobatkan sebagai makanan terlezat di dunia oleh CNN Travel.
        </p>
        <h2 className="text-2xl font-bold mt-6">Asal Usul Rendang</h2>
        <p className="text-gray-700 mt-4">
          Rendang berasal dari budaya memasak masyarakat Minangkabau yang memiliki tradisi merantau. Karena perjalanan jauh,
          mereka membutuhkan makanan yang tahan lama, sehingga terciptalah rendang dengan teknik memasak yang dapat mengawetkan
          makanan secara alami.
        </p>
        <h2 className="text-2xl font-bold mt-6">Jenis-Jenis Rendang</h2>
        <p className="text-gray-700 mt-4">
          Meskipun rendang yang paling terkenal berbahan dasar daging sapi, ada beberapa variasi rendang lainnya seperti:
        </p>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li><strong>Rendang Daging:</strong> Jenis rendang yang paling populer, dibuat dengan daging sapi yang dimasak dalam bumbu rempah.</li>
          <li><strong>Rendang Ayam:</strong> Versi rendang dengan ayam sebagai bahan utama, lebih ringan tetapi tetap kaya rasa.</li>
          <li><strong>Rendang Paru:</strong> Menggunakan paru sapi sebagai bahan utama, memberikan tekstur yang unik dan rasa yang khas.</li>
          <li><strong>Rendang Telur:</strong> Rendang dengan telur rebus yang dimasak bersama bumbu rendang.</li>
        </ul>
        <h2 className="text-2xl font-bold mt-6">Kesimpulan</h2>
        <p className="text-gray-700 mt-4">
          Rendang adalah salah satu warisan kuliner Indonesia yang membanggakan. Dengan cita rasa yang khas dan sejarah yang mendalam,
          rendang tidak hanya menjadi makanan lezat tetapi juga simbol kebudayaan dan kehangatan masyarakat Minangkabau.
        </p>
      </main>
      <footer className="bg-gray-800 text-white text-center p-4 mt-auto">
        <p>&copy; 2025 Makanan Indonesia. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
