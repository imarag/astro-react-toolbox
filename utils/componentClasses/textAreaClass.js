export function textAreaClass({
    size = "medium",
    className = ""
}) {
    const baseClass = `textarea inline-block ${className || ""}`;
    const sizeMapping = {
        extraSmall: "textarea-xs",
        small: "textarea-sm",
        medium: "textarea-md",
        large: "textarea-lg",
        extraLarge: "textarea-xl",
    };
    return `${baseClass} ${sizeMapping[size] || ""}`;
}
