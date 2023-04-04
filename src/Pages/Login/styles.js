import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    width: 100vw;
    padding-top: 9.5%;
    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        border: 2px solid ${({theme}) => theme.COLORS.BACKGROUND_500};
        border-radius: 1rem;
        padding: 1.5rem;
        width: 50rem;
        margin-top: 3rem;
        text-align: center;
    }
    p {
      font-size: 1.35rem;
      margin-top: 1.5rem;
    }
    a {
      text-decoration: none;
      color: ${({theme}) => theme.COLORS.BACKGROUND_E_500};
    }
    a:hover {
      font-weight: bold;
    }

    
`

