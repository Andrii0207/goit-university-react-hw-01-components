import styled from 'styled-components';

export const Table = styled.table`
width:300px;
`

export const TableHead = styled.thead`
height: 70px;
background-color: darkslateblue;
color: white;
font-size: 20px;
`

export const TableBody = styled.tbody`
color:  darkslateblue;
`

export const TableItem = styled.tr`
background-color: lavender;

&:nth-child(odd) {
background-color: white;
}
`

export const TableUnit = styled.td`
padding: 10px;

`