import { FC } from 'react';
import { style } from './Button.styles';
import { EButtonType, IButtonProps } from "./Button.types";
  
export const Button: FC<IButtonProps> = (props) => {
    const { onClick, buttonStyle, children, buttonType } = props;
    const { button, buttonDisabled } = style;

    return (
        <button
            className={
                buttonType !== EButtonType.disabled ? 
                button
              : 
                [button, buttonDisabled].join(' ') 
            }
            onClick={onClick}
            style={buttonStyle}
        >
            {children}
        </button>
    );
  };
  
  Button.defaultProps = {
    buttonType: EButtonType.active
  }