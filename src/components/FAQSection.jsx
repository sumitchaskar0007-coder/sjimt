import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "What is the duration of the MCA program?",
      a: "The Master of Computer Applications (MCA) program is a two-year postgraduate course divided into four semesters, as per AICTE and Savitribai Phule Pune University norms."
    },
    {
      q: "Is the MCA program approved and affiliated?",
      a: "Yes, the MCA program is approved by AICTE and affiliated with Savitribai Phule Pune University (SPPU)."
    },
    {
      q: "Who is eligible to apply for the MCA course?",
      a: "Candidates with a bachelor's degree in Computer Applications, Computer Science, or related disciplines, or those who have studied Mathematics at 10+2 or graduation level, are eligible as per university guidelines."
    },
    {
      q: "What is the admission process for MCA?",
      a: "Admissions are carried out as per government and university norms, based on entrance examination, merit list, counseling, and document verification."
    },
    {
      q: "What specializations or subjects are covered in the MCA program?",
      a: "The MCA curriculum covers programming languages, software engineering, data structures, databases, web technologies, cloud computing, artificial intelligence, and project development."
    },
    {
      q: "Does the institute provide internships during the MCA course?",
      a: "Yes, students are encouraged to undertake internships, live projects, and industry training to gain practical exposure during the course."
    },
    {
      q: "What placement support is available for MCA students?",
      a: "The institute has a dedicated Placement Cell that provides placement training, career guidance, soft skill development, and placement assistance with reputed IT companies."
    },
    {
      q: "What career opportunities are available after completing MCA?",
      a: "MCA graduates can pursue careers as software developers, system analysts, data analysts, cloud engineers, IT consultants, or pursue higher studies and research."
    }
  ];

  return (
    <section className="w-full bg-gray-50 py-10">
      <div className="max-w-5xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-blue-900">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-xl mx-auto">
            Common questions related to the MCA program, admissions, academics,
            and career opportunities.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-md"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-4 text-left"
                >
                  <span className="font-semibold text-gray-900 text-sm md:text-base">
                    {index + 1}. {faq.q}
                  </span>
                  {isOpen ? (
                    <Minus className="w-5 h-5 text-blue-700" />
                  ) : (
                    <Plus className="w-5 h-5 text-blue-700" />
                  )}
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-40 px-4 pb-4" : "max-h-0 px-4"
                    }`}
                >
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
