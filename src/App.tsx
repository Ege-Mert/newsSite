import Header from "./components/Header";
import NewsArticle from "./components/NewsArticle";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import { useDarkMode } from "./hooks/useDarkMode";

function App() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  console.log("App component rendering, isDarkMode:", isDarkMode);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

      <main className="w-full px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col xl:flex-row gap-8 max-w-[1800px] mx-auto justify-center">
          <div className="hidden xl:block xl:w-64 2xl:w-96 flex-shrink-0"></div>
          <div className="flex-1 w-full max-w-5xl mx-auto xl:mx-0">
            <NewsArticle />
          </div>
          <div className="hidden xl:block xl:w-64 2xl:w-96 flex-shrink-0">
            <Sidebar />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
