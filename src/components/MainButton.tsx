import React from 'react';
import { Button } from './ui/button';

interface ButtonPrimaryProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  iconRight?: string;
  iconAlt?: string;
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({ iconRight, disabled = true, ...props }) => {
  return (
    <Button variant={'primary'} size={'primary'} disabled={disabled} {...props}>
      Tiếp tục
      <img src={iconRight} alt="icon" className="w-5 h-5 rounded-full" />
    </Button>
  );
};

export default ButtonPrimary;
