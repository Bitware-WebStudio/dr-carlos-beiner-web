import ArticleLayout from '@/components/ArticleLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: '¿Por qué los implantes dentales son más caros? | Dr. Carlos Beiner',
    description: 'Transparencia total sobre qué incluye el costo de un implante, por qué varían los precios y opciones de financiamiento.',
};

export default function CostoImplantes() {
    const breadcrumbs = [
        { label: 'Inicio', href: '/' },
        { label: 'Implantes Dentales', href: '/tratamientos/implantes' },
        { label: 'Costo de implantes' }
    ];

    const backLink = {
        label: '← Volver a Implantes Dentales',
        href: '/tratamientos/implantes'
    };

    const relatedArticles = [
        { title: 'Implante vs puente vs prótesis', href: '/tratamientos/implantes/guias/diferencia-implante-puente-protesis' },
        { title: '¿Cuánto duran los implantes?', href: '/tratamientos/implantes/guias/cuanto-duran' }
    ];

    return (
        <ArticleLayout
            title="¿Por qué los implantes dentales son más caros? Análisis de costos"
            description="Transparencia total sobre qué incluye el costo de un implante, por qué varían los precios y opciones de financiamiento."
            breadcrumbs={breadcrumbs}
            backLink={backLink}
            relatedArticles={relatedArticles}
        >
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl mb-8">
                <p className="text-lg font-semibold text-blue-900 mb-2">💡 Perspectiva importante</p>
                <p className="text-blue-800">
                    Un implante puede parecer caro comparado con otras opciones, pero cuando lo analizas <strong>por año de uso</strong>, suele ser la opción más económica a largo plazo.
                    Un implante que dura 25 años cuesta menos por año que un puente que se cambia cada 10.
                </p>
            </div>

            <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">¿Qué está incluido en el precio de un implante?</h2>
            <p>Un "implante dental" no es un solo producto, sino un tratamiento completo que incluye:</p>
            <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6 my-6">
                <ol className="space-y-4">
                    <li><strong>1. Evaluación y diagnóstico</strong><p className="text-sm text-neutral-600 mt-1">Examen clínico, radiografías, scanner 3D si es necesario</p></li>
                    <li><strong>2. El implante (tornillo de titanio)</strong><p className="text-sm text-neutral-600 mt-1">Material de alta tecnología, certificado y biocompatible</p></li>
                    <li><strong>3. La cirugía de colocación</strong><p className="text-sm text-neutral-600 mt-1">Honorarios del cirujano, anestesia, materiales quirúrgicos</p></li>
                    <li><strong>4. El pilar (conector)</strong><p className="text-sm text-neutral-600 mt-1">La pieza que une el implante con la corona</p></li>
                    <li><strong>5. La corona definitiva</strong><p className="text-sm text-neutral-600 mt-1">El "diente" visible, fabricado a medida</p></li>
                    <li><strong>6. Controles post-operatorios</strong><p className="text-sm text-neutral-600 mt-1">Seguimiento durante todo el proceso</p></li>
                </ol>
            </div>

            <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">¿Por qué hay tanta diferencia de precios entre dentistas?</h2>
            <p>Las variaciones de precio se deben principalmente a:</p>
            <div className="space-y-4 my-6">
                <div className="bg-white border border-neutral-200 rounded-xl p-5">
                    <h3 className="font-semibold text-lg text-neutral-900 mb-2">1. Calidad del implante</h3>
                    <p className="text-neutral-700">Hay marcas premium (Nobel Biocare, Straumann) y marcas económicas. La diferencia en calidad, investigación y garantía es significativa.</p>
                </div>
                <div className="bg-white border border-neutral-200 rounded-xl p-5">
                    <h3 className="font-semibold text-lg text-neutral-900 mb-2">2. Experiencia del cirujano</h3>
                    <p className="text-neutral-700">Un especialista con años de experiencia cobra más, pero también tiene mejores resultados y menos complicaciones.</p>
                </div>
                <div className="bg-white border border-neutral-200 rounded-xl p-5">
                    <h3 className="font-semibold text-lg text-neutral-900 mb-2">3. Tecnología disponible</h3>
                    <p className="text-neutral-700">Scanner 3D, cirugía guiada, laboratorio digital... la tecnología cuesta, pero mejora los resultados.</p>
                </div>
                <div className="bg-white border border-neutral-200 rounded-xl p-5">
                    <h3 className="font-semibold text-lg text-neutral-900 mb-2">4. Lo que está incluido</h3>
                    <p className="text-neutral-700">Algunos precios "baratos" no incluyen la corona o los controles. Siempre pregunta qué está incluido.</p>
                </div>
            </div>

            <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">¿Por qué hay implantes "baratos" que cuestan la mitad?</h2>
            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg my-6">
                <strong>Cuidado con precios muy bajos.</strong> Un implante premium tiene décadas de investigación, estudios clínicos que demuestran su éxito, y garantía del fabricante.
                Un implante genérico puede fallar más seguido y no tener repuestos disponibles en el futuro.
            </div>
            <p>Preguntas que debes hacer cuando ves precios muy bajos:</p>
            <ul>
                <li>• ¿Qué marca de implante es?</li>
                <li>• ¿Está incluida la corona?</li>
                <li>• ¿Qué pasa si hay complicaciones?</li>
                <li>• ¿Qué garantía ofrece?</li>
                <li>• ¿Habrá repuestos disponibles en 10 años?</li>
            </ul>

            <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">Costo total a largo plazo: la verdadera comparación</h2>
            <p>Veamos el costo REAL considerando durabilidad:</p>
            <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6 my-6">
                <p className="font-semibold mb-4">Ejemplo: Reemplazar 1 molar durante 30 años</p>
                <ul className="space-y-4">
                    <li><strong className="text-green-700">Implante:</strong><span className="block text-sm text-neutral-600">Un implante que dura 30 años + cambio de corona a los 15 años</span></li>
                    <li><strong>Puente:</strong><span className="block text-sm text-neutral-600">Cambiar puente 2-3 veces en 30 años + posible tratamiento de dientes pilares si fallan</span></li>
                    <li><strong>Prótesis removible:</strong><span className="block text-sm text-neutral-600">Rehacer 4-5 veces en 30 años + rebasados periódicos + pérdida de hueso progresiva</span></li>
                </ul>
                <p className="mt-4 font-semibold text-green-700">→ A largo plazo, el implante suele ser más económico.</p>
            </div>

            <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">¿Existen facilidades de pago?</h2>
            <p>
                Muchos consultorios ofrecen opciones de financiamiento. En la consulta con el Dr. Carlos Beiner puedes consultar sobre:
            </p>
            <ul>
                <li>✅ Pago en cuotas sin interés</li>
                <li>✅ Financiamiento con tarjetas de crédito</li>
                <li>✅ Pago por etapas (parte al poner el implante, parte al poner la corona)</li>
            </ul>

            <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">¿El valor incluye garantía?</h2>
            <p>Un tratamiento serio debe incluir:</p>
            <ul>
                <li>✅ <strong>Garantía del implante:</strong> Los fabricantes premium ofrecen garantía de por vida en el implante</li>
                <li>✅ <strong>Garantía del trabajo:</strong> Si el implante falla por causa del procedimiento, se repone sin costo</li>
                <li>✅ <strong>Repuestos disponibles:</strong> Que la marca tenga repuestos disponibles en Chile en el futuro</li>
            </ul>

            <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">Conclusión</h2>
            <p>
                El costo de un implante dental refleja <strong>décadas de investigación, materiales premium, tecnología avanzada y la experiencia del profesional</strong>.
            </p>
            <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg my-6">
                ✅ <strong>Consejo:</strong> No busques el implante más barato. Busca el mejor valor: un precio justo que incluya implantes de calidad, cirujano experimentado, y garantía real.
            </div>
            <p className="text-neutral-700">
                En tu evaluación con el Dr. Carlos Beiner recibirás un presupuesto detallado y transparente, con todo lo que está incluido y las opciones de pago disponibles.
            </p>
        </ArticleLayout>
    );
}
