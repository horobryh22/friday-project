import React, { useState } from 'react';

import { ArrowDropDown } from '@mui/icons-material';
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TableSortLabel,
} from '@mui/material';

import { CardsListPropsType } from 'components/cartdList/types';
import { OrderDirectionType } from 'components/mainTableRow/types';
import s from 'pages/cards/Cards.module.css';
import { ReturnComponentType } from 'types';

export const CardsList = ({ cards }: CardsListPropsType): ReturnComponentType => {
    const [direction, setDirection] = useState<OrderDirectionType>('asc');

    const handleSort = (): void => {
        setDirection(direction === 'asc' ? 'desc' : 'asc');
    };

    return (
        <Paper sx={{ width: '100%' }} style={{ marginTop: '25px' }}>
            <TableContainer>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell className={s.tableHead}>Question</TableCell>
                            <TableCell className={s.tableHead}>Answer</TableCell>
                            <TableCell
                                className={`${s.tableHead} ${s.pointer}`}
                                onClick={handleSort}
                            >
                                <TableSortLabel
                                    active
                                    IconComponent={ArrowDropDown}
                                    direction={direction}
                                />
                                Last Updated(g)
                            </TableCell>
                            <TableCell className={s.tableHead}>Grade(g)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {cards.map(card => (
                            <TableRow
                                key={card._id}
                                sx={{
                                    '&:last-child td, &:last-child th': { border: 0 },
                                }}
                                hover
                            >
                                <TableCell component="th" scope="row">
                                    {card.question}
                                </TableCell>
                                <TableCell>{card.answer}</TableCell>
                                <TableCell>{card.updated}</TableCell>
                                <TableCell>{card.grade}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
};
