"use client";

import { useMemo } from 'react';

interface ListViewProps {
  numbers: number[];
  sortOrder: 'asc' | 'desc';
  onSortToggle: () => void;
  onResetList: () => void;
}

export default function ListView({ numbers, sortOrder, onSortToggle, onResetList }: ListViewProps) {
  const sortedNumbers = useMemo(() => {
    return [...numbers].sort((a, b) => {
      return sortOrder === 'asc' ? a - b : b - a;
    });
  }, [numbers, sortOrder]);

  const min = numbers.length > 0 ? Math.min(...numbers) : null;
  const max = numbers.length > 0 ? Math.max(...numbers) : null;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Numbers List</h2>
        {numbers.length > 0 && (
          <div className="flex gap-2">
            <button onClick={onSortToggle} className="text-sm bg-blue-500 text-white hover:bg-blue-600 py-1 px-3 rounded-md">
              Sort ({sortOrder === 'asc' ? 'Asc' : 'Desc'})
            </button>
            <button onClick={onResetList} className="text-sm bg-red-500 text-white hover:bg-red-600 py-1 px-3 rounded-md">
              Reset
            </button>
          </div>
        )}
      </div>
      <div className="flex-grow">
        {sortedNumbers.length === 0 ? (
          <div className="text-center text-gray-500 py-10 border-2 border-dashed rounded-lg h-full flex flex-col justify-center">
            <p>The list is empty.</p>
            <p className="text-sm">Add a number from the counter.</p>
          </div>
        ) : (
          <ul className="space-y-2">
            {sortedNumbers.map((num, index) => {
              const isMax = num === max;
              const isMin = num === min;
              let itemClasses = "flex justify-between items-center p-3 rounded-lg";
              if (isMax) itemClasses += " bg-green-100 text-green-800 font-bold";
              else if (isMin) itemClasses += " bg-red-100 text-red-800 font-bold";
              else itemClasses += " bg-gray-50";

              return (
                <li key={index} className={itemClasses}>
                  <span>{num}</span>
                  <span className="text-gray-500 font-mono">#{index + 1}</span>
                </li>
              );
            })}
          </ul>
        )}
      </div>
      {numbers.length > 0 && (
        <div className="border-t border-gray-200 mt-4 pt-3 text-center text-gray-600 font-semibold">
          Total numbers: {numbers.length}
        </div>
      )}
    </div>
  );
}
