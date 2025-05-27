import React from "react";
import { useTranslation } from "react-i18next";
import NavBar from "../components/NavBar";
import UploadForm from "../components/UploadForm";
import { HelmetProvider } from "react-helmet-async";
import { motion } from "framer-motion";
import StepCard from "../components/StepCard";
import Footer from "../components/Footer";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

const DigitizeNegative: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div>
        <NavBar />
        <div className="max-w-5xl mx-auto px-4 py-10">
          <HelmetProvider>
              <title>{t("digitize.title")}</title>
              <meta
              name="description"
              content={t("digitize.metaDescription")}
              />
          </HelmetProvider>

          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              {t("digitize.heading")}
          </h1>

          <p className="text-center text-gray-700 mb-10 max-w-2xl mx-auto">
              {t("digitize.intro")}
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
              {[1, 2, 3].map((step) => (
              <motion.div
                  key={step}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: step * 0.15 }}
              >
                  <StepCard
                  title={t(`digitize.step${step}.title`)}
                  description={t(`digitize.step${step}.description`)}
                  imgSrc={`/step${step}.jpg`} // Assuming you have images for each step
                  />
              </motion.div>
              ))}
          </div>

          <div className="bg-gray-50 p-8 rounded-xl shadow-inner">
              <h2 className="text-xl font-semibold mb-4 text-center">
              {t("digitize.uploadTitle")}
              </h2>
              
              <UploadForm />
            
          </div>
      </div>
        <Footer />
    </div>
    
  );
}

export default DigitizeNegative;