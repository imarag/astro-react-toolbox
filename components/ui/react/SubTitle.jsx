import { subTitleClass } from "@utils/componentClasses/subTitleClass";

export default function SubTitle({ variant, className, children, ...rest }) {
    return (
        <h2 className={subTitleClass({ variant, className })} {...rest}>
            {children}
        </h2>
    );
}