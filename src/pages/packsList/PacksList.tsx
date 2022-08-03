import React from 'react';

import { CardsTopContent, CustomPagination, Search, TableComponent } from 'components';
import { ReturnComponentType } from 'types';

export const PacksList = (): ReturnComponentType => {
    return (
        <>
            <Search />
            <CardsTopContent title="Packs list" buttonName="Add new pack" isButtonNeed />
            <TableComponent />
            <CustomPagination />
        </>
    );
};
