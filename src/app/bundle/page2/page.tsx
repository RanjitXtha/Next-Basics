"use client"
import { useState } from 'react';
import dynamic from 'next/dynamic';

const HeavyVisualizer = dynamic(() => import('../../components/HeavyVisualizer'), {
  loading: () => <div className="p-4 text-blue-500 font-bold">Downloading Assets...</div>,
  ssr: false 
});

export default function DynamicModalPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-24">
      <h1 className="text-2xl mb-6 font-semibold">Performance Strategy: Interaction-to-Load</h1>
      
      <button 
        onClick={() => setIsOpen(true)}
        className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
      >
        View Data Reports (Heavy Load)
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-4xl w-full relative shadow-2xl">
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black"
            >
              ✕ Close
            </button>
            
            <HeavyVisualizer />
          </div>
        </div>
      )}
    </main>
  );
}