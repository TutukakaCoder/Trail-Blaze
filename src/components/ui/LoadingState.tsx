'use client';

export default function LoadingState() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="flex flex-col items-center space-y-4">
        <div className="relative w-24 h-24">
          <div className="absolute inset-0 border-t-4 border-indigo-600 rounded-full animate-spin"></div>
        </div>
        <p className="text-white text-lg">Loading...</p>
      </div>
    </div>
  );
} 