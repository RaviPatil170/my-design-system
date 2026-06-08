import type { Components, JSX } from "../types/components";

interface CustomButton extends Components.CustomButton, HTMLElement {}
export const CustomButton: {
    prototype: CustomButton;
    new (): CustomButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
