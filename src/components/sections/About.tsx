import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import { Award, ShieldCheck, Users, Clock, ArrowRight } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="nosotros" className="bg-neutral-50 py-20">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <SectionTitle 
              title="Sobre Nuestra Notaría"
              subtitle="25 años brindando certeza jurídica"
            />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              ref={ref}
            >
              <p className="text-lg text-neutral-700">
                En Notaría Polanco nos dedicamos a brindar servicios notariales de la más alta calidad, 
                combinando experiencia, profesionalismo y atención personalizada para satisfacer las 
                necesidades legales de nuestros clientes.
              </p>
              
              <p className="mt-4 text-lg text-neutral-700">
                Ubicados en el corazón de Polanco, una de las zonas más exclusivas de la Ciudad de México, 
                nuestro despacho se distingue por ofrecer un servicio discreto y eficiente, asegurando 
                que cada trámite se realice con la máxima seguridad jurídica.
              </p>
              
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex items-start">
                  <div className="mr-4 rounded-full bg-primary-100 p-2">
                    <ShieldCheck className="h-5 w-5 text-primary-700" />
                  </div>
                  <div>
                    <h4 className="font-medium text-primary-900">Certeza Jurídica</h4>
                    <p className="mt-1 text-sm text-neutral-600">Garantizamos la seguridad legal en todos sus trámites</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 rounded-full bg-primary-100 p-2">
                    <Users className="h-5 w-5 text-primary-700" />
                  </div>
                  <div>
                    <h4 className="font-medium text-primary-900">Atención Personalizada</h4>
                    <p className="mt-1 text-sm text-neutral-600">Cada cliente recibe un servicio a su medida</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 rounded-full bg-primary-100 p-2">
                    <Award className="h-5 w-5 text-primary-700" />
                  </div>
                  <div>
                    <h4 className="font-medium text-primary-900">Excelencia</h4>
                    <p className="mt-1 text-sm text-neutral-600">Profesionalismo y calidad en cada servicio</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 rounded-full bg-primary-100 p-2">
                    <Clock className="h-5 w-5 text-primary-700" />
                  </div>
                  <div>
                    <h4 className="font-medium text-primary-900">Eficiencia</h4>
                    <p className="mt-1 text-sm text-neutral-600">Optimizamos tiempos sin comprometer calidad</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Button variant="primary">
                  Conocer más sobre nosotros
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="absolute -left-6 -top-6 h-72 w-72 rounded-full bg-primary-100" />
            <div className="absolute -bottom-8 -right-8 h-48 w-48 rounded-full bg-gold-100" />
            
            <div className="relative z-10 overflow-hidden rounded-lg shadow-xl">
              <img 
                src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Oficina de Notaría Polanco" 
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default About;