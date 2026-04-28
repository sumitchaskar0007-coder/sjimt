import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import FAQSection from "../components/FAQSection";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";


export default function HeroSection() {
  // Background image path
  const heroBgImage = "/assets/images/hero11.png";

  return (
    <>
      {/* ==================== HERO SECTION ==================== */}
      <section
        className="w-full py-4 px-8 relative min-h-[600px] md:min-h-[700px] flex items-center"
        style={{
          backgroundImage: `url(${heroBgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          color: "#fff",
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30 md:bg-gradient-to-r md:from-black/70 md:via-black/50 md:to-transparent" />

        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* ================= LEFT CONTENT ================= */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6 md:space-y-8"
            >


              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                Build Your <span className="text-yellow-300">Career in MCA/MBA</span>
              </h1>

              <p className="text-lg text-gray-100 leading-relaxed">
                <strong>Dr. Sudhakarrao Jadhavar Institute of Management and Technology</strong>,
                Pune offers a future-ready <strong>MCA/MBA</strong> program
                designed to develop skilled professionals in{" "}
                <strong>software development, data science, cloud computing, AI,</strong>
                and enterprise technologies through a blend of academic excellence and industry exposure.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link to="/contact">
                  <button className="bg-yellow-400 text-black px-6 py-3 rounded-md font-semibold hover:bg-yellow-300 transition shadow-md hover:shadow-lg">
                    Apply for MCA/MBA Admission 2026
                  </button>
                </Link>

                <a
                  href="/assets/prospectus.pdf"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition shadow-md hover:shadow-lg">
                    Download Prospectus
                  </button>
                </a>
              </div>
              {/* ================= STATS ================= */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-white/20 mt-6">
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-yellow-300">20+</p>
                  <p className="text-sm text-gray-200">Years of Experience in Education</p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-yellow-300">25+</p>
                  <p className="text-sm text-gray-200">National & International Awards</p>
                </div>

                <div>
                  <p className="text-2xl md:text-3xl font-bold text-yellow-300">34</p>
                  <p className="text-sm text-gray-200">ForeignStudents trained so far</p>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-yellow-300">22</p>
                  <p className="text-sm text-gray-200">M.O.U.s with education groups from 7 countries</p>
                </div>
              </div>

              {/* Director / Principal Message */}
              <div className="pt-4">
                <p className="text-sm text-gray-200 italic">
                  "Our mission is to empower students with technical expertise, innovation skills, and ethical values to succeed in the dynamic IT industry."
                </p>
                <p className="mt-2 text-sm text-yellow-300">
                  <strong>Dr. Sudhakarrao Jadhavar</strong>
                  <br />
                  Chairman, Dr. Sudhakarrao Jadhavar Institute of Management and Technology
                </p>
              </div>
            </motion.div>

            {/* ================= RIGHT SIDE (Empty on desktop) ================= */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden md:block"
            >
              {/* Reserved for future image / illustration */}
            </motion.div>
          </div>
        </div>
      </section>


      {/* ================= WELCOME MESSAGE ================= */}
      <section className="w-full bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">

          {/* ================= HEADING ================= */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
              Dr. Sudhakarrao Jadhavar Institute of Management and Technology, Pune
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              A centre of excellence in management and computer education, committed to
              nurturing industry-ready professionals through innovation, ethics, and
              academic excellence.
            </p>
          </div>

          {/* ================= CONTENT GRID ================= */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

            {/* ================= LEFT CONTENT ================= */}
            <div className="space-y-5">
              <h3 className="text-2xl font-semibold text-gray-800">
              Master of Computer Applications (MCA) / Master of Business Administration (MBA)
              </h3>

              <p className="text-gray-600 leading-relaxed">
                The <strong>MCA/MBA program</strong> at Dr. Sudhakarrao Jadhavar Institute of Management and Technology are designed to develop skilled professionals with strong technical and managerial abilities.
              </p>

              <p className="text-gray-600 leading-relaxed">
                The MCA program focuses on software development, data analytics, cloud computing, and emerging technologies, while the MBA program emphasizes business strategy, leadership, and management skills.

With an industry-oriented curriculum, the programs offer hands-on learning, real-world projects, and internships, ensuring students become competent, innovative, and industry-ready professionals.
              </p>

              {/* ================= KEY POINTS ================= */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {[
                  "AICTE Approved Program",
                  "SPPU Affiliated",
                  "Industry-Oriented Curriculum",
                  "Hands-on Practical Training",
                  "Experienced Faculty",
                  "Strong Placement Support",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg shadow-sm"
                  >
                    <span className="text-green-600 font-bold text-lg">✓</span>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* ================= RIGHT BOXES ================= */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

              {/* BOX 1 */}
              <div className="border rounded-xl p-6 shadow-sm hover:shadow-md transition">
                <h4 className="text-lg font-semibold text-blue-900 mb-2">
                  Program Highlights
                </h4>
                <p className="text-sm text-gray-600">
                  Cutting-edge curriculum covering programming, databases, AI, cloud
                  computing, cybersecurity, and software engineering.
                </p>
              </div>

              {/* BOX 2 */}
              <div className="border rounded-xl p-6 shadow-sm hover:shadow-md transition">
                <h4 className="text-lg font-semibold text-blue-900 mb-2">
                  Career Opportunities
                </h4>
                <p className="text-sm text-gray-600">
                  Careers in software development, data science, system analysis,
                  cloud engineering, IT consulting, and government sectors.
                </p>
              </div>

              {/* BOX 3 */}
              <div className="border rounded-xl p-6 shadow-sm hover:shadow-md transition">
                <h4 className="text-lg font-semibold text-blue-900 mb-2">
                  Infrastructure
                </h4>
                <p className="text-sm text-gray-600">
                  Modern computer labs, high-speed internet, digital classrooms,
                  and access to latest software tools.
                </p>
              </div>

              {/* BOX 4 */}
              <div className="border rounded-xl p-6 shadow-sm hover:shadow-md transition">
                <h4 className="text-lg font-semibold text-blue-900 mb-2">
                  Industry Exposure
                </h4>
                <p className="text-sm text-gray-600">
                  Guest lectures, industrial visits, workshops, certifications,
                  internships, and placement training programs.
                </p>
              </div>
            </div>
          </div>

          {/* ================= CTA ================= */}
          <div className="mt-14 text-center">
            <button
              onClick={() => window.location.href = "/contact"}
              className="bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
            >
              Apply for MCA/MBA Admission 2026
            </button>
          </div>

        </div>
      </section>


      {/* ==================== PLACEMENTS SECTION ==================== */}
      <section className="w-full bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">

          {/* HEADING */}
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Placements
            </h2>
            <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
              The Placement Cell of <strong>Dr. Sudhakarrao Jadhavar Institute of Management and Technology</strong>
              strives to provide excellent career opportunities by connecting students with reputed
              firms and companies through structured training and placement support.
            </p>
          </div>

          {/* ================= MAIN GRID ================= */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">

            {/* ================= LEFT CONTENT ================= */}
            <div className="space-y-5">
              <h3 className="text-xl font-semibold text-blue-900">
                Placement Support
              </h3>

              <p className="text-gray-700 text-sm leading-relaxed">
                Our dedicated Placement Cell works continuously to bridge the gap between
                academic learning and industry requirements by providing internships,
                pre-placement talks, and final placement opportunities.
              </p>

              <ul className="space-y-3">
                {[
                  "Internship opportunities with leading companies",
                  "Pre-placement talks and industry interaction",
                  "Career guidance and mentoring",
                  "Continuous skill enhancement programmes",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-green-600 font-bold">✔</span>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* ================= CENTER IMAGE ================= */}
            <div className="flex justify-center">
              <div className="w-full max-w-md rounded-xl border shadow-sm overflow-hidden bg-gray-50">
                <img
                  src="/assets/images/companys.jpg"
                  alt="Recruiting Companies at Jadhavar Institute"
                  className="w-full h-full object-contain p-6"
                  loading="lazy"
                />
              </div>
            </div>

            {/* ================= RIGHT CONTENT ================= */}
            <div className="space-y-5">
              <h3 className="text-xl font-semibold text-blue-900">
                Placement Cell Activities
              </h3>

              <ul className="space-y-4">
                {[
                  "Placement orientation sessions for final year students",
                  "Aptitude, verbal and analytical skills training",
                  "Soft skill and personality development programmes",
                  "CV writing and interview preparation sessions",
                  "Guest lectures on career guidance and technical skills",
                ].map((activity, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-2 h-2 mt-2 bg-blue-900 rounded-full"></span>
                    <span className="text-gray-700 text-sm leading-relaxed">
                      {activity}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ================= CTA ================= */}


        </div>
      </section>


      {/* ================= VISION, MISSION & VALUES ================= */}
      <section className="w-full bg-gray-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">

          {/* HEADING */}
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-3">
              Vision, Mission & Core Values
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Guiding principles that define our commitment to excellence, innovation,
              and holistic development in management and technology education.
            </p>
          </div>

          {/* ================= MOTTO ================= */}
          <div className="bg-white rounded-xl shadow-sm p-8 text-center mb-12">
            <h3 className="text-xl font-semibold text-blue-900 mb-2">Motto</h3>
            <p className="text-lg italic text-gray-700">
              “Innovate. Lead. Transform Technocrats.”
            </p>
          </div>

          {/* ================= VISION & MISSION ================= */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
            {/* VISION */}
            <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                🎯 Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To be a premier institute of excellence in management and technology,
                committed to developing visionary leaders and tech-savvy professionals
                who drive innovation, sustainability, holistic development, and inclusive
                societal growth in a dynamic global environment.
              </p>
            </div>

            {/* MISSION */}
            <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                🚀 Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To impart quality education in management and technology, foster leadership
                and innovation, and build industry-ready, ethically responsible professionals
                who are good human beings dedicated to holistic and societal transformation.
              </p>
            </div>
          </div>

          {/* ================= QUALITY POLICY ================= */}
          <div className="bg-white rounded-xl shadow-sm p-8 mb-14">
            <h3 className="text-2xl font-bold mb-4 text-blue-900">
              Quality Policy Statement
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Dr. Sudhakarrao Jadhavar Institute of Management and Technology is committed
              to delivering high-quality education by fostering academic excellence,
              continuous improvement, and stakeholder satisfaction. We strive to create
              a learner-centric environment that promotes innovation, industry relevance,
              ethical practices, and global competence, ensuring the holistic development
              of students into responsible and good human beings, along with sustained
              institutional growth.
            </p>
          </div>

          {/* ================= CORE VALUES ================= */}
          <div className="mb-14">
            <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">
              Core Values
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                ["Excellence", "Upholding academic and professional distinction."],
                ["Leadership", "Developing confident and responsible leaders."],
                ["Innovation", "Nurturing creativity and entrepreneurship."],
                ["Integrity", "Ensuring honesty, ethics, and transparency."],
                ["Collaboration", "Promoting partnerships with industry and society."],
                ["Sustainability", "Committing to eco-conscious and inclusive practices."],
                ["Lifelong Learning", "Embracing adaptability and continuous growth."],
              ].map(([title, desc], idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition"
                >
                  <h4 className="font-semibold text-blue-900 mb-2">{title}</h4>
                  <p className="text-sm text-gray-600">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ================= INSTITUTIONAL GOALS ================= */}
          <div>
            <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">
              Institutional Goals
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                [
                  "Deliver Quality Education",
                  "Provide interdisciplinary programs integrating modern management and technological skills.",
                ],
                [
                  "Foster Industry Readiness",
                  "Engage with industry for practical exposure, certifications, and placements.",
                ],
                [
                  "Promote Innovation & Entrepreneurship",
                  "Support student-led innovations and startups through incubation and mentorship.",
                ],
                [
                  "Develop Ethical and Global Leaders",
                  "Cultivate leadership capabilities, strong moral foundations, and good human values.",
                ],
                [
                  "Enhance Research & Global Collaboration",
                  "Advance research output and global reach through faculty development and strategic collaborations.",
                ],
                [
                  "Strengthen Community Engagement",
                  "Implement initiatives applying management and technology for societal good.",
                ],
              ].map(([title, desc], idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition"
                >
                  <h4 className="font-semibold text-blue-900 mb-2">{title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>


      {/* ==================== CAREER ENHANCEMENT CERTIFICATIONS (MCA/MBA) ==================== */}
      <section
        className="w-full bg-[#2f2f2f] py-16 md:py-20"
        aria-labelledby="career-certifications"
      >
        <div className="max-w-5xl mx-auto px-4 md:px-6">

          {/* HEADER */}
          <header className="mb-10 text-center">
            <h2
              id="career-certifications"
              className="text-2xl md:text-3xl font-bold text-white mb-4"
            >
              Career Enhancement Certifications
            </h2>

            <p className="text-gray-300 text-base max-w-3xl mx-auto">
              Industry-oriented certification programs at
              <strong className="text-yellow-300">
                {" "}Dr. Sudhakarrao Jadhavar Institute of Management and Technology{" "}
              </strong>
              designed to enhance technical expertise, industry readiness, and
              professional growth of MCA/MBA students.
            </p>
          </header>

          {/* SLIDER */}
          <div className="px-2">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              loop
              breakpoints={{
                480: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 3 },
              }}
              className="pb-8"
            >

              {[
                {
                  icon: "/assets/icons/software-dev.png",
                  title: "Software Development",
                  desc: "Practical training in full-stack software development",
                  points: [
                    "Core Java & Advanced Java",
                    "Web Technologies (HTML, CSS, JS)",
                    "Project-Based Learning",
                  ],
                  cert: "Software Development Certification",
                },
                {
                  icon: "/assets/icons/data-science.png",
                  title: "Data Science & Analytics",
                  desc: "Hands-on exposure to data analysis and visualization",
                  points: [
                    "Python for Data Science",
                    "Data Analysis & Visualization",
                    "Real-Time Case Studies",
                  ],
                  cert: "Data Science & Analytics Certification",
                },
                {
                  icon: "/assets/icons/cloud-computing.png",
                  title: "Cloud Computing",
                  desc: "Fundamentals of cloud platforms and services",
                  points: [
                    "AWS / Cloud Fundamentals",
                    "Cloud Architecture Basics",
                    "Deployment & Security Concepts",
                  ],
                  cert: "Cloud Computing Certification",
                },
                {
                  icon: "/assets/icons/cyber-security.png",
                  title: "Cyber Security",
                  desc: "Awareness and practical knowledge of cyber threats",
                  points: [
                    "Network Security Basics",
                    "Cyber Laws & Compliance",
                    "Ethical Hacking Overview",
                  ],
                  cert: "Cyber Security Certification",
                },
                {
                  icon: "/assets/icons/ai-ml.png",
                  title: "Artificial Intelligence & ML",
                  desc: "Introduction to AI tools and machine learning models",
                  points: [
                    "AI Concepts & Applications",
                    "Machine Learning Basics",
                    "Industry Use Cases",
                  ],
                  cert: "AI & Machine Learning Certification",
                },
                {
                  icon: "/assets/icons/soft-skills.png",
                  title: "Professional & Soft Skills",
                  desc: "Personality development and career readiness training",
                  points: [
                    "Communication & Presentation Skills",
                    "Interview & Resume Building",
                    "Corporate Etiquette",
                  ],
                  cert: "Professional Skills Certification",
                },
              ].map((item, index) => (
                <SwiperSlide key={index}>
                  <article className="bg-white rounded-xl overflow-hidden h-full shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 min-h-[320px] flex flex-col">

                    {/* CARD BODY */}
                    <div className="p-5 text-center flex-1">
                      <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center">
                        <img
                          src={item.icon}
                          alt={`${item.title} Icon`}
                          className="w-full h-full object-contain"
                          loading="lazy"
                          onError={(e) => {
                            e.target.style.display = "none";
                            e.target.parentElement.innerHTML = `
                        <div class="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center text-2xl">
                          💻
                        </div>
                      `;
                          }}
                        />
                      </div>

                      <h3 className="text-lg font-bold text-gray-900 mb-3">
                        {item.title}
                      </h3>

                      <p className="text-sm text-gray-600 mb-4">{item.desc}</p>

                      <ul className="text-sm text-left space-y-2 text-[#2f5aa8]">
                        {item.points.map((point, i) => (
                          <li key={i} className="flex items-start">
                            <span className="mr-2 mt-0.5">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CARD FOOTER */}
                    <footer className="bg-gray-50 px-5 py-4 border-t border-gray-200">
                      <p className="text-xs font-semibold text-gray-800">
                        Certification Included
                      </p>
                      <p className="text-xs text-gray-600">{item.cert}</p>
                    </footer>
                  </article>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>


      {/* ================= WHY CHOOSE US ================= */}
      <section className="w-full bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-blue-900">
            Why Choose Dr. Sudhakarrao Jadhavar Institute of Management and Technology?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              [
                "💻",
                "AICTE Approved MCA/MBA",
                "AICTE approved and SPPU affiliated Master of Computer Applications program",
              ],
              [
                "👨‍💻",
                "Experienced Faculty",
                "Highly qualified faculty with strong academic and industry experience",
              ],
              [
                "🧪",
                "Industry-Oriented Learning",
                "Practical training, live projects, internships, and industry exposure",
              ],
              [
                "🚀",
                "Career & Placement Support",
                "Dedicated placement cell with training, guidance, and placement assistance",
              ],
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition"
              >
                <div className="text-4xl mb-4">{item[0]}</div>
                <h4 className="font-bold mb-2 text-gray-800">{item[1]}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item[2]}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* Other Sections */}
      {/* <GlimpseLawCollege />
      {/* ================= FACILITIES & INFRASTRUCTURE ================= */}
      <section className="w-full bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-blue-900">
            Facilities & Infrastructure
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Well-equipped Digital Library",
              "Modern Smart Classrooms",
              "Advanced Computer Laboratories",
              "High-Speed Internet & Wi-Fi Campus",
              "Software Development & Research Lab",
              "Seminar & Conference Hall",
              "Industry-Oriented Training Facilities",
              "Student Collaboration & Common Areas",
              "Career Guidance & Placement Cell",
            ].map((facility, i) => (
              <div
                key={i}
                className="border rounded-lg p-6 hover:bg-gray-50 transition"
              >
                <p className="font-semibold text-gray-800 flex items-center gap-2">
                  <span className="text-green-600">✔</span>
                  {facility}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ================= STUDENT TESTIMONIALS ================= */}
      <section className="w-full bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-blue-900">
            Student Testimonials
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-xl shadow">
              <p className="text-gray-600 italic leading-relaxed">
                "The MCA/MBA curriculum, hands-on projects, and guidance from experienced
                faculty helped me build strong technical skills and confidence to work
                in the IT industry."
              </p>
              <p className="mt-3 font-semibold text-gray-800">
                — MCA/MBA Student
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-xl shadow">
              <p className="text-gray-600 italic leading-relaxed">
                "Industry-oriented training, internships, and placement support at
                Dr. Sudhakarrao Jadhavar Institute of Management and Technology played
                a key role in shaping my professional career."
              </p>
              <p className="mt-3 font-semibold text-gray-800">
                — MCA/MBA Alumni
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* FAQ Section */}
      <FAQSection />
    </>
  );
}