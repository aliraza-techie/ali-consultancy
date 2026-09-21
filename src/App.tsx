import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustStrip from '@/components/TrustStrip';
import Services from '@/components/Services';
import About from '@/components/About';
import WhyQuantify from '@/components/WhyQuantify';
import Calculator from '@/components/Calculator';
import Trades from '@/components/Trades';
import Process from '@/components/Process';
import StatsBar from '@/components/StatsBar';
import Deliverables from '@/components/Deliverables';
import Pricing from '@/components/Pricing';
import Projects from '@/components/Projects';
import Testimonials from '@/components/Testimonials';
import Markets from '@/components/Markets';
import FAQ from '@/components/FAQ';
import EstimateForm from '@/components/EstimateForm';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <TrustStrip />
      <Services />
      <About />
      <WhyQuantify />
      <Calculator />
      <Trades />
      <Process />
      <StatsBar />
      <Deliverables />
      <Pricing />
      <Projects />
      <Testimonials />
      <Markets />
      <FAQ />
      <EstimateForm />
      <Footer />
    </div>
  );
}
