import { FC } from "react";
import { ILabelProps } from "./Label.types";

export const Label: FC<ILabelProps> = (props) => {
    const { labelName, labelStyle, children } = props;

    return (
        <label 
            htmlFor={labelName} 
            style={labelStyle}
        >
            {children}
        </label>
    );
};