import { Gamepad2, Search, Menu, Sun, Moon } from "lucide-react";

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Header({ isDarkMode, toggleDarkMode }: HeaderProps) {
  return (
    <header className="bg-slate-900 dark:bg-gray-950 text-white sticky top-0 z-50 border-b border-slate-800 dark:border-purple-900/30 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <Gamepad2 className="w-8 h-8 text-orange-500" />
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent">
                GameEclipse
              </span>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a
                href="#"
                className="hover:text-orange-500 transition-colors font-medium"
              >
                News
              </a>
              <a
                href="#"
                className="hover:text-orange-500 transition-colors font-medium"
              >
                Reviews
              </a>
              <a
                href="#"
                className="hover:text-orange-500 transition-colors font-medium"
              >
                Features
              </a>
              <a
                href="#"
                className="hover:text-orange-500 transition-colors font-medium"
              >
                Videos
              </a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 hover:bg-slate-800 dark:hover:bg-purple-900/30 rounded-lg transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5 text-orange-500" />
              ) : (
                <Moon className="w-5 h-5 text-purple-500" />
              )}
            </button>
            <button className="p-2 hover:bg-slate-800 dark:hover:bg-purple-900/30 rounded-lg transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="md:hidden p-2 hover:bg-slate-800 dark:hover:bg-purple-900/30 rounded-lg transition-colors">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
