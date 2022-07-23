import React, { ChangeEvent, useState } from 'react';

import { Checkbox } from '../../../common/components/checkbox/Checkbox';
import { Input } from '../../../common/components/input/Input';

import classes from './TestPage.module.css';

import { ReturnComponentType } from 'types';

export const TestPage = (): ReturnComponentType => {
    // input data
    const [text, setText] = useState<string>('');
    const [error, setError] = useState<null | string>(null);

    const showAlert = (): void => {
        if (text.trim()) {
            alert(text);
        } else {
            setError('Your password is not correct');
            alert('Your password is not correct');
        }
        setText('');
    };

    // checkbox data
    const [checked, setChecked] = useState<boolean>(true);
    const testOnChange = (e: ChangeEvent<HTMLInputElement>): void =>
        setChecked(e.currentTarget.checked);

    return (
        <div className={classes.wrapper}>
            <h3>Button:</h3>
            <h3>Input:</h3>
            <Input
                value={text}
                onChangeText={setText}
                onChangeError={setError}
                onEnter={showAlert}
                error={error}
                errorBox
                placeholderName="Enter your password"
                divClassName={classes.testSpanError}
            />
            <h3>Checkbox:</h3>
            <Checkbox onChange={testOnChange} checked={checked}>
                Active
            </Checkbox>
        </div>
    );
};
