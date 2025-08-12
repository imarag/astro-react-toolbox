import { anchorClass } from "@utils/componentClasses/anchorClass";

export default function Anchor({
    type, variant, size, outline,
    className,
    children,
    ...rest
}) {

    return (
        <a className={anchorClass({ type, variant, size, outline, className })} {...rest}>
            {children}
        </a>
    );
}
