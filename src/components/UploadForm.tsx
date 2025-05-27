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
import ProcessedImage from "./ProcessedImage";


const UploadForm: React.FC = () => {
  const { t } = useTranslation();
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
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

  const handleDragLeave = () => {
    setDragOver(false);
  };

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
      const uploadRes = await axios.post("http://localhost:8000/upload/", formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });

      const filename = uploadRes.data.filename;

      const processRes = await axios.post("http://localhost:8000/process/", null, {
        params: { filename }
      });

      const processedFilename = processRes.data.filename;
      const imageUrl = `http://localhost:8000/processed/${processedFilename}`;
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

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col items-center gap-6">
      {!file ? (
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          className={`w-full max-w-xl p-10 border-2 border-dashed rounded-xl text-center transition cursor-pointer ${
            dragOver ? "border-blue-500 bg-blue-50" : "border-gray-300"
          }`}
        >
          <label className="cursor-pointer flex flex-col items-center gap-2">
            <input
              type="file"
              accept="image/*"
              onChange={handleChange}
              className="hidden"
            />
            <FaUpload className="text-3xl text-blue-500" />
            <p className="text-lg font-semibold">{t("digitize.dropZone.title")}</p>
            <p className="text-sm text-gray-500">{t("digitize.dropZone.hint")}</p>
          </label>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row gap-6 mt-6 justify-center items-center">
          {/* Imagen original */}
          <div className="flex flex-col items-center">
            <div className="relative">
              <img
                src={previewUrl!}
                alt="Preview"
                className="max-h-[300px] w-auto rounded-md shadow-md object-contain"
              />
              <button
                type="button"
                onClick={handleClear}
                className="absolute top-2 right-2 bg-white p-1 rounded-full shadow hover:bg-red-100 transition"
              >
                <FaTrashAlt className="text-red-500" />
              </button>
            </div>
            <p className="mt-2 text-center text-sm text-gray-600">
              {file.name} ({(file.size / 1024).toFixed(1)} KB)
            </p>
          </div>
        
          {/* Imagen procesada */}
          {processedUrl && <ProcessedImage imageUrl={processedUrl} />}
        </div>
      )}

      {/* Botón dinámico según estado */}
      {file && (
        <button
          type={processedUrl ? "button" : "submit"}
          onClick={processedUrl ? handleClear : undefined}
          disabled={loading}
          className={`${
            processedUrl ? "bg-gray-600 hover:bg-gray-700" : "bg-blue-600 hover:bg-blue-700"
          } text-white px-6 py-2 rounded-lg flex items-center gap-2 transition disabled:opacity-50`}
        >
          {loading ? (
            <FaSpinner className="animate-spin" />
          ) : (
            <FaUpload />
          )}
          {loading
            ? t("digitize.uploading")
            : processedUrl
              ? t("digitize.uploadAnother")
              : t("digitize.processBtn")}
        </button>
)}


      {/* Mensajes de estado */}
      {status === "success" && (
        <div className="flex items-center text-green-600 gap-2">
          <FaCheckCircle />
          {t("digitize.success")}
        </div>
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
