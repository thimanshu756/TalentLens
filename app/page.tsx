import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import ValueProposition from './components/sections/ValueProposition';
import AboutUs from './components/sections/AboutUs';
import HowWeHelp from './components/sections/HowWeHelp';
import FinalCTA from './components/sections/FinalCTA';
import TrustBar from './components/sections/TrustBar';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ValueProposition />
        <AboutUs />
        <HowWeHelp />
        <TrustBar />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
