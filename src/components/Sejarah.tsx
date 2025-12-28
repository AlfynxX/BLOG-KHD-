const Sejarah = () => {
  return (
    <section id="sejarah" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
          Sejarah Organisasi
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 3D Logo */}
          <div className="order-2 lg:order-1">
            <div className="relative h-[400px] md:h-[500px] flex items-center justify-center group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-3xl group-hover:blur-2xl transition-all duration-500" />
              
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl animate-float ">
                <img 
                  src="/images/hero1.jpg" 
                  alt="Logo 3D Pramuka" 
                  className="w-full h-full object-contain transform transition-transform duration-700  cursor-grab active:cursor-grabbing"
                  draggable="false"
                />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className="card-interactive space-y-4">
              <h3 className="text-2xl font-bold text-primary">Awal Mula</h3>
              <p className="text-muted-foreground leading-relaxed">
                [Tambahkan teks sejarah organisasi Anda di sini]
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Organisasi Pramuka kami memiliki sejarah panjang dalam membentuk karakter 
                dan kepemimpinan generasi muda. Sejak didirikan, kami telah konsisten 
                dalam memberikan pendidikan kepramukaan yang berkualitas.
              </p>
            </div>

            <div className="card-interactive space-y-4">
              <h3 className="text-2xl font-bold text-primary">Pencapaian</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-accent mr-2">✦</span>
                  <span>Juara berbagai kompetisi kepramukaan tingkat regional</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✦</span>
                  <span>Aktif dalam kegiatan sosial dan pengabdian masyarakat</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✦</span>
                  <span>Memiliki anggota yang berprestasi di berbagai bidang</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sejarah;
