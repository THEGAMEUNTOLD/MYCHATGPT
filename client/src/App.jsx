import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import SideBar from "./components/SideBar";
import Chat from "./pages/Chat";
import Community from "./pages/Community";
import Credits from "./pages/Credits";
import { assets } from "./assets/assets";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50"
        onClick={() => setIsMenuOpen(true)}
      >
        <img
          src={assets.menu_icon}
          alt="menu"
          className="w-6 h-6 dark:invert"
        />
      </button>

      <div className="dark:bg-gradient-to-b from-[#242124] to-[#000000] dark:text-white">
        <div className="flex h-screen w-screen overflow-hidden">

          <SideBar
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
          />

          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Chat />} />
              <Route path="/community" element={<Community />} />
              <Route path="/credits" element={<Credits />} />
            </Routes>
          </div>

        </div>
      </div>
    </>
  );
};

export default App;
