import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useStoreContext } from "../contextApi/ContextApi";

// Full combined file containing LandingPage + improved Card component
// Save this as `LandingPageWithCard.jsx` or split Card into its own file as needed.

/* ----------------------------- Card Component ---------------------------- */
function Card({ title, desc }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6, scale: 1.02 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 160, damping: 18 }}
      className={
        "relative flex flex-col justify-between rounded-2xl p-6 min-h-[160px] bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))] border border-white/8 backdrop-blur-[6px] shadow-[0_10px_30px_rgba(3,7,18,0.6)] hover:shadow-[0_20px_40px_rgba(99,102,241,0.08)] transition-all duration-300"
      }
    >
      {/* Decorative top-left badge */}
      <div className="absolute -top-3 -left-3 w-12 h-12 rounded-lg bg-gradient-to-tr from-cyan-400 to-violet-500 shadow-[0_6px_18px_rgba(99,102,241,0.12)] flex items-center justify-center">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z" fill="white" fillOpacity="0.9" />
        </svg>
      </div>

      <header className="z-10">
        <h3 className="text-white font-semibold text-lg mb-2 leading-tight">{title}</h3>
        <p className="text-slate-300 text-sm leading-relaxed max-h-[6.5rem] overflow-hidden">{desc}</p>
      </header>

      <footer className="mt-4 flex items-center justify-between">
        <div className=" text-white flex items-center gap-3">
          <span className="inline-flex items-center gap-2 px-2 py-1 rounded-md text-xs font-medium bg-white/4 border border-white/6">
            quick info
          </span>
        </div>

        <motion.button
          whileTap={{ scale: 0.96 }}
          className="flex items-center gap-2 text-white/90 text-sm font-medium bg-gradient-to-r from-indigo-500 to-cyan-400 px-3 py-1 rounded-md shadow-[0_6px_18px_rgba(99,102,241,0.12)]"
          aria-label={`Open ${title}`}
        >
          <span>View</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 5L19 12L12 19" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.button>
      </footer>

      {/* Bottom glow accent */}
      <div
        aria-hidden
        className="absolute left-4 right-4 bottom-4 h-[6px] rounded-lg bg-gradient-to-r from-cyan-400/30 via-indigo-400/20 to-violet-500/20 blur-sm pointer-events-none"
      />
    </motion.article>
  );
}

/* --------------------------- Landing Page Component -------------------------- */
const LandingPage = () => {
  const navigate = useNavigate();
  const { token } = useStoreContext ? useStoreContext() : { token: null };

  const dashBoardNavigateHandler = () => {
    if (token) navigate("/dashboard");
    else navigate("/login");
  };

  return (
    <div className="relative min-h-[calc(100vh-64px)] lg:px-14 sm:px-8 px-4 overflow-hidden">
      {/* Slightly lighter base gradient (more pleasant, still deep) */}
      <div
        aria-hidden
        className="absolute inset-0 z-[-10] bg-[linear-gradient(90deg,#061025_0%,#24153a_28%,#3b2a6f_64%,#08122a_100%)] bg-cover"
      />

      {/* Softer, warmer radial glows (reduced darkness, slightly pastel) */}
      <div
        aria-hidden
        className="absolute -left-28 top-6 w-[820px] h-[480px] z-[-20]
          bg-[radial-gradient(ellipse_at_top_left,rgba(56,189,248,0.10),transparent_35%)]
          blur-[72px] opacity-85 pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute right-[-100px] bottom-[-40px] w-[700px] h-[420px] z-[-20]
          bg-[radial-gradient(ellipse_at_bottom_right,rgba(167,139,250,0.10),transparent_30%)]
          blur-[56px] opacity-88 pointer-events-none"
      />

      {/* Gentle center purple wash to lift the hero */}
      <div
        aria-hidden
        className="absolute left-0 right-0 top-24 h-[420px] mx-auto max-w-[1200px] z-[-15] pointer-events-none"
        style={{
          background:
            "radial-gradient(closest-side, rgba(99,102,241,0.08), rgba(72,36,108,0.06) 40%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Subtle vignette/darken edges (kept but lighter) */}
      <div
        aria-hidden
        className="absolute inset-0 z-[-9] pointer-events-none
          bg-[radial-gradient(closest-side,rgba(0,0,0,0.22),transparent_60%)]"
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

      {/* Content */}
      <div className="lg:flex-row flex-col lg:py-5 pt-16 lg:gap-10 gap-8 flex justify-between items-center relative z-10">
        <div className="flex-1">
          <motion.h1
            initial={{ opacity: 0, y: -80 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-bold font-roboto text-white md:text-5xl sm:text-4xl text-3xl md:leading-[55px] sm:leading-[45px] leading-10 lg:w-full md:w-[70%] w-full"
          >
            Linkify Simplifies URL Shortening For Efficient Sharing.
          </motion.h1>
          <p className="text-slate-200 text-sm my-5 lg:w-[85%] md:w-[92%]">
            Linkify streamlines the process of URL shortening, making sharing
            links effortless and efficient. With its user-friendly interface,
            Linkify allows you to generate concise, easy-to-share URLs in
            seconds. Simplify your sharing experience with Linkify today.
          </p>
          <div className="flex items-center gap-3">
            <motion.button
              initial={{ opacity: 0, y: 80 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              onClick={dashBoardNavigateHandler}
              className="w-40 text-white rounded-md py-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 shadow-lg hover:scale-[1.02] transition-transform duration-150"
            >
              Manage Links
            </motion.button>
            <motion.button
              initial={{ opacity: 0, y: 80 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              onClick={dashBoardNavigateHandler}
              className="w-40 text-white bg-gradient-to-r from-orange-400 via-pink-500 to-violet-600 rounded-md py-2 shadow-lg hover:scale-[1.02] transition-transform duration-150"
            >
              Create Short Link
            </motion.button>
          </div>
        </div>

        <div className="flex-1 flex justify-center w-full relative">
          {/* subtle spotlight behind the image (lifted, softer) */}
          <div
            aria-hidden
            className="absolute -top-6 -right-8 w-[460px] h-[460px] z-[-5]
              blur-[72px] opacity-90 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(99,102,241,0.14), rgba(56,189,248,0.06) 30%, transparent 55%)",
            }}
          />
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="sm:w-[480px] w-[400px] object-cover rounded-md shadow-2xl"
            src="/images/img2.png"
            alt="Decorative"
          />
        </div>
      </div>

      <div className="sm:pt-12 pt-7 relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-white font-roboto font-bold lg:w-[60%] md:w-[70%] sm:w-[80%] mx-auto text-3xl text-center"
        >
          Trusted by individuals and teams at the world best companies{" "}
        </motion.p>

        <div className="pt-4 pb-7 grid lg:gap-7 gap-4 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-4">
          <Card
            title="Simple URL Shortening"
            desc="Experience the ease of creating short, memorable URLs in just a few clicks. Our intuitive interface and quick setup process ensure you can start shortening URLs without any hassle."
          />
          <Card
            title="Powerful Analytics"
            desc="Gain insights into your link performance with our comprehensive analytics dashboard. Track clicks, geographical data, and referral sources to optimize your marketing strategies."
          />
          <Card
            title="Enhanced Security"
            desc="Rest assured with our robust security measures. All shortened URLs are protected with advanced encryption, ensuring your data remains safe and secure."
          />
          <Card
            title="Fast and Reliable"
            desc="Enjoy lightning-fast redirects and high uptime with our reliable infrastructure. Your shortened URLs will always be available and responsive, ensuring a seamless experience for your users."
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
