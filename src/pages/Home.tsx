import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Benefits from "../components/Benefits";
import MiniBlog from "../components/MiniBlog";
import Footer from "../components/Footer";


const Home: React.FC = () => {

  return (
    <div className="flex flex-col items-center">
      <NavBar />
      <Hero />
      <Benefits /> 
      <MiniBlog />
      <Footer />
    </div>
  );
};

export default Home;
