import { labelClass } from "@utils/componentClasses/labelClass";

export default function Label({ className, children, ...rest }) {
    return (
        <label className={labelClass({ className })} {...rest}>
            {children}
        </label>
    );
}
