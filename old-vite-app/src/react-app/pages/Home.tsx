import Header from '@/react-app/components/Header';
import Footer from '@/react-app/components/Footer';
import WhatsAppButton from '@/react-app/components/WhatsAppButton';
import VideoHero from '@/react-app/components/VideoHero';
import ServicesGrid from '@/react-app/components/ServicesGrid';
import DoctorBio from '@/react-app/components/DoctorBio';
import ClinicGallery from '@/react-app/components/ClinicGallery';
import LocationMap from '@/react-app/components/LocationMap';
import AppointmentCTA from '@/react-app/components/AppointmentCTA';
import StickyCTA from '@/react-app/components/StickyCTA';
import FirstVisit from '@/react-app/components/FirstVisit';
import VideoReviews from '@/react-app/components/VideoReviews';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <VideoHero />
        <ServicesGrid />
        <FirstVisit />
        <DoctorBio />
        <ClinicGallery />
        <VideoReviews />
        <LocationMap />
        <AppointmentCTA />
      </main>
      <Footer />
      <StickyCTA />
      <WhatsAppButton />
    </div>
  );
}
