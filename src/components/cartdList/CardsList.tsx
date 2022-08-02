import React from 'react';

import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@mui/material';

import { CardsListPropsType } from 'components/cartdList/types';
import s from 'pages/cards/Cards.module.css';
import { ReturnComponentType } from 'types';

export const CardsList = ({ cards }: CardsListPropsType): ReturnComponentType => {
    return (
        <Paper sx={{ width: '100%' }} style={{ marginTop: '25px' }}>
            <TableContainer>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell className={s.tableHead}>Question</TableCell>
                            <TableCell className={s.tableHead}>Answer</TableCell>
                            <TableCell className={s.tableHead}>Last Updated(g)</TableCell>
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
