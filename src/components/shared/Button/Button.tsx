import React from "react";
import classnames from 'classnames';
import styles from "./Button.module.scss";

interface ButtonProps {
    onClick: () => void;
    children: React.ReactNode;
    disabled?: boolean
    style?: 'primary' | 'icon';
    className?: string;
}

const Button: React.FC<ButtonProps> = props => {
    const {
        onClick,
        children,
        disabled,
        style = 'primary',
        className
    } = props
    const buttonClass = classnames(styles.wrapper, styles[`wrapper-${style}`], className);

    return <button className={buttonClass}
                   onClick={onClick}
                   disabled={disabled}
    >
        {children}
    </button>
}

export default Button