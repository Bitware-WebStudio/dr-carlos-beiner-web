import { useEffect } from 'react';
import ArticleLayout from '@/react-app/components/ArticleLayout';

export default function PuedeRechazar() {
    const breadcrumbs = [
        { label: 'Inicio', href: '/' },
        { label: 'Implantes Dentales', href: '/tratamientos/implantes' },
        { label: '¿Puede rechazarse?' }
    ];

    const backLink = {
        label: '← Volver a Implantes Dentales',
        href: '/tratamientos/implantes'
    };

    const relatedArticles = [
        { title: '¿Cuánto duran los implantes?', href: '/tratamientos/implantes/guias/cuanto-duran' },
        { title: '¿Duele ponerse implante?', href: '/tratamientos/implantes/guias/duele-ponerse' }
    ];

    useEffect(() => {
        document.title = '¿El cuerpo puede rechazar un implante dental? | Dr. Carlos Beiner';
    }, []);

    return (
        <ArticleLayout
            title="¿El cuerpo puede rechazar un implante dental?"
            description="Entendiendo la oseointegración, por qué el titanio es biocompatible y qué porcentaje de implantes falla."
            breadcrumbs={breadcrumbs}
            backLink={backLink}
            relatedArticles={relatedArticles}
        >
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl mb-8">
                <p className="text-lg font-semibold text-blue-900 mb-2">💡 La respuesta técnica</p>
                <p className="text-blue-800">
                    <strong>Técnicamente, no es "rechazo".</strong> El titanio es biocompatible, lo que significa que
                    el cuerpo no lo reconoce como cuerpo extraño. Lo que puede pasar es que el implante <strong>no
                        se integre correctamente</strong> (fallo de oseointegración), pero esto es diferente a un rechazo
                    inmunológico y ocurre en menos del 5% de los casos.
                </p>
            </div>

            <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">
                ¿Qué es la oseointegración?
            </h2>
            <p>
                La <strong>oseointegración</strong> es el proceso mediante el cual el hueso crece y se
                fusiona directamente al implante de titanio.
            </p>
            <p>Cómo funciona:</p>
            <ol className="list-decimal list-inside space-y-2 my-4">
                <li>Se coloca el implante de titanio en el hueso</li>
                <li>El hueso comienza a crecer alrededor del implante</li>
                <li>En 2-4 meses, el implante queda "soldado" al hueso</li>
                <li>El implante se convierte en parte de tu anatomía</li>
            </ol>
            <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg my-6">
                ✅ <strong>Dato importante:</strong> Una vez que un implante osteointergra correctamente,
                la tasa de éxito a largo plazo es superior al 95%.
            </div>

            <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">
                ¿Qué porcentaje de implantes falla?
            </h2>
            <p>Las estadísticas mundiales muestran:</p>
            <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6 my-6">
                <ul className="space-y-3">
                    <li><strong>Tasa de éxito general:</strong> 95-98% a los 10 años</li>
                    <li><strong>Fallo temprano:</strong> 1-3% (el implante no integra en los primeros meses)</li>
                    <li><strong>Fallo tardío:</strong> 1-2% adicional (problemas años después, generalmente por periimplantitis)</li>
                </ul>
            </div>
            <p>
                En otras palabras: de cada 100 implantes colocados, aproximadamente 95-98 funcionan
                perfectamente por más de una década.
            </p>

            <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">
                ¿Fumar aumenta el riesgo de falla?
            </h2>
            <p><strong>Sí, significativamente.</strong></p>
            <p>El tabaco afecta los implantes de varias formas:</p>
            <ul>
                <li>🔴 Reduce el flujo sanguíneo al hueso → menos nutrientes para la integración</li>
                <li>🔴 Interfiere con la cicatrización → mayor riesgo de fallo temprano</li>
                <li>🔴 Aumenta riesgo de periimplantitis → fallo tardío</li>
            </ul>
            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg my-6">
                📊 <strong>Estadística:</strong> Los fumadores tienen hasta 2-3 veces más riesgo de
                fallo de implantes que los no fumadores.
            </div>
            <p>
                Si fumas, se recomienda dejar o al menos reducir mucho el consumo antes y después
                de la cirugía (mínimo 2 semanas antes, 2 meses después).
            </p>

            <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">
                ¿Se puede volver a intentar si falla?
            </h2>
            <p><strong>En la mayoría de los casos, sí.</strong></p>
            <p>Si un implante no integra:</p>
            <ol className="list-decimal list-inside space-y-2 my-4">
                <li>Se retira el implante (sin dolor, porque no está adherido)</li>
                <li>Se espera que el hueso cicatrice (2-3 meses)</li>
                <li>Se coloca un nuevo implante, posiblemente de diferente tamaño o posición</li>
            </ol>
            <p>
                La tasa de éxito del segundo intento es similar a la del primero, especialmente
                si se identifica y corrige la causa del fallo.
            </p>

            <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">
                ¿El titanio es 100% biocompatible?
            </h2>
            <p><strong>Prácticamente sí.</strong></p>
            <p>
                El titanio es uno de los materiales más biocompatibles conocidos. Se usa no solo
                en implantes dentales sino también en:
            </p>
            <ul>
                <li>• Prótesis de cadera y rodilla</li>
                <li>• Placas y tornillos ortopédicos</li>
                <li>• Implantes cocleares</li>
                <li>• Marcapasos</li>
            </ul>
            <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg my-6">
                ✅ <strong>¿Alergia al titanio?</strong> La alergia al titanio es extremadamente rara
                (menos del 0.6% de la población). Si tienes alergias conocidas a metales, se puede
                hacer una prueba antes del implante.
            </div>

            <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">
                ¿Qué factores aumentan el riesgo de fallo?
            </h2>
            <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                    <h3 className="font-bold text-red-900 mb-2">🔴 Factores de riesgo:</h3>
                    <ul className="text-red-800 text-sm space-y-1">
                        <li>• Tabaquismo</li>
                        <li>• Diabetes no controlada</li>
                        <li>• Mala higiene bucal</li>
                        <li>• Bruxismo severo (apretar dientes)</li>
                        <li>• Hueso de mala calidad</li>
                        <li>• Algunas medicaciones</li>
                    </ul>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                    <h3 className="font-bold text-green-900 mb-2">✅ Factores protectores:</h3>
                    <ul className="text-green-800 text-sm space-y-1">
                        <li>• No fumar</li>
                        <li>• Buena salud general</li>
                        <li>• Excelente higiene dental</li>
                        <li>• Controles regulares</li>
                        <li>• Cirujano experimentado</li>
                        <li>• Implantes de calidad premium</li>
                    </ul>
                </div>
            </div>

            <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">Conclusión</h2>
            <p>
                El "rechazo" de implantes como se entiende en trasplantes de órganos <strong>no existe</strong>
                con los implantes dentales de titanio. Lo que puede ocurrir es un fallo en la integración,
                pero esto es poco frecuente (menos del 5%).
            </p>
            <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg my-6">
                ✅ <strong>Con un cirujano experimentado, buenos implantes, y cuidados adecuados</strong>,
                las probabilidades de éxito son muy altas (95%+).
            </div>
        </ArticleLayout>
    );
}
