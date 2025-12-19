import { useEffect } from 'react';
import ArticleLayout from '@/react-app/components/ArticleLayout';

export default function QuedareSinDientes() {
    const breadcrumbs = [
        { label: 'Inicio', href: '/' },
        { label: 'Implantes Dentales', href: '/tratamientos/implantes' },
        { label: '¿Quedaré sin dientes?' }
    ];

    const backLink = {
        label: '← Volver a Implantes Dentales',
        href: '/tratamientos/implantes'
    };

    const relatedArticles = [
        { title: '¿Duele ponerse implante?', href: '/tratamientos/implantes/guias/duele-ponerse' },
        { title: '¿Cuánto duran los implantes?', href: '/tratamientos/implantes/guias/cuanto-duran' }
    ];

    useEffect(() => {
        document.title = '¿Quedaré sin dientes durante el tratamiento de implantes? | Dr. Carlos Beiner';
    }, []);

    return (
        <ArticleLayout
            title="¿Voy a quedar sin dientes durante el tratamiento de implantes?"
            description="No tendrás que 'esconderte': existen soluciones provisionales para cada situación."
            breadcrumbs={breadcrumbs}
            backLink={backLink}
            relatedArticles={relatedArticles}
        >
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-xl mb-8">
                <p className="text-lg font-semibold text-green-900 mb-2">✅ La respuesta tranquilizadora</p>
                <p className="text-green-800">
                    <strong>No, no quedarás sin dientes visibles.</strong> Existen diferentes opciones de dientes
                    provisionales que se colocan durante el proceso de cicatrización. Siempre tendrás algo que
                    te permita sonreír, hablar y comer.
                </p>
            </div>

            <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">
                ¿Qué es la carga inmediata?
            </h2>
            <p>
                La <strong>carga inmediata</strong> (o implante en un día) es una técnica donde se coloca un
                diente provisional el mismo día que se pone el implante.
            </p>
            <p>¿Cómo funciona?</p>
            <ul>
                <li>1. Se coloca el implante en el hueso</li>
                <li>2. Se evalúa si quedó lo suficientemente estable</li>
                <li>3. Se atornilla una corona provisional ese mismo día</li>
                <li>4. Sales de la consulta con diente</li>
            </ul>
            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg my-6">
                ⚠️ <strong>No siempre es posible:</strong> La carga inmediata requiere que el implante tenga
                excelente estabilidad inicial. Si el hueso es blando o el implante necesita más tiempo para
                integrarse, se usa diente provisional NO atornillado al implante.
            </div>

            <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">
                ¿Siempre hay dientes provisionales?
            </h2>
            <p><strong>Sí, siempre hay opciones.</strong> Dependiendo del caso:</p>
            <div className="space-y-4 my-6">
                <div className="bg-white border border-neutral-200 rounded-xl p-5">
                    <h3 className="font-semibold text-lg text-neutral-900 mb-2">1. Corona provisional sobre implante</h3>
                    <p className="text-neutral-700">Cuando hay buena estabilidad inicial. Se ve y funciona como un diente, pero es temporal. Es la mejor opción estética.</p>
                </div>
                <div className="bg-white border border-neutral-200 rounded-xl p-5">
                    <h3 className="font-semibold text-lg text-neutral-900 mb-2">2. Prótesis removible (flipper)</h3>
                    <p className="text-neutral-700">Una placa pequeña con el diente que se saca para dormir y limpiar. Estética aceptable, económica.</p>
                </div>
                <div className="bg-white border border-neutral-200 rounded-xl p-5">
                    <h3 className="font-semibold text-lg text-neutral-900 mb-2">3. Puente provisional adhesivo</h3>
                    <p className="text-neutral-700">Se pega a los dientes vecinos temporalmente. Buena estética, no se saca.</p>
                </div>
            </div>

            <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">
                ¿Cuánto tiempo dura todo el proceso?
            </h2>
            <p>El tiempo total varía según el caso:</p>
            <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6 my-6">
                <ul className="space-y-3">
                    <li><strong>Caso simple (hueso bueno):</strong> 3-4 meses desde el implante hasta la corona final</li>
                    <li><strong>Caso con injerto de hueso:</strong> 6-9 meses (el injerto necesita tiempo para madurar)</li>
                    <li><strong>Carga inmediata:</strong> Diente provisional el mismo día, corona final a los 3-4 meses</li>
                </ul>
            </div>
            <p>
                Durante TODO ese tiempo tendrás un diente provisional. Solo hay un periodo corto
                (días, no semanas) entre que se saca el provisional y se pone el definitivo.
            </p>

            <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">
                ¿Se nota que es un provisorio?
            </h2>
            <p><strong>Si está bien hecho, muy poco.</strong></p>
            <ul>
                <li>✅ La corona provisional se hace del color de tus dientes</li>
                <li>✅ La forma se planifica para que se vea natural</li>
                <li>✅ En conversación normal, nadie debería notarlo</li>
            </ul>
            <p className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg my-6">
                ⚠️ <strong>Pero recuerda:</strong> Es provisional. No será perfecto como el definitivo.
                Puede tener algunas limitaciones estéticas menores que se corregirán con la corona final.
            </p>

            <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">
                ¿Puedo comer normal con provisionales?
            </h2>
            <p><strong>Con algunas precauciones:</strong></p>
            <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                    <h3 className="font-bold text-green-900 mb-2">✅ Puedes comer:</h3>
                    <ul className="text-green-800 text-sm space-y-1">
                        <li>• Comida blanda o normal</li>
                        <li>• Pasta, arroz, verduras</li>
                        <li>• Carne cortada en trozos pequeños</li>
                        <li>• Pan normal</li>
                    </ul>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                    <h3 className="font-bold text-red-900 mb-2">❌ Evita:</h3>
                    <ul className="text-red-800 text-sm space-y-1">
                        <li>• Morder cosas muy duras (manzana entera, huesos)</li>
                        <li>• Comidas pegajosas (caramelos)</li>
                        <li>• Usar el provisional para arrancar cosas</li>
                    </ul>
                </div>
            </div>

            <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">
                ¿Qué pasa si el provisional se cae o rompe?
            </h2>
            <p><strong>No es ideal, pero no es emergencia.</strong></p>
            <ul>
                <li>• Llama a tu dentista para que te lo pegue de nuevo</li>
                <li>• Si es removible, simplemente no lo uses hasta poder ir</li>
                <li>• El implante dentro del hueso NO se afecta</li>
            </ul>

            <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">Conclusión</h2>
            <p>
                El miedo a quedar sin dientes es uno de los principales frenos para hacerse implantes.
                Pero <strong>siempre hay soluciones provisionales</strong> que te permiten vivir normal
                durante el proceso.
            </p>
            <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg my-6">
                ✅ <strong>Lo importante:</strong> En tu evaluación, el Dr. Carlos Beiner te explicará
                exactamente qué tipo de provisional tendrás y cómo será el proceso en tu caso específico.
            </div>
        </ArticleLayout>
    );
}
