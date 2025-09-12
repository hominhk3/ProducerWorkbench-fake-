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
import LoadingPage from "./component/loading/LoadingPage";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 6000); // 5s
    return () => clearTimeout(timer);
  }, []);

  return (
  <BrowserRouter>
    <ThemeProvider>
      <ClickSpark>
        <SplashCursor />
        <SakuraRain />
        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div
              key="loader"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <LoadingPage />
            </motion.div>
          ) : (
            <motion.div
              key="router"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <RouterCustom />
            </motion.div>
          )}
        </AnimatePresence>
        <ScrollToTop />
      </ClickSpark>
    </ThemeProvider>
  </BrowserRouter>
);

}
export default App;

createRoot(document.getElementById("root")!).render(<App />);
