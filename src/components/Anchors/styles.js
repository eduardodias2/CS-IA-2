import styled from "styled-components";

export const Container = styled.div`
    a {
        text-decoration: none;
        color: ${({theme}) => theme.COLORS.FONT_200};
}
    button {
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
        border: none;

    }
`