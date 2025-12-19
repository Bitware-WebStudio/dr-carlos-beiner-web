import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, Siren, Drill, Scissors } from 'lucide-react';

export default function ServicesGrid() {
    const services = [
        {
            icon: Scissors,
            title: 'Muelas del Juicio',
            description: 'Resolvemos tu dolor o molestia con una intervención rápida y recuperación acelerada.',
            longDescription: 'Extracción segura y sin dolor de terceros molares. Evaluación clínica + diagnóstico con apoyo de Rayos X según indicación.',
            features: ['Cirugía mínimamente invasiva', 'Recuperación rápida', 'Sin dolor post-operatorio'],
            link: '/tratamientos/muelas-del-juicio',
            color: 'primary',
            technology: 'SCANNER 3D',
            image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&h=400&fit=crop'
        },
        {
            icon: Siren,
            title: 'Urgencias Dentales',
            description: 'Si te duele, te atendemos hoy. Alivio inmediato y solución concreta.',
            longDescription: 'Atención inmediata para emergencias. Dolor agudo, traumatismos, infecciones y más.',
            features: ['Atención prioritaria', 'Alivio inmediato', 'Diagnóstico rápido'],
            link: '/tratamientos/urgencias-dentales',
            color: 'secondary',
            badge: 'ATENCIÓN HOY',
            technology: 'SIN DOLOR',
            image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&h=400&fit=crop'
        },
        {
            icon: Drill,
            title: 'Implantes Dentales',
            description: 'Vuelve a sonreír y comer con confianza. Resultados definitivos y naturales.',
            longDescription: 'Recupera tu sonrisa con implantes de última generación. Procedimiento guiado digitalmente para resultados precisos.',
            features: ['Tecnología digital avanzada', 'Resultados duraderos', 'Aspecto natural'],
            link: '/tratamientos/implantes',
            color: 'support',
            technology: 'GUÍA DIGITAL',
            image: 'https://res.cloudinary.com/dvofqghc7/image/upload/v1766118317/ChatGPT_Image_19_dic_2025_01_24_56_zj7tkq.png'
        }
    ];

    const getColorClasses = (color: string) => {
        const colors = {
            primary: 'bg-primary-50 text-primary group-hover:bg-primary group-hover:text-white',
            secondary: 'bg-secondary-50 text-secondary group-hover:bg-secondary group-hover:text-white',
            support: 'bg-support-50 text-support group-hover:bg-support group-hover:text-white'
        };
        return colors[color as keyof typeof colors] || colors.primary;
    };

    return (
        <section id="servicios" className="py-20 bg-neutral-50 scroll-mt-32">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="font-display font-bold text-neutral-900 mb-4 text-3xl md:text-4xl">
                        Tratamientos Destacados
                    </h2>
                    <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                        Soluciones especializadas con tecnología de vanguardia
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <Link
                                key={index}
                                href={service.link}
                                className="card group hover:scale-102 cursor-pointer overflow-hidden p-0 transition-all duration-300 flex flex-col h-full"
                            >
                                <div className="relative h-48 overflow-hidden flex-shrink-0">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />

                                    {service.badge && (
                                        <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full font-bold text-xs shadow-lg uppercase tracking-wider">
                                            {service.badge}
                                        </div>
                                    )}

                                    <div className="absolute bottom-4 left-4">
                                        <div className={`w-14 h-14 rounded-xl ${getColorClasses(service.color)} shadow-lg flex items-center justify-center transition-all duration-300`}>
                                            <Icon className="w-7 h-7" />
                                        </div>
                                    </div>

                                    {service.technology && (
                                        <div className="absolute top-4 left-4">
                                            <span className="inline-flex items-center bg-white/95 backdrop-blur-sm text-neutral-700 text-[10px] font-bold px-3 py-1.5 rounded-full shadow-md uppercase tracking-wider">
                                                <Sparkles className="w-3 h-3 mr-1.5 text-primary" />
                                                {service.technology}
                                            </span>
                                        </div>
                                    )}
                                </div>

                                <div className="p-6 bg-white flex-1 flex flex-col">
                                    <h3 className="font-display font-bold text-2xl text-neutral-900 mb-3 group-hover:text-primary transition-colors">
                                        {service.title}
                                    </h3>

                                    <p className="text-neutral-600 mb-4 leading-relaxed">
                                        {service.longDescription}
                                    </p>

                                    <ul className="space-y-2 mb-4">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center text-sm text-neutral-700">
                                                <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2 flex-shrink-0"></span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="mt-auto pt-4 border-t border-neutral-100">
                                        <span className="font-bold text-sm text-primary group-hover:underline flex items-center">
                                            Ver detalles
                                            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
