import { createElement, FC, useEffect, useState } from "react";
import { OverlayStyleEnum, PositionEnum } from "typings/ScaletechDrawerProps";

import "../ui/ScaletechDrawer.css";

interface DrawerProps {
    overlayStyle?: OverlayStyleEnum;
    position?: PositionEnum;
    renderUnderlay?: boolean;
    showHeader?: boolean;
    size?: number;
    underlayColor?: string;
}

const DrawerPanel: FC<DrawerProps> = ({
    overlayStyle,
    position = "right",
    renderUnderlay = true,
    showHeader = true,
    size = 300,
    underlayColor
}) => {
    const [canRender, setCanRender] = useState(false);
    const [modal, setModal] = useState<HTMLElement | null>(null);
    const page = document.querySelector<HTMLElement>(".mx-page");

    useEffect(() => {
        const modalElements = document.querySelectorAll<HTMLElement>(".convert-Drawer-overlay");

        modalElements.forEach(element => {
            const modalElement = element.closest(".modal-dialog");
            if (modalElement) {
                console.warn("modalElement", modalElement);
                setModal(modalElement as any); // If setModal is designed for only one element, you might need to rethink this
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

    return <div className="convert-Drawer-overlay"></div>;
};

export default DrawerPanel;
