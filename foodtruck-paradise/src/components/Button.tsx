import React from 'react';
import { Button as MuiButton, type ButtonProps } from '@mui/material';

type CustomButtonProps = Omit<ButtonProps, 'variant'> & {
  variant?: 'primary' | 'secondary' | 'danger';
  text?: string;
};

const Button: React.FC<CustomButtonProps> = ({ variant = 'primary', text, ...props }) => {
return (
    <MuiButton
      variant="contained"
      color={
        variant === 'primary'
          ? 'primary'
          : variant === 'secondary'
          ? 'secondary'
          : variant === 'danger'
          ? 'error'
          : 'primary'
      }
      {...props}
    >
      {text}
    </MuiButton>
  );
};

export default Button;