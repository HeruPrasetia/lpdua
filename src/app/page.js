import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const WA_NUMBER = "6281234567890"; // Ganti dengan nomor admin

  const products = [
    {
      id: 1,
      name: "Smart Wifi Plug Pro",
      price: "Rp 150.000",
      image: "/smart-plug.png",
      description: "Kontrol peralatan listrik dari HP Anda. Hemat energi & aman."
    },
    {
      id: 2,
      name: "Premium Gold LED Bulb",
      price: "Rp 85.000",
      image: "/led-bulb.png",
      description: "Lampu LED hemat energi dengan warna warm gold yang elegan."
    },
    {
      id: 3,
      name: "Digital Multimeter Pro",
      price: "Rp 325.000",
      image: "/multimeter.png",
      description: "Alat ukur presisi untuk kebutuhan teknisi profesional."
    }
  ];

  const testimonials = [
    { name: "Andi Saputra", text: "Barang ori, pengiriman cepat sampai. Respon admin SNW JAYA sangat ramah!" },
    { name: "Siti Aminah", text: "Lampu LED-nya bagus banget, rumah jadi kelihatan mewah. Recommended seller!" },
    { name: "Budi Tech", text: "Multimeter-nya akurat. Sangat membantu kerjaan servis saya. Mantap!" }
  ];

  const getWAUrl = (productName, price) => {
    const message = `Halo SNW JAYA, saya tertarik memesan produk berikut:\n\nProduk: ${productName}\nHarga: ${price}\n\nMohon informasi ketersediaan stok dan cara pembayarannya. Terima kasih.`;
    return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
  };

  return (
    <main>
      {/* Navbar */}
      <nav className="glass sticky top-0 z-50 py-4">
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 relative overflow-hidden rounded-full">
              <Image
                src="/Logo.jpeg"
                alt="SNW JAYA Logo"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-xl font-bold tracking-wider text-primary">SNW JAYA</span>
          </div>
          <div className="hidden md:flex gap-6 font-medium">
            <Link href="/katalog" className="hover:text-primary transition">Katalog</Link>
            <a href="#cara-order" className="hover:text-primary transition">Cara Order</a>
            <a href="#testimoni" className="hover:text-primary transition">Testimoni</a>
            <a href="#kontak" className="hover:text-primary transition">Kontak</a>
          </div>
          <a href={getWAUrl("Umum", "")} className="btn btn-primary text-sm py-2 px-4">Chat Admin</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero.png"
            alt="Hero Background"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
        </div>
        <div className="container relative z-10 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Solusi Listrik <br />
            <span className="text-white">Modern & Terpercaya</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-lg">
            Sediakan kebutuhan elektrikal berkualitas tinggi untuk hunian dan industri Anda.
            Belanja aman, cepat, dan terpercaya hanya di SNW JAYA.
          </p>
          <div className="flex gap-4">
            <Link href="/katalog" className="btn btn-primary">Lihat Katalog</Link>
            <a href="#cara-order" className="btn btn-outline">Cara Order</a>
          </div>
        </div>
      </section>

      {/* Product Catalog */}
      <section id="katalog" className="bg-[#111827]">
        <div className="container">
          <div className="section-title">
            <h2>Produk Unggulan</h2>
            <p>Pilihan produk elektrikal terbaik untuk kebutuhan Anda.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <div className="relative aspect-square mb-4 overflow-hidden rounded-xl">
                  <Image src={product.image} alt={product.name} fill className="object-cover" />
                </div>
                <h3 className="text-xl mb-2">{product.name}</h3>
                <p className="text-gray-400 text-sm mb-4 flex-grow">{product.description}</p>
                <div className="flex justify-between items-center mt-auto">
                  <span className="text-2xl font-bold text-white">{product.price}</span>
                  <a href={getWAUrl(product.name, product.price)} className="btn btn-primary py-2 px-4 text-sm">
                    Order via WA
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/katalog" className="btn btn-outline px-8">
              Lihat Semua Produk <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Cara Order */}
      <section id="cara-order">
        <div className="container">
          <div className="section-title">
            <h2>Cara Order</h2>
            <p>Langkah mudah berbelanja di SNW JAYA.</p>
          </div>
          <div className="steps-grid">
            {[
              { step: "01", title: "Pilih Produk", desc: "Cari produk yang Anda butuhkan di katalog kami." },
              { step: "02", title: "Klik Tombol WA", desc: "Anda akan diarahkan ke WhatsApp admin kami secara otomatis." },
              { step: "03", title: "Konfirmasi & Bayar", desc: "Admin akan mengkonfirmasi pesanan dan metode pembayaran." },
              { step: "04", title: "Pesanan Dikirim", desc: "Duduk manis, pesanan Anda akan segera meluncur ke lokasi." }
            ].map((item, idx) => (
              <div key={idx} className="step-card glass rounded-2xl">
                <div className="step-number">{item.step}</div>
                <h3 className="mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aturan Pengiriman & Pembayaran */}
      <section className="bg-[#111827]">
        <div className="container grid md:grid-cols-2 gap-12">
          <div className="glass p-8 rounded-3xl">
            <h3 className="text-2xl mb-6 flex items-center gap-3">
              <span className="text-primary">🚚</span> Aturan Pengiriman
            </h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex gap-2">✓ Pengiriman dilakukan setiap hari Senin - Sabtu.</li>
              <li className="flex gap-2">✓ Order sebelum jam 15:00 WIB dikirim di hari yang sama.</li>
              <li className="flex gap-2">✓ Mendukung kurir JNE, J&T, Sicepat, dan GoSend/Grab.</li>
              <li className="flex gap-2">✓ Nomor resi akan diinfokan maksimal H+1 pengiriman.</li>
            </ul>
          </div>
          <div className="glass p-8 rounded-3xl">
            <h3 className="text-2xl mb-6 flex items-center gap-3">
              <span className="text-primary">💰</span> Pembayaran & COD
            </h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex gap-2">✓ Transfer Bank (BCA, Mandiri, BRI).</li>
              <li className="flex gap-2">✓ Pembayaran via E-Wallet (OVO, Dana, GoPay).</li>
              <li className="flex gap-2">✓ Mendukung layanan COD (Bayar di Tempat) untuk area tertentu.</li>
              <li className="flex gap-2">✓ Pastikan menyiapkan uang pas saat kurir COD datang.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section id="testimoni">
        <div className="container">
          <div className="section-title">
            <h2>Apa Kata Mereka?</h2>
            <p>Kepuasan pelanggan adalah prioritas utama SNW JAYA.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card">
                <p className="text-gray-300 mb-4">{t.text}</p>
                <div className="testimonial-author">- {t.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Kontak */}
      <footer id="kontak" className="py-12 border-t border-gray-800">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <h3 className="text-2xl mb-2">SNW JAYA</h3>
              <p className="text-gray-500">Partner Listrik Terbaik Anda.</p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 mb-4">Hubungi Admin Kami:</p>
              <div className="flex flex-wrap justify-center md:justify-end gap-4">
                <a href={getWAUrl("Umum", "")} className="btn btn-primary">
                  <span>📱</span> WhatsApp: 0812-3477-9772
                </a>
                <a href="mailto:admin@snwjaya.com" className="btn btn-outline">
                  <span>✉️</span> Email Kami
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-900 text-center text-gray-600 text-sm">
            © 2026 SNW JAYA. All rights reserved. Made with ❤️ by SNW JAYA Team.
          </div>
        </div>
      </footer>
    </main>
  );
}
