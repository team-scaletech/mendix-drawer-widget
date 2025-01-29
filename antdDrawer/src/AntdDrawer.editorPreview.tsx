import { createElement, FC } from "react";
import DrawerPanel from "./components/DrawerPanel";
import { AntdDrawerPreviewProps } from "../typings/AntdDrawerProps";

export const preview: FC<AntdDrawerPreviewProps> = () => {
    return <DrawerPanel />;
};

export function getPreviewCss(): string {
    return require("./ui/AntdDrawer.css");
}
