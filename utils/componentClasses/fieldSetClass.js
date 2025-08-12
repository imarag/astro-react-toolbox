export function fieldSetClass({ className = "" }) {
    const fieldSetClass = `fieldset ${className || ""}`;
    const legendClass = `fieldset-legend`;
    return { fieldSetClass: fieldSetClass, legendClass: legendClass };
}
