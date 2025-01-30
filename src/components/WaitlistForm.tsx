'use client';

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'
import { db } from '@/lib/firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { z } from 'zod'
import { toast } from 'sonner'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { fadeIn } from '@/lib/animations'
import { useModal } from '@/lib/context/ModalContext'
import { LoadingSpinner } from '@/components/ui/LoadingSpinner'

const waitlistSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  linkedIn: z.string()
    .url('Must be a valid URL')
    .refine((url) => url.includes('linkedin.com'), {
      message: 'Must be a LinkedIn profile URL'
    }),
  phone: z.string().optional(),
  location: z.string().optional(),
  sector: z.string().optional(),
  message: z.string().optional()
})

type WaitlistFormData = z.infer<typeof waitlistSchema>

interface WaitlistFormProps {
  onSuccess?: () => void;
  onClose?: () => void;
}

export default function WaitlistForm({ onSuccess, onClose }: WaitlistFormProps) {
  const { closeModal } = useModal();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<WaitlistFormData>({
    resolver: zodResolver(waitlistSchema),
    mode: 'onBlur'
  });

  const onSubmit = async (data: WaitlistFormData) => {
    try {
      setLoading(true);
      setError(null);
      
      await addDoc(collection(db, 'waitlist'), {
        ...data,
        createdAt: serverTimestamp()
      });

      reset();
      closeModal();
      toast.success('Successfully joined the waitlist!');
      onSuccess?.();
      onClose?.();
    } catch (err) {
      setError('Failed to join waitlist. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 flex items-center justify-center p-4">
      <div className="w-full max-w-xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 1,
            transition: { duration: 0.3 }
          }}
          className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 shadow-xl"
        >
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Join Our Waitlist</h2>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
              <Input
                label="Name"
                error={errors.name?.message}
                {...register('name')}
                placeholder="Your full name"
              />
              
              <Input
                type="email"
                label="Email"
                error={errors.email?.message}
                {...register('email')}
                placeholder="your@email.com"
              />
              
              <Input
                label="LinkedIn Profile"
                error={errors.linkedIn?.message}
                {...register('linkedIn')}
                placeholder="https://linkedin.com/in/yourprofile"
              />

              <Input
                label="Phone"
                {...register('phone')}
                placeholder="Your phone number"
              />
              
              <Input
                label="Location"
                {...register('location')}
                placeholder="Your location"
              />
              
              <Input
                label="Business Sector"
                {...register('sector')}
                placeholder="Your industry/sector"
              />
              
              <textarea
                {...register('message')}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500 bg-gray-800 text-white"
                rows={4}
                placeholder="Additional message (optional)"
              />
            </div>

            {error && (
              <p className="text-red-500 text-sm">{error}</p>
            )}

            <p className="text-sm text-gray-400 mt-4">
              We respect your privacy. You'll only receive important updates about Trail Blazers.
            </p>

            <Button
              type="submit"
              disabled={loading}
              className="w-full"
            >
              {loading ? <LoadingSpinner /> : 'Join Waitlist'}
            </Button>
          </form>
        </motion.div>
      </div>
    </div>
  )
} 