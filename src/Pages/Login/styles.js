import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        border: 2px solid ${({theme}) => theme.COLORS.BACKGROUND_500};
        border-radius: 1rem;
        padding: 1.5rem;
        width: 50rem;
        text-align: center;
    }
    
`

