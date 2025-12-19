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
    relatedArticles?: Array<{ title: string; href: string }>;
}

export default function ArticleLayout({
    title,
    description,
    breadcrumbs,
    lastUpdated = '18 de diciembre, 2024',
    children,
    backLink,
    relatedArticles = [],
}: ArticleLayoutProps) {
    return (
        <div className="min-h-screen">
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
                        {/* Content */}
                        <article className="prose prose-lg max-w-none">{children}</article>
                        {/* Author Box */}
                        <div className="mt-12 p-6 bg-gradient-to-br from-primary-50 to-blue-50 rounded-2xl border border-primary-100">
                            <div className="flex items-start space-x-4">
                                <img
                                    src="https://res.cloudinary.com/dvofqghc7/image/upload/v1765850709/Gemini_Generated_Image_wckr7qwckr7qwckr_n6dxba.png"
                                    alt="Dr. Carlos Beiner"
                                    className="w-20 h-20 rounded-full object-cover"
                                />
                                <div>
                                    <h3 className="font-display font-bold text-lg text-neutral-900 mb-1">
                                        Dr. Carlos Beiner Mangiamarchi
                                    </h3>
                                    <p className="text-sm text-neutral-600 mb-3">
                                        Cirujano Dentista, Universidad Finis Terrae (2009)
                                        <br />
                                        Especializado en Cirugía Bucal | +15 años de experiencia
                                    </p>
                                    <a
                                        href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${CONTACT_INFO.whatsappMessage}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary-600 transition-colors"
                                    >
                                        ¿Tienes dudas? Pregúntale al Dr. Carlos →
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* Related Articles */}
                        {relatedArticles.length > 0 && (
                            <div className="mt-12">
                                <h3 className="font-display font-bold text-xl text-neutral-900 mb-4">
                                    Artículos relacionados
                                </h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {relatedArticles.map((article, index) => (
                                        <Link
                                            key={index}
                                            href={article.href}
                                            className="p-4 bg-white rounded-xl border border-neutral-200 hover:border-primary hover:shadow-md transition-all"
                                        >
                                            <h4 className="font-semibold text-neutral-900 hover:text-primary transition-colors">
                                                {article.title}
                                            </h4>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                        {/* Back Button */}
                        {backLink && (
                            <div className="mt-12 pt-8 border-t border-neutral-200">
                                <Link
                                    href={backLink.href}
                                    className="inline-flex items-center space-x-2 text-primary hover:text-primary-600 font-semibold transition-colors group"
                                >
                                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                                    <span>{backLink.label}</span>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
}
