import { FC, useCallback } from "react";
import { Link } from "react-router-dom";
import { InputField } from "../../components/Fields/InputField/InputField";
import { MyForm } from "../../components/Form/Form";
import { EInputType } from "../../components/UI/Input/Input.types";
import { UnAuthorizedLayout } from "../../layouts/UnAuthorizedLayout/UnAuthorizedLayout";
import { initializePath } from "../../utils/Routes/paths";
import { authorizationStyle, buttonStyle, inputFieldStyle } from "./Authorization.styles";
import { IAuthorizationProps, TInitialValuesAuthorization } from "./Authorization.types";

const Authorization: FC<IAuthorizationProps> = () => {
    const { wrapperContent, content, linkStyle } = authorizationStyle;

    const formName = "Authorization";
    const initialValues: TInitialValuesAuthorization = {
        loginField: "",
        passwordField: "",
    };
    const fieldNames: TInitialValuesAuthorization = {
        loginField: "loginField",
        passwordField: "passwordField",
    }

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
                    </MyForm>
                    <div className={linkStyle}>
                        <Link to={initializePath}>Зарегистрироваться</Link>
                    </div>
                </div>
            </div>
        </UnAuthorizedLayout>
    )
}

export default Authorization;

