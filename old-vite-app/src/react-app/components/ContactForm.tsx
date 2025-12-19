import { useState } from 'react';
import { Mail, User, Phone, MessageSquare, Send } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappNumber = '56933850580';
    const message = `Hola Dr. Carlos,\n\nNombre: ${formData.name}\nEmail: ${formData.email}\nTeléfono: ${formData.phone}\n\nMensaje: ${formData.message}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-neutral-900 mb-4">
              Contáctanos
            </h2>
            <p className="text-lg text-neutral-600">
              Envíanos un mensaje y te responderemos a la brevedad
            </p>
          </div>

          <form onSubmit={handleSubmit} className="card space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>Nombre completo</span>
                </div>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                placeholder="Juan Pérez"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4" />
                    <span>Correo electrónico</span>
                  </div>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="juan@ejemplo.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4" />
                    <span>Teléfono</span>
                  </div>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="+56 9 3385 0580"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                <div className="flex items-center space-x-2">
                  <MessageSquare className="w-4 h-4" />
                  <span>Mensaje</span>
                </div>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                placeholder="Cuéntanos cómo podemos ayudarte..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn-primary w-full flex items-center justify-center space-x-2 text-lg"
            >
              <Send className="w-5 h-5" />
              <span>Enviar Mensaje por WhatsApp</span>
            </button>

            <p className="text-sm text-neutral-600 text-center">
              Al enviar, serás redirigido a WhatsApp para completar tu mensaje
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
