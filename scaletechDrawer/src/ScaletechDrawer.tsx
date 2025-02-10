import { FC, createElement } from "react";
import DrawerPanel from "./components/DrawerPanel";

import { ScaletechDrawerContainerProps } from "../typings/ScaletechDrawerProps";

import "./ui/ScaletechDrawer.css";

export const ScaletechDrawer: FC<ScaletechDrawerContainerProps> = props => {
    const {
        overlayStyle,
        position,
        renderUnderlay,
        size,
        underlayColor,
        headerColor,
        headerButtonColor,
        headerFontColor,
        headerFontSize,
        headerFontWeight,
        headerButtonBackgroundColor,
        content,
        footer,
        isFooter,
        style,
        class: customClass
    } = props;
    return (
        <DrawerPanel
            overlayStyle={overlayStyle}
            position={position}
            renderUnderlay={renderUnderlay}
            size={size}
            underlayColor={underlayColor}
            headerStyle={{
                headerColor,
                headerButtonColor,
                headerFontColor,
                headerFontSize,
                headerFontWeight,
                headerButtonBackgroundColor
            }}
            content={content}
            footer={footer}
            isFooter={isFooter}
        />
    );
};
