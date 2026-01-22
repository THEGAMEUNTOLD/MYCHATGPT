import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import SideBar from "./components/SideBar";
import ChatBox from "./components/ChatBox";
import Community from "./pages/Community";
import Credits from "./pages/Credits";
import { assets } from "./assets/assets";
import './assets/prism.css'

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {!isMenuOpen && <img src={assets.menu_icon} className="absolute top-3 left-3 w-8 h-8 cursor-pointer md:hidden not-dark:invert" onClick={() => setIsMenuOpen(true)} />}
      <div className="dark:bg-gradient-to-b from-[#242124] to-[#000000] dark:text-white">
        <div className="flex h-screen w-screen overflow-hidden">
          <SideBar
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
          />

          <div className="flex-1">
            <Routes>
              <Route path="/" element={<ChatBox />} />
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
