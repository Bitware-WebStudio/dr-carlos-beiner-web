import ArticleLayout from '@/components/ArticleLayout';
import Script from 'next/script';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Recuperación rápida: consejos post-extracción de muelas del juicio | Dr. Carlos Beiner',
    description: 'Guía paso a paso para minimizar molestias, acelerar la cicatrización y evitar complicaciones.',
};

export default function RecuperacionRapida() {
    const breadcrumbs = [
        { label: 'Inicio', href: '/' },
        { label: 'Muelas del Juicio', href: '/tratamientos/muelas-del-juicio' },
        { label: 'Recuperación rápida' }
    ];

    const backLink = {
        label: '← Volver a Muelas del Juicio',
        href: '/tratamientos/muelas-del-juicio'
    };

    const relatedArticles = [
        { title: '¿Cuánto dura la hinchazón?', href: '/tratamientos/muelas-del-juicio/guias/cuanto-dura-hinchazon' },
        { title: '¿Puedo fumar o vapear?', href: '/tratamientos/muelas-del-juicio/guias/fumar-vapear' }
    ];

    return (
        <ArticleLayout
            title="Recuperación rápida: 10 consejos prácticos después de sacar las muelas del juicio"
            description="Guía paso a paso para minimizar molestias, acelerar la cicatrización y evitar complicaciones."
            breadcrumbs={breadcrumbs}
            backLink={backLink}
            relatedArticles={relatedArticles}
        >
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-xl mb-8">
                <p className="text-lg font-semibold text-green-900 mb-2">✅ El objetivo</p>
                <p className="text-green-800">
                    Una recuperación exitosa depende en un 50% de la cirugía y un 50% de <strong>lo que hagas después</strong>.
                    Seguir estos consejos puede marcar la diferencia entre 3 días incómodos y una semana complicada.
                </p>
            </div>

            <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">
                🧊 1. Aplica frío las primeras 24-48 horas
            </h2>
            <p>El hielo es tu mejor amigo los primeros 2 días. Reduce la hinchazón significativamente.</p>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 my-4">
                <p><strong>Cómo hacerlo:</strong> 20 minutos con hielo, 20 minutos de descanso. Repite varias veces al día. Envuelve el hielo en una tela fina (nunca directo sobre la piel).</p>
            </div>
            <p className="text-amber-700">⚠️ Después del día 2, el frío ya no ayuda. Del día 3 en adelante, puedes usar calor tibio para estimular la circulación.</p>

            <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">
                🍦 2. Dieta blanda los primeros días
            </h2>
            <p>No intentes ser valiente comiendo normal. Tu mandíbula necesita descanso.</p>
            <div className="grid md:grid-cols-2 gap-4 my-4">
                <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                    <h3 className="font-bold text-green-900 mb-2">✅ SÍ comer:</h3>
                    <ul className="text-green-800 text-sm space-y-1">
                        <li>• Helado, yogurt, pudín</li>
                        <li>• Sopas tibias (no calientes)</li>
                        <li>• Puré de papas, puré de plátano</li>
                        <li>• Batidos, smoothies (sin pajita)</li>
                        <li>• Huevos revueltos, pescado suave</li>
                    </ul>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                    <h3 className="font-bold text-red-900 mb-2">❌ EVITAR:</h3>
                    <ul className="text-red-800 text-sm space-y-1">
                        <li>• Comidas crujientes (chips, frutos secos)</li>
                        <li>• Granos pequeños (arroz, quinoa)</li>
                        <li>• Comidas muy calientes</li>
                        <li>• Bebidas con pajita</li>
                        <li>• Alcohol</li>
                    </ul>
                </div>
            </div>

            <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">
                🚿 3. No hagas enjuagues vigorosos
            </h2>
            <p>
                Las primeras 24 horas, <strong>no te enjuagues la boca</strong>. Después, hazlo muy suavemente.
            </p>
            <p className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg my-4">
                ⚠️ <strong>Por qué:</strong> Los enjuagues fuertes pueden desalojar el coágulo de sangre que protege la herida,
                causando alveolitis seca (muy dolorosa).
            </p>
            <p><strong>Del día 2 en adelante:</strong> Enjuaga suavemente con agua tibia y una pizca de sal después de cada comida.</p>

            <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">
                💊 4. Toma los medicamentos según indicación
            </h2>
            <p>No esperes a que duela mucho para tomar el analgésico. Es más fácil prevenir el dolor que quitarlo.</p>
            <div className="bg-white border border-neutral-200 rounded-xl p-4 my-4">
                <p><strong>Pauta típica:</strong></p>
                <ul className="mt-2 space-y-1">
                    <li>• <strong>Analgésico:</strong> Cada 6-8 horas los primeros 2-3 días, aunque no duela mucho</li>
                    <li>• <strong>Antibiótico:</strong> Si te lo indicaron, completar TODO el tratamiento (no dejar a medias)</li>
                    <li>• <strong>Antiinflamatorio:</strong> Según indicación, ayuda con la hinchazón</li>
                </ul>
            </div>

            <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">
                🛏️ 5. Duerme con la cabeza elevada
            </h2>
            <p>
                Usa 2-3 almohadas para mantener la cabeza más alta que el corazón. Esto reduce la acumulación de
                líquido en la cara y disminuye la hinchazón.
            </p>

            <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">
                🚭 6. No fumes ni vapees (mínimo 72 horas)
            </h2>
            <p>
                Fumar es la causa #1 de alveolitis seca. La succión desaloja el coágulo y la nicotina retrasa la cicatrización.
            </p>
            <p className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg my-4">
                🚨 <strong>Idealmente espera 7 días.</strong> Si no puedes, al menos 72 horas es el mínimo absoluto.
            </p>

            <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">
                🏃 7. Evita ejercicio físico intenso
            </h2>
            <ul>
                <li><strong>Días 1-3:</strong> Reposo. Caminar suave está bien.</li>
                <li><strong>Días 4-7:</strong> Actividad ligera. Nada que aumente tu frecuencia cardíaca mucho.</li>
                <li><strong>Después del día 7:</strong> Puedes retomar ejercicio gradualmente.</li>
            </ul>
            <p className="mt-2">El esfuerzo físico aumenta la presión arterial y puede causar sangrado.</p>

            <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">
                🩸 8. Qué hacer si hay sangrado
            </h2>
            <p>Es normal que haya un poco de sangrado o "babeo rosado" las primeras 24 horas.</p>
            <div className="bg-white border border-neutral-200 rounded-xl p-4 my-4">
                <p><strong>Si sangra más de lo esperado:</strong></p>
                <ol className="mt-2 space-y-1 list-decimal list-inside">
                    <li>Coloca una gasa limpia doblada sobre la zona</li>
                    <li>Muerde firmemente durante 30-45 minutos sin soltar</li>
                    <li>Mantén la cabeza elevada</li>
                    <li>No escupas ni enjuagues</li>
                </ol>
                <p className="mt-2 text-amber-700">Si el sangrado no para después de 1 hora de presión continua, contacta a tu dentista.</p>
            </div>

            <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">
                🦷 9. Cepilla con cuidado
            </h2>
            <p>Sí debes cepillarte los dientes, pero con precauciones:</p>
            <ul>
                <li>✅ Cepilla normalmente los dientes que NO están cerca de la herida</li>
                <li>✅ En la zona operada, solo limpia muy suavemente (después del día 2)</li>
                <li>❌ No uses enjuague bucal con alcohol los primeros días (irrita)</li>
            </ul>

            <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">
                🚨 10. Señales de alerta: cuándo llamar al dentista
            </h2>
            <div className="bg-red-50 border-2 border-red-300 rounded-xl p-6 my-6">
                <p className="font-bold text-red-900 mb-3">Contacta inmediatamente si:</p>
                <ul className="space-y-2 text-red-800">
                    <li>🔴 Fiebre alta (más de 38°C) que no baja</li>
                    <li>🔴 Dolor que empeora después del día 3 (en vez de mejorar)</li>
                    <li>🔴 Hinchazón que sigue aumentando después del día 3-4</li>
                    <li>🔴 Pus, mal olor o mal sabor persistente</li>
                    <li>🔴 Sangrado abundante que no para con presión</li>
                    <li>🔴 Dificultad para tragar o respirar</li>
                    <li>🔴 Adormecimiento que no pasa después de 24 horas</li>
                </ul>
            </div>

            <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">
                📅 Cronología de recuperación típica
            </h2>
            <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6 my-6">
                <ul className="space-y-3">
                    <li><strong>Día 1:</strong> Sangrado leve, adormecimiento pasando, inicia hinchazón.</li>
                    <li><strong>Días 2-3:</strong> Punto máximo de hinchazón. Los días más incómodos.</li>
                    <li><strong>Días 4-5:</strong> La hinchazón empieza a bajar. Te sientes mejor.</li>
                    <li><strong>Días 6-7:</strong> Puedes retomar la mayoría de actividades.</li>
                    <li><strong>Días 10-14:</strong> Casi completamente recuperado.</li>
                    <li><strong>3-4 semanas:</strong> Cicatrización completa del tejido blando.</li>
                </ul>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg my-6">
                ✅ <strong>Recuerda:</strong> La mayoría de las complicaciones se pueden evitar simplemente
                siguiendo estas indicaciones. Tu cuerpo sabe cómo sanar; solo necesitas darle las condiciones óptimas.
            </div>
        </ArticleLayout>
    );
}
