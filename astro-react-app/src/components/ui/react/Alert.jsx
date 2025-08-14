export default function Alert({ variant = "accent", outline = false, className, children }) {
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
    const baseClass = "alert";
    const globalClass = `${baseClass} ${variantMapping[variant] || ""} ${outline ? "alert-outline" : ""} ${className || ""}`;
    return (
        <div className={globalClass}>
            {children}
        </div>
    )
}
