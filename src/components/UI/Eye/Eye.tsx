import { FC } from "react";
import { ClosedEyeIcon } from "../../../resources/icons/ClosedEyeIcon";
import { OpenEyeIcon } from "../../../resources/icons/OpenEyeIcon";
import { IEyeProps } from "./Eye.types";

export const Eye: FC<IEyeProps> = (props) => {
    const { onClick, style, isClosed } = props;

    return (
        <span onClick={onClick} style={style}>
            {isClosed ? <ClosedEyeIcon/> : <OpenEyeIcon/>}
        </span>
    );
}