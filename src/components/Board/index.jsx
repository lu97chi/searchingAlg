import React from 'react';
import { BoardContainer } from './styled';

const Board = ({children}) => <BoardContainer>
    {children}
</BoardContainer>;

export default Board;