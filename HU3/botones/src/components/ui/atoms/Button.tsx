import React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps {
  text: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({
  text,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  leftIcon,
  rightIcon,
  onClick,
}) => {
  const isDisabled = disabled || loading;

  return (
    <button
      type="button"
      className={`ui-button ui-button--${variant} ui-button--${size}`}
      disabled={isDisabled}
      onClick={onClick}
    >
      {loading ? (
        <>
          <span className="ui-button__spinner" aria-hidden="true" />
          <span>Cargando...</span>
        </>
      ) : (
        <>
          {leftIcon ? <span className="ui-button__icon">{leftIcon}</span> : null}
          <span>{text}</span>
          {rightIcon ? <span className="ui-button__icon">{rightIcon}</span> : null}
        </>
      )}
    </button>
  );
};

export default Button;
