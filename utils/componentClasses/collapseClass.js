export function collapseClass({ collapseIcon = "arrow", className = "" }) {
    const contentClass = `collapse-content text-sm`;
    const headerClass = `${className || ""} collapse ${collapseIcon === "arrow" ? "collapse-arrow" : "collapse-plus"}  bg-base-100 border-base-300 border`;
    const labelClass = "collapse-title font-semibold";
    return {
        contentClass: contentClass,
        headerClass: headerClass,
        labelClass: labelClass,
    };
}