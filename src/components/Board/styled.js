import styled from 'styled-components';
import Map from '../../onlyMap.jpg';
import { Paper } from '@material-ui/core';

export const BoardContainer = styled(Paper)`
   width: 1450px; 
   height: 1000px; 
   position: relative; 
   /* background: red;  */
   display: flex; 
   flex-wrap: wrap;
   /* background: url(${Map}); */
   background-size: cover;
   /* background: black; */
`;
