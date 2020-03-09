import React from 'react';
import { ScoreBoardContainer, RowCodes } from './styled';

const ScoreBoard = ({data}) => <ScoreBoardContainer>
    Codigos
    {
        data.map((item) => <RowCodes>{Object.keys(item).map((keyElement) => `${keyElement} - ${item[keyElement]}`)}</RowCodes>)
    }
</ScoreBoardContainer>

export default ScoreBoard;