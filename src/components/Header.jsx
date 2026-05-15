import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const [open, setOpen] = React.useState(false);
  const [dropdown, setDropdown] = React.useState("");
  const [mobileDropdown, setMobileDropdown] = React.useState({});

  const navLink =
    "px-2 py-1.5 text-base font-semibold text-white hover:bg-blue-900 transition rounded-md whitespace-nowrap";

  const menu = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/application", label: "Admission Form" },
    {
      to: "/assets/books/LOV.pdf",
      label: "AICTE LOA",
    },
    {
      to: "/assets/pdf/Discloser.pdf",
      label: "AICTE Disclosure",
    },
    {
  label: "Committee",
  sub: [
    {
      to: "/assets/pdf/committees.pdf",
      label: "Committees",
    },
    {
      to: "/assets/pdf/committee2.pdf",
      label: "Committee 2",
    },
  ],
},
    {
      to: "/grievance",
      label: "Grievance",
    },
    {
      label: "Admissions",
      sub: [
        { to: "/admissions", label: "Admissions Process" },
        { to: "/academics", label: "Academics" },
        { to: "/announcements", label: "Announcements" },
       
      ],
    },
    {
      label: "Udan",
      sub: [
        { to: "/udan/1", label: "Udan 1" },
        { to: "/udan/2", label: "Udan 2" },
        { to: "/udan/3", label: "Udan 3" },
        { to: "/udan/4", label: "Udan 4" },
        { to: "/udan/5", label: "Udan 5" },
        { to: "/udan/6", label: "Udan 6" },
        { to: "/udan/7", label: "Udan 7" },
        { to: "/udan/8", label: "Udan 8" },
      ],
    },
    {
      label: "More",
      sub: [
        { to: "/facilities", label: "Facilities" },
       // { to: "/library", label: "Library" },
        { to: "/gallery", label: "Gallery" },
        { to: "/careers", label: "Career" },
        { to: "/notices", label: "Notices" },
        { to: "/blogs", label: "Blogs" },
        { to: "/announcement", label: "Announcements" }, // Moved to More section
        { to: "/assets/pdf/24_7.pdf", label: "24*7 Women's Helpline" },
         { to: "/assets/pdf/Result.pdf", label: "Result" },
        { to: "https://docs.google.com/forms/d/e/1FAIpQLSdxQ73XMjb_zM0mMvZn_u8cc0UOXReDicAII5XGAE9joI5JRA/viewform?usp=dialog", label: "Feedback Form" } // Added to More section
      ],
    },
    { to: "/contact", label: "Contact" },
  ];

  React.useEffect(() => {
    const resize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
        setMobileDropdown({});
      }
    };
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  const toggleMobileDropdown = (label) => {
    setMobileDropdown(prev => ({
      ...prev,
      [label]: !prev[label]
    }));
  };

  // Handle external links (PDFs open in new tab)
  const handleLinkClick = (item) => {
    setOpen(false);
    setMobileDropdown({});
    if (item.to?.endsWith('.pdf')) {
      window.open(item.to, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* TOP BAR */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 py-2 grid grid-cols-[auto_1fr_auto] items-center gap-2">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/assets/images/logo/logo1.png"
              alt="Dr. Sudhakarrao Jadhavar Institute of Management and Technology"
              className="h-12 sm:h-14 md:h-16 w-auto object-contain"
            />
          </Link>

          <div className="text-center leading-tight px-1 sm:px-2">
            <p className="text-[10px] sm:text-[11px] italic text-gray-600">
              "Education for Strength, Intellect & Wisdom"
            </p>
            <p className="hidden md:block text-xs font-semibold text-gray-700">
              Late Uddhavrao Tulashiram Jadhavar Foundation's
            </p>
            <h1 className="text-xs sm:text-sm md:text-xl font-bold text-blue-900 leading-tight">
              Dr. Sudhakarrao Jadhavar Institute of Management and Technology
            </h1>
            <p className="text-[10px] sm:text-[11px] text-gray-700">
              (Affiliated to Savitribai Phule Pune University)
            </p>
          </div>

          <button
            className="md:hidden text-blue-900 p-2 hover:bg-blue-50 rounded transition"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* DESKTOP NAV */}
      <div className="bg-blue-700 hidden md:block">
        <div className="max-w-7xl mx-auto px-2 h-auto min-h-9 flex items-center justify-center overflow-visible">
          <nav className="flex flex-wrap items-center justify-center gap-1 overflow-visible">
            {menu.map((item, idx) =>
              item.sub ? (
                <div
                  key={idx}
                  className="relative"
                  onMouseEnter={() => setDropdown(item.label)}
                  onMouseLeave={() => setDropdown("")}
                >
                  <button 
                    className={`${navLink} flex items-center gap-1`}
                    onClick={() => setDropdown(dropdown === item.label ? "" : item.label)}
                  >
                    {item.label}
                    <ChevronDown 
                      size={12} 
                      className={`transition-transform duration-200 ${
                        dropdown === item.label ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {dropdown === item.label && (
                    <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded shadow-xl z-[9999]">
                      {item.sub.map((s, subIdx) => (
                        <NavLink
                          key={subIdx}
                          to={s.to}
                          className={({ isActive }) =>
                            `block px-4 py-2 text-sm hover:bg-blue-100 ${
                              isActive ? 'bg-blue-50 text-blue-700' : 'text-gray-800'
                            }`
                          }
                          onClick={() => setDropdown("")}
                          target={s.to?.endsWith('.pdf') ? "_blank" : undefined}
                          rel={s.to?.endsWith('.pdf') ? "noopener noreferrer" : undefined}
                        >
                          {s.label}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `${navLink} ${isActive ? "bg-blue-800" : ""}`
                  }
                  onClick={() => setDropdown("")}
                  target={item.to?.endsWith('.pdf') ? "_blank" : undefined}
                  rel={item.to?.endsWith('.pdf') ? "noopener noreferrer" : undefined}
                >
                  {item.label}
                </NavLink>
              )
            )}
          </nav>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-blue-950 px-3 py-2 space-y-1 max-h-[calc(100vh-120px)] overflow-y-auto">
          {menu.map((item, idx) =>
            item.sub ? (
              <div key={idx} className="mb-2">
                <button
                  onClick={() => toggleMobileDropdown(item.label)}
                  className="w-full text-left text-white text-sm font-semibold py-2 border-b border-blue-800 flex items-center justify-between hover:bg-blue-900/50 px-2 rounded"
                >
                  {item.label}
                  <ChevronDown 
                    size={16} 
                    className={`transition-transform duration-200 ${
                      mobileDropdown[item.label] ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Mobile dropdown items with animation */}
                <div 
                  className={`overflow-hidden transition-all duration-200 ${
                    mobileDropdown[item.label] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  {item.sub.map((s, subIdx) => (
                    <NavLink
                      key={subIdx}
                      to={s.to}
                      onClick={() => handleLinkClick(s)}
                      className={({ isActive }) =>
                        `block pl-6 py-2 text-sm text-white border-b border-blue-900 hover:bg-blue-900/50 ${
                          isActive ? 'bg-blue-800' : ''
                        }`
                      }
                      target={s.to?.endsWith('.pdf') ? "_blank" : undefined}
                      rel={s.to?.endsWith('.pdf') ? "noopener noreferrer" : undefined}
                    >
                      {s.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            ) : (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => handleLinkClick(item)}
                className={({ isActive }) =>
                  `block py-2 text-sm text-white border-b border-blue-900 hover:bg-blue-900/50 px-2 rounded ${
                    isActive ? 'bg-blue-800' : ''
                  }`
                }
                target={item.to?.endsWith('.pdf') ? "_blank" : undefined}
                rel={item.to?.endsWith('.pdf') ? "noopener noreferrer" : undefined}
              >
                {item.label}
              </NavLink>
            )
          )}
        </div>
      )}
    </header>
  );
}