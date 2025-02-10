import { createElement, FC, ReactNode, useEffect, useState } from "react";
import { OverlayStyleEnum, PositionEnum } from "typings/ScaletechDrawerProps";

import "../ui/ScaletechDrawer.css";

interface DrawerProps {
    overlayStyle?: OverlayStyleEnum;
    position?: PositionEnum;
    renderUnderlay?: boolean;
    showHeader?: boolean;
    showFooter?: boolean;
    size?: number;
    underlayColor?: string;
    headerStyle?: HeaderStyle;
    content?: ReactNode;
    footer?: ReactNode;
    isFooter?: boolean;
}
interface HeaderStyle {
    headerColor?: string;
    headerButtonColor?: string;
    headerButtonBackgroundColor?: string;
    headerFontColor?: string;
    headerFontSize?: number;
    headerFontWeight?: number;
}

const DrawerPanel: FC<DrawerProps> = ({
    overlayStyle,
    position = "right",
    renderUnderlay = true,
    showHeader = true,
    size = 300,
    underlayColor,
    headerStyle,
    content,
    footer,
    isFooter
}) => {
    const [canRender, setCanRender] = useState(false);
    const [modal, setModal] = useState<HTMLElement | null>(null);
    const page = document.querySelector<HTMLElement>(".mx-page");

    useEffect(() => {
        const modalElements = document.querySelectorAll<HTMLElement>(".convert-Drawer-overlay");
        const footerClass = document.querySelector(".drawer-footer") as HTMLElement | null;
        const footerWrapperClass = document.querySelector(".mx-dataview-controls") as HTMLElement | null;

        if (footerClass && footerWrapperClass) {
            footerWrapperClass.classList.add("custom-footer-styling");
        }

        modalElements.forEach(element => {
            const modalElement = element.closest(".modal-dialog");
            if (modalElement) {
                setModal(modalElement as any);
                setCanRender(true);
            }
        });

        const elements = document.querySelectorAll(".close");
        elements.forEach(element => element.addEventListener("click", animateCloseModal));

        return () => {
            elements.forEach(element => element.removeEventListener("click", animateCloseModal));
        };
    }, []);

    useEffect(() => {
        if (underlayColor) {
            document.documentElement.style.setProperty("--underlay-color", underlayColor);
        }
    }, [underlayColor]);

    useEffect(() => {
        const modalHeader = document.querySelector(".modal-header") as HTMLElement | null;
        // Target the button inside the modal header
        const button = document.querySelector(".modal-header button") as HTMLElement | null;
        const heading = document.querySelector(".modal-header h4") as HTMLElement | null;

        // Add styles for the button
        if (button) {
            button.style.backgroundColor = `${headerStyle?.headerButtonBackgroundColor}`;
            button.style.color = `${headerStyle?.headerButtonColor}`;
        }

        // Add styles for the heading
        if (heading) {
            heading.style.fontSize = `${headerStyle?.headerFontSize}px`;
            heading.style.fontWeight = `${headerStyle?.headerFontWeight}`;
            heading.style.color = `${headerStyle?.headerFontColor}`;
        }

        if (modalHeader) {
            modalHeader.style.backgroundColor = `${headerStyle?.headerColor}`; // Replace with your preferred color
        }
    }, [headerStyle]);

    const removeUnderlay = () => {
        document.querySelector(".drawer-underlay.old")?.classList.remove("visible");
        setTimeout(() => {
            document.querySelector(".mx-page > .drawer-underlay")?.remove();
        }, 300);
    };

    const animateCloseModal = () => {
        if (overlayStyle === "push") {
            page!.style.transform = "translate(0px)";
            setTimeout(() => {
                modal?.classList.remove("visible");
                page?.classList.remove("mx-page--push");
            }, 400);
        } else {
            modal?.classList.remove("visible");
        }
        removeUnderlay();
    };

    const closeModal = () => {
        animateCloseModal();
        document.querySelector<HTMLButtonElement>(".drawer-overlay .close")?.click();
    };

    const generateUnderlay = () => {
        const underlayHtml = '<div class="drawer-underlay"></div>';
        if (overlayStyle === "push") {
            page?.insertAdjacentHTML("afterbegin", underlayHtml);
        } else {
            modal?.insertAdjacentHTML("beforeend", underlayHtml);
        }
        const underlay = document.querySelector(".drawer-underlay:not(.old)");
        underlay?.classList.add("old");
        underlay?.addEventListener("click", closeModal);
        return underlay;
    };

    useEffect(() => {
        if (!canRender) return;

        modal?.classList.add("drawer-overlay", `drawer-overlay--${position}`);
        if (overlayStyle === "push") page?.classList.add("mx-page--push");

        setTimeout(() => {
            if (["left", "right"].includes(position)) modal!.style.width = `${size}px`;
            if (["top", "bottom"].includes(position)) modal!.style.height = `${size}px`;

            if (!showHeader) modal?.classList.add("drawer-overlay--remove-header");

            const underlay = generateUnderlay();

            setTimeout(() => {
                if (renderUnderlay) {
                    underlay?.classList.add("visible");
                } else {
                    underlay?.classList.add("hidden");
                }

                if (overlayStyle !== "push") {
                    setTimeout(() => modal?.classList.add("transition"), 100);
                }

                setTimeout(() => modal?.classList.add("visible"), 100);

                if (overlayStyle === "push") {
                    const transforms: any = {
                        left: `translateX(${size}px)`,
                        right: `translateX(-${size}px)`,
                        top: `translateY(${size}px)`,
                        bottom: `translateY(-${size}px)`
                    };
                    page!.style.transform = transforms[position];
                    underlay?.classList.add(`drawer-underlay--${position}`);
                }
            }, 300);
        }, 100);
    }, [canRender]);

    return (
        <div className="drawer-wrapper">
            <div className="convert-Drawer-overlay">{content}</div>
            {isFooter && <div className="footer-section">{footer}</div>}
        </div>
    );
};

export default DrawerPanel;
