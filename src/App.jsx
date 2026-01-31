import { Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Contacts from "./pages/Contacts";
import useImagePreloader from "./hooks/useImagePreloader";

const App = () => {
  // Preload all gallery images on app mount
  useImagePreloader();

  return (
    <div className="min-h-screen flex items-center justify-center py-8 px-4 md:py-12">
      <div className="w-full max-w-5xl bg-[rgb(249 249 242)] shadow-xl p-6 md:p-10 relative overflow-hidden">
        {/* Decorative element */}
        <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-gradient-radial from-white/90 to-transparent rounded-full" />

        {/* Header */}
        <header className="flex flex-col md:flex-row md:items-center gap-4 border-b border-earth-400/30 pb-4">
          <Link to="/" className="flex justify-center md:justify-start -my-2">
            <img
              src="/logo.png"
              alt="Oliwka.art"
              className="h-12 md:h-16 w-auto"
            />
          </Link>

          <nav className="flex justify-center md:justify-end md:flex-1 gap-6 md:gap-7 text-sm">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-earth-800 hover:text-earth-900 transition-colors ${
                  isActive ? "font-semibold text-earth-900" : ""
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                `text-earth-800 hover:text-earth-900 transition-colors ${
                  isActive ? "font-semibold text-earth-900" : ""
                }`
              }
            >
              Gallery
            </NavLink>
            <NavLink
              to="/contacts"
              className={({ isActive }) =>
                `text-earth-800 hover:text-earth-900 transition-colors ${
                  isActive ? "font-semibold text-earth-900" : ""
                }`
              }
            >
              Contacts
            </NavLink>
          </nav>
        </header>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>

        {/* Footer */}
        <footer className="flex justify-center mt-8">
          <img
            src="/signature.png"
            alt="Oliwia Khudo"
            className="h-10 w-auto"
          />
        </footer>
      </div>
    </div>
  );
};

export default App;
