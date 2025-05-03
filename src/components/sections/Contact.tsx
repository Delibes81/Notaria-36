import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contacto" className="bg-white py-20">
      <Container>
        <SectionTitle
          title="Contacto"
          subtitle="Estamos para atenderle. Contáctenos para agendar una cita o resolver cualquier duda."
          centered
        />

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2"
        >
          <div className="rounded-lg bg-primary-50 p-6 shadow-md">
            <h3 className="font-heading text-2xl font-semibold text-primary-900">
              Información de Contacto
            </h3>
            
            <div className="mt-6 space-y-4">
              <div className="flex items-start">
                <div className="mr-4 rounded-full bg-primary-100 p-2">
                  <MapPin className="h-5 w-5 text-primary-700" />
                </div>
                <div>
                  <h4 className="font-medium text-primary-900">Dirección</h4>
                  <p className="mt-1 text-neutral-600">
                    Av. Presidente Masaryk 123<br />
                    Polanco, Miguel Hidalgo<br />
                    Ciudad de México, 11560
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 rounded-full bg-primary-100 p-2">
                  <Phone className="h-5 w-5 text-primary-700" />
                </div>
                <div>
                  <h4 className="font-medium text-primary-900">Teléfono</h4>
                  <p className="mt-1 text-neutral-600">+52 (55) 5123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 rounded-full bg-primary-100 p-2">
                  <Mail className="h-5 w-5 text-primary-700" />
                </div>
                <div>
                  <h4 className="font-medium text-primary-900">Correo Electrónico</h4>
                  <p className="mt-1 text-neutral-600">contacto@notariapolanco.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 rounded-full bg-primary-100 p-2">
                  <Clock className="h-5 w-5 text-primary-700" />
                </div>
                <div>
                  <h4 className="font-medium text-primary-900">Horario de Atención</h4>
                  <p className="mt-1 text-neutral-600">
                    Lunes a Viernes: 9:00 - 18:00<br />
                    Sábados: 9:00 - 13:00
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.4725385066917!2d-99.19771668509764!3d19.43231968688435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d201fc0a5ced7f%3A0xd1e254d8c5648811!2sAv.%20Pdte.%20Masaryk%2C%20Polanco%2C%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1632156359572!5m2!1ses-419!2smx"
                className="h-64 w-full rounded-lg"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Ubicación de la Notaría"
              ></iframe>
            </div>
          </div>
          
          <div className="rounded-lg bg-white p-6 shadow-md">
            <h3 className="font-heading text-2xl font-semibold text-primary-900">
              Envíenos un Mensaje
            </h3>
            
            <form className="mt-6">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-700">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full rounded-md border border-neutral-300 px-3 py-2 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                    placeholder="Su nombre"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full rounded-md border border-neutral-300 px-3 py-2 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                    placeholder="su.correo@ejemplo.com"
                  />
                </div>
              </div>
              
              <div className="mt-4">
                <label htmlFor="phone" className="block text-sm font-medium text-neutral-700">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="mt-1 block w-full rounded-md border border-neutral-300 px-3 py-2 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                  placeholder="(55) 1234-5678"
                />
              </div>
              
              <div className="mt-4">
                <label htmlFor="service" className="block text-sm font-medium text-neutral-700">
                  Servicio de Interés
                </label>
                <select
                  id="service"
                  className="mt-1 block w-full rounded-md border border-neutral-300 bg-white px-3 py-2 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                >
                  <option value="">Seleccione un servicio</option>
                  <option value="compraventa">Compraventa de Inmuebles</option>
                  <option value="testamentos">Testamentos</option>
                  <option value="sociedades">Constitución de Sociedades</option>
                  <option value="poderes">Poderes Notariales</option>
                  <option value="tramites">Trámites Sucesorios</option>
                  <option value="asesoria">Asesoría Patrimonial</option>
                  <option value="otros">Otros</option>
                </select>
              </div>
              
              <div className="mt-4">
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border border-neutral-300 px-3 py-2 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                  placeholder="Escriba su mensaje aquí..."
                ></textarea>
              </div>
              
              <div className="mt-6">
                <Button variant="secondary" className="w-full">
                  Enviar Mensaje
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </form>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Contact;