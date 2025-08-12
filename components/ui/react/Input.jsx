import { inputClass } from "@utils/componentClasses/inputClass";

export default function Input({ size, type, className, ...rest }) {
    return (
        <input
            className={inputClass({ size, type, className })}
            {...rest}
        />
    );
}
