import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Struktur from "@/components/Struktur";
import Sejarah from "@/components/Sejarah";
import Galeri from "@/components/Galeri";
import Kontak from "@/components/Kontak";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Struktur />
      <Sejarah />
      <Galeri />
      <Kontak />
      <Footer />
    </div>
  );
};

export default Index;
