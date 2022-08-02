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
import { useAppDispatch } from 'hooks';
import s from 'pages/cards/Cards.module.css';
import { setCardsSearchParamsAC } from 'store/actions/cards';
import { fetchCards } from 'store/middlewares';
import { ReturnComponentType } from 'types';

export const CardsList = ({
    cards,
    cardsPack_id,
}: CardsListPropsType): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const [direction, setDirection] = useState<OrderDirectionType>('asc');
    const updateFieldName = 'updated';

    const handleSort = (): void => {
        const sortCards =
            direction === 'asc' ? `1${updateFieldName}` : `0${updateFieldName}`;

        setDirection(direction === 'asc' ? 'desc' : 'asc');
        dispatch(setCardsSearchParamsAC({ cardsPack_id, sortCards }));
        dispatch(fetchCards({ cardsPack_id, sortCards }));
    };

    if (cards.length === 0) {
        return <h3>Oops, cards not added yet</h3>;
    }

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
