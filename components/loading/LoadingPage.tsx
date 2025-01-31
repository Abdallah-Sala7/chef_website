"use client"
import { Loader2Icon } from 'lucide-react';

const LoadingPage = () => {
  return (
    <div className="flex-1 bg-background w-full h-full flex items-center justify-center p-8">
      <div className="shrink-0 flex flex-col justify-center items-center p-4 rounded-lg bg-accent shadow-2xl shadow-gray-800/10">
        <Loader2Icon className="animate-spin text-primary" size={40} />
      </div>
    </div>
  );
}

export default LoadingPage
