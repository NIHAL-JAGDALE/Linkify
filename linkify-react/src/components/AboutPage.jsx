import React from "react";
import { FaLink, FaShareAlt, FaEdit, FaChartLine } from "react-icons/fa";

const AboutPage = () => {
  return (
    <div className="relative lg:px-14 sm:px-8 px-5 min-h-[calc(100vh-64px)] pt-2 overflow-hidden">
      {/* Slightly lighter base gradient (pleasant, still deep) */}
      <div
        aria-hidden
        className="absolute inset-0 z-[-10] bg-[linear-gradient(90deg,#061025_0%,#24153a_28%,#3b2a6f_64%,#08122a_100%)] bg-cover"
      />

      {/* Softer pastel radial glows */}
      <div
        aria-hidden
        className="absolute -left-28 top-6 w-[820px] h-[480px] z-[-20]
          bg-[radial-gradient(ellipse_at_top_left,rgba(56,189,248,0.10),transparent 35%)]
          blur-[72px] opacity-85 pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute right-[-100px] bottom-[-40px] w-[700px] h-[420px] z-[-20]
          bg-[radial-gradient(ellipse_at_bottom_right,rgba(167,139,250,0.10),transparent 30%)]
          blur-[56px] opacity-88 pointer-events-none"
      />

      {/* Gentle center purple wash to lift the content */}
      <div
        aria-hidden
        className="absolute left-0 right-0 top-24 h-[380px] mx-auto max-w-[1200px] z-[-15] pointer-events-none"
        style={{
          background:
            "radial-gradient(closest-side, rgba(99,102,241,0.08), rgba(72,36,108,0.06) 40%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Subtle vignette/darken edges (lighter) */}
      <div
        aria-hidden
        className="absolute inset-0 z-[-9] pointer-events-none
          bg-[radial-gradient(closest-side,rgba(0,0,0,0.22),transparent 60%)]"
      />

      {/* Very subtle noise overlay */}
      <div
        aria-hidden
        className="absolute inset-0 z-[-8] pointer-events-none mix-blend-overlay opacity-8"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'><filter id='n'><feTurbulence baseFrequency='0.9' numOctaves='1' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.02' /></svg>\")",
          backgroundRepeat: "repeat",
        }}
      />

      {/* Content (above backgrounds) */}
      <div className="relative z-10 w-full sm:py-10 py-8">
        <h1 className="sm:text-4xl text-3xl font-bold italic mb-3 text-white">
          About Linkify
        </h1>

        <p className="text-slate-200 text-sm mb-8 xl:w-[60%] lg:w-[70%] sm:w-[80%] w-full">
          Linkify simplifies URL shortening for efficient sharing. Easily
          generate, manage, and track your shortened links. Linkify simplifies
          URL shortening for efficient sharing. Easily generate, manage, and
          track your shortened links. Linkify simplifies URL shortening for
          efficient sharing. Easily generate, manage, and track your shortened
          links. Linkify simplifies URL shortening for efficient sharing.
          Easily generate, manage, and track your shortened links.
        </p>

        <div className="space-y-6 xl:w-[60%] lg:w-[70%] sm:w-[80%] w-full">
          <div className="flex items-start">
            <FaLink className="text-sky-300 text-3xl mr-4" />
            <div>
              <h2 className="sm:text-2xl font-bold text-white">
                Simple URL Shortening
              </h2>
              <p className="text-slate-300">
                Experience the ease of creating short, memorable URLs in just a
                few clicks. Our intuitive interface and quick setup process
                ensure you can start shortening URLs without any hassle.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <FaShareAlt className="text-emerald-300 text-3xl mr-4" />
            <div>
              <h2 className="sm:text-2xl font-bold text-white">
                Powerful Analytics
              </h2>
              <p className="text-slate-300">
                Gain insights into your link performance with our comprehensive
                analytics dashboard. Track clicks, geographical data, and
                referral sources to optimize your marketing strategies.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <FaEdit className="text-violet-300 text-3xl mr-4" />
            <div>
              <h2 className="sm:text-2xl font-bold text-white">
                Enhanced Security
              </h2>
              <p className="text-slate-300">
                Rest assured with our robust security measures. All shortened
                URLs are protected with advanced encryption, ensuring your data
                remains safe and secure.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <FaChartLine className="text-rose-300 text-3xl mr-4" />
            <div>
              <h2 className="sm:text-2xl font-bold text-white">Fast and Reliable</h2>
              <p className="text-slate-300">
                Enjoy lightning-fast redirects and high uptime with our reliable
                infrastructure. Your shortened URLs will always be available and
                responsive, ensuring a seamless experience for your users.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
