export function buttonClass({
    variant = "primary",
    outline = false,
    size = "medium",
    className = ""
}) {
    const baseClass = `btn inline-block ${outline ? "btn-outline" : ""} ${className || ""}`;
    const variantMapping = {
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
    const sizeMapping = {
        extraSmall: "btn-xs",
        small: "btn-sm",
        medium: "btn-md",
        large: "btn-lg",
        extraLarge: "btn-xl",
    };
    return `${baseClass} ${variantMapping[variant] || ""} ${sizeMapping[size] || ""
        }`;
}
