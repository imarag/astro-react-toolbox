import { alertClass } from "@utils/componentClasses/alertClass";

export default function Alert({ variant, outline, className, children }) {
    return (
        <div className={alertClass({ variant, outline, className })}>
            {children}
        </div>
    )
}
