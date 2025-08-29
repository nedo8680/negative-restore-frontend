import React from "react";
import { useTranslation, Trans } from "react-i18next";
import { FaXTwitter, FaFacebookF, FaWhatsapp } from "react-icons/fa6";
import { FaDownload, FaUpload, FaTrashAlt } from "react-icons/fa";

type ResultSectionProps = {
  imageUrl: string;     // URL de la imagen procesada
  negativeUrl: string;  // URL del negativo original
  onUploadAnother?: () => void;
  onClear?: () => void;
};

const ResultSection: React.FC<ResultSectionProps> = ({
  imageUrl,
  negativeUrl,
  onUploadAnother,
  onClear,
}) => {
  const { t } = useTranslation();

  const origin =
    typeof window !== "undefined" && window.location?.origin
      ? window.location.origin
      : "https://negativerestore.com";
  const pageUrl = `${origin}/digitize-negatives`;

  const shareText = t("share.copy", { hashtag: t("share.hashtag") });
  const encodedTextWithUrl = encodeURIComponent(`${shareText}\n👉 ${pageUrl}`);
  const xShare  = `https://twitter.com/intent/tweet?text=${encodedTextWithUrl}`;
  const fbShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}&quote=${encodeURIComponent(shareText)}`;
  const waShare = `https://api.whatsapp.com/send?text=${encodedTextWithUrl}`;

  return (
    <section className="max-w-3xl mx-auto mt-4 sm:mt-6 bg-white shadow-md rounded-xl p-4 sm:p-6">
      {/* Layout responsive: columna en mobile, fila en md+ */}
      <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
        {/* Miniatura del negativo: centrada en mobile, a la izq en desktop */}
        <div className="shrink-0 md:shrink-0 md:self-start">
          <div className="relative inline-block group mx-auto md:mx-0">
            <img
              src={negativeUrl}
              alt={t("share.altNegative")}
              className="w-24 sm:w-28 md:w-32 rounded-md border shadow object-contain"
            />
            {/* Trash: visible siempre en mobile; en desktop aparece en hover */}
            <button
              type="button"
              onClick={onClear}
              className="absolute top-1 right-1 bg-white p-1.5 rounded-full shadow
                         text-red-600 hover:bg-red-100 transition
                         opacity-100 md:opacity-0 md:group-hover:opacity-100 md:focus:opacity-100"
              aria-label={t("digitize.clear")}
              title={t("digitize.clear")}
            >
              <FaTrashAlt />
            </button>
          </div>
          <p className="text-[11px] sm:text-xs text-gray-500 mt-1 text-left">
            {t("share.originalNegative")}
          </p>
        </div>

        {/* Imagen procesada protagonista */}
        <div className="flex-1">
          <img
            src={imageUrl}
            alt={t("share.altProcessed")}
            className="w-full rounded-xl border shadow object-contain"
          />
          <p className="text-xs sm:text-sm text-gray-500 mt-2 text-center">
            {t("share.processedPhoto")}
          </p>
        </div>
      </div>

      {/* Botonera centrada */}
      <div className="mt-6 flex flex-col sm:flex-row items-stretch justify-center gap-3 sm:gap-4">
        <a
          id="processed-download"
          href={imageUrl}
          download
          className="inline-flex justify-center items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow transition w-full sm:w-auto"
        >
          <FaDownload />
          {t("share.downloadButton")}
        </a>

        <button
          type="button"
          onClick={onUploadAnother}
          className="inline-flex justify-center items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow transition w-full sm:w-auto"
        >
          <FaUpload />
          {t("digitize.uploadAnother")}
        </button>
      </div>

      {/* CTA Social */}
      <div className="mt-8 text-center">
        <h3 className="text-lg font-semibold">{t("share.helpTitle")}</h3>
        <p className="text-gray-600 mb-4">
          <Trans i18nKey="share.helpSubtitle" />
        </p>

        <div className="flex justify-center gap-6 sm:gap-8 text-gray-700">
          <a href={xShare} target="_blank" rel="noopener noreferrer" aria-label={t("share.ariaX")} className="hover:text-black">
            <FaXTwitter size={26} />
          </a>
          <a href={fbShare} target="_blank" rel="noopener noreferrer" aria-label={t("share.ariaFacebook")} className="hover:text-blue-600">
            <FaFacebookF size={26} />
          </a>
          <a href={waShare} target="_blank" rel="noopener noreferrer" aria-label={t("share.ariaWhatsApp")} className="hover:text-green-500">
            <FaWhatsapp size={26} />
          </a>
        </div>

        <p className="mt-4 text-xs sm:text-sm text-gray-500">
          <Trans i18nKey="share.instagramNote" values={{ hashtag: t("share.hashtag") }} />
        </p>
      </div>
    </section>
  );
};

export default ResultSection;
