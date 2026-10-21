import React, { useId } from "react";
import { BookOpen, Download, ExternalLink, FileText } from "lucide-react";

const syllabuses = [
  {
    title: "MBA 2025 Syllabus",
    description: "Master of Business Administration",
    filename: "MBA_2025 Syllabus.pdf",
  },
  {
    title: "NEP MCA Syllabus — Semesters 1–4",
    description: "Master of Computer Applications",
    filename: "NEP_MCA_Sem 1 - 4 Syllabus_23062025.pdf",
  },
];

export default function SyllabusSection() {
  const headingId = useId();

  return (
    <section
      aria-labelledby={headingId}
      className="rounded-2xl border-2 border-yellow-400 bg-gradient-to-br from-blue-50 via-white to-yellow-50 p-5 shadow-lg sm:p-8"
    >
      <div className="mb-6 flex items-start gap-4">
        <div className="rounded-xl bg-blue-900 p-3 text-yellow-300">
          <BookOpen className="h-6 w-6" aria-hidden="true" />
        </div>
        <div>
          <p className="mb-1 text-sm font-semibold uppercase tracking-wide text-blue-700">
            Academic Resources
          </p>
          <h2 id={headingId} className="text-2xl font-bold text-blue-900 sm:text-3xl">
            MBA &amp; MCA Syllabus
          </h2>
          <p className="mt-2 text-gray-600">
            View the syllabus online or download a PDF copy for your reference.
          </p>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {syllabuses.map(({ title, description, filename }) => {
          const href = `/assets/pdf/${encodeURIComponent(filename)}`;

          return (
            <article key={filename} className="flex flex-col rounded-xl border border-blue-100 bg-white p-5 shadow-sm sm:p-6">
              <div className="mb-4 flex items-start gap-3">
                <FileText className="mt-1 h-6 w-6 shrink-0 text-blue-700" aria-hidden="true" />
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{description} · PDF</p>
                </div>
              </div>
              <div className="mt-auto flex flex-wrap gap-3 pt-2">
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${title} PDF (opens in a new tab)`}
                  className="inline-flex items-center gap-2 rounded-lg bg-blue-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
                >
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  View PDF
                </a>
                <a
                  href={href}
                  download={filename}
                  aria-label={`Download ${title} PDF`}
                  className="inline-flex items-center gap-2 rounded-lg bg-yellow-400 px-5 py-3 text-sm font-semibold text-gray-900 transition hover:bg-yellow-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
                >
                  <Download className="h-4 w-4" aria-hidden="true" />
                  Download
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
