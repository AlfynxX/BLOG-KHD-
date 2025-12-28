import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const words = ["KI HAJAR", "DEWANTARA"];

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[loopNum % words.length];
      
      if (!isDeleting) {
        setText(currentWord.substring(0, text.length + 1));
        
        if (text === currentWord) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setText(currentWord.substring(0, text.length - 1));
        
        if (text === "") {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
        }
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? 100 : 150);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum]);

  const images = [
    "/images/hero1.jpg",
    "/images/mustegak1.jpg",
    "/images/human2.jpg",
    "/images/human3.jpg",
    "/images/human4.jpg",
    "/images/hero2.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleLihatStruktur = () => {
    const element = document.querySelector("#struktur");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
      
      {/* Organization logo background - subtle */}
      <div 
        className="absolute inset-0 opacity-5 dark:opacity-10 bg-center bg-no-repeat bg-contain"
        style={{ backgroundImage: 'url(/images/logo-bg.png)' }}
      />
      
      <div className="container mx-auto px-4 py-12 md:py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-fadeIn">
            <div className="space-y-2">
              <h1 className="text-6xl md:text-7xl font-bold">
                <span className="gradient-text">{text}</span>
                <span className="text-primary animate-pulse">|</span>
              </h1>
            </div>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Selamat datang di website resmi organisasi Pramuka kami. 
              Bergabunglah bersama kami dalam perjalanan membentuk karakter, 
              kedisiplinan, dan jiwa kepemimpinan yang kuat.
            </p>

            <Button
              onClick={handleLihatStruktur}
              size="lg"
              className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              Lihat Struktur
              <ChevronDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
            </Button>
          </div>

          {/* Image Carousel */}
          <div className="relative h-[400px] md:h-[500px] group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-3xl group-hover:blur-2xl transition-all duration-500" />
            
            {images.map((img, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  index === currentIndex
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95"
                }`}
                onMouseEnter={() => clearInterval}
              >
                <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-2xl hover:shadow-[0_0_50px_rgba(255,215,0,0.5)] transition-all duration-500 hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                  <img
                    src={img}
                    alt={`Organisasi ${index + 1}`}
                    className="w-full h-full object-cover animate-float"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  />
                </div>
              </div>
            ))}

            {/* Carousel Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-accent w-8"
                      : "bg-white/50 hover:bg-white/80"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-primary" />
      </div>
    </section>
  );
};

export default Hero;
