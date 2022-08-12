import styled from "styled-components";

export const SearchContainer = styled.div`
  border: solid 1px black;
  display: flex;
  padding: 3%;
  margin: 3%;
  justify-content: space-between;
  background-color: whitesmoke;
`

export const SearchInputs = styled.div`
display: flex;
margin-left: 2%;

`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Graphics = styled.div`
  display: flex;
  align-items: center;
`;

export const Table = styled.div`
`;

export const TableHead = styled.div`
  display: grid;
  grid-template-columns: 19% 19% 19% 19% 24%;
  background-color: lightgrey;
`;

export const TableRows = styled.div`
  display: grid;
  grid-template-columns: 19% 19% 19% 19% 24%;
`;

export const ItemTable = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 12px;
  text-align: center;
`;


