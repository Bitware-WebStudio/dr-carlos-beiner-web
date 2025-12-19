import { GraduationCap, Award, Users, HeartPulse } from 'lucide-react';
import CloudinaryImage from '@/react-app/components/CloudinaryImage';

export default function DoctorBio() {
  const credentials = [
    {
      icon: GraduationCap,
      title: 'Universidad Finis Terrae',
      description: 'Licenciado en Odontología, egresado 2009'
    },
    {
      icon: Award,
      title: '15 Años de Experiencia',
      description: 'Especializado en Cirugía Bucal'
    },
    {
      icon: Users,
      title: 'Atención Privada y Hospitalaria',
      description: 'Experiencia en urgencias dentales y maxilofaciales'
    },
    {
      icon: HeartPulse,
      title: 'Atención Personalizada',
      description: 'Cada paciente es único y recibe cuidado individualizado'
    }
  ];

  return (
    <section id="doctor" className="py-20 gradient-soft scroll-mt-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="font-display font-bold text-neutral-900 mb-6">
              Más que un dentista, un aliado en tu salud
            </h2>
            <p className="text-lg text-neutral-700 mb-6">
              Hola, soy Carlos Beiner. Entiendo que venir al dentista puede ponerte nervioso, y es totalmente normal.
              Por eso, mi compromiso es contigo: trato directo, honesto y sin tecnicismos complicados.
            </p>
            <p className="text-lg text-neutral-700 mb-8">
              No estoy aquí solo para "hacer cirugías", sino para resolver tu problema y devolverte la tranquilidad.
              Con más de 15 años de experiencia, te garantizo un procedimiento eficiente, seguro y, sobre todo, humano.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {credentials.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-white shadow-soft flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900">{item.title}</h4>
                      <p className="text-sm text-neutral-600">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="order-1 lg:order-2 relative flex justify-center">
            <div className="w-64 md:w-72 lg:w-80 aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
              <CloudinaryImage
                src="https://res.cloudinary.com/dvofqghc7/image/upload/v1765850709/Gemini_Generated_Image_wckr7qwckr7qwckr_n6dxba.png"
                alt="Dr. Carlos Beiner Mangiamarchi"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 right-4 md:right-8 lg:-right-2 bg-white rounded-2xl shadow-xl p-4 md:p-6">
              <p className="text-2xl md:text-3xl font-bold text-primary mb-1">15+</p>
              <p className="text-neutral-600 text-sm md:text-base">Años de Experiencia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
