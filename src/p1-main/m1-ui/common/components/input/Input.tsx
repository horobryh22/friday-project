import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, FocusEvent, KeyboardEvent} from 'react'
import classes from './Input.module.css'

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type InputPropsType = Omit<DefaultInputPropsType, 'type'> & {
    onChangeText?: (value: string) => void
    onChangeError?: (error: string | null) => void
    onEnter?: () => void
    error?: string | null
    divClassName?: string
    placeholderName?: string
    errorBox: boolean
}

export const Input: React.FC<InputPropsType> = (
    {
        onChange, onChangeText,
        onKeyPress, onEnter,
        error,
        className, divClassName,
        onChangeError,
        placeholderName,
        errorBox,
        ...restProps
    }
) => {
    const finalDivClassName = `${classes.errorBox} ${error ? classes.errorMessage : ''} ${divClassName ? divClassName : ''}`;
    const finalInputClassName = `${classes.superInput} ${error ? classes.errorInput : ''} ${className ? className : ''}`;

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e);

        onChangeText && onChangeText(e.currentTarget.value);
    }
    const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {

        onChangeError && error && onChangeError(null);

        onKeyPress && onKeyPress(e);

        onEnter && e.key === 'Enter' && onEnter();
    }

    const onBlurInputHandler = (e: FocusEvent<HTMLInputElement>) => {
        if (e.currentTarget.value !== '') e.currentTarget.focus();
    }

    return (
        <div className={classes.inputWrapper}>
            <label className={classes.label}>
                <input
                    type={'text'}
                    onChange={onChangeCallback}
                    onKeyPress={onKeyPressCallback}
                    className={finalInputClassName}
                    onBlur={onBlurInputHandler}

                    {...restProps}
                />
                <span className={classes.placeholder}>{placeholderName}</span>
            </label>
            {errorBox ? <div className={finalDivClassName}>{error}</div> : <></>}
        </div>
    )
}

