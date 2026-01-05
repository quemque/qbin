import React, { useState } from "react";
import { Stock } from "../types/stock";
import {
  TrendingUpIcon,
  StarIcon,
  FilterIcon,
  SearchIcon,
  TrendingDownIcon,
} from "../assets/icons/tIcons";
import { useTheme } from "../context/ThemeContext";

type TimeRange = "1D" | "1W" | "1M" | "3M" | "1Y" | "ALL";
type ActiveTab = "overview" | "chart" | "details";

const Analytics: React.FC = () => {
  const { isDark } = useTheme();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [timeRange, setTimeRange] = useState<TimeRange>("1D");
  const [activeTab, setActiveTab] = useState<ActiveTab>("overview");

  const [popularStocks] = useState<Stock[]>([
    {
      id: "1",
      symbol: "AAPL",
      name: "Apple Inc.",
      price: 175.34,
      change: 2.14,
      changePercent: 1.24,
      volume: 58234721,
      marketCap: 2743000000000,
      isFavorite: true,
    },
    {
      id: "2",
      symbol: "GOOGL",
      name: "Alphabet Inc.",
      price: 138.45,
      change: -0.78,
      changePercent: -0.56,
      volume: 28451234,
      marketCap: 1738000000000,
      isFavorite: false,
    },
    {
      id: "3",
      symbol: "TSLA",
      name: "Tesla Inc.",
      price: 245.12,
      change: 5.67,
      changePercent: 2.37,
      volume: 124587123,
      marketCap: 780000000000,
      isFavorite: true,
    },
    {
      id: "4",
      symbol: "MSFT",
      name: "Microsoft Corp.",
      price: 334.89,
      change: 1.23,
      changePercent: 0.37,
      volume: 23451234,
      marketCap: 2490000000000,
      isFavorite: false,
    },
    {
      id: "5",
      symbol: "NVDA",
      name: "NVIDIA Corp.",
      price: 485.67,
      change: 12.45,
      changePercent: 2.63,
      volume: 45871234,
      marketCap: 1200000000000,
      isFavorite: true,
    },
  ]);
  //выбор первой акции при инициализации
  const [selectedStock, setSelectedStock] = useState<Stock | null>(
    popularStocks.length > 0 ? popularStocks[0] : null
  );

  // Обработчикир еализация поиска
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  const handleStockSelect = (stock: Stock) => {
    setSelectedStock(stock);
  };
  //добавление/удаление из избранного
  const toggleFavorite = (stockId: string) => {
    console.log("Toggle favorite:", stockId);
  };
  //логика покупки
  const handleBuy = () => {
    if (selectedStock) {
      console.log("Buy:", selectedStock.symbol);
    }
  };
  /* логика продажи */
  const handleSell = () => {
    if (selectedStock) {
      console.log("Sell:", selectedStock.symbol);
    }
  };

  return (
    <div
      className={`min-h-screen ${
        isDark ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      } p-4 md:p-6`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Заголовок */}
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Stock Market Analytics
          </h1>
          <p className={`${isDark ? "text-gray-400" : "text-gray-600"}`}>
            Real-time stock prices, charts, and trading
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Левый столбец: Список акций и поиск */}
          <div className="lg:col-span-1 space-y-6">
            {/* Поиск */}
            <div
              className={`rounded-xl p-4 ${
                isDark ? "bg-gray-800" : "bg-white border border-gray-200"
              }`}
            >
              <form onSubmit={handleSearch} className="relative">
                <div className="flex items-center">
                  <div className="absolute left-3">
                    <SearchIcon />
                  </div>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search stocks, symbols..."
                    className={`w-full pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      isDark
                        ? "bg-gray-700 text-white"
                        : "bg-gray-100 text-gray-900"
                    }`}
                  />
                  <button
                    type="button"
                    className={`ml-2 p-3 rounded-lg transition ${
                      isDark
                        ? "bg-gray-700 hover:bg-gray-600"
                        : "bg-gray-200 hover:bg-gray-300"
                    }`}
                    title="Advanced filters"
                  >
                    <FilterIcon />
                  </button>
                </div>
              </form>

              {/* Быстрые фильтры */}
              <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
                {[
                  "All",
                  "Tech",
                  "Energy",
                  "Finance",
                  "Crypto",
                  "Favorites",
                ].map((filter) => (
                  <button
                    key={filter}
                    type="button"
                    className={`px-3 py-1.5 rounded-full text-sm whitespace-nowrap transition ${
                      isDark
                        ? "bg-gray-700 hover:bg-gray-600"
                        : "bg-gray-200 hover:bg-gray-300"
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            {/* Список акций */}
            <div
              className={`rounded-xl p-4 ${
                isDark ? "bg-gray-800" : "bg-white border border-gray-200"
              }`}
            >
              <div className="flex justify-between items-center mb-4">
                <h2
                  className={`text-xl font-semibold ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  Popular Stocks
                </h2>
                <span className={isDark ? "text-gray-400" : "text-gray-600"}>
                  Live
                </span>
              </div>

              <div className="space-y-3">
                {popularStocks.map((stock) => (
                  <div
                    key={stock.id}
                    onClick={() => handleStockSelect(stock)}
                    className={`p-3 rounded-lg cursor-pointer transition-all ${
                      selectedStock?.id === stock.id
                        ? isDark
                          ? "bg-blue-900/30 border border-blue-500"
                          : "bg-blue-50 border border-blue-300"
                        : isDark
                        ? "bg-gray-700 hover:bg-gray-600"
                        : "bg-gray-100 hover:bg-gray-200"
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex items-center space-x-3">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleFavorite(stock.id);
                          }}
                          className="focus:outline-none"
                        >
                          <StarIcon filled={stock.isFavorite} />
                        </button>
                        <div>
                          <div
                            className={`font-semibold ${
                              isDark ? "text-white" : "text-gray-900"
                            }`}
                          >
                            {stock.symbol}
                          </div>
                          <div
                            className={`text-sm truncate max-w-[120px] ${
                              isDark ? "text-gray-400" : "text-gray-600"
                            }`}
                          >
                            {stock.name}
                          </div>
                        </div>
                      </div>

                      <div className="text-right">
                        <div
                          className={`font-semibold ${
                            isDark ? "text-white" : "text-gray-900"
                          }`}
                        >
                          ${stock.price.toFixed(2)}
                        </div>
                        <div
                          className={`text-sm flex items-center justify-end ${
                            stock.change >= 0
                              ? "text-green-400"
                              : "text-red-400"
                          }`}
                        >
                          {stock.change >= 0 ? (
                            <TrendingUpIcon />
                          ) : (
                            <TrendingDownIcon />
                          )}
                          <span className="ml-1">
                            {stock.change >= 0 ? "+" : ""}
                            {stock.change.toFixed(2)} (
                            {stock.changePercent.toFixed(2)}%)
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Центральный столбец: График и детали */}
          <div className="lg:col-span-2">
            {/* Карточка выбранной акции */}
            {selectedStock && (
              <div
                className={`rounded-xl p-6 mb-6 ${
                  isDark ? "bg-gray-800" : "bg-white border border-gray-200"
                }`}
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <div className="flex items-center space-x-4">
                      <h2 className="text-2xl font-bold">
                        {selectedStock.symbol}
                      </h2>
                      <span
                        className={isDark ? "text-gray-400" : "text-gray-600"}
                      >
                        {selectedStock.name}
                      </span>
                      <button
                        type="button"
                        onClick={() => toggleFavorite(selectedStock.id)}
                        className="focus:outline-none"
                      >
                        <StarIcon filled={selectedStock.isFavorite} />
                      </button>
                    </div>
                    <div className="flex items-center space-x-4 mt-2">
                      <span className="text-3xl font-bold">
                        ${selectedStock.price.toFixed(2)}
                      </span>
                      <span
                        className={`text-xl ${
                          selectedStock.change >= 0
                            ? "text-green-400"
                            : "text-red-400"
                        }`}
                      >
                        {selectedStock.change >= 0 ? "+" : ""}
                        {selectedStock.change.toFixed(2)} (
                        {selectedStock.changePercent.toFixed(2)}%)
                      </span>
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <button
                      type="button"
                      onClick={handleBuy}
                      className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg font-semibold transition"
                    >
                      Buy
                    </button>
                    <button
                      type="button"
                      onClick={handleSell}
                      className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg font-semibold transition"
                    >
                      Sell
                    </button>
                  </div>
                </div>

                {/* Вкладки */}
                <div
                  className={`border-b mb-6 ${
                    isDark ? "border-gray-700" : "border-gray-300"
                  }`}
                >
                  <div className="flex space-x-8">
                    {(["overview", "chart", "details"] as ActiveTab[]).map(
                      (tab) => (
                        <button
                          key={tab}
                          type="button"
                          onClick={() => setActiveTab(tab)}
                          className={`pb-3 px-1 font-medium transition ${
                            activeTab === tab
                              ? "border-b-2 border-blue-500"
                              : isDark
                              ? "text-gray-400 hover:text-white"
                              : "text-gray-600 hover:text-gray-900"
                          }`}
                        >
                          {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </button>
                      )
                    )}
                  </div>
                </div>

                {/* Периоды для графика */}
                <div className="flex justify-between items-center mb-6">
                  <div className="flex space-x-2">
                    {(["1D", "1W", "1M", "3M", "1Y", "ALL"] as TimeRange[]).map(
                      (range) => (
                        <button
                          key={range}
                          type="button"
                          onClick={() => setTimeRange(range)}
                          className={`px-4 py-2 rounded-lg transition ${
                            timeRange === range
                              ? "bg-blue-600"
                              : isDark
                              ? "bg-gray-700 hover:bg-gray-600"
                              : "bg-gray-200 hover:bg-gray-300"
                          }`}
                        >
                          {range}
                        </button>
                      )
                    )}
                  </div>
                  <div className={isDark ? "text-gray-400" : "text-gray-600"}>
                    Last updated: {new Date().toLocaleTimeString()}
                  </div>
                </div>

                {/* 
                  КОНТЕЙНЕР ДЛЯ ГРАФИКА
                   график
                */}
                <div className="bg-gray-900/50 rounded-lg p-4 mb-6">
                  <div className="h-[400px] flex items-center justify-center border border-gray-700 rounded-lg">
                    <div className="text-center">
                      {/* график будет здесь */}
                      <div className="text-gray-400 mb-4">
                        График для {selectedStock.symbol} ({timeRange})
                      </div>
                      <div className="text-sm text-gray-500">
                        Подключите библиотеку графиков (Chart.js, Recharts,
                        TradingView и т.д.)
                      </div>
                    </div>
                  </div>
                </div>

                {/* Статистика */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div
                    className={`p-4 rounded-lg ${
                      isDark ? "bg-gray-900/50" : "bg-gray-100"
                    }`}
                  >
                    <div
                      className={`text-sm ${
                        isDark ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      Market Cap
                    </div>
                    <div
                      className={`text-xl font-semibold ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      ${(selectedStock.marketCap / 1e9).toFixed(1)}B
                    </div>
                  </div>
                  <div
                    className={`p-4 rounded-lg ${
                      isDark ? "bg-gray-900/50" : "bg-gray-100"
                    }`}
                  >
                    <div
                      className={`text-sm ${
                        isDark ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      Volume
                    </div>
                    <div
                      className={`text-xl font-semibold ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {(selectedStock.volume / 1e6).toFixed(1)}M
                    </div>
                  </div>
                  <div
                    className={`p-4 rounded-lg ${
                      isDark ? "bg-gray-900/50" : "bg-gray-100"
                    }`}
                  >
                    <div
                      className={`text-sm ${
                        isDark ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      Day Range
                    </div>
                    <div
                      className={`text-xl font-semibold ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      ${(selectedStock.price - 2).toFixed(2)} - $
                      {(selectedStock.price + 3).toFixed(2)}
                    </div>
                  </div>
                  <div
                    className={`p-4 rounded-lg ${
                      isDark ? "bg-gray-900/50" : "bg-gray-100"
                    }`}
                  >
                    <div
                      className={`text-sm ${
                        isDark ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      P/E Ratio
                    </div>
                    <div
                      className={`text-xl font-semibold ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      28.5
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Быстрая торговля */}
            <div
              className={`rounded-xl p-6 ${
                isDark ? "bg-gray-800" : "bg-white border border-gray-200"
              }`}
            >
              <h3
                className={`text-xl font-semibold mb-4 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Quick Trade
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label
                    className={`block text-sm mb-2 ${
                      isDark ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Symbol
                  </label>
                  <input
                    type="text"
                    value={selectedStock?.symbol || ""}
                    readOnly
                    className={`w-full p-3 rounded-lg ${
                      isDark ? "bg-gray-700" : "bg-gray-100"
                    }`}
                  />
                </div>
                <div>
                  <label
                    className={`block text-sm mb-2 ${
                      isDark ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Quantity
                  </label>
                  <input
                    type="number"
                    defaultValue="10"
                    className={`w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      isDark ? "bg-gray-700" : "bg-gray-100"
                    }`}
                  />
                </div>
                <div className="flex items-end space-x-3">
                  <button
                    type="button"
                    className="flex-1 py-3 bg-green-600 hover:bg-green-700 rounded-lg font-semibold transition"
                  >
                    Buy Now
                  </button>
                  <button
                    type="button"
                    className="flex-1 py-3 bg-red-600 hover:bg-red-700 rounded-lg font-semibold transition"
                  >
                    Sell Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Футер */}
        <footer
          className={`mt-8 pt-6 border-t text-center text-sm ${
            isDark
              ? "border-gray-800 text-gray-400"
              : "border-gray-300 text-gray-600"
          }`}
        >
          <p>Stock data is delayed by 15 minutes. Trading involves risk.</p>
          <p className="mt-1">© 2026 Stock Dashboard.</p>
        </footer>
      </div>
    </div>
  );
};

export default Analytics;
