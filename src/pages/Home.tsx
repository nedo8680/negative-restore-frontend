// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import UploadForm from "../components/UploadForm";
// import ProcessedImage from "../components/ProcessedImage";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Benefits from "../components/Benefits";
import MiniBlog from "../components/MiniBlog";
import Footer from "../components/Footer";


const Home: React.FC = () => {
  // const { t } = useTranslation();
  // const [imageUrl, setImageUrl] = useState("");

  return (
    <div className="flex flex-col items-center">
      <NavBar />
      <Hero />
      <Benefits /> 
      <MiniBlog />
      <Footer />
      {/* <UploadForm onProcessed={setImageUrl} />
      <ProcessedImage imageUrl={imageUrl} />
      <Link to="/thankyou" className="text-blue-600 underline">
        Ver agradecimientos
      </Link> */}
    </div>
  );
};

export default Home;
