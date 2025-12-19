import { useEffect } from 'react';
import ArticleLayout from '@/react-app/components/ArticleLayout';

export default function DienteCaidoGolpe() {
    const breadcrumbs = [
        { label: 'Inicio', href: '/' },
        { label: 'Urgencias Dentales', href: '/tratamientos/urgencias-dentales' },
        { label: 'Diente caído por golpe' }
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
        document.title = 'Se me cayó un diente por golpe: ¿se puede salvar? | Dr. Carlos Beiner';
    }, []);

    return (
        <ArticleLayout
            title="Se me cayó un diente por un golpe: ¿se puede salvar?"
            description="El tiempo es crítico. Qué hacer en los primeros minutos puede significar la diferencia entre salvar o perder el diente."
            breadcrumbs={breadcrumbs}
            backLink={backLink}
            relatedArticles={relatedArticles}
        >
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl mb-8">
                <p className="text-lg font-semibold text-red-900 mb-2">⏱️ TIEMPO = DIENTE</p>
                <p className="text-red-800">
                    <strong>Sí, puede salvarse si actúas RÁPIDO.</strong> Tienes aproximadamente <strong>30-60 minutos</strong>
                    desde que el diente se cayó para reimplantarlo con buenas probabilidades de éxito.
                    Cada minuto que pasa, las chances bajan.
                </p>
            </div>

            <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">
                ⏱️ ¿Cuánto tiempo tengo para salvarlo?
            </h2>
            <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6 my-6">
                <ul className="space-y-3">
                    <li><span className="font-bold text-green-600">0-30 minutos:</span> Excelentes probabilidades de éxito (90%+)</li>
                    <li><span className="font-bold text-amber-600">30-60 minutos:</span> Buenas probabilidades si el diente se mantuvo húmedo</li>
                    <li><span className="font-bold text-orange-600">1-2 horas:</span> Probabilidades reducidas, pero vale la pena intentar</li>
                    <li><span className="font-bold text-red-600">Más de 2 horas:</span> Probabilidades muy bajas, especialmente si el diente se secó</li>
                </ul>
            </div>
            <p className="font-semibold text-lg text-neutral-900">
                La regla de oro: <strong>NO pierdas tiempo buscando en internet. Lee esto rápido y actúa.</strong>
            </p>

            <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">
                🦷 ¿Cómo debo transportar el diente?
            </h2>
            <p>El diente debe mantenerse <strong>HÚMEDO</strong> y las células de la raíz <strong>VIVAS</strong>.</p>
            <div className="bg-green-50 border-2 border-green-300 rounded-xl p-6 my-6">
                <h3 className="font-bold text-green-900 mb-3">✅ MEJORES opciones (en orden):</h3>
                <ol className="space-y-3 text-green-800">
                    <li><strong>1. Leche fría:</strong> Ideal. Las células sobreviven varias horas.</li>
                    <li><strong>2. Saliva:</strong> Mantenerlo en la boca (entre encía y mejilla). Ojo: sin tragarlo.</li>
                    <li><strong>3. Suero fisiológico:</strong> Si tienes en casa.</li>
                    <li><strong>4. Agua:</strong> Solo si no hay nada más. Es mejor que seco.</li>
                </ol>
            </div>
            <div className="bg-red-50 border-2 border-red-300 rounded-xl p-6 my-6">
                <h3 className="font-bold text-red-900 mb-3">❌ NUNCA hagas:</h3>
                <ul className="space-y-2 text-red-800">
                    <li>• <strong>Envolverlo en papel o tela seca</strong> (se seca y muere)</li>
                    <li>• <strong>Limpiar la raíz</strong> con cepillo o frotar (daña las células)</li>
                    <li>• <strong>Agarrarlo de la raíz</strong> (siempre por la corona)</li>
                    <li>• <strong>Ponerlo en alcohol o agua oxigenada</strong> (mata las células)</li>
                </ul>
            </div>

            <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">
                ❌ ¿Qué NO hacer con el diente caído?
            </h2>
            <ul>
                <li>❌ No toques ni raspes la raíz (tiene células vivas esenciales)</li>
                <li>❌ No lo dejes secar (es lo peor que puede pasar)</li>
                <li>❌ No lo laves con jabón o químicos</li>
                <li>❌ No esperes "a ver si duele" - TIEMPO es clave</li>
            </ul>
            <p className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg my-6">
                💡 <strong>SI el diente cayó al suelo y tiene tierra:</strong> Enjuágalo MUY suavemente con leche
                o suero por unos segundos, SIN frotar la raíz. Luego ponlo en leche y ve al dentista.
            </p>

            <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">
                🔄 ¿Puedo meterlo de vuelta yo mismo?
            </h2>
            <p><strong>En dientes permanentes de adultos: SÍ, puedes intentarlo.</strong></p>
            <div className="bg-green-50 border border-green-200 rounded-xl p-6 my-6">
                <h3 className="font-bold text-green-900 mb-3">Cómo reimplantar (si te animas):</h3>
                <ol className="space-y-2 text-green-800">
                    <li>1. Enjuaga el diente suavemente con leche (sin frotar la raíz)</li>
                    <li>2. Oriéntalo correctamente (que la curva de la raíz mire hacia afuera)</li>
                    <li>3. Colócalo en el alveolo (el hueco donde estaba) y presiona suavemente</li>
                    <li>4. Muerde suavemente una gasa o tela limpia para mantenerlo en su lugar</li>
                    <li>5. Ve al dentista INMEDIATAMENTE (necesita ferulización)</li>
                </ol>
            </div>
            <p className="text-amber-700">
                ⚠️ <strong>En niños con dientes de leche:</strong> NO reimplantar. Los dientes de leche no se reimplantan
                porque pueden dañar el diente permanente que viene debajo.
            </p>

            <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">
                ¿Qué pasa si no se puede reimplantar?
            </h2>
            <p>Si el diente no se puede salvar (pasó mucho tiempo, se secó, etc.), hay opciones para reemplazarlo:</p>
            <ul>
                <li><strong>Implante dental:</strong> La mejor opción a largo plazo (ver sección de implantes)</li>
                <li><strong>Puente fijo:</strong> Alternativa si no se puede poner implante</li>
                <li><strong>Prótesis parcial:</strong> Opción removible</li>
            </ul>
            <p className="mt-4">
                Pero lo más importante es intentar salvarlo. Un diente natural reimplantado puede durar muchos años con buen cuidado.
            </p>

            <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">Conclusión</h2>
            <div className="bg-red-50 border-2 border-red-300 rounded-xl p-6 my-6">
                <h3 className="font-bold text-red-900 mb-3">🚨 RESUMEN DE ACCIÓN:</h3>
                <ol className="space-y-2 text-red-800">
                    <li>1. <strong>ENCUENTRA</strong> el diente (búscalo bien)</li>
                    <li>2. <strong>AGÁRRALO</strong> solo por la corona (la parte blanca)</li>
                    <li>3. <strong>PONLO EN LECHE</strong> (o saliva, o suero)</li>
                    <li>4. <strong>VE AL DENTISTA</strong> inmediatamente (llama en el camino)</li>
                    <li>5. <strong>NO ESPERES</strong> - cada minuto cuenta</li>
                </ol>
            </div>
        </ArticleLayout>
    );
}
