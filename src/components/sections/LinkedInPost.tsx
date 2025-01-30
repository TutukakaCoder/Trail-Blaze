'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function LinkedInPost() {
  const post = `Real talk: I'm sick of the BS in the start-up / VC ecosystem...`;
  
  return (
    <section className="py-12 sm:py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-lg rounded-2xl p-6 sm:p-8">
          <div className="content-wrapper">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.6 }
              }}
            >
              <div className="flex items-start space-x-4">
                <Image
                  src="/paul-profile.jpg"
                  alt="Paul"
                  width={60}
                  height={60}
                  className="rounded-full"
                  priority
                />
                
                <div>
                  <h3 className="font-semibold text-xl text-white">Paul</h3>
                  <p className="text-gray-400">Founder @ Trail Blazers</p>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <p className="text-gray-200 leading-relaxed whitespace-pre-wrap text-sm sm:text-base">
                  {post}
                </p>

                <div className="flex items-center space-x-6 text-gray-400">
                  <div className="flex items-center hover:text-gray-300 transition-colors">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                    </svg>
                    <span>1.2K</span>
                  </div>
                  
                  <div className="flex items-center hover:text-gray-300 transition-colors">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
                    </svg>
                    <span>284</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 