/**
 * This file was generated from ScaletechDrawer.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { ActionValue } from "mendix";
import { Big } from "big.js";

export type PositionEnum = "top" | "right" | "bottom" | "left";

export type OverlayStyleEnum = "over" | "push";

export interface ScaletechDrawerContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    position: PositionEnum;
    size: number;
    underlayColor: string;
    overlayStyle: OverlayStyleEnum;
    renderUnderlay: boolean;
    showFooter: boolean;
    saveName: string;
    saveButtonAction?: ActionValue;
    cancelName: string;
    cancelButtonAction?: ActionValue;
    headerColor: string;
    headerButtonColor: string;
    headerButtonBackgroundColor: string;
    headerFontSize: number;
    headerFontWeight: number;
    headerFontColor: string;
    footerBackgroundColor: string;
    footerSaveButtonColor: string;
    SaveButtonFontSize: number;
    SaveButtonFontWeight: number;
    SaveButtonFontColor: string;
    SaveButtonBorderSize: Big;
    SaveButtonBorderColor: string;
    footerCloseButtonColor: string;
    closeButtonFontSize: number;
    closeButtonFontWeight: number;
    closeButtonFontColor: string;
    closeButtonBorderSize: Big;
    closeButtonBorderColor: string;
}

export interface ScaletechDrawerPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    renderMode: "design" | "xray" | "structure";
    translate: (text: string) => string;
    position: PositionEnum;
    size: number | null;
    underlayColor: string;
    overlayStyle: OverlayStyleEnum;
    renderUnderlay: boolean;
    showFooter: boolean;
    saveName: string;
    saveButtonAction: {} | null;
    cancelName: string;
    cancelButtonAction: {} | null;
    headerColor: string;
    headerButtonColor: string;
    headerButtonBackgroundColor: string;
    headerFontSize: number | null;
    headerFontWeight: number | null;
    headerFontColor: string;
    footerBackgroundColor: string;
    footerSaveButtonColor: string;
    SaveButtonFontSize: number | null;
    SaveButtonFontWeight: number | null;
    SaveButtonFontColor: string;
    SaveButtonBorderSize: number | null;
    SaveButtonBorderColor: string;
    footerCloseButtonColor: string;
    closeButtonFontSize: number | null;
    closeButtonFontWeight: number | null;
    closeButtonFontColor: string;
    closeButtonBorderSize: number | null;
    closeButtonBorderColor: string;
}
