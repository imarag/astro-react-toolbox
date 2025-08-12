import { fieldSetClass } from "@utils/componentClasses/fieldSetClass";

export default function FieldSet({ legend = "", className, children, ...rest }) {
    const fieldSetClassNew = fieldSetClass({ className });
    return (
        <fieldset className={fieldSetClassNew.fieldSetClass} {...rest}>
            <legend className={fieldSetClassNew.legendClass}>{legend}</legend>
            {children}
        </fieldset>
    );
}