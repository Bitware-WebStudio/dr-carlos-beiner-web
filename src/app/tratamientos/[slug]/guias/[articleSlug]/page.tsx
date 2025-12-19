import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ArticleLayout from "@/components/ui/ArticleLayout";
import { ARTICLES_DATA, getAllArticlePaths } from "@/lib/articles";
import Script from "next/script";

type Props = {
    params: Promise<{ slug: string; articleSlug: string }>;
};

export async function generateStaticParams() {
    return getAllArticlePaths();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug, articleSlug } = await params;
    const article = ARTICLES_DATA[slug]?.[articleSlug];

    if (!article) {
        return { title: "Artículo no encontrado" };
    }

    return {
        title: article.title,
        description: article.description,
    };
}

export default async function ArticlePage({ params }: Props) {
    const { slug, articleSlug } = await params;
    const article = ARTICLES_DATA[slug]?.[articleSlug];

    if (!article) {
        notFound();
    }

    const breadcrumbs = [
        { label: 'Inicio', href: '/' },
        {
            label: slug === 'muelas-del-juicio' ? 'Muelas del Juicio' :
                slug === 'urgencias-dentales' ? 'Urgencias Dentales' :
                    'Implantes',
            href: `/tratamientos/${slug}`
        },
        { label: article.title }
    ];

    const backLink = {
        label: `Volver a ${slug === 'muelas-del-juicio' ? 'Muelas del Juicio' :
            slug === 'urgencias-dentales' ? 'Urgencias Dentales' :
                'Implantes'}`,
        href: `/tratamientos/${slug}`
    };

    // FAQ Schema for SEO if applicable
    const schemaFAQ = article.schema || {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "¿Es necesario realizarse una evaluación?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sí, cada caso es único y requiere evaluación profesional con rayos X o scanner 3D para determinar el mejor tratamiento."
                }
            }
        ]
    };

    return (
        <>
            <Script
                id="faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }}
            />
            <ArticleLayout
                title={article.title.split(' | ')[0]}
                description={article.description}
                breadcrumbs={breadcrumbs}
                backLink={backLink}
            >
                {/* Content according to the specific article */}
                {articleSlug === 'si-no-duelen' && (
                    <div className="space-y-6">
                        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl mb-8">
                            <p className="text-lg font-semibold text-amber-900 mb-2">
                                💡 La respuesta corta
                            </p>
                            <p className="text-amber-800">
                                <strong>Sí, en muchos casos.</strong> Las muelas del juicio son como una &quot;bomba de tiempo silenciosa&quot;.
                                Cuando empiezan a doler, muchas veces el daño ya está hecho. La evaluación temprana con rayos X
                                es clave para decidir si es mejor sacarlas antes de que causen problemas.
                            </p>
                        </div>

                        <h2 className="font-display font-bold text-2xl text-neutral-900 mt-12 mb-4">
                            ¿Por qué no duelen si están mal posicionadas?
                        </h2>
                        <p>
                            Es una de las preguntas más frecuentes en la consulta: <em>&quot;Doctor, si no me duelen, ¿para qué sacarlas?&quot;</em>
                        </p>
                        <p>
                            La realidad es que <strong>el dolor no es un buen indicador</strong> de si una muela del juicio está bien o mal.
                        </p>
                        <p>
                            Las muelas pueden estar:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Completamente <strong>impactadas</strong> (atrapadas dentro del hueso)</li>
                            <li>Inclinadas hacia el diente vecino</li>
                            <li>Presionando raíces de otros molares</li>
                        </ul>
                        <p>
                            Y aún así, <strong>no causar dolor</strong>... hasta que se infectan o dañan el molar vecino de forma irreversible.
                        </p>

                        <div className="bg-red-50 border border-red-200 rounded-xl p-6 my-6">
                            <h3 className="font-bold text-lg text-red-900 mb-3">⚠️ Problemas más comunes</h3>
                            <ul className="space-y-2 text-red-800">
                                <li><strong>Infecciones recurrentes:</strong> La encía se inflama, duele y sangra</li>
                                <li><strong>Daño a molares vecinos:</strong> Caries o reabsorción de raíces</li>
                                <li><strong>Quistes o tumores:</strong> Se pueden formar alrededor de muelas impactadas</li>
                            </ul>
                        </div>
                    </div>
                )}

                {/* Default content for others if not yet fully implemented */}
                {articleSlug !== 'si-no-duelen' && (
                    <div className="space-y-6">
                        <p className="lead">
                            {article.description}
                        </p>
                        <h2>Información Profesional</h2>
                        <p>
                            Estamos preparando la versión detallada de este artículo para Next.js.
                            Mientras tanto, puedes agendar una evaluación para resolver todas tus dudas directamente con el Dr. Carlos Beiner.
                        </p>
                        <div className="bg-primary-50 border-l-4 border-primary p-6 rounded-r-xl my-8">
                            <p className="text-primary-900 font-semibold mb-2">
                                💡 Consejo del Dr. Beiner
                            </p>
                            <p className="text-primary-800">
                                No esperes a que el problema empeore. Una evaluación temprana siempre es mejor que
                                esperar a tener una urgencia. Agenda tu cita y resolvamos tus dudas juntos.
                            </p>
                        </div>
                    </div>
                )}
            </ArticleLayout>
        </>
    );
}
