import styled from 'styled-components';
import { Paper } from '@material-ui/core';

export const ScoreBoardContainer = styled(Paper)`
    display: flex;
    width: 220px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const RowCodes = styled.span`
    margin: 5px;
    color: orange;
`;