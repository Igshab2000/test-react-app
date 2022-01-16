import { CSSProperties } from "react";

export interface IEyeProps {
    style?: CSSProperties,
    onClick?(): void,
    className?: string, 
    isClosed?: boolean,
}