import { Field, FieldProps } from "formik";
import { FC, useCallback, useMemo, useState } from "react";
import { Eye } from "../../UI/Eye/Eye";
import { Input } from "../../UI/Input/Input";
import { EInputType } from "../../UI/Input/Input.types";
import { Label } from "../../UI/Label/Label";
import { inputFieldStyle, passwordFieldIconStyle } from "./InputField.styles";
import { IInputFieldProps, IWrapperInputProps } from "./InputField.types";

const WrapperInput: FC<IWrapperInputProps> = (props) => {
    const { field, meta, form, type, ...rest } = props;
    const { touched, error } = meta;
    const { inputContainerStyle, errorMessage, wrapperInput } = inputFieldStyle;
    const [inputType, setInputType] = useState(type);

    const handleEyeClick = useCallback(() => {
        const type = inputType === EInputType.password ? EInputType.text : EInputType.password;

        setInputType(type);
    }, [inputType]);
    

    const memoizedEyeIcon = useMemo(() => {
        return (
            <Eye
                key="eye"
                isClosed={inputType === EInputType.password}
                onClick={handleEyeClick}
                style={passwordFieldIconStyle}
            />
        );
    }, [inputType, handleEyeClick]);
    
    return (
        <div className={inputContainerStyle}>
            <div className={wrapperInput}>
                <Input type={inputType} {...rest} {...field}/>
                {type === EInputType.password && memoizedEyeIcon}
            </div>
            {touched && error && (
                <div className={errorMessage}>{error}</div>
            )}
        </div>
    );
}

export const InputField: FC<IInputFieldProps> = (props) => {
    const { fieldName, labelName, labelStyle, isLabel, ...rest } = props;
    const {  fieldStyle } = inputFieldStyle;

    return (
        <Field name={fieldName}>
            {(fieldProps: FieldProps) => (
                isLabel ? 
                    (
                        <div className={fieldStyle}>
                            <Label labelName={labelName} labelStyle={labelStyle} />
                            <WrapperInput {...fieldProps} {...rest} />
                        </div>
                    ) : (
                        <WrapperInput {...fieldProps} {...rest} />
                    )   
             )}
        </Field>
    );
}

InputField.defaultProps = {
    isLabel: false
};

