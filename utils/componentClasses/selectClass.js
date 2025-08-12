export function selectClass({ className = "" }) {
    const baseClass = `select ${className || ""}`;
    return `${baseClass}`;
}
