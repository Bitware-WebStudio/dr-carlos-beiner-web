import { useEffect } from 'react';
import ArticleLayout from '@/react-app/components/ArticleLayout';

export default function DolorNocturnoCuandoEsGrave() {
    const breadcrumbs = [
        { label: 'Inicio', href: '/' },
        { label: 'Urgencias Dentales', href: '/tratamientos/urgencias-dentales' },
        { label: 'Dolor nocturno' }
    ];

    const backLink = {
        label: '← Volver a Urgencias Dentales',
        href: '/tratamientos/urgencias-dentales'
    };

    const relatedArticles = [
        { title: '¿Es urgencia real?', href: '/tratamientos/urgencias-dentales/guias/es-urgencia-real' },
        { title: '¿Siempre sacan el diente?', href: '/tratamientos/urgencias-dentales/guias/siempre-sacan-diente' }
    ];

    useEffect(() => {
        document.title = 'Dolor dental nocturno: ¿cuándo es grave? | Dr. Carlos Beiner';
    }, []);

    return (
        <ArticleLayout
            title="Dolor dental que no me deja dormir: ¿cuándo es grave?"
            description="Por qué el dolor empeora de noche, qué indica sobre tu diente y cuándo debes consultar urgente."
            breadcrumbs={breadcrumbs}
            backLink={backLink}
            relatedArticles={relatedArticles}
        >
            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl mb-8">
                <p className="text-lg font-semibold text-amber-900 mb-2">💡 La respuesta corta</p>
                <p className="text-amber-800">
                    El dolor dental que te despierta de noche generalmente indica <strong>pulpitis</strong> (inflamación
                    del nervio del diente). Es una señal de que el problema ha avanzado y necesita tratamiento pronto,
                    idealmente dentro de las próximas <strong>24-48 horas</strong>.
                </p>
            </div>

            <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">
                ¿Por qué el dolor empeora de noche?
            </h2>
            <p>No es tu imaginación. Hay razones fisiológicas reales:</p>
            <div className="space-y-4 my-6">
                <div className="bg-white border border-neutral-200 rounded-xl p-5">
                    <h3 className="font-semibold text-lg text-neutral-900 mb-2">1. Aumento de presión en la cabeza</h3>
                    <p className="text-neutral-700">Al acostarte, la sangre fluye más hacia la cabeza. Un nervio inflamado en el diente siente esta presión adicional como dolor intenso.</p>
                </div>
                <div className="bg-white border border-neutral-200 rounded-xl p-5">
                    <h3 className="font-semibold text-lg text-neutral-900 mb-2">2. Menos distracciones</h3>
                    <p className="text-neutral-700">Durante el día estás ocupado y el cerebro tiene otras cosas en qué enfocarse. De noche, el dolor se siente más intenso porque es lo único que tienes presente.</p>
                </div>
                <div className="bg-white border border-neutral-200 rounded-xl p-5">
                    <h3 className="font-semibold text-lg text-neutral-900 mb-2">3. Cambios hormonales</h3>
                    <p className="text-neutral-700">Los niveles de cortisol (antiinflamatorio natural) bajan de noche, haciendo que la inflamación se sienta más.</p>
                </div>
            </div>

            <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">
                ¿Es normal que el ibuprofeno no haga efecto?
            </h2>
            <p><strong>No es "normal", pero sí es común en inflamaciones avanzadas.</strong></p>
            <p>Cuando el nervio del diente (pulpa) está muy inflamado o necrosándose:</p>
            <ul>
                <li>El espacio dentro del diente es muy pequeño y la presión muy alta</li>
                <li>Los analgésicos pueden reducir parcialmente el dolor, pero no eliminarlo</li>
                <li>La única forma de aliviar completamente es abrir el diente (endodoncia o extracción)</li>
            </ul>
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg my-6">
                🚨 <strong>Señal importante:</strong> Si los analgésicos que usualmente te funcionan ya no hacen efecto,
                es señal de que el problema ha avanzado. No esperes más.
            </div>

            <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">
                ¿El dolor intenso significa que perdí el diente?
            </h2>
            <p><strong>No necesariamente.</strong></p>
            <p>
                El dolor intenso indica que el nervio está inflamado, pero en muchos casos el diente todavía
                se puede salvar con un <strong>tratamiento de conducto (endodoncia)</strong>.
            </p>
            <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                    <h3 className="font-bold text-green-900 mb-2">✅ Se puede salvar si:</h3>
                    <ul className="text-green-800 text-sm space-y-1">
                        <li>• El diente tiene suficiente estructura</li>
                        <li>• La infección no ha destruido la raíz</li>
                        <li>• El hueso alrededor está en buen estado</li>
                        <li>• Se trata a tiempo</li>
                    </ul>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                    <h3 className="font-bold text-red-900 mb-2">❌ Puede ser tarde si:</h3>
                    <ul className="text-red-800 text-sm space-y-1">
                        <li>• Hay fractura vertical de la raíz</li>
                        <li>• La caries destruyó demasiado diente</li>
                        <li>• Hay pérdida ósea severa</li>
                        <li>• Tratamiento previo fallido</li>
                    </ul>
                </div>
            </div>

            <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">
                ¿Cuándo debo ir a urgencias en vez de esperar la mañana?
            </h2>
            <div className="bg-red-50 border-2 border-red-300 rounded-xl p-6 my-6">
                <p className="font-bold text-red-900 mb-3">Ve a urgencias si además del dolor tienes:</p>
                <ul className="space-y-2 text-red-800">
                    <li>🔴 Hinchazón facial que está creciendo</li>
                    <li>🔴 Fiebre alta (más de 38°C)</li>
                    <li>🔴 Dificultad para tragar o abrir la boca</li>
                    <li>🔴 Inflamación que se extiende hacia el ojo o cuello</li>
                </ul>
                <p className="text-red-900 font-semibold mt-4">Estas son señales de infección grave que requiere atención inmediata.</p>
            </div>
            <p>Si solo tienes dolor (sin hinchazón ni fiebre), puedes tomar analgésicos y esperar hasta mañana para llamar al dentista.</p>

            <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">
                Qué hacer esta noche
            </h2>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 my-6">
                <ol className="space-y-3 text-blue-800">
                    <li><strong>1. Toma analgésico:</strong> Ibuprofeno 400-600mg o paracetamol 1g</li>
                    <li><strong>2. Duerme semi-sentado:</strong> 2-3 almohadas para reducir la presión en la cabeza</li>
                    <li><strong>3. Aplica frío:</strong> Bolsa de hielo por fuera de la mejilla, 20 min on/off</li>
                    <li><strong>4. Evita:</strong> Comidas calientes, frías o dulces que puedan estimular el diente</li>
                    <li><strong>5. Por la mañana:</strong> Llama al dentista para cita de urgencia</li>
                </ol>
            </div>

            <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">Conclusión</h2>
            <p>
                El dolor dental nocturno que te despierta es una <strong>señal clara</strong> de que el nervio
                del diente está en problemas. No es algo que "pasará solo".
            </p>
            <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg my-6">
                ✅ <strong>Lo importante:</strong> En la mayoría de los casos, el diente puede salvarse si
                actúas a tiempo. Agenda una cita lo antes posible.
            </div>
        </ArticleLayout>
    );
}
