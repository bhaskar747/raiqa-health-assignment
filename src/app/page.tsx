"use client";

import { useState, useEffect } from 'react';
import Counter from './components/Counter';
import ListView from './components/ListView';

export default function HomePage() {
  const [count, setCount] = useState<number>(0);
  const [numbers, setNumbers] = useState<number[]>([]);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  useEffect(() => {
    try {
      const savedNumbers = localStorage.getItem('raiqa-numbers');
      if (savedNumbers) {
        setNumbers(JSON.parse(savedNumbers));
      }
    } catch (error) {
      console.error("Failed to parse numbers from localStorage", error);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('raiqa-numbers', JSON.stringify(numbers));
  }, [numbers]);

  const handleIncrement = () => setCount(prevCount => prevCount + 1);

  const handleDecrement = () => {
    if (count > 0) setCount(prevCount => prevCount - 1);
  };

  const handleAddToList = () => {
    if (count > 0 && !numbers.includes(count)) {
      setNumbers(prevNumbers => [...prevNumbers, count]);
      setCount(0);
    } else if (count > 0 && numbers.includes(count)) {
      alert("This number is already in the list.");
    }
  };

  const handleSortToggle = () => setSortOrder(prevOrder => (prevOrder === 'asc' ? 'desc' : 'asc'));
  
  const handleResetList = () => setNumbers([]);

  return (
    <main className="min-h-screen bg-gray-100 text-gray-800 p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">RAIQA HEALTH</h1>
          <p className="text-lg text-gray-600 mt-2">Counter & List Application</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Counter
            count={count}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
            onAddToList={handleAddToList}
          />
          <ListView
            numbers={numbers}
            sortOrder={sortOrder}
            onSortToggle={handleSortToggle}
            onResetList={handleResetList}
          />
        </div>
      </div>
    </main>
  );
}
