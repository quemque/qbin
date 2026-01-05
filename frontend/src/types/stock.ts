export type TimeRange = "1D" | "1W" | "1M" | "3M" | "1Y" | "ALL";
export type ActiveTab = "overview" | "chart" | "details";

export interface Stock {
  id: string;
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  volume: number;
  marketCap: number;
  isFavorite: boolean;
}

export interface StockChartData {
  timestamp: number;
  price: number;
  volume: number;
}
