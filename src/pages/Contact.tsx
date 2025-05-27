import { Helmet, HelmetProvider } from "react-helmet-async";
import ContactForm from "../components/ContactForm";
import { useTranslation } from "react-i18next";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <div>
        <NavBar />
        <HelmetProvider>
        <div className="px-4 py-10 max-w-4xl mx-auto h-screen">
            <Helmet>
            <title>{t("contact.title")}</title>
            <meta name="description" content={t("contact.description")} />
            </Helmet>
            
            <h1 className="text-3xl font-bold mb-6 text-center">{t("contact.heading")}</h1>
            <p className="text-center text-gray-600 mb-8">{t("contact.subheading")}</p>
            <ContactForm />
            
        </div>
        </HelmetProvider>
        <Footer />
    </div>
  );
};

export default Contact;
