import { accordionClass } from "@utils/componentClasses/accordionClass";

export default function Accordion({ label, checked = false, accordionName = "accordion", accordionIcon = "arrow", className, children }) {
    const accordionClassNew = accordionClass({ accordionIcon, className });
    return (
        <div className={accordionClassNew.headerClass}>
            {
                checked ? (
                    <input type="checkbox" name={accordionName} defaultChecked />
                ) : (
                    <input type="checkbox" name={accordionName} />
                )
            }
            <div className={accordionClassNew.labelClass}>{label}</div>
            <div className={accordionClassNew.contentClass}>
                {children}
            </div>
        </div>
    );
}