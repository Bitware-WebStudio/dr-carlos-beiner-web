import Image from 'next/image';
import { GraduationCap, Award, Users, HeartPulse } from 'lucide-react';

export default function DoctorBio() {
    const credentials = [
        {
            icon: GraduationCap,
            title: 'Universidad Finis Terrae',
            description: 'Licenciado en Odontología, egresado 2009'
        },
        {
            icon: Award,
            title: 'Cirugía Bucal',
            description: 'Especialista con dedicación exclusiva'
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
                            No estoy aquí solo para &quot;hacer cirugías&quot;, sino para resolver tu problema y devolverte la tranquilidad.
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

                    <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end py-12 px-4">
                        {/* Decorative blob behind */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-blue-100/50 rounded-full blur-3xl -z-10" />

                        <div className="relative w-72 md:w-80 lg:w-[360px]">
                            {/* Stacked Photos Effect */}
                            <div className="absolute inset-0 bg-white rounded-xl shadow-md transform -rotate-6 translate-x-4 translate-y-4 border border-neutral-100 z-0" />
                            <div className="absolute inset-0 bg-white rounded-xl shadow-md transform rotate-3 translate-x-2 -translate-y-2 border border-neutral-100 z-0" />

                            {/* Main Polaroid */}
                            <div className="relative bg-white rounded-lg shadow-2xl p-4 pb-20 transform -rotate-2 hover:rotate-0 transition-all duration-500 z-10 border border-neutral-100">
                                <div className="aspect-[3/4] relative overflow-hidden rounded-md bg-neutral-100">
                                    <Image
                                        src="https://res.cloudinary.com/dvofqghc7/image/upload/v1765850709/Gemini_Generated_Image_wckr7qwckr7qwckr_n6dxba.png"
                                        alt="Dr. Carlos Beiner Mangiamarchi"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 h-20 flex items-center justify-center">
                                    <p className="font-display font-bold text-xl text-neutral-800">
                                        Dr. Carlos Beiner
                                    </p>
                                </div>
                            </div>

                            {/* Glassmorphism Experience Card */}
                            <div className="absolute bottom-24 -right-6 md:-right-12 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 flex items-center gap-4 animate-fade-in-up hover:scale-105 transition-transform duration-300 z-20">
                                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                                    <Award className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <p className="text-3xl font-bold text-neutral-900 leading-none mb-1">15+</p>
                                    <p className="text-neutral-600 text-sm font-medium leading-tight">Años de<br />Experiencia</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
