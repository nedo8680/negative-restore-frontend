// src/components/SEO/HomeSEO.tsx
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

import type { TFunction } from "i18next";

function buildHowToJsonLd(t: TFunction, canonical: string) {
  const siteUrl = canonical.replace(/\/$/, "");
  const img1 = t("howto.images.step1");
  const img2 = t("howto.images.step2");
  const img3 = t("howto.images.step3");

  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: t("howto.title"),
    description: t("howto.step1_text"),
    totalTime: "PT2M",
    estimatedCost: { "@type": "MonetaryAmount", currency: "USD", value: "0" },
    supply: [{ "@type": "HowToSupply", name: "Film negative (35mm or similar)" }],
    tool: [
      { "@type": "HowToTool", name: "Smartphone camera" },
      { "@type": "HowToTool", name: "Bright white screen (phone/tablet/monitor)" }
    ],
    image: [`${siteUrl}${img1}`, `${siteUrl}${img2}`, `${siteUrl}${img3}`],
    step: [
      {
        "@type": "HowToStep",
        url: `${siteUrl}#howto-step-1`,
        name: t("howto.step1_title"),
        text: t("howto.step1_text"),
        image: `${siteUrl}${img1}`,
        timeRequired: "PT30S"
      },
      {
        "@type": "HowToStep",
        url: `${siteUrl}#howto-step-2`,
        name: t("howto.step2_title"),
        text: t("howto.step2_text"),
        image: `${siteUrl}${img2}`,
        timeRequired: "PT30S"
      },
      {
        "@type": "HowToStep",
        url: `${siteUrl}#howto-step-3`,
        name: t("howto.step3_title"),
        text: t("howto.step3_text"),
        image: `${siteUrl}${img3}`,
        timeRequired: "PT60S"
      }
    ]
  };
}

function buildFaqJsonLd(t: TFunction) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: t("faq.q1"), acceptedAnswer: { "@type": "Answer", text: t("faq.a1") } },
      { "@type": "Question", name: t("faq.q2"), acceptedAnswer: { "@type": "Answer", text: t("faq.a2") } },
      { "@type": "Question", name: t("faq.q3"), acceptedAnswer: { "@type": "Answer", text: t("faq.a3") } }
    ]
  };
}

export default function HomeSEO() {
  const { t, i18n } = useTranslation();
  const title = t("seo.home.title");
  const description = t("seo.home.description");
  const canonical = t("seo.home.canonical");

  // Recomendación SEO: JSON-LD en el mismo idioma del contenido visible actual
  const howToJsonLd = buildHowToJsonLd(t, canonical);
  const faqJsonLd = buildFaqJsonLd(t);

  return (
    <Helmet htmlAttributes={{ lang: i18n.language }}>
      {/* Base SEO */}
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />

      {/* JSON-LD */}
      <script type="application/ld+json">{JSON.stringify(howToJsonLd)}</script>
      <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
    </Helmet>
  );
}
