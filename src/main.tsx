import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import RouterCustom from "./router";
import { ThemeProvider } from "./component/ThemeContext";
// import TextCursor from "./component/cursor/TextCursor";
import SakuraRain from "./component/SakuraRain";
import ClickSpark from "./component/ClickSpark";
import SplashCursor from "./component/cursor/SplashCursor";
import ScrollToTop from "./component/ScrollToTop";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ThemeProvider>
      <ClickSpark>
        {/* <TextCursor text="⚛️" /> */}
        <SplashCursor/>
        <SakuraRain />
        <RouterCustom />
        <ScrollToTop />
      </ClickSpark>
    </ThemeProvider>
  </BrowserRouter>
);
