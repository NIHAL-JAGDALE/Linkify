import React from "react";
import { FaGithub, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden text-slate-200">
      {/* Background gradient + soft glow */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(90deg,#08122a 0%, #24153a 35%, #3b2a6f 70%, #08122a 100%)",
        }}
      />

      {/* pastel radial glow to match hero */}
      <div
        aria-hidden
        className="absolute -right-24 -top-20 w-72 h-72 rounded-full -z-10 pointer-events-none blur-3xl opacity-40"
        style={{
          background:
            "radial-gradient(circle at center, rgba(99,102,241,0.12), rgba(56,189,248,0.05) 40%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="absolute -left-28 -bottom-24 w-64 h-64 rounded-full -z-10 pointer-events-none blur-3xl opacity-30"
        style={{
          background:
            "radial-gradient(circle at center, rgba(236,72,153,0.10), rgba(167,139,250,0.05) 40%, transparent 70%)",
        }}
      />

      {/* subtle neon top strip */}
      <div
        aria-hidden
        className="absolute left-0 right-0 top-0 h-[3px] -z-10 pointer-events-none blur-sm opacity-80"
        style={{
          background:
            "linear-gradient(90deg, rgba(56,189,248,0.9), rgba(236,72,153,0.85), rgba(99,102,241,0.9))",
        }}
      />

      <div className="container mx-auto px-6 lg:px-14 py-8 z-10 relative">
        <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-6">
          <div className="text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Linkify</h2>
            <p className="text-slate-300 mt-1">
              Simplifying URL shortening for efficient sharing
            </p>
          </div>

          <p className="text-slate-300/90 text-sm lg:order-none order-3">
            &copy; 2025 Linkify. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            {[
              {
                href: "https://github.com/NIHAL-JAGDALE",
                icon: <FaGithub size={18} />,
                label: "Github",
              },
              {
                href: "https://twitter.com/nihal_jagdale",
                icon: <FaTwitter size={18} />,
                label: "Twitter",
              },
              {
                href: "https://www.instagram.com/nihal_jagdale/",
                icon: <FaInstagram size={18} />,
                label: "Instagram",
              },
              {
                href: "https://www.linkedin.com/in/nihal-jagdale/",
                icon: <FaLinkedin size={18} />,
                label: "LinkedIn",
              },
            ].map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="group"
              >
                {/* frosted circle that turns into a gradient on hover */}
                <span
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    backdropFilter: "blur(6px)",
                    WebkitBackdropFilter: "blur(6px)",
                  }}
                >
                  <span
                    className="text-slate-200 transition-colors duration-200 group-hover:text-white"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {s.icon}
                  </span>
                </span>

                {/* colored gradient halo on hover (absolute element inside link) */}
                <span
                  className="absolute -z-10 opacity-0 group-hover:opacity-80 transition-opacity duration-200 pointer-events-none"
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 9999,
                    display: "inline-block",
                    marginLeft: -48,
                    background:
                      "linear-gradient(90deg, rgba(56,189,248,0.25), rgba(236,72,153,0.22), rgba(99,102,241,0.25))",
                    filter: "blur(10px)",
                  }}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
