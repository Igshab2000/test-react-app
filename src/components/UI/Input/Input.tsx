import { FC } from "react";
import { inputStyles } from "./Input.styles";
import { IInputProps } from "./Input.types";

export const Input: FC<IInputProps> = (props) => {
    const { input } = inputStyles;
    const { placeholder, inputStyle,  ...rest } = props;

    return (
        <input
            className={input}
            placeholder={placeholder}
            style={inputStyle}
            {...rest}
        />
    )
}
