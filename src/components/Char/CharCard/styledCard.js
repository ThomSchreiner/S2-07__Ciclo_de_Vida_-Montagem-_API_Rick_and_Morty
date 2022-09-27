import styled, { css } from "styled-components"

export const StyledCard = styled.li`
    ${({ status }) => {
        switch (status) {
            case "Alive":
                return css`
                    background-color:#a4c4ff;
                    p { color: #386dcd; }
                `
            case "Dead":
                return css`
                background-color:#ff3a3a;
                    p { color: #ffe0e0; }
               
                `
            default:
                return css`
                background-color:#afb0b5;
                    p { color: #3d3d41; }
                `


        }
    }}

    padding: 12px 24px;
    transition: 0.2s;

    &:hover {
        filter: brightness(0.9);
    }

    p {
        font-size: 20px;
        font-weight: 500;
        margin-bottom: 12px;
    }
    
    img {
        width: 200px;
    }
   
`