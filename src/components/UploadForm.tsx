import React, { useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import {
  FaSpinner,
  FaCheckCircle,
  FaTimesCircle,
  FaUpload,
  FaTrashAlt
} from "react-icons/fa";
import ResultSection from "./ResultSection";

const API_URL = import.meta.env.VITE_API_URL;

const UploadForm: React.FC = () => {
  const { t } = useTranslation();
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null); // negativo original
  const [processedUrl, setProcessedUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);
  const [dragOver, setDragOver] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected && selected.type.startsWith("image/")) {
      setFile(selected);
      setPreviewUrl(URL.createObjectURL(selected));
      setStatus("idle");
      setError(null);
      setProcessedUrl(null);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const droppedFile = e.dataTransfer.files?.[0];
    if (droppedFile && droppedFile.type.startsWith("image/")) {
      setFile(droppedFile);
      setPreviewUrl(URL.createObjectURL(droppedFile));
      setStatus("idle");
      setError(null);
      setProcessedUrl(null);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(true);
  };
  const handleDragLeave = () => setDragOver(false);

  const handleClear = () => {
    setFile(null);
    setPreviewUrl(null);
    setProcessedUrl(null);
    setStatus("idle");
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    setLoading(true);
    setStatus("idle");

    const formData = new FormData();
    formData.append("file", file);

    try {
      const uploadRes = await axios.post(`${API_URL}/upload/`, formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });
      const filename = uploadRes.data.filename;

      const processRes = await axios.post(`${API_URL}/process/`, null, {
        params: { filename }
      });
      const processedFilename = processRes.data.filename;
      const imageUrl = `${API_URL}/processed/${processedFilename}`;

      setProcessedUrl(imageUrl);
      setStatus("success");
    } catch (err: unknown) {
      console.error(err);
      setStatus("error");
      setError(
        axios.isAxiosError(err)
          ? err.response?.data?.detail || err.message
          : err instanceof Error
          ? err.message
          : "Unknown error"
      );
    } finally {
      setLoading(false);
    }
  };

  // Si ya hay resultado, renderiza ResultSection (con éxito arriba y trash sobre miniatura)
  if (processedUrl && previewUrl) {
    return (
      <div className="w-full flex flex-col items-center gap-4 sm:gap-6 p-6">
        {/* MENSAJE DE ÉXITO */}
        <div className="w-full max-w-3xl mx-auto flex items-center justify-center gap-2 text-green-600 font-medium">
          <FaCheckCircle className="text-green-600 text-xl" />
          <span>{t("digitize.success")}</span>
        </div>

        {/* CONTENEDOR DEL RESULTADO */}
        <ResultSection
          imageUrl={processedUrl}
          negativeUrl={previewUrl}
          onUploadAnother={() => {
            handleClear();
            // Scroll suave al formulario
            setTimeout(() => {
              const form = document.getElementById("upload-form");
              if (form) form.scrollIntoView({ behavior: "smooth" });
            }, 100);
          }}
          onClear={handleClear}
        />

        {status === "error" && error && (
          <div className="flex items-center text-red-500 gap-2">
            <FaTimesCircle />
            {error}
          </div>
        )}
      </div>
    );
  }

  // Estado inicial / antes de procesar
  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col items-center gap-6 p-6">
      {!file ? (
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          className={`w-full max-w-xl p-10 border-2 border-dashed rounded-xl text-center transition cursor-pointer m-4 ${
            dragOver ? "border-blue-500 bg-blue-50" : "border-gray-300"
          }`}
        >
          <label className="cursor-pointer flex flex-col items-center gap-2">
            <input type="file" accept="image/*" onChange={handleChange} className="hidden" />
            <FaUpload className="text-3xl text-blue-500" />
            <p className="text-lg font-semibold">{t("digitize.dropZone.title")}</p>
            <p className="text-sm text-gray-500">{t("digitize.dropZone.hint")}</p>
          </label>
        </div>
      ) : (
        <>
          {/* Preview del negativo con TRASH en esquina (siempre visible en mobile, hover en desktop) */}
          {previewUrl && (
            <div className="group relative">
              <img
                src={previewUrl}
                alt="Preview"
                className="max-h-[300px] w-auto rounded-md shadow-md object-contain"
              />
              <button
                type="button"
                onClick={handleClear}
                className="absolute top-2 right-2 bg-white p-2 rounded-full shadow
                           text-red-600 hover:bg-red-100 transition
                           opacity-100 md:opacity-0 md:group-hover:opacity-100 md:focus:opacity-100"
                aria-label={t("digitize.clear")}
                title={t("digitize.clear")}
              >
                <FaTrashAlt />
              </button>
              <p className="mt-2 text-center text-sm text-gray-600">
                {file.name} ({(file.size / 1024).toFixed(1)} KB)
              </p>
            </div>
          )}

          {/* Botón procesar */}
          <button
            id="cta-process"
            type="submit"
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg flex items-center gap-2 transition disabled:opacity-50"
          >
            {loading ? <FaSpinner className="animate-spin" /> : <FaUpload />}
            {loading ? t("digitize.uploading") : t("digitize.processBtn")}
          </button>

          {loading && (
            <div className="flex items-center gap-2 text-sm text-gray-500 mt-2">
              <FaSpinner className="animate-spin" />
              <span>Starting up the server… this may take a few minutes, please wait.</span>
            </div>
          )}
        </>
      )}

      {status === "error" && error && (
        <div className="flex items-center text-red-500 gap-2">
          <FaTimesCircle />
          {error}
        </div>
      )}
    </form>
  );
};

export default UploadForm;
