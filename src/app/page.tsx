import VideoHero from "@/components/ui/VideoHero";
import ServicesGrid from "@/components/ui/ServicesGrid";
import FirstVisit from "@/components/ui/FirstVisit";
import DoctorBio from "@/components/ui/DoctorBio";

import VideoReviews from "@/components/ui/VideoReviews";
import LocationMap from "@/components/ui/LocationMap";
import AppointmentCTA from "@/components/ui/AppointmentCTA";
import WhatsAppButton from "@/components/interactive/WhatsAppButton";
import StickyCTA from "@/components/interactive/StickyCTA";

export default function HomePage() {
  return (
    <>
      <main>
        <VideoHero />
        <ServicesGrid />
        <FirstVisit />
        <DoctorBio />

        <VideoReviews />
        <LocationMap />
        <AppointmentCTA />
      </main>
      <StickyCTA />
      <WhatsAppButton />
    </>
  );
}
