import React, { useState } from 'react';

import { ArrowDropDown } from '@mui/icons-material';
import { TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material';

import { PACK_COLUMNS } from 'constant';
import { ReturnComponentType } from 'types';

export const MainTableRow = (): ReturnComponentType => {
    const [orderDirection, setOrderDirection] = useState<'asc' | 'desc'>('asc');

    const handleSortRequest = (): void => {
        setOrderDirection(orderDirection === 'asc' ? 'desc' : 'asc');
    };

    return (
        <TableHead>
            <TableRow>
                {PACK_COLUMNS.map(column => {
                    return (
                        <TableCell
                            onClick={handleSortRequest}
                            key={column.id}
                            style={{
                                background: 'rgb(239,239,239)',
                                fontWeight: '600',
                                fontSize: '14px',
                                lineHeight: '17px',
                            }}
                            align={column.align}
                            padding="normal"
                            width={column.minWidth}
                        >
                            {column.label !== 'Actions' &&
                            column.label !== 'Created by' ? (
                                <TableSortLabel
                                    active
                                    direction={orderDirection}
                                    IconComponent={ArrowDropDown}
                                >
                                    {column.label}
                                </TableSortLabel>
                            ) : (
                                column.label
                            )}
                        </TableCell>
                    );
                })}
            </TableRow>
        </TableHead>
    );
};
