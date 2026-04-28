import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  CalendarDays,
  BookOpen,
  ClipboardCheck,
  Briefcase,
  FileText,
  Users,
  GraduationCap,
  Globe,
  Layers,
  Code,
  Database,
  Cpu
} from "lucide-react";

const academicsData = [
  {
    title: "MCA/MBA Program Overview",
    icon: <GraduationCap />,
    description:
      "The Master of Computer Application (MCA/MBA) is a two-year full-time program approved by AICTE, recognized by Government of Maharashtra (DTE) and affiliated to Savitribai Phule Pune University (SPPU). The program prepares students for professional careers in the IT industry."
  },
  {
    title: "Curriculum & Structure",
    icon: <CalendarDays />,
    description:
      "The MCA/MBA program follows a semester pattern consisting of four semesters, combining core computer science subjects, electives, practical labs, projects, and industry-oriented learning."
  },
  {
    title: "Teaching–Learning Methodology",
    icon: <BookOpen />,
    description:
      "Learning is delivered through lectures, hands-on lab sessions, case studies, live projects, seminars, workshops, and technology-enabled teaching to strengthen conceptual and practical knowledge."
  },
  {
    title: "Assessment & Evaluation",
    icon: <ClipboardCheck />,
    description:
      "Students are evaluated through internal assessments, end-semester university examinations, practical evaluations, mini projects, and final-year internship/project work."
  },
  {
    title: "Practical & Project-Based Learning",
    icon: <Code />,
    description:
      "Strong emphasis on programming labs, mini projects, research projects, and a full-semester internship ensures real-world exposure and industry readiness."
  },
  {
    title: "Industry Exposure & Internships",
    icon: <Briefcase />,
    description:
      "Final semester internship (OJT/FP) provides hands-on experience in software companies, startups, banks, IT consultancies, and corporate organizations."
  },
  {
    title: "Research & Innovation",
    icon: <FileText />,
    description:
      "Students are encouraged to undertake research projects, publish papers, and participate in innovation, entrepreneurship development, and technical competitions."
  },
  {
    title: "Career Opportunities",
    icon: <Users />,
    description:
      "Graduates pursue careers as Software Developers, Web Developers, Database Administrators, Network Engineers, Data Analysts, Project Managers, and IT Consultants."
  },
  {
    title: "Global & Emerging Technologies",
    icon: <Globe />,
    description:
      "Electives in Cloud Computing, AI & ML, Cyber Security, Data Science, MERN Stack, ERP, and E-Commerce prepare students for global IT demands."
  }
];

