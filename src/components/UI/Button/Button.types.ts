import { CSSProperties } from "react";

export interface IButtonProps {
    onClick?: (e: React.MouseEvent) => void,
    buttonStyle?: CSSProperties,
    children?: string,
    buttonType?: EButtonType
}

export enum EButtonType {
    disabled = "disabled",
    active = "active",
}