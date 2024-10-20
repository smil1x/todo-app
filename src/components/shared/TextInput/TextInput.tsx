import styles from "./TextInput.module.scss";
import React, {ChangeEvent} from "react";

interface TextInputProps {
    value: string;
    placeholder?: string;
    onChange: (value: string) => void;
}

const TextInput: React.FC<TextInputProps> = (props) =>{
    const {value, placeholder, onChange} = props

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    };

    return <input className={styles.wrapper}
                  type='text'
                  value={value}
                  placeholder={placeholder}
                  onChange={handleChange}
    />
}

export default TextInput;