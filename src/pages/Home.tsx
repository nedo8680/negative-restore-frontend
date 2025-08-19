import { HelmetProvider } from "react-helmet-async";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Benefits from "../components/Benefits";
import MiniBlog from "../components/MiniBlog";
import Footer from "../components/Footer";

import HomeSEO from "../components/SEO/HomeSEO";
import FaqSection from "../components/FaqSection";


const Home: React.FC = () => {
  return (
    <>
      <HelmetProvider>
        <title>Scan Film Negatives to Digital Photos Online | Negative Restore</title>
        <meta
          name="description"
          content="Easily scan film negatives and turn negatives into digital photos. Upload online—no scanner needed. The best way to convert negatives into pictures fast."
        />
        <HomeSEO />
      </HelmetProvider>
      <div className="flex flex-col items-center">
        <NavBar />
        <Hero />
        <MiniBlog reelUrl="https://www.instagram.com/reel/DNWFv4sJYYR/" />
        <Benefits />
        <FaqSection />
        <Footer />
      </div>
    </>
  );
};

export default Home;
