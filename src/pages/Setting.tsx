import { useTheme } from "../component/useTheme";

const SettingsPage = () => {
  const { isDark, setTheme } = useTheme();

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-slate-200 dark:bg-black transition-colors duration-500">
      <h1 className="text-4xl font-bold text-black dark:text-white mb-6">
        Settings Page
      </h1>
      <button
        onClick={() => setTheme('light')}
        className="mb-4 rounded-md bg-slate-800 p-2 text-white hover:bg-slate-700"
      >
        Light Mode
      </button>
      <button
        onClick={() => setTheme('dark')}
        className="rounded-md bg-slate-800 p-2 text-white hover:bg-slate-700"
      >
        Dark Mode
      </button>
      <p className="mt-6 text-black dark:text-white">
        Current Mode: {isDark ? "Dark" : "Light"}
      </p>
      <button className="mt-4 rounded-md bg-slate-800 p-2 text-white hover:bg-slate-700">
        <a href="/">Go to Home</a>
      </button>
      <button className="mt-4 rounded-md bg-slate-800 p-2 text-white hover:bg-slate-700">
        <a href="/filterProducer">Go to Search Producer</a>
      </button>
    </div>
  );
};

export default SettingsPage;
