"use client";
import React from "react";
import Head from "next/head";
import Link from "next/link";

const articles = [
  {
    id: "mi-aceh",
    title: "Mie Aceh",
    image:
      "https://asset.kompas.com/crops/N4mU3wAYoq451W0gb6izP-kmePI=/0x0:968x645/1200x800/data/photo/2021/01/27/6010ce2cc1805.jpg",
    excerpt:
      "Mi Aceh adalah mi pedas khas Aceh yang disajikan dengan irisan daging sapi, kambing, atau makanan laut dalam kuah kari yang gurih dan pedas.",
    content:
      "Mi Aceh adalah salah satu kuliner khas dari Provinsi Aceh yang memiliki cita rasa pedas dan gurih. Mi ini biasanya disajikan dalam dua varian, yaitu Mi Aceh goreng dan Mi Aceh kuah. Bahan utama yang digunakan adalah mi kuning tebal, yang dimasak dengan bumbu rempah khas seperti bawang putih, bawang merah, kunyit, cabai, dan kari. Daging sapi, kambing, atau makanan laut seperti udang dan cumi sering ditambahkan untuk memperkaya rasa.",
  },
  {
    id: "bika-ambon",
    title: "Bika Ambon",
    image:
      "https://cdn.idntimes.com/content-images/community/2023/06/screenshot-20230629-112925-instagram-ad3488d4a9b516bcdfbe9cbfaf921c6b.jpg",
    excerpt:
      "Bika Ambon adalah penganan khas Medan yang terbuat dari tepung tapioka, telur, gula, dan santan, dengan varian rasa seperti pandan, durian, keju, dan cokelat.",
    content:
      "Bika Ambon adalah kue khas dari Medan, Sumatera Utara. Meskipun namanya mengandung kata 'Ambon', makanan ini justru berasal dari Medan. Kue ini terkenal dengan teksturnya yang bersarang dan kenyal, serta memiliki aroma yang khas. Proses pembuatannya cukup unik karena adonannya difermentasi selama beberapa jam sebelum dipanggang. Bika Ambon tersedia dalam berbagai varian rasa, seperti pandan, durian, keju, dan cokelat, yang semakin memperkaya cita rasanya.",
  },
  {
    id: "ayam-betutu",
    title: "Ayam Betutu",
    image:
      "https://awsimages.detik.net.id/community/media/visual/2021/08/27/resep-ayam-betutu-gilimanuk_43.jpeg?w=1200",
    excerpt:
      "Ayam Betutu adalah makanan khas Bali yang dimasak dengan bumbu rempah khas yang kaya rasa.",
    content:
      "Ayam Betutu merupakan olahan ayam khas Bali yang dimasak dengan bumbu betutu, yang terdiri dari daun jeruk, sereh, salam, dan berbagai rempah lainnya. Proses memasaknya yang lambat membuat daging ayam menjadi empuk dan kaya rasa.",
  },
  {
    id: "ayam-taliwang",
    title: "Ayam Taliwang",
    image:
      "https://awsimages.detik.net.id/community/media/visual/2023/02/01/resep-ayam-taliwang-khas-lombok_43.jpeg?w=1200",
    excerpt:
      "Ayam Taliwang adalah hidangan khas Lombok yang pedas dan menggugah selera.",
    content:
      "Ayam Taliwang merupakan makanan khas Nusa Tenggara Barat yang berbahan dasar ayam muda yang dibakar dan dilumuri dengan bumbu pedas dari cabai merah, bawang merah, dan bawang putih. Biasanya disajikan dengan plecing kangkung dan nasi hangat.",
  },
  {
    id: "rendang",
    title: "Rendang",
    image:
      "https://cdn.idntimes.com/content-images/community/2022/04/resep-rendang-filosofi-rendang-makna-rendang-arti-rendang-rendang-dari-mana-makanan-indonesia-filosofi-9cde86371d7fc78c91ae80a6ffab250e-e0b9344da253b8e653bd42c7df03d6d9.jpg",
    excerpt:
      "Rendang adalah masakan khas Minangkabau yang kaya rempah dan dimasak dalam waktu lama hingga menghasilkan rasa yang khas.",
    content:
      "Rendang adalah salah satu makanan khas dari Sumatera Barat yang terkenal hingga ke mancanegara. Masakan ini berbahan dasar daging sapi yang dimasak perlahan dalam santan dan campuran bumbu rempah seperti lengkuas, serai, bawang putih, bawang merah, dan cabai. Proses memasaknya yang memakan waktu lama membuat rendang memiliki tekstur daging yang empuk serta rasa yang kaya dan mendalam. Rendang sering kali disajikan dalam berbagai acara adat dan perayaan.",
  },
];

export default function Home() {
  return (
    <div
      className="bg-gray-100 min-h-screen flex flex-col bg-cover bg-center bg-fixed"
      style={{
        backgroundImage:
          "url('https://png.pngtree.com/background/20210709/original/pngtree-seasoning-creative-synthesis-food-creative-advertising-picture-image_917716.jpg')",
      }}
    >
      <Head>
        <title>Makanan Indonesia</title>
        <meta
          name="description"
          content="Blog tentang makanan khas Indonesia"
        />
      </Head>
      <header className="bg-green-600 text-white p-4 text-center flex items-center">
        <img
          src="https://i.pinimg.com/474x/59/5f/a5/595fa5ffb3d67f62ceabaa0d9a40d1e2.jpg"
          alt="Logo Makanan Indonesia"
          className="h-12 w-12 mr-4 rounded-full"
        />
        <h1 className="text-3xl font-bold">Makanan Indonesia</h1>
        <nav className="ml-auto mt-2">
          <Link href="/" className="mx-2 text-white hover:underline">
            Home
          </Link>
          <Link href="/about" className="mx-2 text-white hover:underline">
            Tentang
          </Link>
        </nav>
      </header>
      <main className="p-4 max-w-3xl mx-auto flex-grow">
      <h2 className="text-4xl font-extrabold text-center text-red-600 mt-15 mb-20">
  Makanan khas Indonesia terFavorit Bulan Maret 2025
</h2>
        {articles.map((article) => (
          <article
            key={article.id}
            className="bg-white p-4 rounded shadow mb-4"
          >
            <h2 className="text-2xl font-semibold">{article.title}</h2>
            <img
              src={article.image}
              className="w-full h-64 object-cover mt-2 rounded"
            />
            <p className="text-gray-700 mt-2">{article.excerpt}</p>
            <a href={`/articles/${article.id}`} className="text-blue-500">
              Baca selengkapnya
            </a>
          </article>
          
        ))}
        <h2 className="text-4xl font-extrabold text-center text-red-600 mt-15 mb-20">
  Sampai jumpa pada artikel bulan depan!
</h2>

      </main>
      <footer className="bg-gray-800 text-white text-center p-4 mt-auto">
        <p>&copy; 2025 Makanan Indonesia.By Aditya Setiawan All Rights Reserved.</p>
      </footer>
    </div>
  );
}
