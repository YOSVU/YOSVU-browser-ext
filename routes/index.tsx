import {  Route, Routes } from "react-router-dom";



import { About } from "./about"
import { Home } from "./home"
import { HeadBar } from "./head"

export const Routing = () => (
  <div>
    <HeadBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </div>
)
