import { FC, createElement } from "react";
import DrawerPanel from "./components/DrawerPanel";
import { ScaletechDrawerPreviewProps } from "../typings/ScaletechDrawerProps";

export const preview: FC<ScaletechDrawerPreviewProps> = () => {
    return <DrawerPanel />;
};

export function getPreviewCss(): string {
    return require("./ui/ScaletechDrawer.css");
}
