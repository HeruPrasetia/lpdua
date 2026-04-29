"use client";

import Image from 'next/image';
import Link from 'next/link';

export default function Katalog() {
  const WA_NUMBER = "6281234779772"; // Ganti dengan nomor admin

  const products = [
    {
      id: 1,
      name: "Smart Wifi Plug Pro",
      price: "Rp 150.000",
      image: "/smart-plug.png",
      category: "Smart Home",
      description: "Kontrol peralatan listrik dari HP Anda. Hemat energi & aman."
    },
    {
      id: 2,
      name: "Premium Gold LED Bulb",
      price: "Rp 85.000",
      image: "/led-bulb.png",
      category: "Pencahayaan",
      description: "Lampu LED hemat energi dengan warna warm gold yang elegan."
    },
    {
      id: 3,
      name: "Digital Multimeter Pro",
      price: "Rp 325.000",
      image: "/multimeter.png",
      category: "Alat Ukur",
      description: "Alat ukur presisi untuk kebutuhan teknisi profesional."
    },
    {
      id: 4,
      name: "Industrial Extension Cable 10m",
      price: "Rp 120.000",
      image: "/cable.png",
      category: "Kabel",
      description: "Kabel roll kualitas industri dengan pelindung panas."
    },
    {
      id: 5,
      name: "Solar Garden Light",
      price: "Rp 45.000",
      image: "/solar-light.png",
      category: "Pencahayaan",
      description: "Lampu taman tenaga surya, otomatis menyala saat malam."
    },
    {
      id: 6,
      name: "Automatic Voltage Regulator",
      price: "Rp 450.000",
      image: "/avr.png",
      category: "Power Supply",
      description: "Stabilizer tegangan untuk melindungi peralatan elektronik sensitif."
    },
    {
      id: 7,
      name: "MCB Schneider 16A",
      price: "Rp 65.000",
      image: "/mcb.png",
      category: "Sirkuit",
      description: "Pemutus sirkuit kualitas premium untuk keamanan instalasi rumah."
    },
    {
      id: 8,
      name: "Wireless Doorbell Pro",
      price: "Rp 95.000",
      image: "/doorbell.png",
      category: "Smart Home",
      description: "Bel pintu tanpa kabel dengan jangkauan hingga 100 meter."
    },
    {
      id: 9,
      name: "LED Floodlight 50W",
      price: "Rp 185.000",
      image: "/floodlight.png",
      category: "Pencahayaan",
      description: "Lampu tembak luar ruangan tahan air (IP66) super terang."
    }
  ];

  const getWAUrl = (productName, price) => {
    const message = `Halo SNW JAYA, saya tertarik memesan produk berikut:\n\nProduk: ${productName}\nHarga: ${price}\n\nMohon informasi ketersediaan stok dan cara pembayarannya. Terima kasih.`;
    return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
  };

  return (
    <main className="min-h-screen pb-20">
      {/* Navbar */}
      <nav className="glass sticky top-0 z-50 py-4">
        <div className="container flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 relative overflow-hidden rounded-full">
              <Image
                src="/Logo.jpeg"
                alt="SNW JAYA Logo"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-xl font-bold tracking-wider text-primary">SNW JAYA</span>
          </Link>
          <div className="hidden md:flex gap-6 font-medium">
            <Link href="/" className="hover:text-primary transition">Beranda</Link>
            <Link href="/katalog" className="text-primary transition">Katalog</Link>
            <Link href="/#cara-order" className="hover:text-primary transition">Cara Order</Link>
            <Link href="/#kontak" className="hover:text-primary transition">Kontak</Link>
          </div>
          <a href={getWAUrl("Umum", "")} className="btn btn-primary text-sm py-2 px-4">Chat Admin</a>
        </div>
      </nav>

      {/* Header Section */}
      <header className="bg-[#111827] py-16 mb-12">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Katalog Produk</h1>
          <p className="text-gray-400 max-w-2xl">
            Temukan berbagai kebutuhan elektrikal dan smart home berkualitas tinggi.
            Semua produk kami dijamin keasliannya dan telah melalui QC ketat.
          </p>
        </div>
      </header>

      {/* Catalog Grid */}
      <section className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="relative aspect-square mb-4 overflow-hidden rounded-xl bg-[#1e293b]">
                {/* Placeholder for product image since they don't exist yet */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                  <span className="text-4xl">📦</span>
                </div>
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform hover:scale-110 duration-500"
                  onError={(e) => {
                    // Fallback handled by parent div's icon
                    e.target.style.display = 'none';
                  }}
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-primary text-black text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-tighter whitespace-nowrap">
                    {product.category}
                  </span>
                </div>
              </div>
              <h3 className="text-xl mb-2">{product.name}</h3>
              <p className="text-gray-400 text-sm mb-4 flex-grow">{product.description}</p>
              <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-800">
                <span className="text-2xl font-bold text-white">{product.price}</span>
                <a href={getWAUrl(product.name, product.price)} className="btn btn-primary py-2 px-4 text-sm">
                  Order via WA
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-24 pt-12 border-t border-gray-800">
        <div className="container text-center">
          <p className="text-gray-500 text-sm">
            © 2026 SNW JAYA. Belanja aman dan terpercaya.
          </p>
        </div>
      </footer>
    </main>
  );
}
