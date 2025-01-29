import { FC, createElement } from "react";
import DrawerPanel from "./components/DrawerPanel";

import { ScaletechDrawerContainerProps } from "../typings/ScaletechDrawerProps";

import "./ui/ScaletechDrawer.css";

export const ScaletechDrawer: FC<ScaletechDrawerContainerProps> = props => {
    const {
        closeAction,
        closeButtonClass,
        overlayStyle,
        position,
        renderUnderlay,
        shouldClosePage,
        showHeader,
        size,
        underlayColor
    } = props;
    return (
        <div>
            <DrawerPanel
                closeAction={closeAction}
                closeButtonClass={closeButtonClass}
                overlayStyle={overlayStyle}
                position={position}
                renderUnderlay={renderUnderlay}
                shouldClosePage={shouldClosePage}
                showHeader={showHeader}
                size={size}
                underlayColor={underlayColor}
            />
        </div>
    );
};
