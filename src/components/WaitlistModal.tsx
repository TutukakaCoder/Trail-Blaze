'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useModal } from '@/lib/context/ModalContext';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { toast } from 'sonner';
import { WaitlistFormState, FormErrors } from '@/types';

interface WaitlistEntry {
  name: string;
  email: string;
  linkedin: string;
  createdAt: any; // Using FieldValue from Firestore
  company?: string;
  role?: string;
  interests?: string;
}

export default function WaitlistModal() {
  const { isOpen, closeModal } = useModal();
  const [formState, setFormState] = useState<WaitlistFormState>({
    name: '',
    email: '',
    linkedin: '',
    showDetails: false,
    company: '',
    role: '',
    interests: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors: FormErrors = {};
    
    // Name validation
    if (!formState.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    // Email validation
    if (!formState.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formState.email)) {
      newErrors.email = 'Invalid email address';
    }
    
    // LinkedIn validation
    if (!formState.linkedin.trim()) {
      newErrors.linkedin = 'LinkedIn profile is required';
    } else if (!formState.linkedin.includes('linkedin.com')) {
      newErrors.linkedin = 'Must be a valid LinkedIn URL';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    try {
      const waitlistEntry: WaitlistEntry = {
        name: formState.name.trim(),
        email: formState.email.trim(),
        linkedin: formState.linkedin.trim(),
        createdAt: serverTimestamp()
      };

      // Add optional fields only if they have values
      if (formState.company?.trim()) {
        waitlistEntry.company = formState.company.trim();
      }
      if (formState.role?.trim()) {
        waitlistEntry.role = formState.role.trim();
      }
      if (formState.interests?.trim()) {
        waitlistEntry.interests = formState.interests.trim();
      }

      await addDoc(collection(db, 'waitlist'), waitlistEntry);
      
      closeModal();
      toast.success('Successfully joined the waitlist!');
      setFormState({
        name: '',
        email: '',
        linkedin: '',
        showDetails: false,
        company: '',
        role: '',
        interests: ''
      });
    } catch (error) {
      console.error('Submission error:', error);
      toast.error('Failed to join waitlist. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 flex items-center justify-center">
      <div className="w-full max-w-md p-6 mx-4 my-8">
        <div className="relative bg-slate-900 shadow-xl rounded-2xl border border-gray-800">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-semibold text-white text-center w-full">
                Join the Trailblazers
              </h3>
              <button 
                onClick={closeModal} 
                className="absolute right-4 top-4 text-gray-400 hover:text-white"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={formState.name}
                  onChange={(e) => {
                    setFormState({...formState, name: e.target.value});
                    if (errors.name) {
                      const newErrors = {...errors};
                      delete newErrors.name;
                      setErrors(newErrors);
                    }
                  }}
                  className={`w-full px-4 py-3 bg-slate-800 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                    errors.name 
                      ? 'border-red-500 focus:ring-red-500' 
                      : 'border-slate-700 focus:border-purple-500'
                  }`}
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                
                <input
                  type="email"
                  placeholder="Email Address"
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                
                <input
                  type="url"
                  placeholder="LinkedIn Profile URL"
                  value={formState.linkedin}
                  onChange={(e) => setFormState({...formState, linkedin: e.target.value})}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                {errors.linkedin && <p className="text-red-500 text-sm">{errors.linkedin}</p>}
              </div>

              <motion.div 
                initial={false}
                animate={{ height: formState.showDetails ? 'auto' : 0 }}
                className="overflow-hidden"
              >
                <div className="space-y-4 pt-4">
                  <input
                    type="text"
                    placeholder="Company Name (Optional)"
                    value={formState.company}
                    onChange={(e) => setFormState({...formState, company: e.target.value})}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  
                  <input
                    type="text"
                    placeholder="Role (Optional)"
                    value={formState.role}
                    onChange={(e) => setFormState({...formState, role: e.target.value})}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  
                  <textarea
                    placeholder="What interests you most about Trailblazers? (Optional)"
                    value={formState.interests}
                    onChange={(e) => setFormState({...formState, interests: e.target.value})}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none h-24"
                  />
                </div>
              </motion.div>

              <div className="flex flex-col gap-3">
                <button
                  type="button"
                  onClick={() => setFormState({...formState, showDetails: !formState.showDetails})}
                  className="text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium"
                >
                  {formState.showDetails ? 'Show Less' : 'Add More Details'}
                </button>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-indigo-600 hover:bg-indigo-500 text-white py-2 px-4 rounded-lg transition-colors duration-200"
                >
                  {isSubmitting ? 'Joining...' : 'Join Waitlist'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
} 