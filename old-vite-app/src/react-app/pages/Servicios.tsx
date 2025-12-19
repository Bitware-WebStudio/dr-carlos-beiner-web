import Header from '@/react-app/components/Header';
import Footer from '@/react-app/components/Footer';
import WhatsAppButton from '@/react-app/components/WhatsAppButton';
import AppointmentCTA from '@/react-app/components/AppointmentCTA';
import { Scissors, Siren, Drill } from 'lucide-react';
import { Link } from 'react-router';

export default function Servicios() {
  const services = [
    {
      icon: Scissors,
      title: 'Muelas del Juicio',
      description: 'Resolvemos tu dolor o molestia con una intervención rápida y recuperación acelerada.',
      href: '/tratamientos/muelas-del-juicio',
      details: [
        'Extracción segura y sin dolor',
        'Evaluación clínica con Rayos X',
        'Cirugía mínimamente invasiva',
        'Recuperación post-operatoria guiada'
      ]
    },
    {
      icon: Siren,
      title: 'Urgencias Dentales',
      description: 'Si te duele, te atendemos hoy. Alivio inmediato y solución concreta para tu emergencia.',
      href: '/tratamientos/urgencias-dentales',
      details: [
        'Atención prioritaria inmediata',
        'Alivio del dolor agudo hoy',
        'Tratamiento de traumatismos',
        'Diagnóstico y solución rápida'
      ],
      urgent: true
    },
    {
      icon: Drill,
      title: 'Implantología',
      description: 'Vuelve a sonreír y comer con confianza. Resultados definitivos y naturales con tecnología digital.',
      href: '/tratamientos/implantes',
      details: [
        'Implantes de titanio premium',
        'Planificación digital avanzada',
        'Cirugía guiada precisa',
        'Resultados duraderos y naturales'
      ]
    }
  ];


  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="pt-32 pb-20 gradient-soft">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-display font-bold text-neutral-900 mb-6">
                Nuestros Servicios
              </h1>
              <p className="text-xl text-neutral-700">
                Atención dental integral con tecnología de punta y más de 15 años de experiencia
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Link key={index} to={service.href} className="card relative flex flex-col h-full group hover:border-primary transition-all">
                    {service.urgent && (
                      <span className="absolute top-4 right-4 bg-red-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                        Urgencia
                      </span>
                    )}
                    <div className="w-14 h-14 rounded-2xl bg-primary-50 text-primary flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="font-display font-semibold text-xl text-neutral-900 mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-neutral-600 mb-4">
                      {service.description}
                    </p>
                    <ul className="space-y-2 flex-1">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start text-sm text-neutral-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2 mt-1.5 flex-shrink-0"></span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                    <span className="mt-4 text-primary font-semibold text-sm group-hover:underline">Ver más →</span>
                  </Link>
                );
              })}
            </div>

          </div>
        </section>

        <AppointmentCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
