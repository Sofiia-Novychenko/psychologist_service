import { cn } from '../services/cn';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
}
const Button: React.FC<ButtonProps> = ({
  disabled,
  children,
  ...rest
}: ButtonProps) => {
  return (
    <button
      {...rest}
      disabled={disabled}
      className={cn(
        rest.className || '',
        disabled && 'bg-gray-500 text-gray-700 cursor-not-allowed opacity-50'
      )}
    >
      {children}
    </button>
  );
};

export default Button;
