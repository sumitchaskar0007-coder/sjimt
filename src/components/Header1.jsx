import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const [open, setOpen] = React.useState(false);
  const [dropdown, setDropdown] = React.useState(null);
  const [mobileDropdown, setMobileDropdown] = React.useState({});

  const navLink =
    "px-2 py-1.5 text-base font-semibold text-white hover:bg-blue-900 transition rounded-md";

  const menu = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },

    {
      label: "Admissions",
      sub: [
        { to: "/admissions", label: "Admissions" },
        { to: "/academics", label: "Academics" },
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
      to: "/assets/pdf/LOV.pdf",
      label: "AICTE LOA",
    },
    {
      to: "/assets/pdf/Discloser.pdf",
      label: "AICTE Disclosure",
    },

    {
      to: "/grievance",
      label: "Grievance",
    },
     {
      to: "/assets/pdf/committees.pdf",
      label: "Committees",
    },

    {
      to: "/gallery",
      label: "Gallery",
    },

    { to: "/announcement", label: "Announcements" },
    { to: "/notices", label: "Notices" },
    { to: "/careers", label: "Careers" },

    {
      label: "More",
      sub: [
        { to: "/facilities", label: "Facilities" },
        { to: "/feedback", label: "Feedback" },
        { to: "/blogs", label: "Blog" },
        { to: "/library", label: "Library" },
        // Removed duplicate careers from More section
      ],
    },

    { to: "/contact", label: "Contact" },
  ];

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
        setMobileDropdown({});
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMobileDropdown = (label) => {
    setMobileDropdown(prev => ({
      ...prev,
      [label]: !prev[label]
    }));
  };

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* TOP BAR */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 py-2 grid grid-cols-[auto_1fr_auto] items-center gap-1 sm:gap-2">
          <Link to="/" className="flex items-center gap-1 sm:gap-3">
            <img
              src="/assets/images/logo/logo1.png"
              alt="Dr. Sudhakarrao Jadhavar Institute of Management and Technology"
              className="h-12 sm:h-14 md:h-16 w-auto object-contain"
            />
          </Link>

          <div className="text-center leading-tight px-1 sm:px-2 overflow-hidden">
            <p className="text-[10px] sm:text-[11px] italic text-gray-600 whitespace-nowrap sm:whitespace-normal overflow-hidden text-ellipsis">
              "Education for Strength, Intellect & Wisdom"
            </p>
            <p className="hidden md:block text-xs font-semibold text-gray-700">
              Late Uddhavrao Tulashiram Jadhavar Foundation's
            </p>
            <h1 className="text-xs sm:text-sm md:text-xl font-bold text-blue-900 leading-tight whitespace-nowrap sm:whitespace-normal overflow-hidden text-ellipsis">
              Dr. Sudhakarrao Jadhavar Institute of Management and Technology
            </h1>
            <p className="text-[10px] sm:text-[11px] text-gray-700 whitespace-nowrap sm:whitespace-normal overflow-hidden text-ellipsis">
              (Affiliated to Savitribai Phule Pune University)
            </p>
          </div>

          <button
            className="md:hidden text-blue-900 p-1 hover:bg-blue-50 rounded transition"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* DESKTOP NAV */}
      <div className="bg-blue-700 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 h-9 flex items-center justify-center">
          <nav className="flex items-center gap-1 overflow-x-auto scrollbar-hide">
            {menu.map((item, idx) =>
              item.sub ? (
                <div
                  key={idx}
                  className="relative flex-shrink-0"
                  onMouseEnter={() => setDropdown(item.label)}
                  onMouseLeave={() => setDropdown(null)}
                >
                  <button className={`${navLink} flex items-center gap-1 whitespace-nowrap`}>
                    {item.label}
                    <ChevronDown size={12} />
                  </button>

                  {dropdown === item.label && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-48 bg-white rounded-md shadow-xl overflow-hidden z-50">
                      {item.sub.map((s, subIdx) => (
                        <NavLink
                          key={subIdx}
                          to={s.to}
                          className="block px-4 py-2 text-sm text-gray-800 hover:bg-blue-50 whitespace-nowrap"
                          onClick={() => setDropdown(null)}
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
                  target={item.label === "AICTE LOA" || item.label === "AICTE Disclosure" ? "_blank" : undefined}
                  rel={item.label === "AICTE LOA" || item.label === "AICTE Disclosure" ? "noopener noreferrer" : undefined}
                  className={({ isActive }) =>
                    `${navLink} ${isActive ? "bg-blue-800" : ""} whitespace-nowrap flex-shrink-0`
                  }
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
        <div className="md:hidden bg-blue-950 px-2 sm:px-4 py-2 space-y-1 max-h-[calc(100vh-120px)] overflow-y-auto">
          {menu.map((item, idx) =>
            item.sub ? (
              <div key={idx} className="mb-2">
                <button
                  onClick={() => toggleMobileDropdown(item.label)}
                  className="w-full text-left text-white text-xs sm:text-sm font-semibold py-1.5 sm:py-2 border-b border-blue-800 sticky top-0 bg-blue-950 flex items-center justify-between"
                >
                  {item.label}
                  <ChevronDown 
                    size={16} 
                    className={`transform transition-transform duration-200 ${
                      mobileDropdown[item.label] ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                {/* Mobile dropdown items */}
                <div 
                  className={`pl-2 sm:pl-4 overflow-hidden transition-all duration-200 ${
                    mobileDropdown[item.label] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  {item.sub.map((s, subIdx) => (
                    <NavLink
                      key={subIdx}
                      to={s.to}
                      onClick={() => {
                        setOpen(false);
                        setMobileDropdown({});
                      }}
                      target={s.label === "AICTE LOA" || s.label === "AICTE Disclosure" ? "_blank" : undefined}
                      rel={s.label === "AICTE LOA" || s.label === "AICTE Disclosure" ? "noopener noreferrer" : undefined}
                      className="block py-1.5 sm:py-2 text-xs sm:text-sm text-white border-b border-blue-900/50 hover:bg-blue-900/50 transition"
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
                target={item.label === "AICTE LOA" || item.label === "AICTE Disclosure" ? "_blank" : undefined}
                rel={item.label === "AICTE LOA" || item.label === "AICTE Disclosure" ? "noopener noreferrer" : undefined}
                onClick={() => {
                  setOpen(false);
                  setMobileDropdown({});
                }}
                className="block py-1.5 sm:py-2 text-xs sm:text-sm text-white border-b border-blue-900 hover:bg-blue-900/50 transition"
              >
                {item.label}
              </NavLink>
            )
          )}
        </div>
      )}

      {/* Add scrollbar hiding styles */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </header>
  );
}