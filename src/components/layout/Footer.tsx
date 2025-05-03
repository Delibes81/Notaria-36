import React from 'react';
import Container from '../ui/Container';
import { footerLinks } from '../../data/navigation';
import { Scale, MapPin, Phone, Mail, Clock, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary-950 text-white">
      <Container>
        <div className="grid grid-cols-1 gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center">
              <Scale className="h-8 w-8 text-gold-500" />
              <div className="ml-3 flex flex-col">
                <span className="text-lg font-heading font-bold">Notaría</span>
                <span className="text-sm text-gold-500">Polanco</span>
              </div>
            </div>
            <p className="mt-4 text-neutral-300">
              Ofrecemos servicios notariales de la más alta calidad, brindando certeza jurídica y atención personalizada en cada trámite.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-neutral-300 hover:text-gold-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-neutral-300 hover:text-gold-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-neutral-300 hover:text-gold-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-neutral-300 hover:text-gold-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 font-heading">Servicios Principales</h3>
            <ul className="space-y-2">
              <li><a href="#servicios" className="text-neutral-300 hover:text-gold-500 transition-colors">Compraventa de Inmuebles</a></li>
              <li><a href="#servicios" className="text-neutral-300 hover:text-gold-500 transition-colors">Testamentos</a></li>
              <li><a href="#servicios" className="text-neutral-300 hover:text-gold-500 transition-colors">Constitución de Sociedades</a></li>
              <li><a href="#servicios" className="text-neutral-300 hover:text-gold-500 transition-colors">Poderes Notariales</a></li>
              <li><a href="#servicios" className="text-neutral-300 hover:text-gold-500 transition-colors">Trámites Sucesorios</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 font-heading">Enlaces Útiles</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    className="text-neutral-300 hover:text-gold-500 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li><a href="#nosotros" className="text-neutral-300 hover:text-gold-500 transition-colors">Sobre Nosotros</a></li>
              <li><a href="#contacto" className="text-neutral-300 hover:text-gold-500 transition-colors">Contacto</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 font-heading">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex">
                <MapPin className="mr-2 h-5 w-5 flex-shrink-0 text-gold-500" />
                <span className="text-neutral-300">Av. Presidente Masaryk 123, Polanco, Miguel Hidalgo, CDMX, 11560</span>
              </li>
              <li className="flex">
                <Phone className="mr-2 h-5 w-5 flex-shrink-0 text-gold-500" />
                <span className="text-neutral-300">+52 (55) 5123-4567</span>
              </li>
              <li className="flex">
                <Mail className="mr-2 h-5 w-5 flex-shrink-0 text-gold-500" />
                <span className="text-neutral-300">contacto@notariapolanco.com</span>
              </li>
              <li className="flex">
                <Clock className="mr-2 h-5 w-5 flex-shrink-0 text-gold-500" />
                <span className="text-neutral-300">Lun - Vie: 9:00 - 18:00</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-800 py-8 text-center text-sm text-neutral-400">
          <p>&copy; {currentYear} Notaría Polanco. Todos los derechos reservados.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;