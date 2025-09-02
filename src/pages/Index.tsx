import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicesPreview from "@/components/ServicesPreview";
import WhyChooseUs from "@/components/WhyChooseUs";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import EmergencyCTA from "@/components/EmergencyCTA";
import SEOHead from "@/components/SEOHead";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Ultimate Trucking Solutions - 24/7 Truck Repair & Fleet Services in Botswana"
        description="Professional truck repair, roadside assistance, and fleet maintenance services across Botswana & SADC region. 24/7 emergency support, engine rebuilds, and mobile mechanics."
        keywords="truck repair Botswana, fleet maintenance SADC, roadside assistance, engine rebuild, mobile mechanics, heavy vehicle repair, Gaborone truck services"
      />
      <Header />
      <Hero />
      <ServicesPreview />
      <WhyChooseUs />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
      <EmergencyCTA />
    </div>
  );
};

export default Index;
