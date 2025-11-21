import React from "react";
import { useDropzone } from "react-dropzone";

export default function DropzoneBox({ onFileSelected }) {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (files) => onFileSelected(files[0]),
    multiple: false,
    accept: { "application/pdf": [".pdf"], "image/*": [] },
  });

  return (
    <div
      {...getRootProps()}
      className={`w-full rounded-lg border-2 transition p-6 flex items-center justify-center text-center ${
        isDragActive ? "border-blue-400 bg-blue-50" : "border-dashed border-blue-300 bg-white/60"
      }`}
      style={{ minHeight: 120 }}
    >
      <input {...getInputProps()} />
      <div>
        <div className="text-sm text-gray-700 font-medium">Drag & drop your PDF or Image here</div>
        <div className="text-xs text-gray-400 mt-1">or click to browse</div>
        <div className="mt-3 inline-block px-4 py-2 rounded-md bg-blue-600 text-white text-sm">
          Browse files
        </div>
      </div>
    </div>
  );
}
