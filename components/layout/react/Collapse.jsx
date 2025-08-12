import { collapseClass } from "@utils/componentClasses/collapseClass";

export default function Collapse({ label, collapseIcon = "arrow", className, children }) {
    const collapseClassNew = collapseClass({ collapseIcon, className });
    return (
        <div className={collapseClassNew.headerClass}>
            <div className={collapseClassNew.labelClass}>{label}</div>
            <div className={collapseClassNew.contentClass}>
                {children}
            </div>
        </div>
    );
}