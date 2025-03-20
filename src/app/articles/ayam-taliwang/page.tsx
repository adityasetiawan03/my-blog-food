'use client';
import React from "react";
import Head from "next/head";
import Link from "next/link";

export default function AyamTaliwang() {
  return (
    <div 
      className="bg-gray-100 min-h-screen flex flex-col"
      style={{ 
        backgroundImage: "url('https://png.pngtree.com/background/20210711/original/pngtree-delicious-roast-chicken-literary-geometric-yellow-banner-picture-image_1113350.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Head>
        <title>Ayam Taliwang - Makanan Indonesia</title>
        <meta name="description" content="Ayam Taliwang adalah hidangan khas Lombok yang pedas dan menggugah selera." />
      </Head>
      <header className="bg-green-600 text-white p-4 text-center bg-opacity-80">
        <h1 className="text-3xl font-bold">Makanan Indonesia</h1>
        <nav className="mt-2">
          <Link href="/" className="mx-2 text-white hover:underline">Home</Link>
          <Link href="/about" className="mx-2 text-white hover:underline">Tentang</Link>
        </nav>
      </header>
      <main className="p-4 max-w-3xl mx-auto flex-grow">
        <article className="bg-white p-4 rounded shadow bg-opacity-90">
          <h2 className="text-2xl font-semibold">Ayam Taliwang</h2>
          <img 
            src="https://www.dapurkobe.co.id/wp-content/uploads/ayam-taliwang.jpg" 
            alt="Ayam Taliwang" 
            className="w-full h-48 object-cover mt-2 rounded" 
          />
          <p className="text-gray-700 mt-2">
            Ayam Taliwang merupakan makanan khas Nusa Tenggara Barat yang berbahan dasar ayam muda yang dibakar dan dilumuri dengan bumbu pedas dari cabai merah, bawang merah, dan bawang putih.
            Biasanya, hidangan ini disajikan dengan plecing kangkung dan nasi hangat, menjadikannya sajian yang nikmat dan menggugah selera.
          </p>
          <p className="text-gray-700 mt-2">
            Cita rasa Ayam Taliwang sangat khas, dengan kombinasi rasa pedas, gurih, dan sedikit manis yang berasal dari bumbu rempah-rempah khas Indonesia. Hidangan ini sering menjadi pilihan utama bagi pencinta makanan pedas.
          </p>
          <h3 className="text-xl font-semibold mt-4">Sejarah Ayam Taliwang</h3>
          <p className="text-gray-700 mt-2">
            Ayam Taliwang berasal dari Kampung Karang Taliwang di Mataram, Lombok. Hidangan ini konon diperkenalkan oleh para bangsawan pada masa Kesultanan Selaparang.
            Seiring waktu, masakan ini semakin populer dan menjadi salah satu ikon kuliner dari Pulau Lombok.
          </p>
          <h3 className="text-xl font-semibold mt-4">Cara Memasak Ayam Taliwang</h3>
          <p className="text-gray-700 mt-2">
            Untuk memasak Ayam Taliwang, pertama-tama ayam dibakar setengah matang, lalu dilumuri dengan bumbu khas yang terdiri dari cabai, bawang, terasi, dan rempah lainnya.
            Setelah itu, ayam dipanggang kembali hingga matang sempurna, sehingga bumbunya meresap dan menghasilkan rasa yang khas.
          </p>
          <h3 className="text-xl font-semibold mt-4">Tips Menikmati Ayam Taliwang</h3>
          <ul className="list-disc pl-6 text-gray-700 mt-2">
            <li>Ayam Taliwang paling nikmat disantap dengan nasi putih hangat.</li>
            <li>Tambahkan plecing kangkung sebagai pelengkap untuk rasa yang lebih segar.</li>
            <li>Jika suka lebih pedas, tambahkan sambal terasi khas Lombok.</li>
            <li>Untuk sensasi lebih gurih, coba tambahkan taburan bawang goreng.</li>
          </ul>
        </article>
      </main>
      <footer className="bg-gray-800 text-white text-center p-4 mt-auto bg-opacity-80">
        <p>&copy; 2025 Makanan Indonesia. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
