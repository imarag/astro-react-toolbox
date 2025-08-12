export function subTitleClass({ variant = "page", className = "" }) {
    const variantMapping = {
        page: "text-4xl font-semibold",
        section: "text-3xl font-semibold"
    };
    const baseClass = `${variantMapping[variant] || ""} ${className || ""}`;
    return `${baseClass}`;
}