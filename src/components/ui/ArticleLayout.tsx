import { ReactNode } from 'react';
import Link from 'next/link';
import { ChevronRight, Calendar, User, ArrowLeft } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface ArticleLayoutProps {
    title: string;
    description: string;
    breadcrumbs: BreadcrumbItem[];
    lastUpdated?: string;
    children: ReactNode;
    backLink?: {
        label: string;
        href: string;
    };
    relatedArticles?: Array<{
        title: string;
        href: string;
    }>;
}

export default function ArticleLayout({
    title,
    description,
    breadcrumbs,
    lastUpdated = '18 de diciembre, 2024',
    children,
    backLink,
    relatedArticles = []
}: ArticleLayoutProps) {
    return (
        <main className="pt-28 pb-20">
            <div className="container mx-auto px-4">
                {/* Breadcrumbs */}
                <nav className="flex items-center space-x-2 text-sm text-neutral-600 mb-6">
                    {breadcrumbs.map((item, index) => (
                        <div key={index} className="flex items-center">
                            {index > 0 && <ChevronRight className="w-4 h-4 mx-2" />}
                            {item.href ? (
                                <Link href={item.href} className="hover:text-primary transition-colors">
                                    {item.label}
                                </Link>
                            ) : (
                                <span className="text-neutral-900 font-medium">{item.label}</span>
                            )}
                        </div>
                    ))}
                </nav>

                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <header className="mb-8">
                        <h1 className="font-display font-bold text-3xl md:text-4xl text-neutral-900 mb-4">
                            {title}
                        </h1>
                        <p className="text-xl text-neutral-600 mb-6">{description}</p>

                        <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-500">
                            <div className="flex items-center space-x-2">
                                <Calendar className="w-4 h-4" />
                                <span>Actualizado: {lastUpdated}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <User className="w-4 h-4" />
                                <span>Dr. Carlos Beiner Mangiamarchi</span>
                            </div>
                        </div>
                    </header>

                    {/* Article Content */}
                    <article className="prose prose-lg max-w-none prose-headings:font-display prose-h2:text-2xl prose-h3:text-xl prose-p:text-neutral-700 prose-li:text-neutral-700">
                        {children}
                    </article>

                    {/* CTA */}
                    <div className="mt-12 bg-gradient-to-br from-primary via-support to-secondary rounded-2xl p-8 text-white">
                        <h3 className="font-display font-bold text-2xl mb-4">
                            ¿Tienes más dudas sobre este tema?
                        </h3>
                        <p className="text-lg opacity-90 mb-6">
                            Agenda una evaluación con el Dr. Carlos Beiner
                        </p>
                        <a
                            href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${CONTACT_INFO.whatsappMessage}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-white text-primary font-bold px-8 py-4 rounded-xl hover:bg-neutral-100 transition-all"
                        >
                            Agendar por WhatsApp
                        </a>
                    </div>

                    {/* Back Link */}
                    {backLink && (
                        <div className="mt-8">
                            <Link
                                href={backLink.href}
                                className="inline-flex items-center space-x-2 text-primary hover:underline"
                            >
                                <ArrowLeft className="w-4 h-4" />
                                <span>{backLink.label}</span>
                            </Link>
                        </div>
                    )}

                    {/* Related Articles */}
                    {relatedArticles.length > 0 && (
                        <div className="mt-12 border-t border-neutral-200 pt-8">
                            <h3 className="font-display font-bold text-xl text-neutral-900 mb-6">
                                Artículos Relacionados
                            </h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                {relatedArticles.map((article, index) => (
                                    <Link
                                        key={index}
                                        href={article.href}
                                        className="card hover:shadow-lg transition-all group"
                                    >
                                        <div className="flex items-center justify-between">
                                            <span className="text-neutral-900 group-hover:text-primary transition-colors">
                                                {article.title}
                                            </span>
                                            <ChevronRight className="w-4 h-4 text-neutral-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}
