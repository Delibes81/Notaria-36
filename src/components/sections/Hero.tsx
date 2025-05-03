import React from 'react';
import { motion } from 'framer-motion';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen bg-primary-950 bg-hero-pattern bg-cover bg-center bg-no-repeat pt-24"
    >
      <div className="absolute inset-0 bg-primary-950/70" />
      
      <Container className="relative z-10 flex min-h-[calc(100vh-6rem)] flex-col items-start justify-center py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="font-heading text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            <span className="block">Servicios Notariales</span>
            <span className="block mt-2 text-gold-500">De Excelencia en Polanco</span>
          </h1>
          
          <p className="mt-6 text-lg leading-relaxed text-white/90 md:text-xl">
            Brindamos certeza jurídica y asesoría personalizada en todos sus trámites legales. 
            Más de 25 años de experiencia respaldando sus operaciones con el más alto estándar profesional.
          </p>
          
          <div className="mt-10 flex flex-wrap gap-4">
            <Button size="lg" variant="secondary">
              Nuestros Servicios
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Agendar una Consulta
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Hero;