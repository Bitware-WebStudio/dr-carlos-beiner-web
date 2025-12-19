import Header from '@/react-app/components/Header';
import Footer from '@/react-app/components/Footer';
import WhatsAppButton from '@/react-app/components/WhatsAppButton';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, Navigation, Sparkles } from 'lucide-react';
import { CONTACT_INFO } from '@/react-app/utils/constants';

export default function Contacto() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section with gradient background */}
        <section className="relative pt-40 pb-24 overflow-hidden">
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-600 to-secondary"></div>
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-white" />
                <span className="text-white font-medium text-sm">Atención personalizada</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
                ¿Cómo podemos <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">ayudarte?</span>
              </h1>
              <p className="text-xl text-white/90 max-w-xl mx-auto">
                Estamos aquí para resolver tus dudas y acompañarte en cada paso de tu tratamiento
              </p>
            </div>
          </div>

          {/* Wave divider */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
              <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z" fill="white" />
            </svg>
          </div>
        </section>

        {/* Contact Cards Section */}
        <section className="py-16 bg-white -mt-1">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {/* WhatsApp Card */}
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${CONTACT_INFO.whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-gradient-to-br from-green-50 to-green-100/50 rounded-3xl p-8 text-center hover:shadow-xl hover:shadow-green-100 transition-all duration-500 hover:-translate-y-2 border border-green-100"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-green-400/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 text-white flex items-center justify-center mb-5 mx-auto shadow-lg shadow-green-200 group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle className="w-8 h-8" />
                </div>
                <h3 className="font-display font-bold text-xl text-neutral-900 mb-2">
                  WhatsApp
                </h3>
                <p className="text-green-600 font-semibold mb-1">
                  Respuesta inmediata
                </p>
                <p className="text-neutral-500 text-sm">
                  Escríbenos ahora
                </p>
              </a>

              {/* Phone Card */}
              <a
                href={`tel:${CONTACT_INFO.whatsappNumber}`}
                className="group relative bg-gradient-to-br from-primary-50 to-blue-100/50 rounded-3xl p-8 text-center hover:shadow-xl hover:shadow-primary-100 transition-all duration-500 hover:-translate-y-2 border border-primary-100"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-600 text-white flex items-center justify-center mb-5 mx-auto shadow-lg shadow-primary-200 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-8 h-8" />
                </div>
                <h3 className="font-display font-bold text-xl text-neutral-900 mb-2">
                  Teléfono
                </h3>
                <p className="text-primary font-semibold mb-1">
                  +56 9 3385 0580
                </p>
                <p className="text-neutral-500 text-sm">
                  Llámanos directamente
                </p>
              </a>

              {/* Email Card */}
              <a
                href="mailto:carlosbeiner@gmail.com"
                className="group relative bg-gradient-to-br from-secondary-50 to-teal-100/50 rounded-3xl p-8 text-center hover:shadow-xl hover:shadow-secondary-100 transition-all duration-500 hover:-translate-y-2 border border-secondary-100"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-secondary/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-secondary-600 text-white flex items-center justify-center mb-5 mx-auto shadow-lg shadow-secondary-200 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-8 h-8" />
                </div>
                <h3 className="font-display font-bold text-xl text-neutral-900 mb-2">
                  Email
                </h3>
                <p className="text-secondary font-semibold mb-1 text-sm">
                  carlosbeiner@gmail.com
                </p>
                <p className="text-neutral-500 text-sm">
                  Te respondemos pronto
                </p>
              </a>

              {/* Hours Card */}
              <div className="group relative bg-gradient-to-br from-amber-50 to-orange-100/50 rounded-3xl p-8 text-center border border-amber-100">
                <div className="absolute top-0 right-0 w-20 h-20 bg-amber-400/10 rounded-full blur-2xl"></div>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 text-white flex items-center justify-center mb-5 mx-auto shadow-lg shadow-amber-200">
                  <Clock className="w-8 h-8" />
                </div>
                <h3 className="font-display font-bold text-xl text-neutral-900 mb-2">
                  Horarios
                </h3>
                <p className="text-amber-600 font-semibold mb-1 text-sm">
                  Lun - Vie: 9:00 a 20:00
                </p>
                <p className="text-neutral-500 text-sm">
                  Sáb: 9:00 a 13:00
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Location & Map Section */}
        <section className="py-20 bg-gradient-to-b from-white to-neutral-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-4">
                  Encuéntranos
                </h2>
                <p className="text-lg text-neutral-600">
                  Ubicación privilegiada en el corazón de Providencia
                </p>
              </div>

              <div className="grid lg:grid-cols-5 gap-8">
                {/* Info Card */}
                <div className="lg:col-span-2 space-y-6">
                  <div className="bg-white rounded-3xl p-8 shadow-soft border border-neutral-100">
                    <div className="flex items-start space-x-4 mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary-200">
                        <MapPin className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-xl text-neutral-900 mb-2">
                          Dirección
                        </h3>
                        <p className="text-neutral-700 leading-relaxed">
                          Nueva Providencia 1860<br />
                          Providencia, Santiago
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-secondary to-secondary-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-secondary-200">
                        <Navigation className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-xl text-neutral-900 mb-2">
                          Cómo Llegar
                        </h3>
                        <p className="text-neutral-700 leading-relaxed">
                          A pasos del Metro Pedro de Valdivia<br />
                          <span className="text-neutral-500 text-sm">Línea 1 - Salida Av. Providencia</span>
                        </p>
                      </div>
                    </div>

                    <a
                      href="https://maps.google.com/maps?q=Av.+Nueva+Providencia+1860,+Providencia"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary w-full flex items-center justify-center space-x-2 text-lg"
                    >
                      <Navigation className="w-5 h-5" />
                      <span>Abrir en Google Maps</span>
                    </a>
                  </div>

                  {/* Quick Contact CTA */}
                  <div className="bg-gradient-to-br from-primary to-primary-600 rounded-3xl p-8 text-white">
                    <h3 className="font-display font-bold text-xl mb-3">
                      ¿Primera visita?
                    </h3>
                    <p className="text-white/90 mb-6">
                      Agenda tu evaluación gratuita y conoce las opciones de tratamiento
                    </p>
                    <a
                      href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${CONTACT_INFO.whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-primary font-bold py-3 px-6 rounded-full inline-flex items-center space-x-2 hover:bg-neutral-100 transition-colors"
                    >
                      <Send className="w-5 h-5" />
                      <span>Agendar Ahora</span>
                    </a>
                  </div>
                </div>

                {/* Map */}
                <div className="lg:col-span-3">
                  <div className="bg-white rounded-3xl overflow-hidden shadow-soft border border-neutral-100 h-[500px]">
                    <iframe
                      src="https://maps.google.com/maps?q=Av.+Nueva+Providencia+1860,+Providencia&t=&z=17&ie=UTF8&iwloc=&output=embed"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Ubicación del consultorio"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
