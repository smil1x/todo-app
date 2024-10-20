import styles from './RadioGroup.module.scss'
import React, {ChangeEvent} from 'react';

interface RadioGroupProps {
    name: string,
    options: {
        label: string,
        value: string,
    }[]
    onChange: (value: string) => void;
    selectedValue: string;
}

const RadioGroup: React.FC<RadioGroupProps> =  (props) => {
    const {name,
        options,
        onChange,
        selectedValue
    } = props

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    }


    function render() {
        return options.map(({label, value}) => {
            return <label className={styles.label} key={value}>
                <input className={styles.radio}
                       type="radio" name={name}
                       value={value}
                       onChange={handleChange}
                       checked={value === selectedValue}
                />
                {label}
            </label>
        })
    }

    return <div className={styles.wrapper}>
        {render()}
    </div>
}
export default RadioGroup