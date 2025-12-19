import CloudinaryImage from '@/react-app/components/CloudinaryImage';

export default function ClinicGallery() {
  const images = [
    {
      url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=400&fit=crop',
      alt: 'Sala de espera moderna'
    },
    {
      url: 'https://images.unsplash.com/photo-1631051103633-24959376b92d?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Equipamiento dental de última generación'
    },
    {
      url: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?w=600&h=400&fit=crop',
      alt: 'Área de atención dental'
    }
  ];

  return (
    <section id="galeria" className="py-20 bg-white scroll-mt-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-neutral-900 mb-4">
            Nuestras Instalaciones
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Un espacio moderno y confortable diseñado para tu bienestar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {images.map((image, index) => (
            <div
              key={index}
              className="aspect-square rounded-xl overflow-hidden shadow-soft hover:shadow-xl transition-shadow duration-300 group"
            >
              <CloudinaryImage
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-neutral-600">
            Tecnología de punta en un ambiente cálido y profesional
          </p>
        </div>
      </div>
    </section>
  );
}
