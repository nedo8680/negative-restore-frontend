// src/components/ContactForm.tsx
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto">
      <div>
        <label className="block text-sm font-medium">{t("contact.name")}</label>
        <input
          type="text"
          name="name"
          className="mt-1 block w-full p-2 border rounded"
          required
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="block text-sm font-medium">{t("contact.email")}</label>
        <input
          type="email"
          name="email"
          className="mt-1 block w-full p-2 border rounded"
          required
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="block text-sm font-medium">{t("contact.message")}</label>
        <textarea
          name="message"
          className="mt-1 block w-full p-2 border rounded"
          rows={5}
          required
          value={formData.message}
          onChange={handleChange}
        />
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        disabled={status === "loading"}
      >
        {status === "loading" ? t("contact.sending") : t("contact.send")}
      </button>
      {status === "success" && <p className="text-green-600">{t("contact.success")}</p>}
      {status === "error" && <p className="text-red-600">{t("contact.error")}</p>}
    </form>
  );
};

export default ContactForm;
