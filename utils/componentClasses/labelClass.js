export function labelClass
    ({
        className = ""
    }) {
    const baseClass = `label inline-block ${className || ""}`;
    return `${baseClass}`;
}