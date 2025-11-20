"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface HistoryEntry {
  userName: string;
  category: string;
  score: number;
  total: number;
  date: string;
}

export default function History() {
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [user, setUser] = useState<string>("");

  useEffect(() => {
    const storedUser = localStorage.getItem("quizUser");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser.name);
    }
    const stored = JSON.parse(localStorage.getItem("quizHistory") || "[]");
    setHistory(stored.filter((entry: HistoryEntry) => entry.userName === user));
  }, [user]);

  const clearHistory = () => {
    localStorage.removeItem("quizHistory");
    setHistory([]);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center md:p-8 bg-white">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-6 border border-red-200">
        <div className="flex justify-between items-center mb-4">
          <Link href="/" className="text-red-500 hover:underline">
            ← Home
          </Link>
          <h1 className="text-2xl font-bold text-red-500">
            Quiz History for {user}
          </h1>
        </div>
        {history.length === 0 ? (
          <p className="text-center text-red-500">
            No quiz history yet. Take a quiz to get started!
          </p>
        ) : (
          <>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-red-300">
                <thead>
                  <tr className="bg-red-50">
                    <th className="border border-red-300 px-4 py-2 text-red-700">
                      Date
                    </th>
                    <th className="border border-red-300 px-4 py-2 text-red-700">
                      Category
                    </th>
                    <th className="border border-red-300 px-4 py-2 text-red-700">
                      Score
                    </th>
                    <th className="border border-red-300 px-4 py-2 text-red-700">
                      Percentage
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {history.map((entry, index) => (
                    <tr key={index} className="hover:bg-red-50">
                      <td className="border border-red-300 px-4 py-2 text-red-700">
                        {entry.date}
                      </td>
                      <td className="border border-red-300 px-4 py-2 text-red-700">
                        {entry.category}
                      </td>
                      <td className="border border-red-300 px-4 py-2 text-red-700">
                        {entry.score} / {entry.total}
                      </td>
                      <td className="border border-red-300 px-4 py-2 text-red-700">
                        {Math.round((entry.score / entry.total) * 100)}%
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <button
              onClick={clearHistory}
              className="mt-4 bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600"
            >
              Clear History
            </button>
          </>
        )}
      </div>
    </main>
  );
}
