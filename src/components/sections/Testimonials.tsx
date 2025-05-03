import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import { testimonials } from '../../data/testimonials';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonios" className="bg-primary-50 py-20">
      <Container>
        <SectionTitle
          title="Lo Que Dicen Nuestros Clientes"
          subtitle="Testimonios de quienes han confiado en nuestros servicios"
          centered
        />

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mt-12"
        >
          <div className="relative mx-auto max-w-4xl overflow-hidden rounded-lg bg-white p-6 shadow-md sm:p-10">
            <Quote className="absolute left-6 top-6 h-16 w-16 text-primary-100" />
            
            <div className="relative z-10">
              <div className="min-h-[12rem]">
                <p className="text-lg italic text-neutral-700 sm:text-xl">
                  "{testimonials[activeIndex].content}"
                </p>
              </div>
              
              <div className="mt-6 flex items-center">
                <img
                  src={testimonials[activeIndex].image}
                  alt={testimonials[activeIndex].name}
                  className="h-16 w-16 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-primary-900">
                    {testimonials[activeIndex].name}
                  </h4>
                  <p className="text-sm text-neutral-600">
                    {testimonials[activeIndex].role}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 flex justify-center space-x-4">
            <button
              onClick={prevTestimonial}
              className="rounded-full bg-white p-2 text-primary-700 shadow-md transition-all hover:bg-primary-50"
              aria-label="Testimonio anterior"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 w-2 rounded-full transition-all ${
                    index === activeIndex ? 'bg-gold-500 w-4' : 'bg-neutral-300'
                  }`}
                  aria-label={`Ir al testimonio ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="rounded-full bg-white p-2 text-primary-700 shadow-md transition-all hover:bg-primary-50"
              aria-label="Siguiente testimonio"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Testimonials;