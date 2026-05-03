import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white rounded-3xl shadow-lg border border-gray-100 px-16 py-12 flex flex-col items-center gap-8">
        <p className="text-xs tracking-widest uppercase text-gray-400 font-medium">
          Counter
        </p>

        <div className="text-8xl font-bold text-gray-900 min-w-[3ch] text-center tabular-nums">
          {count}
        </div>

        <div className="w-48 h-1 bg-gray-100 rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-300 ${
              count > 0
                ? "bg-emerald-500"
                : count < 0
                  ? "bg-red-400"
                  : "bg-indigo-400"
            }`}
            style={{
              width: `${Math.min(Math.max(50 + count * 4, 4), 96)}%`,
            }}
          />
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={decrement}
            className="px-7 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-700 text-sm font-medium hover:bg-gray-100 hover:border-gray-300 active:scale-95 transition-all duration-100"
          >
            Decrement
          </button>
          <button
            onClick={increment}
            className="px-7 py-3 rounded-xl bg-indigo-500 text-white text-sm font-medium hover:bg-indigo-600 active:scale-95 transition-all duration-100"
          >
            Increment
          </button>
        </div>

        <p
          className={`text-xs font-medium transition-colors duration-200 ${
            count > 0
              ? "text-emerald-600"
              : count < 0
                ? "text-red-500"
                : "text-gray-400"
          }`}
        >
          {count > 0
            ? `+${count} above zero`
            : count < 0
              ? `${count} below zero`
              : "neutral"}
        </p>
      </div>
    </div>
  );
}
