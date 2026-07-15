import React from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";

import Invitation from "./invitation/invitation";
import LoadingScreen from "./invitation/loadingScreen";
import YouAreInvited from "./invitation/youAreInvited";

import Why from "./pages/Why";
import Memories from "./pages/Memories";
import Pictures from "./pages/Pictures";
import Appreciated from "./pages/Appreciated";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Invitation />} />
      <Route path="/loading" element={<LoadingScreen />} />
      <Route path="/invitedYarn" element={<YouAreInvited />} />

      <Route path="/why" element={<Why />} />
      <Route path="/memories" element={<Memories />} />
      <Route path="/pictures" element={<Pictures />} />
      <Route path="/appreciated" element={<Appreciated />} />
    </Routes>
  );
}

export default App;