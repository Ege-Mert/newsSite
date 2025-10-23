import Header from "./components/Header";
import NewsArticle from "./components/NewsArticle";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import { useDarkMode } from "./hooks/useDarkMode";
import { useState } from "react";
import { AlignCenter, AlignLeft } from "lucide-react";

function App() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [isCentered, setIsCentered] = useState(true);

  console.log("App component rendering, isDarkMode:", isDarkMode);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

      {/* Layout Toggle Button */}
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <button
          onClick={() => setIsCentered(!isCentered)}
          className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700"
          aria-label="Toggle layout"
        >
          {isCentered ? (
            <>
              <AlignLeft className="w-5 h-5" />
              <span className="text-sm font-medium">Switch to Left Layout</span>
            </>
          ) : (
            <>
              <AlignCenter className="w-5 h-5" />
              <span className="text-sm font-medium">Switch to Centered Layout</span>
            </>
          )}
        </button>
      </div>

      <main className="w-full px-4 sm:px-6 lg:px-8 py-8">
        {isCentered ? (
          // Centered Layout
          <div className="flex flex-col xl:flex-row gap-8 max-w-[1800px] mx-auto justify-center">
            <div className="hidden xl:block xl:w-64 2xl:w-96 flex-shrink-0"></div>
            <div className="flex-1 w-full max-w-5xl mx-auto xl:mx-0">
              <NewsArticle />
            </div>
            <div className="hidden xl:block xl:w-64 2xl:w-96 flex-shrink-0">
              <Sidebar />
            </div>
          </div>
        ) : (
          // Left-aligned Layout (Original)
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <NewsArticle />
              </div>
              <div className="lg:col-span-1">
                <Sidebar />
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
