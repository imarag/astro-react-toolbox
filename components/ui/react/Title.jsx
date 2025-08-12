import { titleClass } from "@utils/componentClasses/titleClass";

export default function Title({ variant, className, children, ...rest }) {
    return (
        <h1 className={titleClass({ variant, className })} {...rest}>
            {children}
        </h1>
    );
}