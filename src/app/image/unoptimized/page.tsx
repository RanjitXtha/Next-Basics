export default function UnoptimizedImage() {
  return (
    <main className="p-10 max-w-7xl mx-auto">
      <h1 className="text-4xl font-black mb-8 text-red-600">UNOPTIMIZED</h1>
      
      <img 
        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?raw=true" 
        alt="Space" 
        className="w-full h-auto border-4 border-red-500" 
      />

      <div className="mt-10 p-10 bg-yellow-200 border-4 border-yellow-500 rounded-2xl">
      </div>
    </main>
  );
}