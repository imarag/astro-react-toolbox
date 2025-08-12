import { textAreaClass } from "@utils/componentClasses/textAreaClass";

export default function TextArea({ size, className, ...rest }) {
    return (
        <textarea
            className={textAreaClass({ size, className })}
            {...rest}
        ></textarea>
    );
}