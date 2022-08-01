import React from 'react';

import edit from 'assets/images/edit.svg';
import knowledge from 'assets/images/knowledge.svg';
import remove from 'assets/images/remove.svg';
import { ReturnComponentType } from 'types';

export const ActionImages = (): ReturnComponentType => {
    return (
        <div>
            <img
                src={remove}
                style={{
                    marginRight: '15px',
                }}
                alt="remove"
            />
            <img
                src={edit}
                style={{
                    marginRight: '15px',
                }}
                alt="edit"
            />
            <img src={knowledge} alt="knowledge" />
        </div>
    );
};
