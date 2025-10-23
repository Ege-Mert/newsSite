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

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <NewsArticle />
          </div>
          <div className="lg:col-span-1">
            <Sidebar />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
