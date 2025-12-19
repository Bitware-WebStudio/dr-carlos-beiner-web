import { useEffect } from 'react';
import ArticleLayout from '@/react-app/components/ArticleLayout';

export default function DuelePonerse() {
    const breadcrumbs = [
        { label: 'Inicio', href: '/' },
        { label: 'Implantes Dentales', href: '/tratamientos/implantes' },
        { label: '¿Duele ponerse implante?' }
    ];

    const backLink = {
        label: '← Volver a Implantes Dentales',
        href: '/tratamientos/implantes'
    };

    const relatedArticles = [
        { title: '¿Quedaré sin dientes?', href: '/tratamientos/implantes/guias/quedare-sin-dientes' },
        { title: '¿Cuánto duran los implantes?', href: '/tratamientos/implantes/guias/cuanto-duran' }
    ];

    useEffect(() => {
        document.title = '¿Duele ponerse un implante dental? | Dr. Carlos Beiner';
    }, []);

    return (
        <ArticleLayout
            title="¿Duele ponerse un implante dental?"
            description="La sorpresa positiva que muchos pacientes descubren: generalmente duele menos de lo que esperaban."
            breadcrumbs={breadcrumbs}
            backLink={backLink}
            relatedArticles={relatedArticles}
        >
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-xl mb-8">
                <p className="text-lg font-semibold text-green-900 mb-2">✅ La sorpresa positiva</p>
                <p className="text-green-800">
                    <strong>Muchos pacientes reportan que el implante dolió menos que una extracción.</strong>
                    Durante el procedimiento no sientes nada gracias a la anestesia. Después, las molestias son
                    manejables con analgésicos comunes y duran solo unos días.
                </p>
            </div>

            <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">
                ¿Durante el procedimiento duele?
            </h2>
            <p><strong>No.</strong> El procedimiento se realiza bajo anestesia local (la misma que se usa para rellenos o extracciones).</p>
            <p>Lo que podrías sentir:</p>
            <ul>
                <li>✅ <strong>Presión:</strong> Sensación de que algo está pasando, pero sin dolor</li>
                <li>✅ <strong>Vibración:</strong> Del instrumental quirúrgico</li>
                <li>✅ <strong>Sonidos:</strong> Los sonidos pueden ser un poco impresionantes, pero no hay dolor</li>
            </ul>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg my-6">
                💡 <strong>Si tienes mucha ansiedad:</strong> Se puede agregar sedación consciente.
                Estarás despierto pero muy relajado y probablemente no recuerdes mucho del procedimiento.
            </div>

            <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">
                ¿Duele más que una extracción de muela?
            </h2>
            <p><strong>Generalmente NO, y muchos pacientes dicen que fue mejor.</strong></p>
            <p>¿Por qué?</p>
            <ul>
                <li>🔹 Una extracción implica <strong>sacar algo</strong> del hueso (trauma)</li>
                <li>🔹 Un implante implica hacer un orificio controlado y colocar un tornillo (más predecible)</li>
                <li>🔹 El hueso tiene pocas terminaciones nerviosas para el dolor</li>
                <li>🔹 Los tejidos blandos se manejan delicadamente</li>
            </ul>
            <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6 my-6">
                <p className="font-semibold text-neutral-900 mb-2">Comparación típica:</p>
                <ul className="space-y-2">
                    <li><strong>Extracción de muela del juicio:</strong> 5-7 días de molestias significativas</li>
                    <li><strong>Implante simple:</strong> 2-4 días de molestias moderadas</li>
                </ul>
            </div>

            <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">
                ¿Qué tipo de anestesia se usa?
            </h2>
            <p>Para la mayoría de los implantes:</p>
            <div className="space-y-4 my-6">
                <div className="bg-white border border-neutral-200 rounded-xl p-5">
                    <h3 className="font-semibold text-lg text-neutral-900 mb-2">Anestesia local (lo más común)</h3>
                    <p className="text-neutral-700">Misma que para cualquier procedimiento dental. Estás despierto, pero completamente adormecido en la zona. Recuperación inmediata.</p>
                </div>
                <div className="bg-white border border-neutral-200 rounded-xl p-5">
                    <h3 className="font-semibold text-lg text-neutral-900 mb-2">Sedación consciente + anestesia local</h3>
                    <p className="text-neutral-700">Para pacientes ansiosos o procedimientos más largos. Estás muy relajado, casi dormido, pero técnicamente despierto. Necesitas acompañante.</p>
                </div>
                <div className="bg-white border border-neutral-200 rounded-xl p-5">
                    <h3 className="font-semibold text-lg text-neutral-900 mb-2">Anestesia general (casos especiales)</h3>
                    <p className="text-neutral-700">Solo para casos muy complejos o pacientes con necesidades especiales. Se hace en hospital o clínica con pabellón.</p>
                </div>
            </div>

            <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">
                ¿Cuántos días de dolor real hay después?
            </h2>
            <p>La cronología típica después de colocar un implante:</p>
            <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6 my-6">
                <ul className="space-y-3">
                    <li><strong>Día 1:</strong> Pasa la anestesia, aparece molestia. Los analgésicos la controlan bien.</li>
                    <li><strong>Días 2-3:</strong> Punto máximo de molestia/hinchazón. Todavía manejable con medicamentos.</li>
                    <li><strong>Días 4-5:</strong> Notable mejoría. Muchos ya no necesitan analgésicos.</li>
                    <li><strong>Día 7:</strong> La mayoría se siente casi normal.</li>
                </ul>
            </div>
            <p className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg my-6">
                ✅ <strong>La clave:</strong> Toma los analgésicos según indicación las primeras 48 horas,
                aunque sientas que no te duele mucho. Es más fácil prevenir el dolor que quitarlo.
            </p>

            <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">
                ¿Qué medicamentos se toman?
            </h2>
            <p>Típicamente te indicarán:</p>
            <ul>
                <li><strong>Analgésico/antiinflamatorio:</strong> Ibuprofeno o similar, cada 8 horas los primeros días</li>
                <li><strong>Antibiótico:</strong> En algunos casos, para prevenir infección</li>
                <li><strong>Enjuague:</strong> Clorhexidina u otro antiséptico, según indicación</li>
            </ul>

            <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">
                ¿Puedo trabajar al día siguiente?
            </h2>
            <p><strong>Depende de tu trabajo:</strong></p>
            <ul>
                <li>✅ <strong>Trabajo de oficina/home office:</strong> Generalmente sí, puedes volver al día siguiente</li>
                <li>⚠️ <strong>Trabajo que requiere hablar mucho:</strong> Puede ser incómodo 1-2 días</li>
                <li>❌ <strong>Trabajo físico intenso:</strong> Mejor esperar 3-5 días</li>
            </ul>
            <p className="mt-4">
                <strong>Consejo práctico:</strong> Si puedes, agenda el implante un jueves o viernes.
                Tendrás el fin de semana para la primera recuperación.
            </p>

            <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">Conclusión</h2>
            <p>
                La mayoría de los pacientes se sorprenden gratamente de que <strong>el implante no fue tan doloroso
                    como imaginaban</strong>. El miedo al dolor es generalmente peor que el dolor real.
            </p>
            <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg my-6">
                ✅ <strong>Recuerda:</strong> El Dr. Carlos Beiner tiene más de 15 años de experiencia en implantes.
                Un cirujano experimentado significa procedimientos más rápidos, menos manipulación y, por lo tanto,
                menos molestias post-operatorias.
            </div>
        </ArticleLayout>
    );
}
