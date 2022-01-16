import { FC } from "react";
import { ProcesetIcon } from "../../resources/icons/ProcesetIcon";
import { contentStyle, logoStyle, wrapperStyle } from "./UnAuthorizedLayout.styles";
import { IUnAuthorizedLayoutProps } from "./UnAuthorizedLayout.types";

export const UnAuthorizedLayout: FC<IUnAuthorizedLayoutProps> = ({children}) => {
    return (
        <div style={wrapperStyle}>
            <div style={contentStyle}>
                <div style={logoStyle}>
                    <ProcesetIcon />
                </div>
                {children}
            </div>
        </div>
    )
}