import { badgeClass } from "@utils/componentClasses/badgeClass";

export default function Badge({ variant, size, outline, className, children }) {
    return (
        <div className={badgeClass({ variant, size, outline, className })}>
            {children}
        </div>
    )
}
