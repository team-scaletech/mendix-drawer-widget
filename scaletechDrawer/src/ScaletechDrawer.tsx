import { FC, createElement } from "react";
import DrawerPanel from "./components/DrawerPanel";

import { ScaletechDrawerContainerProps } from "../typings/ScaletechDrawerProps";

import "./ui/ScaletechDrawer.css";

export const ScaletechDrawer: FC<ScaletechDrawerContainerProps> = props => {
    const { overlayStyle, position, renderUnderlay, size, underlayColor } = props;
    return (
        <div>
            <DrawerPanel
                overlayStyle={overlayStyle}
                position={position}
                renderUnderlay={renderUnderlay}
                size={size}
                underlayColor={underlayColor}
            />
        </div>
    );
};
