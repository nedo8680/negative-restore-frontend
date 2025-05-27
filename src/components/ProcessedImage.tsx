import React from "react";
import { useTranslation } from "react-i18next";

interface Props {
  imageUrl: string;
}

const ProcessedImage: React.FC<Props> = ({ imageUrl }) => {
  const { t } = useTranslation();

  if (!imageUrl) return null;

  return (
   <div className="flex flex-col items-center">
      <p className="text-sm text-gray-600 mb-2">{t("digitize.processed")}</p>
      <img
        src={imageUrl}
        alt={t("digitize.processedAlt")}
        className="max-h-[300px] w-auto rounded-md shadow-md object-contain"
      />
      <a
        href={imageUrl}
        download
        className="mt-3 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
      >
        {t("digitize.processed_download")}
      </a>
    </div>
  );
};

export default ProcessedImage;
