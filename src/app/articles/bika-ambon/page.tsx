'use client';
import React from "react";
import Head from "next/head";
import Link from "next/link";

export default function BikaAmbon() {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('https://png.pngtree.com/background/20210709/original/pngtree-food-western-food-steak-tomato-picture-image_941801.jpg')"
      }}
    >
      <Head>
        <title>Bika Ambon</title>
        <meta name="description" content="Artikel tentang Bika Ambon, kue khas Medan." />
      </Head>
      <header className="bg-green-600 text-white p-4 text-center bg-opacity-90">
        <h1 className="text-3xl font-bold">Bika Ambon</h1>
        <nav className="mt-2">
          <Link href="/" className="mx-2 text-white hover:underline">Home</Link>
          <Link href="/about" className="mx-2 text-white hover:underline">Tentang</Link>
        </nav>
      </header>
      <main className="p-4 max-w-3xl mx-auto bg-white bg-opacity-90 rounded shadow mt-4">
        <img 
          src="https://asset.kompas.com/crops/VzYx-AkbhGOs5xvoXncObdqgXLA=/142x4:829x462/1200x800/data/photo/2023/04/27/6449e926b9ed3.jpg" 
          alt="Bika Ambon" 
          className="w-full h-64 object-cover mt-4 rounded"
        />
        <article className="p-4">
          <h2 className="text-2xl font-semibold">Sejarah dan Keunikan Bika Ambon</h2>
          <p className="text-gray-700 mt-2">
            Bika Ambon adalah kue khas dari Medan, Sumatera Utara. Meski namanya mengandung kata Ambon, makanan ini
            berasal dari Medan dan sangat terkenal dengan teksturnya yang bersarang dan kenyal. Kue ini dibuat dari
            campuran tepung tapioka, telur, gula, dan santan yang difermentasi sebelum dipanggang.
          </p>
          <p className="text-gray-700 mt-2">
            Keunikan dari Bika Ambon terletak pada proses pembuatannya yang membutuhkan waktu fermentasi selama beberapa
            jam, sehingga menghasilkan tekstur bersarang yang khas. Biasanya, kue ini tersedia dalam berbagai varian
            rasa seperti pandan, durian, keju, dan cokelat.
          </p>
          <p className="text-gray-700 mt-2">
            Bika Ambon sering dijadikan oleh-oleh khas Medan karena daya tahannya yang cukup lama dibandingkan kue
            tradisional lainnya. Tekstur yang lembut, aroma wangi, dan cita rasa manisnya menjadikan kue ini favorit
            banyak orang.
          </p>
          <h2 className="text-2xl font-semibold mt-6">Cara Membuat Bika Ambon</h2>
          <p className="text-gray-700 mt-2">
            Membuat Bika Ambon memerlukan beberapa bahan utama seperti tepung tapioka, santan, telur, dan ragi. Berikut adalah langkah-langkah sederhana dalam membuatnya:
          </p>
          <ol className="list-decimal list-inside text-gray-700 mt-2">
            <li>Campurkan santan, daun pandan, dan serai, lalu didihkan dan dinginkan.</li>
            <li>Kocok telur dan gula hingga larut, kemudian tambahkan tepung tapioka dan ragi.</li>
            <li>Tuangkan santan yang sudah didinginkan ke dalam adonan dan aduk rata.</li>
            <li>Diamkan adonan selama 3-4 jam agar fermentasi berjalan dengan baik.</li>
            <li>Panggang dalam oven dengan suhu sedang hingga matang dan berwarna kuning keemasan.</li>
          </ol>
          <h2 className="text-2xl font-semibold mt-6">Tips Menikmati Bika Ambon</h2>
          <p className="text-gray-700 mt-2">
            Untuk menikmati Bika Ambon dengan maksimal, berikut beberapa tips:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>Sajikan dalam keadaan hangat agar teksturnya tetap lembut dan kenyal.</li>
            <li>Padukan dengan teh atau kopi untuk menambah cita rasa.</li>
            <li>Simpan di wadah kedap udara untuk menjaga kesegarannya lebih lama.</li>
          </ul>
        </article>
      </main>
      <footer className="bg-gray-800 text-white text-center p-4 mt-4 bg-opacity-90">
        <p>&copy; 2025 Makanan Indonesia. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
