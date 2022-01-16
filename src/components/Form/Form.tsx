import { FC, useMemo } from "react";
import { Form, Formik } from 'formik';
import { IFormProps } from "./Form.types";
import { Button } from "../UI/Button/Button";
import { EButtonType } from "../UI/Button/Button.types";

export const MyForm: FC<IFormProps> = (props) => {
    const { initialValues, onSubmit, children, formName, submitButtonStyle, buttonText, ...rest } = props;

    const getSubmitButton = useMemo(() => {
        return (
            <Button
                buttonType={EButtonType.active}
                buttonStyle={submitButtonStyle}
            >
                {buttonText}
            </Button>
        )
    }, [buttonText, submitButtonStyle]);


    return (
        <Formik 
            initialValues={initialValues} 
            onSubmit={onSubmit} {...rest}  
        >
           <Form
            name={formName}
        >
            {children}
            {getSubmitButton}
        </Form> 
        </Formik>
    );
}

