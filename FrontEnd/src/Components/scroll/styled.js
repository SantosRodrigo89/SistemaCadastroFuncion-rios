import styled from "styled-components";

export const IconImage = styled.img`
    
    display: flex;
    justify-content: end;
    width: 40px;
    
    margin-right: 10px;
    cursor: pointer;
    position: fixed;
    right: 3%;
    bottom: 40px;

    &:hover {
        opacity: 0.7;
    }

    &:active {
        opacity: none;
    }

    &:focus {
        outline: none;
    }

`;
