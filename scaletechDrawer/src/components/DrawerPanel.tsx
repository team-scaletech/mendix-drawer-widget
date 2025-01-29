import { createElement, FC, useEffect, useState } from "react";
import "../ui/ScaletechDrawer.css";
import { ActionValue } from "mendix";

interface DrawerProps {
    closeAction?: ActionValue;
    closeButtonClass?: string;
    overlayStyle?: string;
    position?: string;
    renderUnderlay?: boolean;
    shouldClosePage?: boolean;
    showHeader?: boolean;
    size?: number;
    underlayColor?: string;
}

const DrawerPanel: FC<DrawerProps> = ({
    closeAction,
    closeButtonClass,
    overlayStyle = "default",
    position = "left",
    renderUnderlay = true,
    shouldClosePage = false,
    showHeader = true,
    size = 300,
    underlayColor
}) => {
    const [canRender, setCanRender] = useState(false);
    const [modal, setModal] = useState<HTMLElement | null>(null);
    const page = document.querySelector<HTMLElement>(".mx-page");

    useEffect(() => {
        const modalElement = document.querySelector<HTMLElement>(".convert-Drawer-overlay")?.closest(".modal-dialog");
        if (modalElement) {
            setModal(modalElement as any);
            setCanRender(true);
        }
    }, []);

    useEffect(() => {
        if (underlayColor) {
            document.documentElement.style.setProperty("--underlay-color", underlayColor);
        }
    }, [underlayColor]);

    const addEventListeners = (selector: string, event: string, handler: () => void) => {
        document.querySelectorAll(selector).forEach(element => {
            element.addEventListener(event, handler);
        });
    };

    const removeUnderlay = () => {
        document.querySelector(".popup-underlay.old")?.classList.remove("visible");
        setTimeout(() => {
            document.querySelector(".mx-page > .popup-underlay")?.remove();
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
        if (closeAction?.canExecute) {
            closeAction.execute();
        } else {
            document.querySelector<HTMLButtonElement>(".popup-overlay .close")?.click();
        }
    };

    const generateUnderlay = () => {
        const underlayHtml = '<div class="popup-underlay"></div>';
        if (overlayStyle === "push") {
            page?.insertAdjacentHTML("afterbegin", underlayHtml);
        } else {
            modal?.insertAdjacentHTML("beforeend", underlayHtml);
        }
        const underlay = document.querySelector(".popup-underlay:not(.old)");
        underlay?.classList.add("old");
        underlay?.addEventListener("click", closeModal);
        return underlay;
    };

    const generateCloseButton = () => {
        if (showHeader && shouldClosePage) {
            modal
                ?.querySelector(".modal-content")
                ?.insertAdjacentHTML("afterbegin", '<div class="popup-overlay__closebutton"></div>');
            addEventListeners(".popup-overlay__closebutton", "click", closeModal);
        }
    };
    const linkCloseButtons = () => {
        if (!closeButtonClass) return; // Ensure the class is defined before using

        document.querySelectorAll(`.${closeButtonClass}`).forEach(closeBtn => {
            if (shouldClosePage) {
                closeBtn?.addEventListener("click", closeModal);
            } else {
                closeBtn?.addEventListener("click", animateCloseModal);
            }
        });
    };
    const generateCloseBtn = () => {
        if (showHeader && shouldClosePage) {
            modal
                ?.querySelector(".modal-content")
                ?.insertAdjacentHTML("afterbegin", '<div class="popup-overlay__closebutton"></div>');
            document.querySelector(".popup-overlay__closebutton")?.addEventListener("click", closeModal);
        }
    };

    useEffect(() => {
        if (!canRender) return;

        modal?.classList.add("popup-overlay", `popup-overlay--${position}`);
        if (overlayStyle === "push") page?.classList.add("mx-page--push");

        setTimeout(() => {
            if (["left", "right"].includes(position)) modal!.style.width = `${size}px`;
            if (["top", "bottom"].includes(position)) modal!.style.height = `${size}px`;

            if (!showHeader) modal?.classList.add("popup-overlay--remove-header");

            const underlay = generateUnderlay();
            generateCloseButton();

            setTimeout(() => {
                generateCloseBtn();
                setTimeout(() => linkCloseButtons(), 300);
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
                    underlay?.classList.add(`popup-underlay--${position}`);
                }
            }, 300);
        }, 100);
    }, [canRender]);

    return <div className="convert-Drawer-overlay"></div>;
};

export default DrawerPanel;
