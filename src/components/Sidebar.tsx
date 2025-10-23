import { TrendingUp, Clock } from 'lucide-react';

export default function Sidebar() {
  const trendingNews = [
    {
      title: "New RPG Announced at Game Awards",
      category: "RPG",
      time: "2 hours ago"
    },
    {
      title: "Best Gaming Laptops of 2025",
      category: "Hardware",
      time: "5 hours ago"
    },
    {
      title: "Indie Game Spotlight: Hidden Gems",
      category: "Indie",
      time: "1 day ago"
    },
    {
      title: "Next-Gen Console Specs Revealed",
      category: "Console",
      time: "2 days ago"
    }
  ];

  return (
    <aside className="space-y-8">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg transition-colors duration-300">
        <div className="flex items-center gap-2 mb-6">
          <TrendingUp className="w-5 h-5 text-orange-600 dark:text-orange-500" />
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">Trending Now</h2>
        </div>
        <div className="space-y-4">
          {trendingNews.map((news, index) => (
            <a
              key={index}
              href="#"
              className="block group"
            >
              <div className="space-y-2">
                <span className="text-xs font-semibold text-purple-600 dark:text-purple-400 uppercase">
                  {news.category}
                </span>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-500 transition-colors leading-snug">
                  {news.title}
                </h3>
                <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                  <Clock className="w-3 h-3" />
                  <span>{news.time}</span>
                </div>
              </div>
              {index < trendingNews.length - 1 && (
                <div className="h-px bg-gray-200 dark:bg-gray-700 mt-4" />
              )}
            </a>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-br from-orange-600 to-purple-600 rounded-lg p-6 shadow-lg text-white transition-all duration-300">
        <h3 className="text-lg font-bold mb-2">Subscribe to Newsletter</h3>
        <p className="text-sm mb-4 text-orange-100">
          Get the latest gaming news delivered to your inbox.
        </p>
        <input
          type="email"
          placeholder="Your email"
          className="w-full px-4 py-2 rounded-lg mb-3 text-slate-900 dark:bg-gray-100"
        />
        <button className="w-full bg-white text-purple-600 font-bold py-2 rounded-lg hover:bg-gray-100 transition-colors">
          Subscribe
        </button>
      </div>
    </aside>
  );
}
