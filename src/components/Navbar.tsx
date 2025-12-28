import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Struktur", href: "#struktur" },
    { name: "Sejarah", href: "#sejarah" },
    { name: "Galeri", href: "#galeri" },
    { name: "Kontak", href: "#kontak" },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border/50"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img 
                src="/images/logo.jpeg" 
                alt="Logo Pramuka" 
                className="w-12 h-12 rounded-full object-cover shadow-lg"
              />
              <span className="font-bold text-xl hidden sm:block gradient-text">KHD</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  variant="ghost"
                  onClick={() => handleNavClick(item.href)}
                  className="text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                >
                  {item.name}
                </Button>
              ))}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsDark(!isDark)}
                className="ml-2 hover:bg-accent/20 transition-colors"
              >
                {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsDark(!isDark)}
                className="hover:bg-accent/20"
              >
                {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                className="hover:bg-primary/10"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <>
          {/* Blur Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden animate-fadeIn"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Slide Menu */}
          <div className="fixed top-0 left-0 bottom-0 w-64 bg-card border-r border-border shadow-2xl z-50 md:hidden animate-slideIn">
            <div className="flex flex-col h-full pt-20 px-4">
              {navItems.map((item, index) => (
                <Button
                  key={item.name}
                  variant="ghost"
                  onClick={() => handleNavClick(item.href)}
                  className="justify-start text-lg mb-2 hover:bg-primary/10 hover:text-primary transition-all"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.name}
                </Button>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
