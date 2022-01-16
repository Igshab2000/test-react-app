import { FormikConfig } from "formik";
import { CSSProperties } from "react";

export interface IFormProps extends FormikConfig<any> {
    formName: string;
    submitButtonStyle?: CSSProperties,
    buttonText: string,
}

