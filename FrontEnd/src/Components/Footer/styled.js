import styled from "styled-components";
import rodape from "../../Assets/imagens/rodape-desktop.jpg";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-image: url(${rodape});
  width: 100vw;
  height: 30vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: lighter;
  color: white;
  width: 100%;
`;
