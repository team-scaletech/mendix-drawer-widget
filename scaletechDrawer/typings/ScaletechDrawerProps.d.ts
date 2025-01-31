/**
 * This file was generated from ScaletechDrawer.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";

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
}
