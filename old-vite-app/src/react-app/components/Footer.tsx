import { Link } from 'react-router';
import CloudinaryImage from '@/react-app/components/CloudinaryImage';
import { MapPin, Phone, Mail, Clock, Instagram } from 'lucide-react';

export default function Footer() {
  const whatsappNumber = '56933850580';

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-64 h-24 flex items-center justify-start bg-white rounded-2xl px-4 py-2">
                <CloudinaryImage
                  src="https://res.cloudinary.com/dvofqghc7/image/upload/v1765850490/Gemini_Generated_Image_65t8365t8365t836_sbkwfr.png"
                  alt="Logo Dr. Carlos Beiner"
                  className="w-full h-full object-contain object-left"
                />
              </div>
            </div>
            <p className="text-neutral-400 text-sm mb-4">
              Cirugía Bucal con más de 15 años de experiencia en Providencia.
            </p>
            <div className="flex space-x-3">
              <a href="https://www.instagram.com/dr._carlos_beiner_mangiamarchi/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-neutral-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-neutral-400 hover:text-white transition-colors">Inicio</Link></li>
              <li><Link to="/servicios" className="text-neutral-400 hover:text-white transition-colors">Servicios</Link></li>
              <li><Link to="/tratamientos/urgencias-dentales" className="text-neutral-400 hover:text-white transition-colors">Urgencias</Link></li>
              <li><Link to="/ubicacion" className="text-neutral-400 hover:text-white transition-colors">Ubicación</Link></li>
              <li><Link to="/contacto" className="text-neutral-400 hover:text-white transition-colors">Contacto</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                <span className="text-neutral-400 text-sm">
                  Nueva Providencia 1860<br />
                  Providencia, Santiago
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                <a href={`tel:${whatsappNumber}`} className="text-neutral-400 hover:text-white transition-colors text-sm">
                  +56 9 3385 0580
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                <a href="mailto:carlosbeiner@gmail.com" className="text-neutral-400 hover:text-white transition-colors text-sm">
                  carlosbeiner@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Horarios</h4>
            <div className="flex items-start space-x-3 mb-4">
              <Clock className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
              <div className="text-neutral-400 text-sm">
                <p className="mb-1">Lun - Vie: 9:00 a 20:00</p>
                <p>Sáb: 9:00 a 13:00</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-8 pt-8 text-center text-neutral-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Dr. Carlos Beiner Mangiamarchi. Todos los derechos reservados.</p>
          <p className="mt-2 text-xs">A pasos de Metro Pedro de Valdivia</p>
          <div className="mt-4 flex justify-center">
            <a href="https://webstudio.bitware-ai.cl/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-1 text-neutral-500 hover:text-secondary transition-colors text-xs">
              <span>Hecho por WebStudio con</span>
              <span className="text-pink-400">♥</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
