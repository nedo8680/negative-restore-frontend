import { useTranslation, Trans } from "react-i18next";

const MiniBlog: React.FC = () => {
    const { t } = useTranslation();
    return (
        <section className="py-16 px-6 max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10" id="about">
        <div className="lg:w-1/2">
          <h2 className="text-2xl font-semibold mb-6">{t("mini_blog.title")} </h2>
          <p className="text-lg text-gray-700 mb-4">
            <Trans i18nKey="mini_blog.description" />
          </p>
          <p className="text-gray-600 mb-4">
            <Trans i18nKey="mini_blog.description2" />
          </p>
          <p className="text-gray-600">
            <Trans i18nKey="mini_blog.description3" />
          </p>
          <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            <a href="https://www.youtube.com/watch?v=2gk4v0q1x8E" target="_blank" rel="noopener noreferrer">
              {t("mini_blog.cta")}
            </a>
          </button>
        </div>
        
        <div className="lg:w-1/2">
          <img 
            src="/convert-photo-negatives-to-digital.jpg" 
            alt="Digitize film negatives into digital photos using Negative Restore" 
            className="rounded-xl shadow-md w-full"
          />
        </div>
      </section>
    );
    }
export default MiniBlog;