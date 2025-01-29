import { FC, createElement } from "react";
import DrawerPanel from "./components/DrawerPanel";

import { AntdDrawerContainerProps } from "../typings/AntdDrawerProps";

import "./ui/AntdDrawer.css";

export const AntdDrawer: FC<AntdDrawerContainerProps> = props => {
    const { drawerPosition, nestedWidget } = props;
    return (
        <div>
            <DrawerPanel drawerPosition={drawerPosition} nestedWidget={nestedWidget} />
        </div>
    );
};
