import type { Metadata } from "next";
import LocationMap from "@/components/ui/LocationMap";
import DoctorBio from "@/components/ui/DoctorBio";

export const metadata: Metadata = {
    title: "Ubicación y Contacto",
    description: "Encuéntranos en Nueva Providencia 1860, Providencia. A pasos del Metro Pedro de Valdivia.",
};

export default function UbicacionPage() {
    return (
        <main className="min-h-screen pt-32">
            <div className="container mx-auto px-4 mb-12">
                <div className="text-center max-w-3xl mx-auto">
                    <h1 className="font-display font-bold text-4xl md:text-5xl text-neutral-900 mb-6">
                        ¿Cómo Llegar?
                    </h1>
                    <p className="text-xl text-neutral-600">
                        En el corazón de Providencia, fácil acceso en metro y locomoción
                    </p>
                </div>
            </div>

            <LocationMap />
            <DoctorBio />
        </main>
    );
}
