import { selectClass } from "@utils/componentClasses/selectClass";

export default function Select({ placeholder, options, className, ...rest }) {
    return (
        <select defaultValue={placeholder} className={selectClass({ className })} {...rest}>
            {
                placeholder &&
                <option disabled={true}>{placeholder}</option>
            }
            {
                options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))
            }
        </select>
    );
}