import { FC } from "react";
import { ISpinnerProps } from "./Spinner.types";
import "./Spinner.style.css"

export const Spinner: FC<ISpinnerProps> = (props) => {
    return (
        <div className="spin"></div>
    )
}