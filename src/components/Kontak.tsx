import { Mail, Instagram, Music, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const Kontak = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:your-email@gmail.com?subject=Pesan dari ${formData.name}&body=${formData.message}%0D%0A%0D%0ADari: ${formData.name}%0D%0AEmail: ${formData.email}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="kontak" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
          Hubungi Kami
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="card-interactive">
            <h3 className="text-2xl font-bold mb-6">Kirim Pesan</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Nama</label>
                <Input
                  type="text"
                  placeholder="Nama Anda"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input
                  type="email"
                  placeholder="email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Pesan</label>
                <Textarea
                  placeholder="Tulis pesan Anda di sini..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="w-full min-h-[150px]"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-accent text-white hover:shadow-xl transition-all"
                size="lg"
              >
                <Mail className="mr-2 h-5 w-5" />
                Kirim Pesan
              </Button>
            </form>
          </div>

          {/* Contact Info & Social Links */}
          <div className="space-y-6">
            <div className="card-interactive">
              <h3 className="text-2xl font-bold mb-6">Informasi Kontak</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 group cursor-pointer hover:text-primary transition-colors">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-sm text-muted-foreground">organisasi@pramuka.com</p>
                    <p className="text-xs text-muted-foreground">(Ganti dengan email Anda)</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 group cursor-pointer hover:text-primary transition-colors">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">WhatsApp</p>
                    <p className="text-sm text-muted-foreground">+62 xxx-xxxx-xxxx</p>
                    <p className="text-xs text-muted-foreground">(Tambahkan nomor WA Anda)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-interactive">
              <h3 className="text-2xl font-bold mb-6">Social Media</h3>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://instagram.com/your-account"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 p-4 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-lg hover:shadow-xl hover:scale-105 transition-all"
                >
                  <Instagram className="h-6 w-6" />
                  <span className="font-semibold">Instagram</span>
                </a>

                <a
                  href="https://tiktok.com/@your-account"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 p-4 bg-gradient-to-br from-black to-gray-800 text-white rounded-lg hover:shadow-xl hover:scale-105 transition-all"
                >
                  <Music className="h-6 w-6" />
                  <span className="font-semibold">TikTok</span>
                </a>
              </div>
              <p className="text-xs text-center text-muted-foreground mt-4">
                (Ganti link dengan akun social media Anda)
              </p>
            </div>

            {/* 3D Logo */}
            <div className="card-interactive">
              <div className="relative h-40 flex items-center justify-center group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg blur-2xl group-hover:blur-xl transition-all" />
                <img 
                  src="/images/human.jpg" 
                  alt="Logo 3D Pramuka" 
                  className="relative w-40 h-40 object-contain transform transition-transform duration-700 hover:rotate-180 cursor-grab active:cursor-grabbing animate-float"
                  draggable="false"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Kontak;
