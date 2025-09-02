import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import EmergencyCTA from "@/components/EmergencyCTA";
import SEOHead from "@/components/SEOHead";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Contact Ultimate Trucking Solutions - Get Professional Truck Repair Services"
        description="Contact us for 24/7 truck repair, fleet maintenance, roadside assistance across Botswana and SADC. Emergency mobile mechanics available. Call +267 71 669 889"
        keywords="contact truck repair, emergency roadside assistance, mobile mechanics Botswana, fleet maintenance contact, truck repair quotes"
      />
      <Header />
      <div className="pt-28">
        <Contact />
      </div>
      <Footer />
      <EmergencyCTA />
    </div>
  );
};

export default ContactPage;