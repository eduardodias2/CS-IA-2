import styled from "styled-components";

export const Container = styled.div`
    button {
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_E_700};
        padding: 1rem 2rem;
        border: none;
        color: ${({theme})=> theme.COLORS.FONT_300};
        border-radius: 1rem;
    }
`
