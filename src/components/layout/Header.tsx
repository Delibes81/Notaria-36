import React, { useState, useEffect } from 'react';
import { navItems } from '../../data/navigation';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { Menu, X, Scale, Globe } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen ? 'bg-white shadow-md py-2' : 'bg-transparent py-6'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Scale className="h-8 w-8 text-primary-700" />
            <div className="ml-3 flex flex-col">
              <span className="text-lg font-heading font-bold text-primary-900">Notaría</span>
              <span className="text-sm text-gold-700">Polanco</span>
            </div>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a 
                    href={item.href}
                    className={`text-sm font-medium transition-colors hover:text-primary-700 ${
                      isScrolled || mobileMenuOpen ? 'text-primary-900' : 'text-white'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden items-center space-x-4 md:flex">
            <a href="#" className={`flex items-center text-sm font-medium transition-colors hover:text-primary-700 ${
              isScrolled || mobileMenuOpen ? 'text-primary-900' : 'text-white'
            }`}>
              <Globe className="mr-1 h-4 w-4" />
              <span>EN</span>
            </a>
            <Button size="sm" variant="secondary">
              Agendar Cita
            </Button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled || mobileMenuOpen ? 'text-primary-900' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled || mobileMenuOpen ? 'text-primary-900' : 'text-white'}`} />
            )}
          </button>
        </div>
      </Container>

      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white">
          <Container>
            <nav className="mt-4 pb-6">
              <ul className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a 
                      href={item.href}
                      className="block text-base font-medium text-primary-900"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
                <li className="pt-2">
                  <Button size="sm" variant="secondary" className="w-full">
                    Agendar Cita
                  </Button>
                </li>
                <li>
                  <a href="#" className="flex items-center text-sm font-medium text-primary-900">
                    <Globe className="mr-1 h-4 w-4" />
                    <span>EN</span>
                  </a>
                </li>
              </ul>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
};

export default Header;