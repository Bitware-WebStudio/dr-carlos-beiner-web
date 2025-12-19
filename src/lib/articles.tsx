// All 18+ articles data structure
// We'll store metadata here. Content will be matched by slug in the page component.
export const ARTICLES_DATA: Record<string, Record<string, {
    title: string;
    description: string;
    schema?: unknown;
}>> = {
    'muelas-del-juicio': {
        'si-no-duelen': {
            title: '¿Si no me duelen las muelas del juicio, debo sacarlas? | Dr. Carlos Beiner',
            description: 'La verdad sobre por qué muchas veces es mejor actuar antes de que duela. Explicación clara y profesional del Dr. Carlos Beiner.',
        },
        'cuanto-dura-hinchazon': {
            title: '¿Cuánto dura la hinchazón después de sacar las muelas del juicio?',
            description: 'Conoce los tiempos reales de recuperación y cómo manejar la inflamación post-operatoria.',
        },
        'fumar-vapear': {
            title: '¿Cuándo puedo volver a fumar o vapear después de la extracción?',
            description: 'Guía esencial para evitar complicaciones como la alveolitis seca después de una cirugía de muelas del juicio.',
        },
        '4-muelas-misma-sesion': {
            title: '¿Se pueden sacar las 4 muelas del juicio en una sola sesión?',
            description: 'Descubre los beneficios y consideraciones de extraer todos los terceros molares en una sola intervención.',
        },
        'riesgo-sensibilidad': {
            title: '¿Existe riesgo de perder la sensibilidad en el labio?',
            description: 'Explicamos con honestidad los riesgos neurológicos y cómo los minimizamos con tecnología 3D.',
        },
        'recuperacion-rapida': {
            title: '¿Cómo tener una recuperación más rápida de las muelas del juicio?',
            description: 'Los 10 mejores consejos post-operatorios para volver a tu rutina lo antes posible.',
        }
    },
    'urgencias-dentales': {
        'es-urgencia-real': {
            title: '¿Cómo saber si mi dolor dental es una urgencia real?',
            description: 'Aprende a identificar cuándo un dolor dental requiere atención inmediata o puede esperar.',
        },
        'cara-hinchada-antibioticos': {
            title: 'Cara hinchada: ¿Puedo tomar antibióticos sin receta?',
            description: 'Por qué auto-medicarse puede ser peligroso y qué pasos seguir ante una inflamación facial.',
        },
        'dolor-nocturno': {
            title: 'Dolor dental nocturno: ¿Cuándo es grave?',
            description: 'El dolor que aumenta al acostarse suele indicar problemas específicos que requieren atención urgente.',
        },
        'siempre-sacan-diente': {
            title: '¿En una urgencia dental siempre sacan el diente?',
            description: 'Nuestra prioridad es conservar tus piezas dentales. Conoce los tratamientos de rescate.',
        },
        'diente-caido-golpe': {
            title: 'Se me cayó un diente por un golpe, ¿todavía se puede salvar?',
            description: 'Acciones críticas que debes tomar en los primeros 60 minutos para salvar un diente avulsionado.',
        },
        'infeccion-cuanto-esperar': {
            title: 'Infección dental: ¿Cuánto tiempo puedo esperar para ir al dentista?',
            description: 'Los riesgos de ignorar una infección dental y cómo evitar complicaciones sistémicas graves.',
        }
    },
    'implantes': {
        'costo-implantes': {
            title: '¿Cuánto cuesta un implante dental en Chile? Guía Completa',
            description: 'Análisis detallado de precios, calidad de materiales y opciones de financiamiento para tu tratamiento.',
        },
        'diferencia-implante-puente-protesis': {
            title: 'Diferencia entre implante, puente y prótesis dental',
            description: 'Comparamos las 3 soluciones principales para reponer dientes perdidos.',
        },
        'quedare-sin-dientes': {
            title: '¿Quedaré sin dientes durante el tratamiento de implantes?',
            description: 'Cómo gestionamos la estética durante todo el proceso de cicatrización para que nunca dejes de sonreír.',
        },
        'puede-rechazar': {
            title: '¿Un implante dental se puede rechazar? Mitos y Realidades',
            description: 'La verdad sobre la oseointegración y las bajísimas probabilidades de fracaso del tratamiento.',
        },
        'duele-ponerse': {
            title: '¿Duele ponerse un implante dental? La verdad sobre el procedimiento',
            description: 'Descubre por qué la cirugía de implantes es más cómoda y predecible de lo que imaginas.',
        },
        'cuanto-duran': {
            title: '¿Cuánto tiempo duran realmente los implantes dentales?',
            description: 'Factores que determinan la longevidad de un implante y consejos para que dure toda la vida.',
        }
    }
};

// Get all article slugs for each treatment
export function getArticleSlugs(treatmentSlug: string): string[] {
    return Object.keys(ARTICLES_DATA[treatmentSlug] || {});
}

// Get all possible combinations for generateStaticParams
export function getAllArticlePaths() {
    const paths: Array<{ slug: string; articleSlug: string }> = [];

    Object.keys(ARTICLES_DATA).forEach(treatmentSlug => {
        const articleSlugs = getArticleSlugs(treatmentSlug);
        articleSlugs.forEach(articleSlug => {
            paths.push({ slug: treatmentSlug, articleSlug });
        });
    });

    return paths;
}
