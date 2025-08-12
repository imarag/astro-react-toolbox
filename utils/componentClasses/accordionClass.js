export function accordionClass({ accordionIcon = "arrow", className = "" }) {
    const contentClass = "collapse-content text-sm";
    const headerClass = `${className || ""} collapse ${accordionIcon === "arrow" ? "collapse-arrow" : "collapse-plus"} bg-base-100 border border-base-300`;
    const labelClass = "collapse-title font-semibold";
    return {
        contentClass: contentClass,
        headerClass: headerClass,
        labelClass: labelClass,
    };
}