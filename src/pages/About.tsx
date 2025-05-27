import React from "react";
import { useTranslation } from "react-i18next";
import { Helmet, HelmetProvider } from "react-helmet-async";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";


const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>{t("about.metaTitle", "About This Project")}</title>
          <meta
            name="description"
            content={t("about.metaDescription", "Learn more about the story and motivation behind this project.")}
          />
        </Helmet>

        <NavBar />

        <main className="max-w-3xl mx-auto px-4 py-12 h-screen">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            {t("about.heading", "About This Project")}
          </h1>

          <div className="text-gray-700 space-y-6 leading-relaxed">
            <p className="text-lg mb-6">
              {t(
                "about.p1",
                "Hi! My name is Edwin, and I'm a student currently living in Barcelona. This project started as a way to learn and explore new technologies while solving a real-world problem."
              )}
            </p>

            <p className="text-lg mb-6">
              {t(
                "about.p2",
                "As someone passionate about digital creativity and technology, I'm constantly improving this site — adding features, fixing bugs, and refining the user experience."
              )}
            </p>

            <p className="text-lg mb-6">
              {t(
                "about.p3",
                "Maintaining this project also helps me cover some personal and academic expenses. If you find it useful or appreciate the effort behind it, feel free to support it or spread the word!"
              )}
            </p>

            <p className="text-lg  mb-6">
              {t(
                "about.p4",
                "Thanks for visiting and using the site — your feedback and encouragement really help this project grow."
              )}
               <Link
            to="/contact"
            className="text-blue-600 hover:underline ml-1"
          >
            {t("about.contactLink", "Go to contact page")}
          </Link>.
            </p>
          </div>
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default About;
