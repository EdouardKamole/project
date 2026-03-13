"use client";
import { useState } from "react";
import { Upload } from "lucide-react";

export default function DocumentUploader({ onUpload }: { onUpload?: (url: string) => void }) {
  const [uploading, setUploading] = useState(false);

  async function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    // TODO: POST to /api/upload
    setUploading(false);
  }

  return (
    <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-blue-500 transition-colors">
      <Upload className="w-6 h-6 text-gray-400 mb-2" />
      <span className="text-sm text-gray-500">{uploading ? "Uploading..." : "Click to upload document"}</span>
      <input type="file" className="hidden" onChange={handleFile} accept=".pdf,.jpg,.png,.doc,.docx" />
    </label>
  );
}
