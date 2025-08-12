export function anchorClass({
    type = "link",
    variant = "primary",
    size = "medium",
    outline = false,
    className = "",
}) {
    const baseClass = `${type === "link" ? "link" : "button"} ${outline && type === "button" && "btn-outline"} inline-block ${className || ""
        }`;
    const variantMappingLink = {
        primary: "link-primary",
        secondary: "link-secondary",
        ghost: "link-ghost",
        info: "link-info",
        success: "link-success",
        warning: "link-warning",
        error: "link-error",
        danger: "link-error",
        accent: "link-accent",
        neutral: "link-neutral",
    };
    const variantMappingButton = {
        primary: "btn-primary",
        secondary: "btn-secondary",
        ghost: "btn-ghost",
        info: "btn-info",
        success: "btn-success",
        warning: "btn-warning",
        error: "btn-error",
        danger: "btn-error",
        accent: "btn-accent",
        neutral: "btn-neutral",
    };
    const sizeMappingButton = {
        extraSmall: "btn-xs",
        small: "btn-sm",
        medium: "btn-md",
        large: "btn-lg",
        extraLarge: "btn-xl",
    };
    return `${baseClass} ${type === "link"
        ? variantMappingLink[variant] || ""
        : variantMappingButton[variant] || ""
        } ${type === "link"
            ? ""
            : sizeMappingButton[size] || ""
        }`;
}
