import React, { ChangeEventHandler } from 'react';
import styled from 'styled-components';

export type ButtonProps = {
  onClick: (e: React.MouseEvent) => void;
  disabled?: boolean;
  extraClass?: string;
  isLoading?: boolean;
  isHidden?: boolean;
  name?: string;
  secondaryButton?: boolean;
  text?: string;
  transparentButton?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  disabled = false,
  extraClass,
  isLoading = false,
  isHidden,
  name,
  secondaryButton,
  text,
  transparentButton
}) => {
  const handleClick = (e: React.MouseEvent) => {
    onClick(e);
  };

  return (
    <StyledButton disabled={disabled || isLoading} name={name} onClick={handleClick} type="button">
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  position: relative;
  display: inline-block;
  min-width: 177px;
  min-height: 21px;
  border-radius: 0;
  padding: 14px;
  font-family: inherit;
  font-size: 16px;
  font-weight: 400;
  line-height: 21px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.75, 0.02, 0.5, 1);

  span {
    opacity: 1;
    transition: opacity 0.3s cubic-bezier(0.75, 0.02, 0.5, 1);
  }
`;

export default Button;
