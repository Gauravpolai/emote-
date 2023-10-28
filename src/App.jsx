import { useState } from "react";
import "./App.css";
import HomePage from "./Pages/HomePage";
import { BrowserRouter, Routes, Route } from 
"react-router-dom";
import MoodPage from "./Pages/MoodPage";
import DayDetail from "./Pages/WritePage";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ExplorePage from "./Pages/ExplorePage";
import FriendsPage from "./Pages/FriendsPage";

function App() {
  // const particlesInit = useCallback(async (engine) => {
  //   await loadFull(engine);
  // }, []);

  // const particlesLoaded = useCallback(async (container) => {
  //   await console.log(container);
  // }, []);
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>} />

      <Route path="/mood" element={<MoodPage/>} />

      <Route path="/day/:date" element={<DayDetail/>}/>

      <Route path="/explore" element={<ExplorePage/>} />

      <Route path="/friends" element={<FriendsPage/>} />

      <Route path="/login" element={<Login/>} />

      <Route path="/register" element={<Register/>} />
      {/* <Route path="/friends" element={<FriendsPage/>} /> */}

    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
