import React, {ChangeEvent, useState} from 'react';
import {Button} from '../../../common/components/button/Button';
import classes from './TestPage.module.css';
import {Input} from '../../../common/components/input/Input';
import {Checkbox} from '../../../common/components/checkbox/Checkbox';

export const TestPage = () => {

    //input data
    const [text, setText] = useState<string>('');
    const [error, setError] = useState<null | string>(null);

    const showAlert = () => {
        if (text.trim()) {
            alert(text);
        } else {
            setError('Your password is not correct');
            alert('Your password is not correct');
        }
        setText('');
    }

    //checkbox data
    const [checked, setChecked] = useState<boolean>(true);
    const testOnChange = (e: ChangeEvent<HTMLInputElement>) => setChecked(e.currentTarget.checked);

    return (
        <div className={classes.wrapper}>
            <h3>Button:</h3>
            <Button>Click me!</Button>
            <h3>Input:</h3>
            <Input
                value={text}
                onChangeText={setText}
                onChangeError={setError}
                onEnter={showAlert}
                error={error}
                errorBox
                placeholderName={'Enter your password'}
                divClassName={classes.testSpanError}
            />
            <h3>Checkbox:</h3>
            <Checkbox
                onChange={testOnChange}
                checked={checked}
            >Active</Checkbox>
        </div>
    );
};
