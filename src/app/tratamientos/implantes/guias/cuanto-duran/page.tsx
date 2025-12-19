import ArticleLayout from '@/components/ArticleLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: '¿Cuánto duran los implantes dentales? | Dr. Carlos Beiner',
    description: 'Expectativas realistas sobre la duración de los implantes, cuidados y factores que influyen.',
};

export default function CuantoDuran() {
    const breadcrumbs = [
        { label: 'Inicio', href: '/' },
        { label: 'Implantes Dentales', href: '/tratamientos/implantes' },
        { label: '¿Cuánto duran?' }
    ];

    const backLink = {
        label: '← Volver a Implantes Dentales',
        href: '/tratamientos/implantes'
    };

    const relatedArticles = [
        { title: 'Implante vs puente vs prótesis', href: '/tratamientos/implantes/guias/diferencia-implante-puente-protesis' },
        { title: 'Costo de implantes', href: '/tratamientos/implantes/guias/costo-implantes' }
    ];

    return (
        <ArticleLayout
            title="¿Cuánto duran los implantes dentales? ¿Son para toda la vida?"
            description="Expectativas realistas sobre la duración de los implantes, cuidados y factores que influyen."
            breadcrumbs={breadcrumbs}
            backLink={backLink}
            relatedArticles={relatedArticles}
        >
            {/* Copia del contenido original del artículo */}
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-xl mb-8">
                <p className="text-lg font-semibold text-green-900 mb-2">✅ La respuesta realista</p>
                <p className="text-green-800">
                    <strong>Un implante bien colocado y bien cuidado puede durar 20-30 años o más.</strong> El tornillo de titanio en sí puede durar toda la vida. La corona (el diente visible) puede necesitar reemplazo cada 10-15 años por desgaste normal.
                </p>
            </div>

            <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">¿Son realmente para toda la vida?</h2>
            <p><strong>El implante (tornillo de titanio):</strong> Potencialmente sí.</p>
            <p><strong>La corona (diente visible):</strong> Probablemente no.</p>
            <p>Es importante entender que un "implante dental" tiene tres partes:</p>
            <ol className="list-decimal list-inside space-y-2 my-4">
                <li><strong>El implante:</strong> El tornillo de titanio que se fusiona al hueso. Puede durar toda la vida.</li>
                <li><strong>El pilar:</strong> La conexión entre el implante y la corona. Duración muy larga.</li>
                <li><strong>La corona:</strong> El "diente" visible. Se desgasta con el uso, típicamente 10-20 años.</li>
            </ol>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg my-6">
                <p>💡 <strong>Analogía:</strong> Es como un auto. El chasis (implante) puede durar décadas, pero los neumáticos (corona) se cambian cada cierto tiempo. Cambiar la corona es mucho más simple y económico que poner un implante nuevo.</p>
            </div>

            <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">¿Existen facilidades de pago?</h2>
            <p>Muchos consultorios ofrecen opciones de financiamiento. En la consulta con el Dr. Carlos Beiner puedes consultar sobre:</p>
            <ul>
                <li>✅ Pago en cuotas sin interés</li>
                <li>✅ Financiamiento con tarjetas de crédito</li>
                <li>✅ Pago por etapas (parte al poner el implante, parte al poner la corona)</li>
            </ul>

            <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">Conclusión</h2>
            <p>El costo de un implante dental refleja <strong>décadas de investigación, materiales premium, tecnología avanzada y la experiencia del profesional</strong>.</p>
            <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg my-6">
                ✅ <strong>Consejo:</strong> No busques el implante más barato. Busca el mejor valor: un precio justo que incluya implantes de calidad, cirujano experimentado, y garantía real.
            </div>
        </ArticleLayout>
    );
}
