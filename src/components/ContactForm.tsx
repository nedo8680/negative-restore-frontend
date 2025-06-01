// src/components/ContactForm.tsx
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const API_BASE_URL = import.meta.env.VITE_API_URL || "";

  const validate = () => {
    const newErrors: typeof errors = {};

    if (formData.name.trim().length < 2 || formData.name.trim().length > 50) {
      newErrors.name = t("contact.errors.name");
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t("contact.errors.email");
    }

    if (formData.message.trim().length < 10 || formData.message.trim().length > 1000) {
      newErrors.message = t("contact.errors.message");
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined }); // limpiar error del campo al escribir
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");
    try {
      const res = await fetch(`${API_BASE_URL}/contact`, {
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
          minLength={2}
          maxLength={50}
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}
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
        {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium">{t("contact.message")}</label>
        <textarea
          name="message"
          className="mt-1 block w-full p-2 border rounded"
          rows={5}
          required
          minLength={10}
          maxLength={1000}
          value={formData.message}
          onChange={handleChange}
        />
        {errors.message && <p className="text-red-600 text-sm">{errors.message}</p>}
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
