import Header from '@/react-app/components/Header';
import Footer from '@/react-app/components/Footer';
import WhatsAppButton from '@/react-app/components/WhatsAppButton';
import LocationMap from '@/react-app/components/LocationMap';
import AppointmentCTA from '@/react-app/components/AppointmentCTA';

export default function Ubicacion() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="pt-32 pb-12 gradient-soft">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-display font-bold text-neutral-900 mb-6">
                Visítanos
              </h1>
              <p className="text-xl text-neutral-700">
                En el corazón de Providencia, a pasos del Metro Pedro de Valdivia
              </p>
            </div>
          </div>
        </section>

        <LocationMap />
        <AppointmentCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
