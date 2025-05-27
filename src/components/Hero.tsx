import BeforeAfter from "./BeforeAfter";
import { useTranslation } from "react-i18next";

const Hero: React.FC = () => {
    const { t } = useTranslation();
    return (
      <section className="container flex flex-col justify-center items-center bg-gray-50 py-16 px-6 mt-3 text-center">
        <h1 className="text-3xl font-bold mb-4">{t("hero.title")} </h1>
        <p className="text-lg text-gray-600 mb-12 max-w-4xl">
          {t("hero.description")} 
        </p>

        <BeforeAfter
          beforeImage="./public/img4.jpg"
          afterImage="./public/processed_img4.jpg"
        />

        <a
          href="#digitize"
          className="inline-block mt-10 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
        >
            {t("hero.cta")}
        </a>
      </section>
    );
}

export default Hero;
