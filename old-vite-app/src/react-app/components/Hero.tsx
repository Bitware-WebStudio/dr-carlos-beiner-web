import { Phone, MapPin, Award } from 'lucide-react';

export default function Hero() {
  const whatsappNumber = '56933850580';
  const whatsappMessage = encodeURIComponent('Hola Dr. Carlos, quiero agendar una evaluación...');

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      <div className="absolute inset-0 gradient-soft opacity-50"></div>

      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-primary-50 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <Award className="w-4 h-4" />
              <span>+15 años de experiencia</span>
            </div>

            <h1 className="font-display font-bold text-neutral-900 leading-tight">
              Dr. Carlos Beiner Mangiamarchi
            </h1>

            <p className="text-2xl text-neutral-700 font-medium">
              Cirujano Dentista en Providencia
            </p>

            <p className="text-lg text-neutral-600 max-w-xl">
              Licenciado en Odontología (Universidad Finis Terrae, 2009) con 15 años de experiencia
              en cirugía bucal, atención privada y hospitalaria. Especialista en urgencias dentales
              y maxilofaciales.
            </p>

            <div className="flex items-center space-x-3 text-neutral-700">
              <MapPin className="w-5 h-5 text-secondary flex-shrink-0" />
              <span>A pasos de Metro Pedro de Valdivia</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center justify-center space-x-2 text-lg"
              >
                <Phone className="w-5 h-5" />
                <span>Agendar Evaluación</span>
              </a>
              <a
                href="#servicios"
                className="btn-outline flex items-center justify-center text-lg"
              >
                Ver Servicios
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=800&fit=crop"
                alt="Consultorio dental moderno"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-neutral-900">Certificado</p>
                  <p className="text-sm text-neutral-600">Cirujano Dentista Especialista</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
