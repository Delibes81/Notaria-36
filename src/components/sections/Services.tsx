import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import { services } from '../../data/services';
import * as LucideIcons from 'lucide-react';

const Services: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="servicios" className="bg-white py-20">
      <Container>
        <SectionTitle
          title="Nuestros Servicios"
          subtitle="Ofrecemos una amplia gama de servicios notariales con la máxima garantía de seguridad jurídica"
          centered
        />

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => {
            // Dynamically get the icon component
            const IconComponent = LucideIcons[service.icon as keyof typeof LucideIcons];
            
            return (
              <motion.div
                key={service.id}
                variants={item}
                className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md"
              >
                <div className="mb-4 inline-flex rounded-full bg-primary-100 p-3 text-primary-700">
                  {IconComponent && <IconComponent className="h-6 w-6" />}
                </div>
                <h3 className="mb-3 font-heading text-xl font-semibold text-primary-900">
                  {service.title}
                </h3>
                <p className="text-neutral-600">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
};

export default Services;