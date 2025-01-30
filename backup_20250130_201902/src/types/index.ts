export interface WaitlistEntry {
  id?: string;
  name: string;
  email: string;
  linkedIn: string;
  phone?: string;
  location?: string;
  businessSector?: string;
  message?: string;
  createdAt: Date;
  status: 'pending' | 'approved' | 'rejected';
}

export interface User {
  uid: string;
  email: string;
  displayName?: string;
  photoURL?: string;
  role: 'user' | 'admin';
  createdAt: Date;
  lastLogin: Date;
}

export interface ErrorWithMessage {
  message: string;
  code?: string;
  stack?: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: ErrorWithMessage;
}

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export interface InputProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
}

export interface AnimationVariants {
  initial: object;
  animate: object;
  exit?: object;
}

export interface WaitlistFormState {
  name: string;
  email: string;
  linkedin: string;
  showDetails: boolean;
  company: string;
  role: string;
  interests: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  linkedin?: string;
} 