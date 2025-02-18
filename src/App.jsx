import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HistoricHomeSpecialists from "./components/HistoricHomeSpecialists";
import LatestProperties from "./components/LatestProperties";
import PopularProperties from "./components/PopularProperties";
import Services from "./components/Services";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <PopularProperties />
      <LatestProperties />
      <HistoricHomeSpecialists />
      <Services />
      <CTA />
      <Footer />
    </>
  )
}