import { HelmetProvider } from "react-helmet-async";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Benefits from "../components/Benefits";
import MiniBlog from "../components/MiniBlog";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  return (
    <>
      <HelmetProvider>
        <title>Negative Restore | Upload and Convert your Film Negatives</title>
        <meta
          name="description"
          content="Use our smart slide and negative converter to scan negatives to digital and convert negatives to digital photos online."
        />
      </HelmetProvider>
      <div className="flex flex-col items-center">
        <NavBar />
        <Hero />
        <Benefits />
        <MiniBlog />
        <Footer />
      </div>
    </>
  );
};

export default Home;
