import { createElement, FC, ReactNode, useEffect, useState } from "react";
import Drawer from "antd/es/drawer";
import Button from "antd/es/button";
import Space from "antd/es/space";
import { DrawerPositionEnum } from "typings/AntdDrawerProps";

interface DrawerPanelProps {
    drawerPosition?: DrawerPositionEnum;
    nestedWidget?: ReactNode;
    drawerWidth?: number;
    showHeader?: boolean;
    renderUnderlay?: boolean;
    underlayColor?: string;
    closeAction?: () => void;
}

const DrawerPanel: FC<DrawerPanelProps> = ({
    drawerPosition = "right",
    nestedWidget,
    drawerWidth = 500,
    showHeader = true,
    renderUnderlay = true,
    underlayColor,
    closeAction
}) => {
    const [open, setOpen] = useState(true);

    useEffect(() => {
        const elements = document.getElementsByClassName("modal-dialog");
        if (elements.length > 0) {
            Array.from(elements).forEach(element => {
                if (open) {
                    (element as HTMLElement).style.display = "none";
                }
            });
        }
    }, [open]);

    // Set underlay color if provided
    const applyUnderlayStyle = () => {
        if (underlayColor) {
            document.documentElement.style.setProperty("--drawer-underlay-color", underlayColor);
        }
    };

    const handleClose = () => {
        if (closeAction) {
            closeAction();
        }
        setOpen(false);
    };

    // Apply underlay style when component mounts
    applyUnderlayStyle();

    return (
        <div>
            <Drawer
                title={showHeader ? "Drawer Panel" : undefined}
                placement={drawerPosition}
                width={drawerWidth}
                onClose={handleClose}
                open={open}
                mask={renderUnderlay}
                className="drawer-panel"
                extra={
                    <Space>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button type="primary" onClick={handleClose}>
                            OK
                        </Button>
                    </Space>
                }
            >
                <div>{nestedWidget}</div>
            </Drawer>
        </div>
    );
};

export default DrawerPanel;
