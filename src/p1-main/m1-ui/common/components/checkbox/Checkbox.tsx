import React, { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes } from 'react';

import classes from './Checkbox.module.css';

type DefaultInputPropsType = DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
>;

type CheckboxPropsType = DefaultInputPropsType & {
    onChangeChecked?: (checked: boolean) => void;
    spanClassName?: string;
};

export const Checkbox: React.FC<CheckboxPropsType> = ({
    onChange,
    onChangeChecked,
    className,
    children,
    ...restProps
}) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>): void => {
        // eslint-disable-next-line no-unused-expressions
        onChange && onChange(e);

        // eslint-disable-next-line no-unused-expressions
        onChangeChecked && onChangeChecked(e.currentTarget.checked);
    };

    const finalSpanClassName = `${classes.spanClassName} ${className || ''}`;

    return (
        // eslint-disable-next-line jsx-a11y/label-has-associated-control
        <label className={classes.label}>
            <input
                type="checkbox"
                onChange={onChangeCallback}
                className={classes.checkbox}
                {...restProps}
            />
            <span className={finalSpanClassName}>{children}</span>
        </label>
    );
};
