import clsx from 'clsx';
import { ReactNode } from 'react';
interface CardProps {
  children: ReactNode;
  className: string;
}

export const Card = ({ className, children }: CardProps) => {
  return (
    <div
      className={clsx(
        'rounded-3xl px-10 py-4 drop-shadow-xl bg-white',
        className
      )}
    >
      {children}
    </div>
  );
};
