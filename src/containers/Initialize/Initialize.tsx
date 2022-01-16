import { FC, useCallback } from "react";
import { Link } from "react-router-dom";
import { InputField } from "../../components/Fields/InputField/InputField";
import { MyForm } from "../../components/Form/Form";
import { EInputType } from "../../components/UI/Input/Input.types";
import { UnAuthorizedLayout } from "../../layouts/UnAuthorizedLayout/UnAuthorizedLayout";
import { loginPath } from "../../utils/Routes/paths";
import { buttonStyle, initializeStyle, inputFieldStyle } from "./Initialize.styles";
import { IInitializeProps, TInitialValuesInitialize } from "./Initialize.types";

const Initialize: FC<IInitializeProps> = (props) => {
    const { wrapperContent, content, linkStyle } = initializeStyle;
    
    const formName = "Initialize";

    const initialValues: TInitialValuesInitialize = {
        firstNameField: "",
        lastNameField: "",
        loginField: "",
        passwordField: "",
        confirmationPasswordField: ""
    };

    const fieldNames: TInitialValuesInitialize = {
        firstNameField: "firstNameField",
        lastNameField: "lastNameField",        
        loginField: "loginField",
        passwordField: "passwordField",
        confirmationPasswordField: "confirmationPasswordField",
    };

    const handleFormSubmit = useCallback((fields: any) => {

    }, []);

    return (
        <UnAuthorizedLayout>
            <div className={wrapperContent}>
                <div className={content}>
                    <MyForm 
                        formName={formName} 
                        onSubmit={handleFormSubmit} 
                        initialValues={initialValues} 
                        buttonText="Войти в систему"
                        submitButtonStyle={buttonStyle}
                    >
                        <InputField 
                            key={fieldNames.firstNameField}
                            fieldName={fieldNames.firstNameField}
                            placeholder="Имя"
                            type={EInputType.text}
                            inputStyle={inputFieldStyle}
                        />
                        <InputField 
                            key={fieldNames.lastNameField}
                            fieldName={fieldNames.lastNameField}
                            placeholder="Фамилия"
                            type={EInputType.text}
                            inputStyle={inputFieldStyle}
                        />
                        <InputField 
                            key={fieldNames.loginField}
                            fieldName={fieldNames.loginField}
                            placeholder="Электронная почта"
                            type={EInputType.text}
                            inputStyle={inputFieldStyle}
                        />
                        <InputField 
                            key={fieldNames.passwordField}
                            fieldName={fieldNames.passwordField}
                            placeholder="Пароль"
                            type={EInputType.password}
                            inputStyle={inputFieldStyle}
                        />
                        <InputField 
                            key={fieldNames.confirmationPasswordField}
                            fieldName={fieldNames.confirmationPasswordField}
                            placeholder="Повторите пароль"
                            type={EInputType.password}
                            inputStyle={inputFieldStyle}
                        />
                    </MyForm>
                    <div className={linkStyle}>
                        <span>Уже зарегистрированы?</span>
                        <Link to={loginPath}>Вход</Link>
                    </div>
                </div>
            </div>
        </UnAuthorizedLayout>
    )
}

export default Initialize