export default function Academics() {
  return (
    <>
      {/* ================= SEO ================= */}
      <Helmet>
        <title>
          MCA/MBA Academics | Dr. Sudhakarrao Jadhavar Institute of Management and Technology Pune
        </title>
        <meta
          name="description"
          content="Explore MCA/MBA (Master of Computer Applications) academics at Dr. Sudhakarrao Jadhavar Institute of Management and Technology. AICTE approved, SPPU affiliated program with strong focus on software development, IT careers, projects and internships."
        />
        <meta
          name="keywords"
          content="MCA/MBA College Pune, Master of Computer Application, MCA/MBA SPPU, AICTE Approved MCA/MBA, MCA/MBA Curriculum, MCA/MBA Syllabus Pune"
        />
      </Helmet>

      {/* ================= PAGE CONTENT ================= */}
      <section className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">

          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-3">
              Master of Computer Applications (MCA) / Master of Business Administration (MBA)
            </h1>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-6 text-left">
              <p className="text-gray-800 font-medium">
                Approved by AICTE | Recognized by DTE Maharashtra | Affiliated to Savitribai Phule Pune University (SPPU)
              </p>
            </div>

            <p className="text-gray-600 max-w-4xl mx-auto">
              The MCA/MBA program aims to provide a strong foundation in computer science,
              software development, and emerging technologies. The curriculum blends
              theory, practical training, curricular and co-curricular activities to
              develop skilled IT professionals and responsible technocrats.
            </p>
          </motion.div>

          {/* ================= INTAKE INFORMATION ================= */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-14 bg-white p-8 rounded-2xl border shadow"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Intake Information
            </h3>

            <p className="text-gray-600 mb-6">
              The intake capacity for the MCA/MBA programme is approved by AICTE and
              applicable as per the norms of Savitribai Phule Pune University.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse rounded-xl overflow-hidden">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="p-4 text-left">Sr. No.</th>
                    <th className="p-4 text-left">Programme Name</th>
                    <th className="p-4 text-center">Academic Year</th>
                    <th className="p-4 text-center">Approved Intake</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b bg-gray-50">
                    <td className="p-4">1</td>
                    <td className="p-4 font-medium">
                      Master of Computer Application (MCA)
                    </td>
                    <td className="p-4 text-center">2025 – 26</td>
                    <td className="p-4 text-center font-semibold text-blue-700">
                      120
                    </td>
                  </tr>

                  
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-sm text-gray-600">
              * Intake is subject to revision as per AICTE, DTE Maharashtra, and SPPU
              guidelines.
            </p>
          </motion.div>


          {/* OBJECTIVES */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Program Objectives
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Build strong foundations in computer science and programming",
                "Prepare students for IT roles such as Software Developer, Data Scientist & System Analyst",
                "Develop leadership, communication, and management skills",
                "Encourage innovation, entrepreneurship, and lifelong learning",
                "Provide industry-ready technical and professional competence"
              ].map((obj, i) => (
                <div key={i} className="bg-white p-4 rounded-lg border shadow-sm">
                  <p className="text-gray-700 text-sm">✔ {obj}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ACADEMICS CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {academicsData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.04 }}
                className="bg-white p-6 rounded-2xl shadow-md border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-4 text-blue-700">
                  <div className="p-3 rounded-xl bg-blue-50">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* COURSE STRUCTURE */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-14 bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl border"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              MCA Course Structure (SPPU)
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="p-4 text-left">Semester</th>
                    <th className="p-4 text-center">Credits</th>
                    <th className="p-4 text-center">UE</th>
                    <th className="p-4 text-center">IE</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Semester I", 26, 300, 300],
                    ["Semester II", 26, 300, 300],
                    ["Semester III", 25, 250, 300],
                    ["Semester IV", 18, 300, 250],
                  ].map((row, i) => (
                    <tr key={i} className="border-b">
                      <td className="p-4 font-medium">{row[0]}</td>
                      <td className="p-4 text-center">{row[1]}</td>
                      <td className="p-4 text-center">{row[2]}</td>
                      <td className="p-4 text-center">{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-gray-700 font-medium">
              Total Credits: 95 | Total Marks: 2300
            </p>
          </motion.div>
           <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-14 bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl border"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              MBA Course Structure (SPPU)
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="p-4 text-left">Semester</th>
                    <th className="p-4 text-center">Credits</th>
                    <th className="p-4 text-center">UE</th>
                    <th className="p-4 text-center">IE</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Semester I", 26, 400,400],
                    ["Semester II", 26, 400,400],
                    ["Semester III", 25, 400,400],
                    ["Semester IV", 18, 400, 400],
                  ].map((row, i) => (
                    <tr key={i} className="border-b">
                      <td className="p-4 font-medium">{row[0]}</td>
                      <td className="p-4 text-center">{row[1]}</td>
                      <td className="p-4 text-center">{row[2]}</td>
                      <td className="p-4 text-center">{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-gray-700 font-medium">
              Total Credits: 104 | Total Marks: 3200
            </p>
          </motion.div>


          {/* CAREER PATHS */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-14 bg-white p-8 rounded-2xl border shadow"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Career Opportunities After MCA/MBA
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Software Developer / Software Engineer",
                "Web & Full Stack Developer",
                "Database Administrator",
                "Network & System Administrator",
                "Data Analyst / Data Scientist",
                "Project Manager & IT Consultant",
                "Marketing Manager",
"Financial Analyst",
"HR Manager",
"Business Analyst",
"Operations Manager",
"Entrepreneur"
              ].map((career, i) => (
                <div key={i} className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-700">{career}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
}
