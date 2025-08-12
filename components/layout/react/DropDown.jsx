import { dropDownClass } from "@utils/componentClasses/dropDownClass";

export default function DropDown({ label, position, hover, type = "menu", children }) {
    const dropDownClassNew = dropDownClass({ position, hover, type });
    return (
        <div className={dropDownClassNew.headerClass}>
            <div role="button" className={dropDownClassNew.labelClass}>{label}</div>
            {
                type === "menu" ? (
                    <ul className={dropDownClassNew.contentClass}>
                        {children}
                    </ul>
                ) : (
                    <div
                        className={dropDownClassNew.contentClass}>
                        <div className="card-body">
                            {children}
                        </div>
                    </div>
                )
            }
        </div>
    );
}