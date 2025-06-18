import React from 'react';
import { cn } from '@/lib/utils';
import { Button, ButtonProps } from '@/components/ui/button'; // ButtonProps can be used if we extend it

interface ActionButtonProps extends Omit<ButtonProps, 'variant'> {
  // We explicitly set variant to 'default' or allow specific overrides if needed.
  // For this component, it's primarily a 'default' styled button.
}

const ActionButton: React.FC<ActionButtonProps> = ({
  children,
  className,
  onClick,
  disabled,
  ...props
}) => {
  return (
    <Button
      variant="default" // Primary action button always uses 'default' variant (primary color)
      className={cn('w-full py-3 text-base font-semibold', className)} // Default full width, can be overridden
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children || 'Done'} 
    </Button>
  );
};

export default ActionButton;
