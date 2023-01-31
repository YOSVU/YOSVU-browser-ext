import {  Route, Routes } from "react-router-dom";



import { About } from "./about"
import { Home } from "./home"
import { HeadBar } from "./head"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { zhCN } from '@mui/material/locale';

const theme = createTheme(
  {
    palette: {
      primary: { main: '#1976d2' },
    },
  },
  zhCN,
);

export const Routing = () => (
  <ThemeProvider theme={theme}>
  <div>
    <HeadBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </div>
  </ThemeProvider>
)
