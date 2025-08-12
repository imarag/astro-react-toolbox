export function titleClass({ variant = "page", className = "" }) {
    const variantMapping = {
        page: "text-4xl font-semibold",
        section: "text-3xl font-semibold",
        article: "text-2xl font-semibold",
    };
    const baseClass = `${variantMapping[variant] || ""} ${className || ""}`;
    return `${baseClass}`;
}
