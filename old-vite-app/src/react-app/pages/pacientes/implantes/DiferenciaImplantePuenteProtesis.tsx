import { useEffect } from 'react';
import ArticleLayout from '@/react-app/components/ArticleLayout';

export default function DiferenciaImplantePuenteProtesis() {
    const breadcrumbs = [
        { label: 'Inicio', href: '/' },
        { label: 'Implantes Dentales', href: '/tratamientos/implantes' },
        { label: 'Implante vs puente vs prótesis' }
    ];

    const backLink = {
        label: '← Volver a Implantes Dentales',
        href: '/tratamientos/implantes'
    };

    const relatedArticles = [
        { title: '¿Cuánto duran los implantes?', href: '/tratamientos/implantes/guias/cuanto-duran' },
        { title: 'Costo de implantes', href: '/tratamientos/implantes/guias/costo-implantes' }
    ];

    useEffect(() => {
        document.title = 'Implante vs Puente vs Prótesis: ¿Cuál elegir? | Dr. Carlos Beiner';
    }, []);

    return (
        <ArticleLayout
            title="Implante vs Puente vs Prótesis: ¿Cuál es la mejor opción?"
            description="Comparación objetiva de las tres opciones para reemplazar dientes perdidos, con pros y contras de cada una."
            breadcrumbs={breadcrumbs}
            backLink={backLink}
            relatedArticles={relatedArticles}
        >
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl mb-8">
                <p className="text-lg font-semibold text-blue-900 mb-2">💡 La respuesta depende de ti</p>
                <p className="text-blue-800">
                    No hay una respuesta única. Cada opción tiene ventajas y desventajas. La mejor elección
                    depende de tu situación específica, salud, presupuesto y expectativas. Esta guía te ayudará
                    a entender las diferencias para tomar una decisión informada.
                </p>
            </div>

            <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">
                ¿Qué es cada opción?
            </h2>
            <div className="space-y-4 my-6">
                <div className="bg-white border-2 border-green-300 rounded-xl p-5">
                    <h3 className="font-semibold text-lg text-green-900 mb-2">🦷 Implante dental</h3>
                    <p className="text-neutral-700">Un tornillo de titanio que se coloca en el hueso y actúa como raíz artificial. Sobre él se coloca una corona (diente). Es independiente de los dientes vecinos.</p>
                </div>
                <div className="bg-white border border-neutral-200 rounded-xl p-5">
                    <h3 className="font-semibold text-lg text-neutral-900 mb-2">🌉 Puente fijo</h3>
                    <p className="text-neutral-700">Tres o más coronas unidas entre sí. Se cementa sobre los dientes vecinos (que se tallan) y el diente del medio "cuelga" sobre el espacio vacío.</p>
                </div>
                <div className="bg-white border border-neutral-200 rounded-xl p-5">
                    <h3 className="font-semibold text-lg text-neutral-900 mb-2">🔄 Prótesis removible</h3>
                    <p className="text-neutral-700">Una placa con uno o más dientes artificiales que se saca para dormir y limpiar. Se apoya en las encías y/o se engancha a dientes naturales.</p>
                </div>
            </div>

            <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">
                Tabla comparativa completa
            </h2>
            <div className="overflow-x-auto my-6">
                <table className="w-full border-collapse text-sm">
                    <thead>
                        <tr className="bg-neutral-100">
                            <th className="p-3 text-left font-semibold">Característica</th>
                            <th className="p-3 text-center font-semibold text-green-700">Implante</th>
                            <th className="p-3 text-center font-semibold">Puente</th>
                            <th className="p-3 text-center font-semibold">Prótesis</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-200">
                        <tr>
                            <td className="p-3 font-medium">Afecta dientes vecinos</td>
                            <td className="p-3 text-center text-green-600 font-bold">No</td>
                            <td className="p-3 text-center text-red-600">Sí, los desgasta</td>
                            <td className="p-3 text-center text-amber-600">Puede desgastarlos</td>
                        </tr>
                        <tr className="bg-neutral-50">
                            <td className="p-3 font-medium">Previene pérdida de hueso</td>
                            <td className="p-3 text-center text-green-600 font-bold">Sí</td>
                            <td className="p-3 text-center text-red-600">No</td>
                            <td className="p-3 text-center text-red-600">No</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-medium">Comodidad</td>
                            <td className="p-3 text-center text-green-600">Excelente</td>
                            <td className="p-3 text-center text-green-600">Muy buena</td>
                            <td className="p-3 text-center text-amber-600">Variable</td>
                        </tr>
                        <tr className="bg-neutral-50">
                            <td className="p-3 font-medium">Durabilidad</td>
                            <td className="p-3 text-center text-green-700 font-semibold">20-30+ años</td>
                            <td className="p-3 text-center">10-15 años</td>
                            <td className="p-3 text-center">5-8 años</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-medium">Costo inicial</td>
                            <td className="p-3 text-center text-amber-600">Alto</td>
                            <td className="p-3 text-center">Medio-Alto</td>
                            <td className="p-3 text-center text-green-600">Bajo-Medio</td>
                        </tr>
                        <tr className="bg-neutral-50">
                            <td className="p-3 font-medium">Tiempo de tratamiento</td>
                            <td className="p-3 text-center text-amber-600">3-6 meses</td>
                            <td className="p-3 text-center text-green-600">2-3 semanas</td>
                            <td className="p-3 text-center text-green-600">1-2 semanas</td>
                        </tr>
                        <tr>
                            <td className="p-3 font-medium">Requiere cirugía</td>
                            <td className="p-3 text-center text-amber-600">Sí</td>
                            <td className="p-3 text-center text-green-600">No</td>
                            <td className="p-3 text-center text-green-600">No</td>
                        </tr>
                        <tr className="bg-neutral-50">
                            <td className="p-3 font-medium">Higiene</td>
                            <td className="p-3 text-center text-green-600">Fácil</td>
                            <td className="p-3 text-center text-amber-600">Más difícil</td>
                            <td className="p-3 text-center text-green-600">Fácil (se saca)</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">
                ¿Cuándo elegir implante?
            </h2>
            <div className="bg-green-50 border border-green-200 rounded-xl p-6 my-6">
                <ul className="space-y-2 text-green-800">
                    <li>✅ Quieres la solución más duradera</li>
                    <li>✅ No quieres dañar los dientes vecinos</li>
                    <li>✅ Valoras la comodidad máxima (se siente como diente natural)</li>
                    <li>✅ Puedes esperar el tiempo de tratamiento</li>
                    <li>✅ Estás dispuesto a invertir más ahora para ahorrar a largo plazo</li>
                    <li>✅ No tienes contraindicaciones médicas</li>
                </ul>
            </div>

            <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">
                ¿Cuándo elegir puente?
            </h2>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 my-6">
                <ul className="space-y-2 text-blue-800">
                    <li>✅ Los dientes vecinos ya tienen coronas o necesitan tratamiento</li>
                    <li>✅ No puedes o no quieres cirugía</li>
                    <li>✅ Necesitas solución rápida (semanas vs meses)</li>
                    <li>✅ El hueso no es adecuado para implantes y no quieres injertos</li>
                </ul>
            </div>

            <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">
                ¿Cuándo elegir prótesis removible?
            </h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-6">
                <ul className="space-y-2 text-amber-800">
                    <li>✅ Faltan muchos dientes</li>
                    <li>✅ El presupuesto es la prioridad</li>
                    <li>✅ Es una solución temporal mientras decides qué hacer</li>
                    <li>✅ Condiciones médicas impiden otras opciones</li>
                    <li>✅ Solo necesitas funcionalidad básica, no máxima estética</li>
                </ul>
            </div>

            <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">
                ¿Puedo combinar opciones?
            </h2>
            <p><strong>Sí, es muy común.</strong> Algunos ejemplos:</p>
            <ul>
                <li>• Implantes en zonas importantes + prótesis para el resto</li>
                <li>• Puente temporal mientras cicatriza el implante</li>
                <li>• Prótesis removible sobre implantes (mejor retención)</li>
            </ul>

            <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">Conclusión</h2>
            <p>
                Cada opción tiene su lugar. El <strong>implante es generalmente la mejor opción a largo plazo</strong>,
                pero no es la única ni siempre la más indicada para todos.
            </p>
            <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg my-6">
                ✅ <strong>Lo más importante:</strong> Una evaluación profesional para determinar qué opciones
                son viables en tu caso específico y cuál se ajusta mejor a tus necesidades y expectativas.
            </div>
        </ArticleLayout>
    );
}
