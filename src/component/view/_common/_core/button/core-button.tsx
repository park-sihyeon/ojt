import { ButtonHTMLAttributes, ReactNode } from 'react';

import { coreButtonCss } from './core-button.css';

export interface CoreButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'submit' | 'regist' | 'delete' | 'cardButton';
  children: ReactNode;
}

const getButtonStyle = (variant: string, disabled?: boolean) => {
  if (variant === 'submit') {
    if (disabled) {
      return coreButtonCss.submitButton.disabled;
    } else {
      return coreButtonCss.submitButton.default;
    }
  }

  if (variant === 'regist') {
    if (disabled) {
      return coreButtonCss.registButton.disabled;
    } else {
      return coreButtonCss.registButton.default;
    }
  }
  if (variant === 'delete') {
    if (disabled) {
      return coreButtonCss.deleteButton.disabled;
    } else {
      return coreButtonCss.deleteButton.default;
    }
  }
  if (variant === 'cardButton') {
    if (disabled) {
      return coreButtonCss.cardButton.disabled;
    } else {
      return coreButtonCss.cardButton.default;
    }
  }
};

export const CoreButton = (props: CoreButtonProps) => {
  const {
    variant,
    disabled,
    onClick,
    children,
    className,
    // fontSet = 'b4-400',
    ...rest
  } = props;

  return (
    <button
      className={
        className
          ? `${className} ${getButtonStyle(variant, disabled)}`
          : `${getButtonStyle(variant, disabled)}}`
      }
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};
// 저장 수정 삭제, 카드버튼
