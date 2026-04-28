import React, { useState, useEffect, useRef } from 'react'
import { Helmet } from 'react-helmet-async'
import {
  GraduationCap,
  Shield,
  Quote,
  Clock,
  Award as Medal,
  CheckCircle,
  Users,
  BookOpen,
  Target,
  Eye,
  MessageSquare,
  UserCheck,
  Building,
  Globe,
  Scale,
  Briefcase,
  BookMarked,
  Library,
  Award,
  Star,
  Zap,
  TrendingUp,
  Heart,
  Lightbulb,
  ArrowRight,
  ChevronRight
} from 'lucide-react'
import { motion } from 'framer-motion'

export default function About() {
  const [inView, setInView] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const leadership = [
    {
      name: "Dr. Sudhakarrao Jadhavar",
      position: "President & Founder",
      qualification: "M.Com, M.A., LL.M., M.P.M., D.T.L., D.L.L. & L.W., G.D.C. & A., Ph.D",
      experience: "25+ years in Educational Leadership",
      image: "/assets/images/about1.png",
      achievements: [
        "Pioneer in value-based education system",
        "Established 80+ educational institutions",
        "National award for educational innovation",
        "Visionary behind Yuva Sansad initiative"
      ],
      message: "Education is not just about acquiring knowledge; it's about building character, fostering innovation, and creating responsible citizens who will lead our nation towards a brighter future.",
      color: "from-blue-600 to-purple-700"
    },
    {
      name: "Adv. Shardulrao Sudhakarrao Jadhavar",
      position: "Vice President",
      qualification: "MBA, PGD-HRM, M.Com, D.H.R & L.D.C.L, D.C.P.L, A.P.C.L, C.MED, D.L.L & L.W., LL.M.",
      experience: "15+ years in Legal Education",
      image: "/assets/images/about2.png",
      achievements: [
        "Expert in civil and constitutional law",
        "Instrumental in legal curriculum development",
        "Moot court competition pioneer",
        "Industry-academia bridge builder"
      ],
      message: "The MCA program is designed to shape students into competent IT professionals by building strong foundations in computer applications and emerging technologies. We emphasize holistic development through a balanced approach that integrates academic excellence, practical training, industry exposure, and professional skill development.",

      color: "from-green-600 to-blue-700"
    }
  ]

  const messages = [
    {
      title: "President's Message",
      icon: <Users className="h-8 w-8" />,
      content:
        "With the motto of Education for Strength, Intellect and Wisdom, the Jadhavar Group of Institutes has emerged as one of the fastest growing educational institutions in Maharashtra. We are committed to providing career-oriented education with holistic development across academics, technology, research, culture, sports, and social responsibility, along with 100% placement assistance.",
      author: "Dr. Sudhakarrao Jadhavar",
      color: "bg-gradient-to-br from-blue-500 to-blue-700",
    },
    {
      title: "Vice President's Message",
      icon: <Briefcase className="h-8 w-8" />,
      content:
        "Our institute operates under the expert guidance of experienced academicians and industry professionals. We focus on nurturing technically skilled, ethically strong, and socially responsible professionals through modern education, skill development programs, and industry-aligned learning, preparing students for global careers.",
      author: "Adv. Shardulrao Sudhakarrao Jadhavar",
      color: "bg-gradient-to-br from-green-500 to-green-700",
    },
    {
      title: "Principal's Message",
      icon: <GraduationCap className="h-8 w-8" />,
      content:
        "At Dr. Sudhakarrao Jadhavar Institute of Management and Technology, we emphasize practical learning with strong theoretical foundations. Our MCA/MBA and technology programs are supported by experienced faculty from IITs, IIMs, and industry, ensuring students are industry-ready, innovative, and equipped for lifelong learning.",
      author: "Dr. Sudhakarrao Jadhavar",
      color: "bg-gradient-to-br from-purple-500 to-purple-700",
    },
  ];

  const programHighlights = [
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Career-Oriented Curriculum",
      description:
        "Industry-aligned MCA/MBA curriculum focusing on software development, data science, AI, cloud computing, and emerging technologies.",
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "100% Placement Assistance",
      description:
        "Strong placement support with tie-ups with companies like TCS, Wipro, IBM, Cognizant, L&T Infotech, and more.",
    },
    {
      icon: <Library className="h-6 w-6" />,
      title: "Modern Infrastructure",
      description:
        "Smart classrooms, advanced computer labs, digital boards, e-learning systems, and research-oriented facilities.",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Holistic Development",
      description:
        "Equal emphasis on academics, skill development, sports, culture, research, innovation, yoga, meditation, and social initiatives.",
    },
  ];

  const visionMission = [
    {
      title: "Vision",
      icon: <Eye className="h-6 w-6" />,
      points: [
        "To be a premier institute of excellence in management and technology education",
        "To develop tech-savvy, innovative, and socially responsible professionals",
        "To promote holistic development aligned with global standards and Indian values",
        "To contribute to sustainable and inclusive societal growth",
      ],
      color: "border-blue-200 bg-blue-50",
    },
    {
      title: "Mission",
      icon: <Target className="h-6 w-6" />,
      points: [
        "To impart quality education in management and technology with industry relevance",
        "To foster leadership, innovation, and entrepreneurship among students",
        "To provide skill-based learning, research exposure, and placement readiness",
        "To nurture ethically responsible and good human beings",
      ],
      color: "border-green-200 bg-green-50",
    },
    {
      title: "Objectives",
      icon: <CheckCircle className="h-6 w-6" />,
      points: [
        "Deliver interdisciplinary education from KG to PG under one educational ecosystem",
        "Promote research, innovation, and startup culture through mentorship and funding",
        "Support students through scholarships, earn & learn schemes, and social initiatives",
        "Strengthen youth leadership through platforms like Yuva Sansad and social campaigns",
      ],
      color: "border-purple-200 bg-purple-50",
    },
  ];

  const stats = [
    {
      icon: <Users />,
      value: "20+",
      label: "Years of Experience in Education",
      color: "text-blue-600",
    },
    {
      icon: <Award />,
      value: "25+",
      label: "National & International Awards",
      color: "text-green-600",
    },
    {
      icon: <GraduationCap />,
      value: "20,000+",
      label: "Students Pursued Careers with Us",
      color: "text-purple-600",
    },
    {
      icon: <Users />,
      value: "34",
      label: "Foreign Nations Students Trained",
      color: "text-orange-600",
    },
    {
      icon: <Briefcase />,
      value: "22",
      label: "MoUs with Education Groups from 7 Countries",
      color: "text-teal-600",
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <>
      <Helmet>
        <title>
          About Dr. Sudhakarrao Jadhavar Institute of Management and Technology | MCA/MBA Program Pune | Leadership & Vision
        </title>

        <meta
          name="description"
          content="Learn about Dr. Sudhakarrao Jadhavar Institute of Management and Technology, Pune. Explore our MCA/MBA program, vision, mission, leadership, infrastructure, and commitment to industry-oriented management and technology education."
        />

        <meta
          name="keywords"
          content="Dr. Sudhakarrao Jadhavar Institute of Management and Technology, MCA/MBA Pune, MCA/MBA college Pune, management and technology institute, AICTE approved MCA/MBA, SPPU MCA/MBA program, computer applications Pune"
        />

        <meta
          property="og:title"
          content="About Dr. Sudhakarrao Jadhavar Institute of Management and Technology | Premier MCA/MBA Education in Pune"
        />

        <meta
          property="og:description"
          content="Excellence in management and technology education with industry-oriented MCA/MBA program at Dr. Sudhakarrao Jadhavar Institute of Management and Technology, Pune."
        />

        <meta property="og:type" content="website" />

        <link
          rel="canonical"
          href="https://www.jadhavargroup.edu.in/MCA/MBA/about"
        />
      </Helmet>

      {/* ================= HERO SECTION ================= */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative py-12 md:py-16 bg-gradient-to-br from-blue-900/95 via-blue-800/90 to-indigo-900/95 overflow-hidden"


      >
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid" />

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">

            {/* Badge */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-2.5 rounded-full shadow-lg mb-6 border border-white/20"
            >
              <Shield className="h-4 w-4 text-white" />
              <span className="text-sm font-semibold text-white">
                Excellence in Management & Technology Education
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-5xl font-bold text-white mb-4"
            >
              <span className="text-white">

                Dr. Sudhakarrao Jadhavar Institute of
              </span>
              <br />
              <span className="text-white">
                Management and Technology
              </span>

              <span className="text-xl md:text-2xl font-normal text-gray-300 mt-3 block">
                Master of Computer Applications (MCA) / Master of Business Administration (MBA)
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto"
            >
              Empowering Future-Ready IT Professionals Through Innovation, Skills, and Industry-Oriented Learning Since 2014
            </motion.p>
          </div>

          {/* ================= QUICK STATS ================= */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mt-10"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className={`${stat.color} mb-2 flex justify-center`}>
                  {React.cloneElement(stat.icon, { className: "h-6 w-6" })}
                </div>

                <div className="text-xl md:text-2xl font-bold text-white mb-1">
                  {stat.value}
                </div>

                <div className="text-xs text-gray-300 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>


      {/* About College Section */}
      <motion.section
        ref={sectionRef}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeInUp}
        className="py-16 bg-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">

            {/* Heading */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <Building className="h-4 w-4" />
                About the Institute
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                About the <span className="text-blue-600">Jadhavar Group of Institutes</span>
              </h2>

              <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
                With the motto of <strong>Education for Strength, Intellect and Wisdom</strong>,
                the Jadhavar Group of Institutes has emerged as one of the fastest growing
                educational institutions in Maharashtra. Established in 2014, the institute
                is committed to delivering career-oriented education with
                <strong> 100% placement assistance</strong> and holistic development across
                academic, technological, cultural, social, and research domains.
              </p>
            </div>

            {/* Vision, Mission & Objectives */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {visionMission.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className={`rounded-xl p-6 border-2 ${item.color} hover:shadow-lg transition-all duration-300`}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md mb-4">
                    <div className="text-blue-600">{item.icon}</div>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>

                  <ul className="space-y-2">
                    {item.points.map((point, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <ChevronRight className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Program Highlights */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-center text-gray-900 mb-8">
                <span className="text-blue-600">MCA/MBA Program Highlights</span>
              </h3>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                {programHighlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.03 }}
                    className="bg-gradient-to-br from-white to-gray-50 rounded-lg p-5 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="inline-flex items-center justify-center w-10 h-10 bg-blue-100 rounded-lg mb-3">
                      <div className="text-blue-600">{highlight.icon}</div>
                    </div>

                    <h4 className="font-semibold text-gray-900 mb-2">
                      {highlight.title}
                    </h4>

                    <p className="text-gray-600 text-sm">
                      {highlight.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Additional Institute Info */}
            <div className="text-gray-600 max-w-5xl mx-auto leading-relaxed space-y-4 text-sm md:text-base">
              <p>
                The institute operates under the expert guidance of educationist
                <strong> Dr. Sudhakarrao Jadhavar</strong> and
                <strong> Adv. Shardulrao Sudhakarrao Jadhavar</strong>, offering a wide range
                of educational programs from Pre-Primary to Post-Graduation, including MCA/MBA, AI & ML, Data Science, Cyber Security, Computer Applications, and more
                across multiple campuses.
              </p>

              <p>
                Modern infrastructure, smart classrooms, digital boards, e-learning systems,
                research funding up to ₹10 lakhs, and initiatives like
                <strong> Yuva Sansad</strong> ensure leadership development, innovation,
                and social responsibility among students.
              </p>

              <p>
                With strong industry tie-ups including TCS, IBM, Wipro, Cognizant, L&T,
                Vodafone, Jio, Flipkart, Tata Group companies and others, the institute
                maintains a strong placement record through campus interviews and
                industry collaboration.
              </p>
            </div>

          </div>
        </div>
      </motion.section>


      {/* Leadership Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-4 border border-gray-100">
              <UserCheck className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium text-gray-700">Governing Body & Management</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Meet Our <span className="text-blue-600">Leadership</span>
            </h2>
            <p className="text-gray-600">
              Guided by visionaries transforming integrated legal education landscape
            </p>
          </div>

          {/* Leadership Cards */}
          <div className="max-w-6xl mx-auto space-y-6">
            {leadership.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-1/3 relative group overflow-hidden">
                    <div className="h-56 lg:h-full">
                      <img
                        src={leader.image}
                        alt={`${leader.name} - ${leader.position}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm rounded-lg shadow p-3">
                      <div className="flex items-center gap-2">
                        <Clock className="h-3 w-3 text-blue-600" />
                        <div>
                          <p className="text-xs font-semibold text-gray-800">Experience</p>
                          <p className="text-xs text-gray-700">{leader.experience}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="lg:w-2/3 p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{leader.name}</h3>
                      <div className="inline-flex items-center gap-2 bg-gradient-to-r bg-blue-600 text-white px-3 py-1.5 rounded-full text-xs font-semibold mb-2">
                        <Briefcase className="h-3 w-3" />
                        {leader.position}
                      </div>
                      <div className="flex items-center text-gray-700 text-sm">
                        <GraduationCap className="h-3 w-3 mr-2 text-blue-600" />
                        <span>{leader.qualification}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center text-sm">
                        <Medal className="h-4 w-4 mr-2 text-yellow-500" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-1.5">
                        {leader.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 border border-blue-100">
                      <div className="flex items-start">
                        <Quote className="h-5 w-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-gray-800 italic text-sm leading-relaxed">
                            "{leader.message}"
                          </p>
                          <p className="text-xs text-gray-600 mt-2 font-medium">— {leader.name}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`h-1 bg-gradient-to-r ${leader.color}`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Messages Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                <span className="text-blue-600">Messages</span> from Leadership
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Words of wisdom from our esteemed leaders guiding the institution
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl blur-lg group-hover:blur-xl transition-all duration-500" />
                  <div className="relative bg-white rounded-xl p-6 shadow-lg border border-gray-100 group-hover:shadow-xl transition-all duration-300">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${message.color} text-white mb-4`}>
                      {message.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{message.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">{message.content}</p>
                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-sm font-semibold text-gray-900">{message.author}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 via-white to-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">

            {/* Heading */}
            <div className="text-center mb-14">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                Why Choose <span className="text-blue-600">MCA/MBA at Jadhavar Institute</span>
              </h1>
              <p className="text-gray-600 max-w-3xl mx-auto text-sm md:text-base">
                Our Master of Computer Applications (MCA/MBA) program is designed to develop
                industry-ready IT professionals through a perfect blend of academics,
                practical exposure, and career-oriented skill development.
              </p>
            </div>

            {/* Content Grid – Clean & Modern */}
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">

              {[
                {
                  icon: <BookMarked className="h-5 w-5" />,
                  title: "Industry-Oriented MCA/MBA Curriculum",
                  desc: "Updated syllabus aligned with industry needs, emerging technologies, and real-world applications."
                },
                {
                  icon: <Zap className="h-5 w-5" />,
                  title: "Hands-on Technical Training",
                  desc: "Practical exposure through labs, projects, internships, and live industry assignments."
                },
                {
                  icon: <Users className="h-5 w-5" />,
                  title: "Experienced Faculty & Mentorship",
                  desc: "Guidance from highly qualified professors and industry professionals with real-world experience."
                },
                {
                  icon: <TrendingUp className="h-5 w-5" />,
                  title: "Strong Placement Assistance",
                  desc: "Dedicated placement cell with training, mock interviews, and industry tie-ups."
                },
                {
                  icon: <Lightbulb className="h-5 w-5" />,
                  title: "Focus on Innovation & Research",
                  desc: "Encouragement for research, startups, innovation projects, and technical competitions."
                },
                {
                  icon: <Heart className="h-5 w-5" />,
                  title: "Holistic Student Development",
                  desc: "Equal emphasis on academics, ethics, leadership, soft skills, and personal growth."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.06 }}
                  viewport={{ once: true }}
                  className="flex gap-4 items-start"
                >
                  {/* Icon */}
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                      {item.icon}
                    </div>
                  </div>

                  {/* Text */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}

            </div>
          </div>
        </div>
      </section>

    </>
  )
}