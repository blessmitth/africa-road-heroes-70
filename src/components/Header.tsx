import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center h-28 relative">
          {/* Centered Navigation with Logo */}
          <nav className="hidden md:flex items-center space-x-4">
            <a href="/" className="font-poppins font-bold text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="/services" className="font-poppins font-bold text-foreground hover:text-primary transition-colors">
              Services
            </a>
            
            {/* Logo in center of navigation */}
            <div className="mx-6">
              <img 
                src="/lovable-uploads/039fa20f-a5d3-4af2-8cf9-fa52a81183ba.png" 
                alt="Ultimate Trucking Solutions" 
                className="h-24 w-24 rounded-full object-cover hover:scale-110 transition-transform duration-500 shadow-lg border-3 border-primary/30 animate-pulse hover:animate-none"
              />
            </div>
            
            <a href="/about" className="font-poppins font-bold text-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="/contact" className="font-poppins font-bold text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          {/* Mobile Logo and CTA Button & Menu Toggle */}
          <div className="md:hidden flex items-center justify-between w-full">
            <img 
              src="/lovable-uploads/039fa20f-a5d3-4af2-8cf9-fa52a81183ba.png" 
              alt="Ultimate Trucking Solutions" 
              className="h-16 w-16 rounded-full object-cover hover:scale-110 transition-transform duration-500 shadow-lg border-2 border-primary/30 animate-pulse hover:animate-none"
            />
            <div className="flex items-center space-x-2">
              <Button 
                variant="cta" 
                size="lg" 
                className="font-poppins"
                onClick={() => window.open('tel:+0026771669889')}
              >
                <Phone className="w-4 h-4" />
                Call
              </Button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-foreground hover:text-primary"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-28 left-0 right-0 bg-white border-b border-border shadow-lg">
            <nav className="flex flex-col space-y-4 p-4">
              <a href="/" className="font-poppins text-foreground hover:text-primary transition-colors">
                Home
              </a>
              <a href="/services" className="font-poppins text-foreground hover:text-primary transition-colors">
                Services
              </a>
              <a href="/about" className="font-poppins text-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="/contact" className="font-poppins text-foreground hover:text-primary transition-colors">
                Contact
              </a>
              <Button 
                variant="cta" 
                size="default" 
                className="font-poppins w-full"
                onClick={() => window.open('tel:+0026771669889')}
              >
                <Phone className="w-4 h-4" />
                Call Now
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;