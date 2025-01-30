import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full py-6 mt-auto bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-center space-y-4">
        <div className="flex items-center space-x-4 text-sm text-gray-400">
          <Link 
            href="/privacy" 
            className="hover:text-purple-400 transition-colors duration-200"
          >
            Privacy Policy
          </Link>
          <span>•</span>
          <Link 
            href="/terms" 
            className="hover:text-purple-400 transition-colors duration-200"
          >
            Terms of Service
          </Link>
        </div>
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} Trail Blazers. All rights reserved.
        </p>
      </div>
    </footer>
  );
} 