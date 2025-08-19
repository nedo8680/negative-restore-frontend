import { useTranslation, Trans } from "react-i18next";
import React from "react";

type MiniBlogProps = {
  reelUrl?: string;
};

const MiniBlog: React.FC<MiniBlogProps> = ({reelUrl}) => {
    const { t } = useTranslation();
    
    const embedSrc = React.useMemo(() => {
    if (!reelUrl) return null;
    return reelUrl.endsWith("/embed") ? reelUrl : `${reelUrl.replace(/\/$/, "")}/embed`;
  }, [reelUrl]);
    return (
        <section className="py-16 px-6 max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-10" id="about">
         <div className="lg:w-1/2 w-full">
          {embedSrc ? (
            // Contenedor responsivo 9:16 para Reels
            <div className="relative w-full" style={{ aspectRatio: "5 / 7" }}>
              <iframe
                src={embedSrc}
                title="Instagram Reel"
                className="absolute inset-0 w-full h-full rounded-xl shadow-md"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          ) : (
            // Fallback si no pasas reelUrl (opcional)
            <img
              src="/convert-photo-negatives-to-digital.jpg"
              alt="Digitize film negatives into digital photos using Negative Restore"
              className="rounded-xl shadow-md w-full"
            />
          )}
        </div>
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
            <a href="/digitize-negatives">
              {t("mini_blog.cta")}
            </a>
          </button>
        </div>
      </section>
    );
    }
export default MiniBlog;