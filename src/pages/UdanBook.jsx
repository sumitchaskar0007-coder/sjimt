import React from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Download, BookOpen } from "lucide-react";
import { udanBooks } from "../data/udanBooks";

export default function UdanBook() {
  const { id } = useParams();
  const book = udanBooks[id];

  if (!book) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl font-semibold">Book not found</p>
      </div>
    );
  }

  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>{book.title} | Jadhavar College of Law</title>
        <meta
          name="description"
          content={`Download ${book.title} book from Udan Program at Jadhavar College of Law.`}
        />
      </Helmet>

      <section className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-lg p-8 md:p-12 grid md:grid-cols-2 gap-10"
          >
            {/* Book Image */}
            <div className="flex justify-center">
              <img
                src={book.cover}
                alt={book.title}
                className="w-64 rounded-lg shadow-md"
              />
            </div>

            {/* Book Info */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <BookOpen className="text-blue-700" />
                {book.title}
              </h1>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {book.description}
              </p>

              <a
                href={book.pdf}
                download
                className="inline-flex items-center gap-2 bg-blue-800 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-900 transition"
              >
                <Download />
                Download PDF
              </a>
            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
}
