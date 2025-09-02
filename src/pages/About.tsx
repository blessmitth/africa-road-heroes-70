import Header from "@/components/Header";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";
import EmergencyCTA from "@/components/EmergencyCTA";
import SEOHead from "@/components/SEOHead";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="About Ultimate Trucking Solutions - Expert Team & Professional History"
        description="Learn about our experienced team, professional history, and commitment to excellence in truck repair and fleet maintenance across Botswana and SADC region."
        keywords="about Ultimate Trucking Solutions, experienced mechanics, professional truck repair team, Botswana fleet services, SADC transport solutions"
      />
      <Header />
      <div className="pt-28">
        <About />
        <WhyChooseUs />
      </div>
      <Footer />
      <EmergencyCTA />
    </div>
  );
};

export default AboutPage;