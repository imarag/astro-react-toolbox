import { spinnerClass } from "@utils/componentClasses/spinnerClass";

export default function Spinner({ variant, type, size, className, children }) {
    return (
        <div className={spinnerClass({ variant, type, size, className })}>
            {children}
        </div>
    );
}
