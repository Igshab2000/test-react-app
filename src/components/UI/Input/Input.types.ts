import { FieldInputProps } from "formik";
import { CSSProperties } from "react";

export interface IInputProps extends FieldInputProps<any>{
    placeholder: string;
    type: EInputType;
    inputStyle?: CSSProperties;
    styleCss?: Object,
}

export enum EInputType {
    text = "text",
    password = "password"
}