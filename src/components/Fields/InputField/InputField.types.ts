import { FieldProps } from "formik";
import { IInputProps } from "../../UI/Input/Input.types";
import { ILabelProps } from "../../UI/Label/Label.types";

export interface IInputFieldProps extends 
    Pick<IInputProps, "placeholder" | "type" | "inputStyle" | "styleCss">, ILabelProps {
    isLabel?: boolean;
    fieldName: string;
    key?: string;
}

export interface IWrapperInputProps extends 
    FieldProps, Pick<IInputProps, "placeholder" | "type" | "inputStyle" | "styleCss"> {}