import React, {ChangeEvent} from 'react';
import styles from './Select.module.scss'; // Assuming you have a CSS module for styles

interface Option {
    value: string;
    name: string;
}

interface SelectProps {
    placeholder?: string;
    selected: string;
    options: Option[];
    onSelect: (value: string) => void;
}

const Select: React.FC<SelectProps> = (props) => {
    const { selected, options, placeholder, onSelect } = props

    const handleSelect = (event: ChangeEvent<HTMLSelectElement>) => {
        onSelect(event.target.value);
    }

    const renderPlaceholder = () => {
        return <option value='' hidden>{placeholder}</option>;
    };

    const renderOptions = () => {
        return options.map(({ value, name }) => {
            return (
                <option key={value} value={value}>
                    {name}
                </option>
            );
        });
    };

    return (
        <select className={styles.wrapper} onChange={handleSelect} value={selected}>
            {renderPlaceholder()}
            {renderOptions()}
        </select>
    );
};

export default Select;