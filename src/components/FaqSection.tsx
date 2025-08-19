import { useTranslation } from "react-i18next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export default function FaqSection() {
  const { t } = useTranslation();

  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="w-full max-w-5xl px-4 py-10"
    >
      <h2 id="faq-title" className="text-center text-2xl font-semibold mb-4">
        FAQ
      </h2>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="q1">
          <AccordionTrigger>{t("faq.q1")}</AccordionTrigger>
          <AccordionContent>{t("faq.a1")}</AccordionContent>
        </AccordionItem>

        <AccordionItem value="q2">
          <AccordionTrigger>{t("faq.q2")}</AccordionTrigger>
          <AccordionContent>{t("faq.a2")}</AccordionContent>
        </AccordionItem>

        <AccordionItem value="q3">
          <AccordionTrigger>{t("faq.q3")}</AccordionTrigger>
          <AccordionContent>{t("faq.a3")}</AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
