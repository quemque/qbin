import React from "react";
import { useTheme } from "../context/ThemeContext";

const Dashboard = () => {
  const { isDark } = useTheme();

  return (
    <div
      className={`min-h-screen p-6 transition-colors duration-200 ${
        isDark ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div
        className={`max-w-7xl mx-auto ${
          isDark ? "text-gray-100" : "text-gray-800"
        }`}
      >
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-8`}>
          {/* Карточки */}
          <div
            className={`rounded-lg p-6 shadow-lg transition-colors duration-200 ${
              isDark
                ? "bg-gray-800 hover:bg-gray-700"
                : "bg-white hover:bg-gray-50"
            }`}
          >
            <h3
              className={`text-lg font-semibold mb-2 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Total Users
            </h3>
            <p
              className={`text-3xl font-bold ${
                isDark ? "text-blue-400" : "text-blue-600"
              }`}
            >
              1,234
            </p>
          </div>

          <div
            className={`rounded-lg p-6 shadow-lg transition-colors duration-200 ${
              isDark
                ? "bg-gray-800 hover:bg-gray-700"
                : "bg-white hover:bg-gray-50"
            }`}
          >
            <h3
              className={`text-lg font-semibold mb-2 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Revenue
            </h3>
            <p
              className={`text-3xl font-bold ${
                isDark ? "text-green-400" : "text-green-600"
              }`}
            >
              $45,678
            </p>
          </div>

          <div
            className={`rounded-lg p-6 shadow-lg transition-colors duration-200 ${
              isDark
                ? "bg-gray-800 hover:bg-gray-700"
                : "bg-white hover:bg-gray-50"
            }`}
          >
            <h3
              className={`text-lg font-semibold mb-2 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Active Sessions
            </h3>
            <p
              className={`text-3xl font-bold ${
                isDark ? "text-yellow-400" : "text-yellow-600"
              }`}
            >
              567
            </p>
          </div>
        </div>

        {/* Таблица */}
        <div
          className={`rounded-lg shadow-lg overflow-hidden ${
            isDark ? "bg-gray-800" : "bg-white"
          }`}
        >
          <table className="w-full">
            <thead className={`${isDark ? "bg-gray-900" : "bg-gray-100"}`}>
              <tr>
                <th
                  className={`py-3 px-4 text-left ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  User
                </th>
                <th
                  className={`py-3 px-4 text-left ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Email
                </th>
                <th
                  className={`py-3 px-4 text-left ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                className={`border-t ${
                  isDark
                    ? "border-gray-700 hover:bg-gray-700"
                    : "border-gray-200 hover:bg-gray-50"
                }`}
              >
                <td className="py-3 px-4">que q</td>
                <td className="py-3 px-4">q@lol.com</td>
                <td className="py-3 px-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      isDark
                        ? "bg-green-900/30 text-green-400"
                        : "bg-green-100 text-green-800"
                    }`}
                  >
                    Active
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
