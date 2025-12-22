// Versión 1.0.7 - Added padding to footer to prevent overlap with sticky CTA
export const CONTACT_INFO = {
    whatsappNumber: '56933850580', // +56 9 3385 0580
    bookingUrl: 'https://dentalink.cl/agendar', // Placeholder: {{BOOKING_URL}}
    whatsappMessage: encodeURIComponent('Hola Dr. Carlos, te contacto desde tu página web para solicitar más información sobre una atención...'),
    evaluationMessage: encodeURIComponent('Hola, me comunico desde su sitio web. Me gustaría agendar una evaluación dental con el Dr. Carlos Beiner.'),
    googleMapsUrl: 'https://maps.google.com/?q=Dr+Carlos+Beiner', // Placeholder: {{MAPS_URL}}
};

export const PLACEHOLDERS = {
    rating: '4.9', // Placeholder: {{RATING_SCORE}}
    metro: 'A pasos del Metro Pedro de Valdivia', // Placeholder: {{METRO_DETAILS}}
    parking: 'Estacionamientos públicos cercanos', // Placeholder: {{PARKING_DETAILS}}
    heroVideo: 'https://res.cloudinary.com/dvofqghc7/video/upload/q_auto,f_auto/v1766003065/banner2dentista_johzga.mp4', // Placeholder: {{HERO_VIDEO_URL}}
    videoPoster: 'https://res.cloudinary.com/dvofqghc7/video/upload/so_0,f_jpg,q_auto/v1766003065/banner2dentista_johzga.jpg', // Primer frame del video

    financing: [
        { name: '12 Cuotas sin interés', icon: 'credit-card' }, // Placeholder: {{FINANCING_ICONS}}
        { name: 'Seguros Dentales', icon: 'shield' },
        { name: 'Todo medio de pago', icon: 'wallet' }
    ]
};
