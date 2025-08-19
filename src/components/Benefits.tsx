import { useTranslation, Trans } from "react-i18next";
import { FcFlashOn, FcMultipleDevices, FcPrivacy } from "react-icons/fc";


const Benefits: React.FC = () => {
    const { t } = useTranslation();
    return (
      <section id="digitize" className="py-16 bg-white px-6 text-center max-w-5xl">
        <h2 className="text-2xl font-semibold mb-10">{t("benefits.title")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="flex flex-col items-center">
            <FcFlashOn className="text-6xl mb-8" aria-label="Fast scanning icon"/> 
            <h3 className="text-xl font-semibold mb-2">{t("benefits.fast")}</h3>
            <p className="text-gray-600">
              <Trans i18nKey="benefits.fast_description" />
            </p>
          </div>
          <div className="flex flex-col items-center">
            <FcMultipleDevices className="text-6xl mb-8" aria-label="Online access icon"/>
            <h3 className="text-xl font-semibold mb-2">{t("benefits.online")}</h3>
            <p className="text-gray-600">
              <Trans i18nKey="benefits.online_description" />
            </p>
          </div>
          <div className="flex flex-col items-center">
            <FcPrivacy className="text-6xl mb-8" aria-label="Privacy icon"/>
            <h3 className="text-xl font-semibold mb-2">{t("benefits.secure_private")}</h3>
            <p className="text-gray-600">
              <Trans i18nKey="benefits.secure_private_description" />
            </p>
          </div>
        </div>
      </section>
    );
}
export default Benefits;