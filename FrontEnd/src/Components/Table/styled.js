import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 50px;
  justify-content: center;
  align-items: center;
`;

export const Graphics = styled.div`
  display: flex;
  width: 100%;
  margin: 50px;
  justify-content: space-between;
  align-items: center;
`;

export const Table = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  border: 1px solid rgba(0, 0, 0, 0.8);
`;

export const TableHead = styled.div`
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  background-color: lightgrey;
`;
export const TableRows = styled.div`
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
`;

export const ItemTable = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 10px;
  text-align: center;
`;