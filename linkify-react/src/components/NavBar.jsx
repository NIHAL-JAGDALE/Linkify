import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { useStoreContext } from "../contextApi/ContextApi";

const Navbar = () => {
  const navigate = useNavigate();
  const { token, setToken } = useStoreContext();
  const path = useLocation().pathname;
  const [navbarOpen, setNavbarOpen] = useState(false);

  const onLogOutHandler = () => {
    setToken(null);
    localStorage.removeItem("JWT_TOKEN");
    navigate("/login");
  };

  // visually-pleasing gradient + subtle glass
  const navStyle = {
    background:
      "linear-gradient(90deg, rgba(6,16,37,1) 0%, rgba(37,18,60,0.95) 55%, rgba(4,10,26,1) 100%)",
    borderBottom: "1px solid rgba(255,255,255,0.04)",
    backdropFilter: "saturate(120%) blur(4px)",
    boxShadow: "0 6px 18px rgba(2,6,23,0.35)",
  };

  const dropdownStyle = {
    background: "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))",
    backdropFilter: "saturate(120%) blur(8px)",
    border: "1px solid rgba(255,255,255,0.05)",
    boxShadow: "0 18px 40px rgba(2,6,23,0.6)",
  };

  // CTA styles
  const signupStyle = {
    display: "inline-block",
    padding: "8px 14px",
    borderRadius: "999px",
    fontWeight: 700,
    background: "linear-gradient(90deg, #ff8a6a 0%, #ff6fb3 60%)",
    color: "#fff",
    boxShadow: "0 8px 28px rgba(255,111,179,0.10)",
    border: "1px solid rgba(255,255,255,0.04)",
  };

  const logoutStyle = {
    display: "inline-block",
    padding: "8px 14px",
    borderRadius: "999px",
    fontWeight: 700,
    background: "linear-gradient(90deg, #07d4ff 0%, #6366f1 80%)",
    color: "#042027",
    boxShadow: "0 8px 28px rgba(6,182,212,0.06)",
    border: "1px solid rgba(255,255,255,0.04)",
  };

  return (
    <div className="h-16 z-50 flex items-center sticky top-0" style={navStyle}>
      <div className="lg:px-14 sm:px-8 px-4 w-full flex justify-between items-center">
        <Link to="/">
          <h1 className="font-bold text-3xl text-white italic sm:mt-0 mt-2">Linkify</h1>
        </Link>

        {/* nav list */}
        <ul
          className={`flex sm:gap-10 gap-4 sm:items-center sm:mt-1 sm:pt-0 pt-3 text-slate-200 sm:static absolute left-0 top-[62px] sm:shadow-none shadow-md
            ${navbarOpen ? "h-fit sm:pb-0 pb-5" : "h-0 overflow-hidden"}
            transition-all duration-150 sm:h-fit sm:bg-none sm:w-fit w-full sm:flex-row flex-col px-4 sm:px-0`}
          style={navbarOpen ? dropdownStyle : undefined}
        >
          <li className="hover:text-white/90 font-[500] transition-all duration-150">
            <Link
              className={`${path === "/" ? "text-white font-semibold" : "text-slate-200"} block`}
              to="/"
            >
              Home
            </Link>
          </li>

          <li className="hover:text-white/90 font-[500] transition-all duration-150">
            <Link
              className={`${path === "/about" ? "text-white font-semibold" : "text-slate-200"} block`}
              to="/about"
            >
              About
            </Link>
          </li>

          {token && (
            <li className="hover:text-white/90 font-[500] transition-all duration-150">
              <Link
                className={`${path === "/dashboard" ? "text-white font-semibold" : "text-slate-200"} block`}
                to="/dashboard"
              >
                Dashboard
              </Link>
            </li>
          )}

          {!token && (
            <li className="sm:ml-0 -ml-1 transition-all duration-150">
              <Link to="/register" style={signupStyle}>
                Sign Up
              </Link>
            </li>
          )}

          {token && (
            <li className="sm:ml-0 -ml-1 transition-all duration-150">
              <button onClick={onLogOutHandler} style={logoutStyle}>
                Log Out
              </button>
            </li>
          )}
        </ul>

        {/* mobile toggle (keeps access on small screens) */}
        <button
          onClick={() => setNavbarOpen(!navbarOpen)}
          className="sm:hidden flex items-center sm:mt-0 mt-2"
          aria-label="Toggle menu"
          aria-expanded={navbarOpen}
        >
          {navbarOpen ? (
            <RxCross2 className="text-white text-3xl" />
          ) : (
            <IoIosMenu className="text-white text-3xl" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
