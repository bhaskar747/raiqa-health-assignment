"use client";

interface CounterProps {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
  onAddToList: () => void;
}

export default function Counter({ count, onIncrement, onDecrement, onAddToList }: CounterProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center">
      <h2 className="text-2xl font-semibold mb-4">Counter</h2>
      <div className="text-7xl font-bold my-4 text-blue-600">{count}</div>
      <div className="flex items-center space-x-4 mb-6">
        <button
          onClick={onDecrement}
          disabled={count === 0}
          className="bg-red-500 text-white font-bold w-12 h-12 rounded-full text-2xl flex items-center justify-center hover:bg-red-600 disabled:bg-red-300 disabled:cursor-not-allowed transition-colors"
        >
          -
        </button>
        <button
          onClick={onIncrement}
          className="bg-green-500 text-white font-bold w-12 h-12 rounded-full text-2xl flex items-center justify-center hover:bg-green-600 transition-colors"
        >
          +
        </button>
      </div>
      <button
        onClick={onAddToList}
        disabled={count === 0}
        className="w-full bg-blue-500 text-white font-semibold py-3 px-4 rounded-lg hover:bg-blue-600 disabled:bg-blue-300 disabled:cursor-not-allowed transition-colors"
      >
        Add to List
      </button>
    </div>
  );
}
