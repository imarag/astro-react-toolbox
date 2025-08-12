import { buttonClass } from "@utils/componentClasses/buttonClass";

export default function Button({
    variant,
    outline,
    size,
    className,
    children,
    ...rest
}) {

    return (
        <button className={buttonClass({ variant, outline, size, className })} {...rest}>
            {children}
        </button>
    );
}
