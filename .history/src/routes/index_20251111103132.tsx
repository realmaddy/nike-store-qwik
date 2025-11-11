/* eslint-disable qwik/no-unknown-property */
/* eslint-disable react/no-unknown-property */

import { component$ } from "@builder.io/qwik";

export default component$(() => {
  const products = [
    { id: 1, name: "Nike Air Max 270", price: 1499, image: "/img/shoe1.png" },
    { id: 2, name: "Nike ZoomX", price: 1699, image: "/img/shoe2.png" },
    { id: 3, name: "Nike Blazer Mid", price: 1299, image: "/img/shoe3.png" },
    { id: 4, name: "Nike Air Force 1", price: 1199, image: "/img/shoe4.png" },
    { id: 5, name: "Nike Dunk Low", price: 1399, image: "/img/shoe5.png" },
    { id: 6, name: "Nike React Vision", price: 1599, image: "/img/shoe6.png" },
  ];

  return (
    <main class="bg-[#f8f9fa] text-gray-900 font-sans min-h-screen">

      {/* 🔝 NAVBAR */}
      <nav class="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200 shadow-sm">
        <div class="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-10 py-4">
          <div class="flex items-center gap-2">
            <img src="/img/nike-logo.png" alt="Nike Logo" class="w-10 h-10 object-contain" />
            <h1 class="text-2xl font-extrabold tracking-tight text-black">
              NIKE<span class="text-red-600">Store</span>
            </h1>
          </div>

          <ul class="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-700">
            <li class="hover:text-red-600 transition cursor-pointer">Men</li>
            <li class="hover:text-red-600 transition cursor-pointer">Women</li>
            <li class="hover:text-red-600 transition cursor-pointer">Kids</li>
            <li class="hover:text-red-600 transition cursor-pointer">New Arrivals</li>
            <li class="hover:text-red-600 transition cursor-pointer">Sale</li>
          </ul>

          <div class="flex items-center gap-4">
            {/* Search */}
            <div class="relative hidden sm:block">
              <input
                type="text"
                placeholder="Search Nike shoes..."
                class="border border-gray-300 rounded-full pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              {/* New Search Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="gray"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="w-5 h-5 absolute left-3 top-2.5"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </div>

            {/* Cart (Lucide style) */}
            <button class="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-full font-semibold flex items-center gap-2 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="w-5 h-5"
              >
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 001.98-1.67l1.72-9.33H6" />
              </svg>
              Cart
            </button>
          </div>
        </div>
      </nav>

      {/* 🏆 HERO SECTION */}
      <section class="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between py-24 px-6 md:px-10 gap-10">
        <div class="max-w-lg space-y-6 text-center md:text-left">
          <h1 class="text-5xl md:text-6xl font-extrabold leading-tight">
            Step into <span class="text-red-600">Innovation</span> <br /> with Nike
          </h1>
          <p class="text-gray-600 text-lg max-w-md">
            Elevate your performance and style with Nike’s latest collection. Designed for those who move with purpose.
          </p>
          <button class="bg-red-600 hover:bg-red-700 text-white px-10 py-3 rounded-full font-semibold transition-all shadow-md hover:shadow-lg">
            Shop Now
          </button>
        </div>
        <img
          src="/img/hero-shoe.png"
          alt="Nike Hero Shoe"
          class="w-[420px] md:w-[550px] drop-shadow-2xl animate-float"
        />
      </section>

      {/* 🛍️ PRODUCT GRID */}
      <section class="max-w-7xl mx-auto py-16 px-6 md:px-10">
        <h2 class="text-3xl font-bold mb-10 flex items-center gap-2 text-gray-900">
          👟 Featured Nike Shoes
        </h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10">
          {products.map((p) => (
            <div
              key={p.id}
              class="bg-white border border-gray-100 rounded-2xl p-5 shadow-md hover:shadow-2xl transition-all transform hover:-translate-y-2 flex flex-col items-center text-center"
            >
              <img
                src={p.image}
                alt={p.name}
                class="rounded-lg w-full h-60 object-contain mb-4 transition-transform duration-300 hover:scale-105"
              />
              <h3 class="text-xl font-semibold text-gray-800">{p.name}</h3>
              <p class="text-red-600 font-bold text-lg mt-1">{p.price} MAD</p>
              <button class="mt-4 w-full bg-black text-white py-2 rounded-full hover:bg-gray-800 transition">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 🧩 SHOP BY CATEGORY */}
<section class="max-w-7xl mx-auto py-20 px-6 md:px-10">
  <h2 class="text-3xl font-bold mb-12 flex items-center gap-3 text-gray-900">
    <span class="text-2xl">🔥</span> Shop by Category
  </h2>

  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    {[
      {
        name: "Running",
        img: "/img/running.jpg",
        gradient: "from-pink-500/70 to-purple-600/70",
      },
      {
        name: "Basketball",
        img: "/img/basketball.jpg",
        gradient: "from-orange-500/70 to-yellow-500/70",
      },
      {
        name: "Jordan",
        img: "/img/jordan.jpg",
        gradient: "from-red-600/70 to-black/70",
      },
    ].map((c) => (
      <div
        key={c.name}
        class="relative group overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
      >
        {/* الصورة الخلفية */}
        <img
          src={c.img}
          alt={c.name}
          class="w-full h-[320px] object-cover transform group-hover:scale-110 transition-transform duration-700"
        />

        {/* طبقة اللون */}
        <div
          class={`absolute inset-0 bg-gradient-to-t ${c.gradient} opacity-60 group-hover:opacity-80 transition-opacity duration-500`}
        ></div>

        {/* المحتوى */}
        <div class="absolute bottom-0 left-0 right-0 p-6 text-white z-10 flex justify-between items-center">
          <h3 class="text-2xl font-bold tracking-wide">{c.name}</h3>
          <div class="bg-white/20 rounded-full p-3 backdrop-blur-md group-hover:bg-white/40 transition-all">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5"
              fill="none"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
          </div>
        </div>

        {/* تأثير من تحت */}
        <div class="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-white/20 via-white/60 to-white/20 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
      </div>
    ))}
  </div>
</section>


      {/* 💬 TESTIMONIALS */}
      <section class="bg-gradient-to-b from-white to-gray-50 py-20">
        <h2 class="text-3xl font-bold text-center mb-12">💬 What Our Customers Say</h2>
        <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          {[
            { quote: "The best shoes I’ve ever owned. Super comfortable and stylish!", name: "Sarah M." },
            { quote: "Perfect for running! The Air Zoom feels amazing.", name: "Youssef K." },
            { quote: "Fast delivery and great quality. Totally worth it!", name: "Adam T." },
          ].map((t) => (
            <div
              class="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition border border-gray-100"
              key={t.name}
            >
              <p class="text-gray-600 italic mb-4">“{t.quote}”</p>
              <h4 class="font-bold text-gray-900">— {t.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* 📬 NEWSLETTER */}
<section class="relative overflow-hidden bg-gradient-to-r from-black via-[#0a0a0a] to-gray-900 text-white py-24 px-6 text-center">
  {/* تأثير الضوء الأحمر في الخلفية */}
  <div class="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,0,0,0.25),transparent_70%)]"></div>
  <div class="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.08),transparent_60%)]"></div>

  <div class="relative z-10 max-w-2xl mx-auto">
    <h2 class="text-4xl md:text-5xl font-extrabold mb-5 tracking-tight">
      Stay in the <span class="text-red-600">Loop</span>
    </h2>
    <p class="text-gray-300 mb-10 text-lg">
      Get exclusive access to <span class="text-white/90 font-semibold">new arrivals</span> & special offers
    </p>

    <form class="flex flex-col sm:flex-row justify-center items-center gap-4">
      <input
        type="email"
        placeholder="Enter your email address"
        class="w-full sm:w-80 md:w-96 px-5 py-3 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-black transition-all shadow-inner"
        required
      />
      <button
        type="submit"
        class="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-full font-semibold text-white transition-all shadow-lg hover:shadow-red-500/30 active:scale-95"
      >
        Subscribe
      </button>
    </form>

    <p class="text-sm text-gray-500 mt-8">
      No spam, we promise <span class="text-red-500">❤️</span> — unsubscribe anytime.
    </p>
  </div>
</section>


      {/* ⚓ FOOTER */}
      <footer class="border-t border-gray-200 bg-white mt-20 py-10 text-center">
        <div class="text-gray-600 text-sm">
          © 2025 NikeStore. Inspired by{" "}
          <span class="text-red-600 font-bold">Nike</span>. <br /> Built with ❤️ using Qwik + TailwindCSS.
        </div>
      </footer>
    </main>
  );
});
