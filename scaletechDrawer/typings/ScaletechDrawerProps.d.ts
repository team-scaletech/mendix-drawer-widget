/**
 * This file was generated from ScaletechDrawer.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { ComponentType, CSSProperties, ReactNode } from "react";

export type PositionEnum = "top" | "right" | "bottom" | "left";

export type OverlayStyleEnum = "over" | "push";

export interface ScaletechDrawerContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    content?: ReactNode;
    footer?: ReactNode;
    position: PositionEnum;
    size: number;
    isFooter: boolean;
    underlayColor: string;
    overlayStyle: OverlayStyleEnum;
    renderUnderlay: boolean;
    headerColor: string;
    headerButtonColor: string;
    headerButtonBackgroundColor: string;
    headerFontSize: number;
    headerFontWeight: number;
    headerFontColor: string;
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
    content: { widgetCount: number; renderer: ComponentType<{ children: ReactNode; caption?: string }> };
    footer: { widgetCount: number; renderer: ComponentType<{ children: ReactNode; caption?: string }> };
    position: PositionEnum;
    size: number | null;
    isFooter: boolean;
    underlayColor: string;
    overlayStyle: OverlayStyleEnum;
    renderUnderlay: boolean;
    headerColor: string;
    headerButtonColor: string;
    headerButtonBackgroundColor: string;
    headerFontSize: number | null;
    headerFontWeight: number | null;
    headerFontColor: string;
}
