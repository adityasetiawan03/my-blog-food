'use client';
import React from "react";
import Head from "next/head";
import Link from "next/link";

export default function MiAceh() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col" style={{
      backgroundImage: "url('https://png.pngtree.com/background/20210710/original/pngtree-delicious-noodle-simple-black-banner-picture-image_1037063.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed"
    }}>
      <Head>
        <title>Mie Aceh - Makanan Indonesia</title>
        <meta name="description" content="Artikel tentang Mi Aceh, makanan khas dari Aceh yang lezat dan pedas." />
      </Head>
      
      <header className="bg-green-600 text-white p-4 text-center bg-opacity-90">
        <h1 className="text-3xl font-bold">Mie Aceh</h1>
        <nav className="mt-2">
          <Link href="/" className="mx-2 text-white hover:underline">Home</Link>
          <Link href="/about" className="mx-2 text-white hover:underline">Tentang</Link>
        </nav>
      </header>
      
      <main className="p-4 max-w-3xl mx-auto flex-grow bg-white bg-opacity-90 rounded shadow-lg mt-6">
        <img 
          src="https://fibercreme.com/wp-content/uploads/2021/06/4.-Mie-Aceh.jpg" 
          alt="Mi Aceh" 
          className="w-full h-64 object-cover mt-2 rounded" 
        />
        <h2 className="text-2xl font-semibold mt-4">Tentang Mie Aceh</h2>
        <p className="text-gray-700 mt-2">
          Mie Aceh adalah salah satu kuliner khas dari Provinsi Aceh yang memiliki cita rasa pedas dan gurih. Mi ini biasanya disajikan dalam dua varian, yaitu Mie Aceh goreng dan Mie Aceh kuah. Bahan utama yang digunakan adalah mi kuning tebal, yang dimasak dengan bumbu rempah khas seperti bawang putih, bawang merah, kunyit, cabai, dan kari. Daging sapi, kambing, atau makanan laut seperti udang dan cumi sering ditambahkan untuk memperkaya rasa.
        </p>
        
        <h3 className="text-xl font-semibold mt-4">Sejarah Mie Aceh</h3>
        <p className="text-gray-700 mt-2">
          Mie Aceh berasal dari budaya kuliner masyarakat Aceh yang banyak dipengaruhi oleh rempah-rempah India, Arab, dan Tionghoa. Pada zaman dahulu, Aceh merupakan pusat perdagangan yang dikunjungi oleh para pedagang dari berbagai negara. Pengaruh budaya dan kuliner ini kemudian berkembang menjadi salah satu makanan khas yang kaya akan bumbu.
        </p>
        
        <h3 className="text-xl font-semibold mt-4">Varian Mie Aceh</h3>
        <ul className="list-disc pl-6 text-gray-700 mt-2">
          <li><strong>Mie Aceh Goreng:</strong> Dimasak dengan cara digoreng hingga bumbu meresap, menghasilkan cita rasa yang lebih kuat dan tekstur mi yang kenyal.</li>
          <li><strong>Mie Aceh Kuah:</strong> Disajikan dengan kuah kental berbumbu kaya yang memberikan sensasi gurih dan pedas.</li>
          <li><strong>Mie Aceh Tumis:</strong> Kombinasi antara mi goreng dan mi kuah, dengan sedikit kuah untuk memberikan rasa yang lebih lembut.</li>
        </ul>
        
        <h3 className="text-xl font-semibold mt-4">Cara Memasak Mie Aceh</h3>
        <p className="text-gray-700 mt-2">
          Untuk membuat Mie Aceh yang lezat, berikut adalah langkah-langkah umum dalam memasaknya:
        </p>
        <ol className="list-decimal pl-6 text-gray-700 mt-2">
          <li>Tumis bawang merah, bawang putih, cabai, kunyit, dan kari hingga harum.</li>
          <li>Tambahkan potongan daging sapi, kambing, atau makanan laut sesuai selera.</li>
          <li>Masukkan mi kuning dan aduk rata dengan bumbu.</li>
          <li>Tambahkan air atau kaldu jika ingin membuat Mie Aceh kuah.</li>
          <li>Sajikan dengan emping, bawang goreng, dan irisan mentimun untuk pelengkap.</li>
        </ol>
        
        <h3 className="text-xl font-semibold mt-4">Keunikan Mie Aceh</h3>
        <p className="text-gray-700 mt-2">
          Keunikan Mie Aceh terletak pada penggunaan bumbu rempah yang kuat, serta cara memasaknya yang khas. Selain itu, tekstur mi yang lebih tebal dibandingkan mi biasa memberikan sensasi kenyal yang unik saat dikunyah.
        </p>
        
        <h3 className="text-xl font-semibold mt-4">Tips Menikmati Mie Aceh</h3>
        <ul className="list-disc pl-6 text-gray-700 mt-2">
          <li>Tambahkan perasan jeruk nipis untuk memberikan rasa segar.</li>
          <li>Gunakan acar atau irisan bawang merah sebagai pelengkap.</li>
          <li>Jika menyukai rasa lebih pedas, tambahkan sambal ekstra.</li>
        </ul>
      </main>
      
      <footer className="bg-gray-800 text-white text-center p-4 mt-auto bg-opacity-90">
        <p>&copy; 2025 Makanan Indonesia. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
