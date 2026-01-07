import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";

interface GaleriItem {
  name: string;
  images: string[];
}

const Galeri = () => {
  const [selectedGaleri, setSelectedGaleri] = useState<GaleriItem | null>(null);
  const [showAll, setShowAll] = useState(false);

  const galeriData: GaleriItem[] = [
    {
      name: "ODA",
      images: [
        "/images/oda/oda.jpg",
        "/images/oda/.jpg",
        "/images/oda/oda3.jpg",
        "/images/oda/oda4.jpg",
        "/images/oda-5.jpg",
        "/images/oda-6.jpg",
      ],
    },
    {
      name: "Mustegak",
      images: [
        "/images/mustegak1.jpg",
        "/images/mustegak2.jpg",
        "/images/mustegak3.jpg",
        "/images/mustegak-4.jpg",
        "/images/mustegak-5.jpg",
        "/images/mustegak-6.jpg",
      ],
    },
    {
      name: "Oprek",
      images: [
        "/images/oprek1.jpg",
        "/images/oprek2.jpg",
        "/images/perkemahan-3.jpg",
        "/images/perkemahan-4.jpg",
        "/images/perkemahan-5.jpg",
        "/images/perkemahan-6.jpg",
      ],
    },
    {
      name: "Bantara Laksana",
      images: [
        "/images/upacara-1.jpg",
        "/images/upacara-2.jpg",
        "/images/upacara-3.jpg",
        "/images/upacara-4.jpg",
        "/images/upacara-5.jpg",
        "/images/upacara-6.jpg",
      ],
    },
    {
      name: "Latihan Rutin",
      images: [
        "/images/latihan-1.jpg",
        "/images/latihan-2.jpg",
        "/images/latihan-3.jpg",
        "/images/latihan-4.jpg",
        "/images/latihan-5.jpg",
        "/images/latihan-6.jpg",
      ],
    },
    {
      name: "Bakti Sosial",
      images: [
        "/images/baksos-1.jpg",
        "/images/baksos-2.jpg",
        "/images/baksos-3.jpg",
        "/images/baksos-4.jpg",
        "/images/baksos-5.jpg",
        "/images/baksos-6.jpg",
      ],
    },
    {
      name: "PTP",
      images: [
        "/images/kompetisi-1.jpg",
        "/images/kompetisi-2.jpg",
        "/images/kompetisi-3.jpg",
        "/images/kompetisi-4.jpg",
        "/images/kompetisi-5.jpg",
        "/images/kompetisi-6.jpg",
      ],
    },
    {
      name: "Anjang Sana",
      images: [
        "/images/pelantikan-1.jpg",
        "/images/pelantikan-2.jpg",
        "/images/pelantikan-3.jpg",
        "/images/pelantikan-4.jpg",
        "/images/pelantikan-5.jpg",
        "/images/pelantikan-6.jpg",
      ],
    },
    {
      name: "Survival",
      images: [
        "/images/gathering-1.jpg",
        "/images/gathering-2.jpg",
        "/images/gathering-3.jpg",
        "/images/gathering-4.jpg",
        "/images/gathering-5.jpg",
        "/images/gathering-6.jpg",
      ],
    },
    
    {
      name: "BAKAT",
      images: [
        "/images/bakat/bakat1.jpg",
        "/images/bakat/bakat.jpeg",
        "/images/event-3.jpg",
        "/images/event-4.jpg",
        "/images/event-5.jpg",
        "/images/event-6.jpg",
      ],
    },
  ];

  const openGaleri = (galeri: GaleriItem) => {
    setSelectedGaleri(galeri);
    setShowAll(false);
  };

  return (
    <section id="galeri" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
          Galeri Kegiatan
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {galeriData.map((galeri, index) => (
            <div
              key={index}
              className="card-interactive cursor-pointer group"
              onClick={() => openGaleri(galeri)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-lg aspect-video mb-4">
                <img
                  src={galeri.images[0]}
                  alt={galeri.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end justify-center pb-4">
                  <h3 className="text-white font-bold text-xl">{galeri.name}</h3>
                </div>
                <div className="absolute top-4 right-4 bg-accent text-black px-3 py-1 rounded-full text-sm font-semibold">
                  {galeri.images.length} Foto
                </div>
              </div>
              <p className="text-center text-sm text-muted-foreground">
                Klik untuk melihat semua foto
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Gallery Modal */}
      <Dialog open={!!selectedGaleri} onOpenChange={() => setSelectedGaleri(null)}>
        <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
          {selectedGaleri && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-3xl font-bold gradient-text">{selectedGaleri.name}</h3>
                <button
                  onClick={() => setSelectedGaleri(null)}
                  className="p-2 hover:bg-muted rounded-full transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {(showAll ? selectedGaleri.images : selectedGaleri.images.slice(0, 6)).map(
                  (img, idx) => (
                    <div
                      key={idx}
                      className="relative overflow-hidden rounded-lg aspect-video group cursor-pointer hover-lift"
                    >
                      <img
                        src={img}
                        alt={`${selectedGaleri.name} ${idx + 1}`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                  )
                )}
              </div>

              {!showAll && selectedGaleri.images.length > 6 && (
                <button
                  onClick={() => setShowAll(true)}
                  className="w-full py-3 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-semibold hover:shadow-xl transition-all"
                >
                  Tampilkan Semua ({selectedGaleri.images.length} Foto)
                </button>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Galeri;
