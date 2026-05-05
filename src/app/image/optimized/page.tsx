import Image from 'next/image';

export default function OptimizedImage() {
    return (
        <main className="p-10 max-w-7xl mx-auto">
            <h1 className="text-4xl font-black mb-8 text-green-600">OPTIMIZED (Compressed & Stable)</h1>

            <div className="relative w-full h-[800px] bg-gray-200 rounded-3xl overflow-hidden shadow-2xl border-4 border-green-500">
                <Image
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?raw=true"
                    alt="Space"
                    fill
                    className="object-cover"
                    priority
                    sizes="100vw"
                />
            </div>

            <div className="mt-10 p-10 bg-green-100 border-4 border-green-500 rounded-2xl">

            </div>
        </main>
    );
}