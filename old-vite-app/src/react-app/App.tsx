import { BrowserRouter as Router, Routes, Route } from "react-router";
import HomePage from "@/react-app/pages/Home";
import ServiciosPage from "@/react-app/pages/Servicios";
import UbicacionPage from "@/react-app/pages/Ubicacion";
import ContactoPage from "@/react-app/pages/Contacto";
import MuelasDelJuicioPage from "@/react-app/pages/MuelasDelJuicio";
import UrgenciasDentalesPage from "@/react-app/pages/UrgenciasDentales";
import ImplantesPage from "@/react-app/pages/Implantes";
import ScrollToTop from "@/react-app/components/ScrollToTop";

// Artículos - Muelas del Juicio
import SiNoDuelenArticulo from "@/react-app/pages/pacientes/muelas-juicio/SiNoDuelen";
import CuantoDuraHinchazon from "@/react-app/pages/pacientes/muelas-juicio/CuantoDuraHinchazon";
import FumarVapearDespues from "@/react-app/pages/pacientes/muelas-juicio/FumarVapearDespues";
import CuatroMuelasMismaSesion from "@/react-app/pages/pacientes/muelas-juicio/CuatroMuelasMismaSesion";
import RiesgoPerdidaSensibilidad from "@/react-app/pages/pacientes/muelas-juicio/RiesgoPerdidaSensibilidad";
import RecuperacionRapida from "@/react-app/pages/pacientes/muelas-juicio/RecuperacionRapida";

// Artículos - Urgencias Dentales
import ComoSaberSiEsUrgencia from "@/react-app/pages/pacientes/urgencias/ComoSaberSiEsUrgencia";
import CaraHinchadaAntibioticos from "@/react-app/pages/pacientes/urgencias/CaraHinchadaAntibioticos";
import DolorNocturnoCuandoEsGrave from "@/react-app/pages/pacientes/urgencias/DolorNocturnoCuandoEsGrave";
import SiempreSacanElDiente from "@/react-app/pages/pacientes/urgencias/SiempreSacanElDiente";
import DienteCaidoGolpe from "@/react-app/pages/pacientes/urgencias/DienteCaidoGolpe";
import InfeccionDentalCuantoEsperar from "@/react-app/pages/pacientes/urgencias/InfeccionDentalCuantoEsperar";

// Artículos - Implantes Dentales
import DuelePonerse from "@/react-app/pages/pacientes/implantes/DuelePonerse";
import QuedareSinDientes from "@/react-app/pages/pacientes/implantes/QuedareSinDientes";
import PuedeRechazar from "@/react-app/pages/pacientes/implantes/PuedeRechazar";
import CuantoDuran from "@/react-app/pages/pacientes/implantes/CuantoDuran";
import DiferenciaImplantePuenteProtesis from "@/react-app/pages/pacientes/implantes/DiferenciaImplantePuenteProtesis";
import CostoImplantes from "@/react-app/pages/pacientes/implantes/CostoImplantes";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/servicios" element={<ServiciosPage />} />
        <Route path="/ubicacion" element={<UbicacionPage />} />
        <Route path="/contacto" element={<ContactoPage />} />
        <Route path="/tratamientos/muelas-del-juicio" element={<MuelasDelJuicioPage />} />
        <Route path="/tratamientos/urgencias-dentales" element={<UrgenciasDentalesPage />} />
        <Route path="/tratamientos/implantes" element={<ImplantesPage />} />

        {/* Artículos educativos - Muelas del Juicio */}
        <Route path="/tratamientos/muelas-del-juicio/guias/si-no-duelen" element={<SiNoDuelenArticulo />} />
        <Route path="/tratamientos/muelas-del-juicio/guias/cuanto-dura-hinchazon" element={<CuantoDuraHinchazon />} />
        <Route path="/tratamientos/muelas-del-juicio/guias/fumar-vapear" element={<FumarVapearDespues />} />
        <Route path="/tratamientos/muelas-del-juicio/guias/4-muelas-misma-sesion" element={<CuatroMuelasMismaSesion />} />
        <Route path="/tratamientos/muelas-del-juicio/guias/riesgo-sensibilidad" element={<RiesgoPerdidaSensibilidad />} />
        <Route path="/tratamientos/muelas-del-juicio/guias/recuperacion-rapida" element={<RecuperacionRapida />} />

        {/* Artículos - Urgencias Dentales */}
        <Route path="/tratamientos/urgencias-dentales/guias/es-urgencia-real" element={<ComoSaberSiEsUrgencia />} />
        <Route path="/tratamientos/urgencias-dentales/guias/cara-hinchada-antibioticos" element={<CaraHinchadaAntibioticos />} />
        <Route path="/tratamientos/urgencias-dentales/guias/dolor-nocturno" element={<DolorNocturnoCuandoEsGrave />} />
        <Route path="/tratamientos/urgencias-dentales/guias/siempre-sacan-diente" element={<SiempreSacanElDiente />} />
        <Route path="/tratamientos/urgencias-dentales/guias/diente-caido-golpe" element={<DienteCaidoGolpe />} />
        <Route path="/tratamientos/urgencias-dentales/guias/infeccion-cuanto-esperar" element={<InfeccionDentalCuantoEsperar />} />

        {/* Artículos - Implantes Dentales */}
        <Route path="/tratamientos/implantes/guias/duele-ponerse" element={<DuelePonerse />} />
        <Route path="/tratamientos/implantes/guias/quedare-sin-dientes" element={<QuedareSinDientes />} />
        <Route path="/tratamientos/implantes/guias/rechazo-implante" element={<PuedeRechazar />} />
        <Route path="/tratamientos/implantes/guias/cuanto-duran" element={<CuantoDuran />} />
        <Route path="/tratamientos/implantes/guias/implante-vs-puente-protesis" element={<DiferenciaImplantePuenteProtesis />} />
        <Route path="/tratamientos/implantes/guias/costo-implantes" element={<CostoImplantes />} />
      </Routes>
    </Router>
  );
}

