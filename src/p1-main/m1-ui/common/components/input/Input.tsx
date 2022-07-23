import React, {
    ChangeEvent,
    DetailedHTMLProps,
    InputHTMLAttributes,
    FocusEvent,
    KeyboardEvent,
} from 'react';

import classes from './Input.module.css';

type DefaultInputPropsType = DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
>;

type InputPropsType = Omit<DefaultInputPropsType, 'type'> & {
    onChangeText?: (value: string) => void;
    onChangeError?: (error: string | null) => void;
    onEnter?: () => void;
    error?: string | null;
    divClassName?: string;
    placeholderName?: string;
    errorBox: boolean;
};

export const Input: React.FC<InputPropsType> = ({
    onChange,
    onChangeText,
    onKeyPress,
    onEnter,
    error,
    className,
    divClassName,
    onChangeError,
    placeholderName,
    errorBox,
    ...restProps
}) => {
    const finalDivClassName = `${classes.errorBox} ${error ? classes.errorMessage : ''} ${
        divClassName || ''
    }`;
    const finalInputClassName = `${classes.superInput} ${
        error ? classes.errorInput : ''
    } ${className || ''}`;

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>): void => {
        // eslint-disable-next-line no-unused-expressions
        onChange && onChange(e);

        // eslint-disable-next-line no-unused-expressions
        onChangeText && onChangeText(e.currentTarget.value);
    };
    const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>): void => {
        // eslint-disable-next-line no-unused-expressions
        onChangeError && error && onChangeError(null);

        // eslint-disable-next-line no-unused-expressions
        onKeyPress && onKeyPress(e);

        // eslint-disable-next-line no-unused-expressions
        onEnter && e.key === 'Enter' && onEnter();
    };

    const onBlurInputHandler = (e: FocusEvent<HTMLInputElement>): void => {
        if (e.currentTarget.value !== '') e.currentTarget.focus();
    };

    return (
        <div className={classes.inputWrapper}>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label className={classes.label}>
                <input
                    type="text"
                    onChange={onChangeCallback}
                    onKeyPress={onKeyPressCallback}
                    className={finalInputClassName}
                    onBlur={onBlurInputHandler}
                    {...restProps}
                />
                <span className={classes.placeholder}>{placeholderName}</span>
            </label>
            {/* eslint-disable-next-line react/jsx-no-useless-fragment */}
            {errorBox ? <div className={finalDivClassName}>{error}</div> : <></>}
        </div>
    );
};
