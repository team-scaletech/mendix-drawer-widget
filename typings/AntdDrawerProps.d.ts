/**
 * This file was generated from AntdDrawer.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { ComponentType, CSSProperties, ReactNode } from "react";

export type DrawerPositionEnum = "top" | "right" | "bottom" | "left";

export interface AntdDrawerContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    nestedWidget?: ReactNode;
    drawerPosition: DrawerPositionEnum;
}

export interface AntdDrawerPreviewProps {
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
    nestedWidget: { widgetCount: number; renderer: ComponentType<{ children: ReactNode; caption?: string }> };
    drawerPosition: DrawerPositionEnum;
}
