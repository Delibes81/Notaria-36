import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import { team } from '../../data/team';

const Team: React.FC = () => {
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
    <section id="equipo" className="bg-white py-20">
      <Container>
        <SectionTitle
          title="Nuestro Equipo"
          subtitle="Profesionales con amplia experiencia en el ámbito notarial"
          centered
        />

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {team.map((member) => (
            <motion.div
              key={member.id}
              variants={item}
              className="group overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-lg"
            >
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-64 w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950/70 to-transparent" />
              </div>
              
              <div className="p-6">
                <h3 className="font-heading text-xl font-semibold text-primary-900">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-gold-700">
                  {member.position}
                </p>
                <p className="mt-4 text-sm text-neutral-600 line-clamp-4">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default Team;