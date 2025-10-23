import Header from "./components/Header";
import NewsArticle from "./components/NewsArticle";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import { useDarkMode } from "./hooks/useDarkMode";
import { useState } from "react";
import { AlignCenter, AlignLeft } from "lucide-react";

function App() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [isCentered, setIsCentered] = useState(false);

  console.log("App component rendering, isDarkMode:", isDarkMode);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

      {/* Layout Toggle Button - Top Right */}
      <div className="fixed top-20 right-4 z-40">
        <button
          onClick={() => setIsCentered(!isCentered)}
          className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
          aria-label="Toggle layout"
          title={
            isCentered ? "Switch to Left Layout" : "Switch to Centered Layout"
          }
        >
          {isCentered ? (
            <AlignLeft className="w-5 h-5" />
          ) : (
            <AlignCenter className="w-5 h-5" />
          )}
        </button>
      </div>

      <main className="w-full px-4 sm:px-6 lg:px-8 py-8">
        {isCentered ? (
          // Centered Layout
          <div className="flex flex-col xl:flex-row gap-8 max-w-[1600px] mx-auto justify-center">
            <div className="hidden xl:block xl:w-64 2xl:w-80 flex-shrink-0"></div>
            <div className="flex-1 w-full max-w-4xl mx-auto xl:mx-0">
              <NewsArticle />
            </div>
            <div className="hidden xl:block xl:w-64 2xl:w-80 flex-shrink-0">
              <Sidebar />
            </div>
          </div>
        ) : (
          // Left-aligned Layout (Original/Default) - Made Thinner with Same Sidebar Width
          <div className="max-w-[1500px] mx-auto">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="flex-1 max-w-3xl">
                <NewsArticle />
              </div>
              <div className="lg:w-86 xl:w-90 flex-shrink-0">
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
