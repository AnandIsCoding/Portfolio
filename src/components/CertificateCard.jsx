// CertificateCard.jsx
import React from "react";

const CertificateCard = ({ 
  title = "Certificate Title",
  issuer = "Issuer Name",
  date = "MMM YYYY",
  imageUrl = "/path/to/certificate-thumb.jpg", // thumbnail or preview image
  fileUrl = "/path/to/certificate.pdf" // full certificate (for view/download)
}) => {
  return (
     <div className="max-w-lg mx-auto"> {/* bigger than max-w-md */}
      <div className="relative rounded-3xl bg-white shadow-2xl overflow-hidden border border-gray-100">
        {/* soft gradient top accent */}
        <div className="absolute inset-x-0 top-0 h-3 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400" />

        <div className="p-8 pt-10"> {/* more padding */}
          {/* image / thumbnail */}
          <div className="flex items-center justify-center -mt-14 mb-6">
            <div className="w-56 h-40 rounded-xl overflow-hidden shadow-lg bg-gray-50 flex items-center justify-center">
              <img
                src={imageUrl}
                alt={`${title} thumbnail`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src =
                    "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='280' viewBox='0 0 400 280'%3E%3Crect fill='%23f3f4f6' width='400' height='280'/%3E%3Ctext x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='%239ca3af' font-family='sans-serif' font-size='20'%3ENo preview%3C/text%3E%3C/svg%3E";
                }}
              />
            </div>
          </div>

          {/* meta */}
          <h3 className="text-2xl font-semibold text-gray-800 text-center">
            {title}
          </h3>
          <p className="text-base text-gray-500 text-center mt-2">{issuer}</p>

          <div className="mt-6 flex items-center justify-between gap-3">
            <span className="text-sm bg-gray-100 text-gray-600 px-4 py-2 rounded-md md:rounded-full">
              {date}
            </span>

            <div className="flex items-center gap-3">
              <a
                href={fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 text-base font-medium bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg shadow hover:scale-[1.02] transition-transform"
                aria-label={`View ${title}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v8m0 0l3-3m-3 3l-3-3M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                View
              </a>

              <a
                href={fileUrl}
                download
                className="inline-flex items-center gap-2 px-4 py-3 text-base font-medium bg-white border border-gray-200 text-gray-700 rounded-lg shadow hover:bg-gray-50 transition"
                aria-label={`Download ${title}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M12 12v8M8 8l4-4 4 4"
                  />
                </svg>
                Download
              </a>
            </div>
          </div>

          {/* optional short note */}
          <p className="mt-6 text-sm text-gray-500 text-center">
            Verified certificate — click View to open in a new tab.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CertificateCard;
