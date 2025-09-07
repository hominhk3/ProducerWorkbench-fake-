import  SplitText  from "../component/SplitText";
import { useTheme } from "../component/useTheme";

const HomePage = () => {
  const {isDark} = useTheme();
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-slate-200 dark:bg-black transition-colors duration-500">
    <SplitText
        text={`HomePage - ${isDark ? "Dark Mode" : "Light Mode"}`} 
        className="text-4xl font-bold text-black dark:text-white mr-2"
        delay={100}
        duration={0.6}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 50 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        textAlign="center"
        onLetterAnimationComplete={() => console.log("Animation Done!")}
      />
      <button className="mt-4 rounded-md bg-slate-800 p-2 text-white hover:bg-slate-700">
        <a href="/setting">Go to Settings</a>
      </button>
    </div>
  )
}

export default HomePage
