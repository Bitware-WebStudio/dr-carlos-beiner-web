import { useState, useEffect } from 'react';
import CloudinaryImage from '@/react-app/components/CloudinaryImage';
import { Link, useLocation } from 'react-router';
import { Menu, X, Phone } from 'lucide-react';
import { CONTACT_INFO } from '@/react-app/utils/constants';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navigation = [
    { name: 'Inicio', href: '/' },
    { name: 'Servicios', href: '/#servicios' },
    { name: 'Sobre el Doctor', href: '/#doctor' },
    { name: 'Galería', href: '/#galeria' },
    { name: 'Ubicación', href: '/#ubicacion' },
    { name: 'Contacto', href: '/contacto' },
  ];



  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-soft' : 'bg-white'
      }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-28">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-80 h-28 flex items-center justify-start">
              <CloudinaryImage
                src="https://res.cloudinary.com/dvofqghc7/image/upload/v1765850490/Gemini_Generated_Image_65t8365t8365t836_sbkwfr.png"
                alt="Logo Dr. Carlos Beiner"
                className="w-full h-full object-contain object-left"
              />
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => {
              // Si es el botón de Inicio y no estamos en home, usar Link
              if (item.href === '/' && location.pathname !== '/') {
                return (
                  <Link
                    key={item.name}
                    to="/"
                    className="text-neutral-700 hover:text-primary font-medium transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                );
              }

              // Para otros casos, usar <a> con onClick
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    if (item.href === '/') {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    } else if (item.href.startsWith('/#')) {
                      const id = item.href.substring(2);
                      const element = document.getElementById(id);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      } else {
                        // Si el elemento no existe, navegar a home con el hash
                        window.location.href = item.href;
                      }
                    } else {
                      window.location.href = item.href;
                    }
                  }}
                  className="text-neutral-700 hover:text-primary font-medium transition-colors duration-200 cursor-pointer"
                >
                  {item.name}
                </a>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${CONTACT_INFO.whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span>Agendar por WhatsApp</span>
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-neutral-700 hover:text-primary transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white border-t border-neutral-100">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navigation.map((item) => {
              // Si es el botón de Inicio y no estamos en home, usar Link
              if (item.href === '/' && location.pathname !== '/') {
                return (
                  <Link
                    key={item.name}
                    to="/"
                    onClick={() => setIsOpen(false)}
                    className="text-neutral-700 hover:text-primary font-medium transition-colors duration-200 py-2"
                  >
                    {item.name}
                  </Link>
                );
              }

              // Para otros casos, usar <a> con onClick
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsOpen(false);
                    if (item.href === '/') {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    } else if (item.href.startsWith('/#')) {
                      const id = item.href.substring(2);
                      const element = document.getElementById(id);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      } else {
                        window.location.href = item.href;
                      }
                    } else {
                      window.location.href = item.href;
                    }
                  }}
                  className="text-neutral-700 hover:text-primary font-medium transition-colors duration-200 py-2 cursor-pointer"
                >
                  {item.name}
                </a>
              );
            })}
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${CONTACT_INFO.whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center justify-center space-x-2 mt-4"
            >
              <Phone className="w-4 h-4" />
              <span>Agendar por WhatsApp</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
