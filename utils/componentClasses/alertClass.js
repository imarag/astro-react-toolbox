export function alertClass({ variant = "accent", outline = false, className = "" }) {
    const variantMapping = {
        primary: "alert-primary",
        secondary: "alert-secondary",
        accent: "alert-accent",
        neutral: "alert-neutral",
        info: "alert-info",
        success: "alert-success",
        warning: "alert-warning",
        error: "alert-error"
    };
    const baseClass = `alert ${variantMapping[variant] || ""} ${outline ? "alert-outline" : ""} ${className || ""}`;
    return `${baseClass}`;
}
