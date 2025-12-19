import { useEffect } from 'react';
import ArticleLayout from '@/react-app/components/ArticleLayout';

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
        { title: '¿El cuerpo puede rechazarlo?', href: '/tratamientos/implantes/guias/rechazo-implante' },
        { title: 'Implante vs puente vs prótesis', href: '/tratamientos/implantes/guias/implante-vs-puente-protesis' }
    ];

    useEffect(() => {
        document.title = '¿Cuánto duran los implantes dentales? | Dr. Carlos Beiner';
    }, []);

    return (
        <ArticleLayout
            title="¿Cuánto duran los implantes dentales? ¿Son para toda la vida?"
            description="Expectativas realistas sobre la duración de los implantes, cuidados necesarios y qué puede afectar su longevidad."
            breadcrumbs={breadcrumbs}
            backLink={backLink}
            relatedArticles={relatedArticles}
        >
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-xl mb-8">
                <p className="text-lg font-semibold text-green-900 mb-2">✅ La respuesta realista</p>
                <p className="text-green-800">
                    <strong>Un implante bien colocado y bien cuidado puede durar 20-30 años o más.</strong>
                    El tornillo de titanio en sí puede durar toda la vida. La corona (el diente visible)
                    puede necesitar reemplazo cada 10-15 años por desgaste normal.
                </p>
            </div>

            <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">
                ¿Son realmente para toda la vida?
            </h2>
            <p><strong>El implante (tornillo de titanio): Potencialmente sí.</strong></p>
            <p><strong>La corona (diente visible): Probablemente no.</strong></p>
            <p>Es importante entender que un "implante dental" tiene tres partes:</p>
            <ol className="list-decimal list-inside space-y-2 my-4">
                <li><strong>El implante:</strong> El tornillo de titanio que se fusiona al hueso. Puede durar toda la vida.</li>
                <li><strong>El pilar:</strong> La conexión entre el implante y la corona. Duración muy larga.</li>
                <li><strong>La corona:</strong> El "diente" visible. Se desgasta con el uso, típicamente 10-20 años.</li>
            </ol>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg my-6">
                💡 <strong>Analogía:</strong> Es como un auto. El chasis (implante) puede durar décadas,
                pero los neumáticos (corona) se cambian cada cierto tiempo. Cambiar la corona es mucho más
                simple y económico que poner un implante nuevo.
            </div>

            <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">
                ¿Qué cuidados necesitan los implantes?
            </h2>
            <p>Los implantes necesitan cuidados similares (o mejores) que los dientes naturales:</p>
            <div className="space-y-4 my-6">
                <div className="bg-white border border-neutral-200 rounded-xl p-5">
                    <h3 className="font-semibold text-lg text-neutral-900 mb-2">🪥 Higiene diaria</h3>
                    <p className="text-neutral-700">Cepillado 2-3 veces al día, uso de hilo dental o cepillos interdentales para limpiar alrededor del implante.</p>
                </div>
                <div className="bg-white border border-neutral-200 rounded-xl p-5">
                    <h3 className="font-semibold text-lg text-neutral-900 mb-2">🦷 Controles regulares</h3>
                    <p className="text-neutral-700">Visita al dentista cada 6 meses para limpieza profesional y revisión del implante.</p>
                </div>
                <div className="bg-white border border-neutral-200 rounded-xl p-5">
                    <h3 className="font-semibold text-lg text-neutral-900 mb-2">🚭 No fumar</h3>
                    <p className="text-neutral-700">El tabaco aumenta significativamente el riesgo de problemas con el implante.</p>
                </div>
                <div className="bg-white border border-neutral-200 rounded-xl p-5">
                    <h3 className="font-semibold text-lg text-neutral-900 mb-2">🍎 Evitar fuerzas excesivas</h3>
                    <p className="text-neutral-700">No usar el implante para abrir cosas, morder objetos duros, etc. Si aprietas los dientes, usar plano de relajación nocturno.</p>
                </div>
            </div>

            <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">
                ¿Qué es la periimplantitis y cómo prevenirla?
            </h2>
            <p>
                La <strong>periimplantitis</strong> es una enfermedad inflamatoria que afecta los tejidos
                alrededor del implante. Es similar a la periodontitis (enfermedad de las encías) pero afecta implantes.
            </p>
            <div className="bg-red-50 border-2 border-red-300 rounded-xl p-6 my-6">
                <h3 className="font-bold text-red-900 mb-3">🚨 Señales de periimplantitis:</h3>
                <ul className="space-y-2 text-red-800">
                    <li>• Encía roja e inflamada alrededor del implante</li>
                    <li>• Sangrado al cepillar o sondear</li>
                    <li>• Supuración (pus)</li>
                    <li>• Mal sabor u olor</li>
                    <li>• Pérdida de hueso visible en radiografías</li>
                    <li>• En casos avanzados, el implante se afloja</li>
                </ul>
            </div>
            <p><strong>Cómo prevenir:</strong></p>
            <ul>
                <li>✅ Excelente higiene diaria (lo más importante)</li>
                <li>✅ Controles regulares con el dentista</li>
                <li>✅ No fumar</li>
                <li>✅ Tratar cualquier gingivitis o periodontitis en otros dientes</li>
                <li>✅ Detectar y tratar temprano cualquier inflamación</li>
            </ul>

            <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">
                ¿Cada cuánto debo controlarme?
            </h2>
            <p>Las recomendaciones estándar son:</p>
            <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6 my-6">
                <ul className="space-y-3">
                    <li><strong>Primer año:</strong> Controles a los 3, 6 y 12 meses post-corona definitiva</li>
                    <li><strong>Después:</strong> Control y limpieza cada 6 meses (igual que dientes naturales)</li>
                    <li><strong>Radiografías:</strong> Anual para verificar el nivel de hueso</li>
                </ul>
            </div>

            <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">
                ¿Pueden "aflojarse" con el tiempo?
            </h2>
            <p><strong>El implante en sí no debería aflojarse si está bien integrado.</strong></p>
            <p>Lo que puede aflojarse:</p>
            <ul>
                <li><strong>El tornillo de la corona:</strong> Se puede apretar fácilmente en la consulta</li>
                <li><strong>La corona:</strong> Si está cementada, puede descementarse (se vuelve a cementar)</li>
            </ul>
            <p className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg my-6">
                ⚠️ <strong>Si el implante mismo se mueve:</strong> Indica pérdida de oseointegración
                (generalmente por periimplantitis avanzada). Esto es más serio y requiere evaluación urgente.
            </p>

            <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">
                Comparación de durabilidad
            </h2>
            <div className="overflow-x-auto my-6">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-neutral-100">
                            <th className="p-3 text-left font-semibold">Opción</th>
                            <th className="p-3 text-center font-semibold">Duración típica</th>
                            <th className="p-3 text-center font-semibold">Mantenimiento</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-200">
                        <tr className="bg-green-50">
                            <td className="p-3 font-semibold text-green-900">Implante</td>
                            <td className="p-3 text-center">20-30+ años (implante) / 10-20 (corona)</td>
                            <td className="p-3 text-center">Higiene + controles</td>
                        </tr>
                        <tr>
                            <td className="p-3">Puente fijo</td>
                            <td className="p-3 text-center">10-15 años</td>
                            <td className="p-3 text-center">Higiene especial + controles</td>
                        </tr>
                        <tr>
                            <td className="p-3">Prótesis removible</td>
                            <td className="p-3 text-center">5-8 años</td>
                            <td className="p-3 text-center">Rebasados periódicos</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">Conclusión</h2>
            <p>
                Los implantes dentales son una <strong>inversión a largo plazo</strong>. Con buenos cuidados,
                pueden durar décadas, superando con creces otras opciones de reemplazo dental.
            </p>
            <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg my-6">
                ✅ <strong>La clave:</strong> Higiene impecable + controles regulares + no fumar =
                implantes que duran toda la vida.
            </div>
        </ArticleLayout>
    );
}
