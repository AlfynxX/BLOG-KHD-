import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface Member {
  name: string;
  photo: string;
}

interface BidangMember {
  groupPhoto: string;
  members: Member[];
}

const Struktur = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const pradanaPutra = { name: "?", photo: "/images/fafi.jpg" };
  const wakilPutra = { name: "?", photo: "/images/fafi.jpg" };
  const pradanaPutri = { name: "?", photo: "/images/fufu.jpg" };
  const wakilPutri = { name: "?", photo: "/images/fufu.jpg" };

  const bidangInti: { name: string; data: BidangMember }[] = [
    {
      name: "Giat",
      data: {
        groupPhoto: "/images/bidang-giat-group.jpg",
        members: [
          { name: "Anggota 1 - Giat", photo: "/images/giat-1.jpg" },
          { name: "Anggota 2 - Giat", photo: "/images/giat-2.jpg" },
          { name: "Anggota 2 - Giat", photo: "/images/giat-2.jpg" },
        ],
      },
    },
    {
      name: "Kerani",
      data: {
        groupPhoto: "/images/bidang-kerani-group.jpg",
        members: [
          { name: "Anggota 1 - Kerani", photo: "/images/kerani-1.jpg" },
          { name: "Anggota 2 - Kerani", photo: "/images/kerani-2.jpg" },
        ],
      },
    },
    {
      name: "Perlengkapan",
      data: {
        groupPhoto: "/images/bidang-perlengkapan-group.jpg",
        members: [
          { name: "Anggota 1 - Perlengkapan", photo: "/images/perlengkapan-1.jpg" },
          { name: "Anggota 2 - Perlengkapan", photo: "/images/perlengkapan-2.jpg" },
        ],
      },
    },
    {
      name: "Humas",
      data: {
        groupPhoto: "/images/bidang-humas-group.jpg",
        members: [
          { name: "Anggota 1 - Humas", photo: "/images/humas-1.jpg" },
          { name: "Anggota 2 - Humas", photo: "/images/humas-2.jpg" },
        ],
      },
    },
    {
      name: "Dana Usaha",
      data: {
        groupPhoto: "/images/bidang-dana-group.jpg",
        members: [
          { name: "Anggota 1 - Dana", photo: "/images/dana-1.jpg" },
          { name: "Anggota 2 - Dana", photo: "/images/dana-2.jpg" },
        ],
      },
    },
    {
      name: "Rohani",
      data: {
        groupPhoto: "/images/bidang-rohani-group.jpg",
        members: [
          { name: "Anggota 1 - Rohani", photo: "/images/rohani-1.jpg" },
          { name: "Anggota 2 - Rohani", photo: "/images/rohani-2.jpg" },
        ],
      },
    },
  ];

  const MemberCard = ({ member, floating }: { member: Member; floating?: boolean }) => (
    <div
      className={`card-interactive hover-lift cursor-pointer ${floating ? "animate-float" : ""}`}
      onClick={() => setSelectedImage(member.photo)}
    >
      <div className="relative overflow-hidden rounded-lg aspect-[3/4] mb-4 group">
        <img
          src={member.photo}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <h3 className="text-center font-semibold text-lg">{member.name}</h3>
    </div>
  );

  return (
    <section id="struktur" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
          Struktur Organisasi
        </h2>

        {/* Pradana Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Putra */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-center text-primary mb-8">Putra</h3>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-xl font-semibold text-center mb-4">Pradana Putra</h4>
                <MemberCard member={pradanaPutra} floating />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-center mb-4">Wakil Pradana Putra</h4>
                <MemberCard member={wakilPutra} floating />
              </div>
            </div>
          </div>

          {/* Putri */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-center text-primary mb-8">Putri</h3>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-xl font-semibold text-center mb-4">Pradana Putri</h4>
                <MemberCard member={pradanaPutri} floating />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-center mb-4">Wakil Pradana Putri</h4>
                <MemberCard member={wakilPutri} floating />
              </div>
            </div>
          </div>
        </div>

        {/* Bidang Inti */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-primary">Bidang Inti</h3>
          <div className="grid grid-cols-3 lg:grid-cols-3 gap-8">
            {bidangInti.map((bidang) => (
              <BidangCard key={bidang.name} bidang={bidang} onImageClick={setSelectedImage} />
            ))}
          </div>
        </div>
      </div>

      {/* Image Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl">
          <img
            src={selectedImage || ""}
            alt="Preview"
            className="w-full h-auto rounded-lg"
          />
        </DialogContent>
      </Dialog>
    </section>
  );
};

const BidangCard = ({
  bidang,
  onImageClick,
}: {
  bidang: { name: string; data: BidangMember };
  onImageClick: (img: string) => void;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showName, setShowName] = useState(true);

  const allImages = [bidang.data.groupPhoto, ...bidang.data.members.map((m) => m.photo)];

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % allImages.length;
    setCurrentIndex(nextIndex);
    setShowName(nextIndex === 0);
  };

  return (
    <div className="card-interactive space-y-4 relative">
      <div
        className="relative overflow-hidden rounded-lg aspect-[4/3] cursor-pointer group"
        onClick={() => onImageClick(allImages[currentIndex])}
      >
        <img
          src={allImages[currentIndex]}
          alt={bidang.name}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        {/* Button inside image for desktop/tablet */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
          className="hidden md:block absolute bottom-4 right-4 bg-accent text-black px-4 py-2 rounded-full font-semibold hover:scale-110 transition-transform"
        >
          Next →
        </button>
      </div>

      {/* Button outside image for mobile */}
      <button
        onClick={handleNext}
        className="md:hidden absolute -bottom-2 left-0 bg-accent text-black px-2 py-1 rounded-full font-semibold text-xs hover:scale-110 transition-transform z-10"
      >
        Next →
      </button>

      <div className="text-center space-y-2">
        <h4 className="text-xl font-bold text-primary">{bidang.name}</h4>
        {!showName && currentIndex > 0 && (
          <p className="text-sm text-muted-foreground animate-fadeIn">
            {bidang.data.members[currentIndex - 1]?.name}
          </p>
        )}
      </div>
    </div>
  );
};

export default Struktur;
