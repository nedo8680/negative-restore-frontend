import { useTranslation } from "react-i18next";
import { Card } from "./ui/card";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { Monitor, Camera, UploadCloud } from "lucide-react";

export default function HowToSection() {
  const { t } = useTranslation();

  return (
    <section
      id="howto"
      aria-labelledby="howto-title"
      className="w-full max-w-5xl px-4 py-10"
    >
      <h2 id="howto-title" className="text-2xl font-semibold mb-6">
        {t("howto.title")}
      </h2>

      {/* Layout de 3 pasos */}
      <div className="grid gap-4 sm:grid-cols-3">
        {/* Paso 1 */}
        <Card className="p-5 rounded-2xl shadow-sm">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-full flex items-center justify-center border">
              <Monitor className="size-5" aria-hidden />
            </div>
            <h3 className="text-lg font-medium">{t("howto.step1_title")}</h3>
          </div>
          <Separator className="my-3" />
          <p className="text-sm leading-relaxed">{t("howto.step1_text")}</p>
        </Card>

        {/* Paso 2 */}
        <Card className="p-5 rounded-2xl shadow-sm">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-full flex items-center justify-center border">
              <Camera className="size-5" aria-hidden />
            </div>
            <h3 className="text-lg font-medium">{t("howto.step2_title")}</h3>
          </div>
          <Separator className="my-3" />
          <p className="text-sm leading-relaxed">{t("howto.step2_text")}</p>
        </Card>

        {/* Paso 3 */}
        <Card className="p-5 rounded-2xl shadow-sm">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-full flex items-center justify-center border">
              <UploadCloud className="size-5" aria-hidden />
            </div>
            <h3 className="text-lg font-medium">{t("howto.step3_title")}</h3>
          </div>
          <Separator className="my-3" />
          <p className="text-sm leading-relaxed">{t("howto.step3_text")}</p>
        </Card>
      </div>

      {/* Lista breve (coincide con JSON-LD) */}
      <ol className="list-decimal ml-6 mt-6 space-y-2 text-sm">
        <li id="howto-step-1">{t("howto.list_step1")}</li>
        <li id="howto-step-2">{t("howto.list_step2")}</li>
        <li id="howto-step-3">{t("howto.list_step3")}</li>
      </ol>

      {/* CTA opcional */}
      <div className="mt-6">
        <Button asChild size="lg" className="rounded-2xl">
          <a href="https://negativerestore.com/">
            {/** Puedes traducir esta etiqueta si quieres */}
            Start scanning now
          </a>
        </Button>
      </div>
    </section>
  );
}
