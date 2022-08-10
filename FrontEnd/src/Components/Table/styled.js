import styled from "styled-components";

export const Content = styled.div`
 font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-seriff;
  display: flex;
  flex-direction: column;
  margin: 50px 50px 50px 100px;
  align-items: center;
  
  h1 {
    align-items: center;
    text-align: center;
    color: #29abe2;
  }

  @media screen and (max-width: 480px) {
      
  } ;
`;

export const Graphics = styled.div`
  width: 100%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const TableStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const TableHead = styled.div`
  display: grid;
  grid-template-columns: 10% 20% 20% 20% 20%;
  color: #012d51;
 
  @media (max-width: 768px) {
    width: 600px;
  }

  @media screen and (max-width: 480px) {
    display: none;
  } ;
`;

export const TableRows = styled.div`
  display: grid;
  grid-template-columns: 10% 20% 20% 20% 20%;

  @media (max-width: 768px) {
    width: 600px;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
    display: none;
    display: flex;
    flex-direction: column;
    padding: 4px;
  } ;
`;

export const NameTable = styled.div`
 
  padding: 12px;
  text-align: center;
  color: #012d51;

  @media (max-width: 768px) {
    padding: 10px
  }

  @media screen and (max-width: 480px) {
    width: 80%;
    display: none;
    display: flex;
    flex-direction: column;
   
  } ;
  `;

export const NameTable1 = styled.div`

border-right: 1px solid #29abe2;
border-left: 1px solid #29abe2 ;
padding: 12px;
text-align: center;
color: #012d51;

@media (max-width: 768px) {
  padding: 10px;
  
}

@media screen and (max-width: 480px) {
  width: 80%;
  display: none;
  display: flex;
  flex-direction: column;
  border: 1px solid #29abe2;
 
} ;
`;

export const NameTable2 = styled.div`

border-right: 1px solid #29abe2;
padding: 12px;
text-align: center;
color: #012d51;

@media (max-width: 768px) {
  padding: 10px
}

@media screen and (max-width: 480px) {
  width: 80%;
  display: none;
  display: flex;
  flex-direction: column;
  border: 1px solid #29abe2;
 
} ;
`;

export const NameTable3 = styled.div`

border-right: 1px solid #29abe2;
padding: 12px;
text-align: center;
color: #012d51;

@media (max-width: 768px) {
  padding: 10px
}

@media screen and (max-width: 480px) {
  width: 80%;
  display: none;
  display: flex;
  flex-direction: column;
  border: 1px solid #29abe2;
 
} ;
`;

export const NumberTable = styled.div`
  border-top: 1px solid #29abe2;
  text-align: center;
  color: #012d51;

  @media (max-width: 768px) {
    padding: 10px
  }

  @media screen and (max-width: 480px) {
    width: 80%;
    display: none;
    display: flex;
    flex-direction: column;
    border: 1px solid #29abe2;
    background-color: #f5f5f5;
   
  } ;
  `;

export const ItemTable = styled.div`
  border: 1px solid #29abe2;
  border-bottom: none;
  border-right: none;
  padding: 12px;
  text-align: center;
  color: #808080;

  @media (max-width: 768px) {
    padding: 10px
  }

  @media screen and (max-width: 480px) {
    width: 80%;
    display: none;
    display: flex;
    flex-direction: column;
    border: 1px solid #29abe2;
   
  } ;
`;

export const ItemTable1 = styled.div`
  border: 1px solid #29abe2;
  border-right: none;
  border-bottom: none;
  padding: 12px;
  text-align: center;
  color: #808080;

  @media (max-width: 768px) {
    padding: 10px
  }

  @media screen and (max-width: 480px) {
    width: 80%;
    display: none;
    display: flex;
    flex-direction: column;
    border: 1px solid #29abe2;
   
  } ;
`;

export const ItemTable2 = styled.div`
  border: 1px solid #29abe2;
  border-bottom: none;
  border-right: none;
  padding: 12px;
  text-align: center;
  color: #808080;

  @media (max-width: 768px) {
    padding: 10px;
  }

  @media screen and (max-width: 480px) {
    width: 80%;
    display: none;
    display: flex;
    flex-direction: column;
    border: 1px solid #29abe2;
   
  } ;
`;

export const ContainerScroll = styled.div`
  display: flex;
  justify-content: end;
  align-items: flex-end;
  padding: 0 3% 3% 0;
`;

