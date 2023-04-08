import clsx from 'clsx';
import { InputHTMLAttributes } from 'react';

interface InputProps {
  className?: string;
  props?: InputHTMLAttributes<HTMLInputElement>;
}
export const Input = ({ className, ...props }: InputProps) => {
  return (
    <input
      className={clsx(
        'border-solid border-gray border-2 px-6 py-2 text-lg rounded-3xl w-full',
        className
      )}
      {...props}
    />
  );
};
