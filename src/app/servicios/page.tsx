import type { Metadata } from "next";
import ServicesGrid from "@/components/ui/ServicesGrid";
import AppointmentCTA from "@/components/ui/AppointmentCTA";

export const metadata: Metadata = {
    title: "Servicios Odontológicos",
    description: "Descubre nuestros tratamientos dentales especializados: Muelas del Juicio, Urgencias Dentales e Implantes.",
};

export default function ServiciosPage() {
    return (
        <main className="min-h-screen pt-32">
            <div className="container mx-auto px-4 mb-12">
                <div className="text-center max-w-3xl mx-auto">
                    <h1 className="font-display font-bold text-4xl md:text-5xl text-neutral-900 mb-6">
                        Nuestros Servicios
                    </h1>
                    <p className="text-xl text-neutral-600">
                        Tratamientos especializados con tecnología de última generación
                    </p>
                </div>
            </div>

            <ServicesGrid />
            <AppointmentCTA />
        </main>
    );
}
