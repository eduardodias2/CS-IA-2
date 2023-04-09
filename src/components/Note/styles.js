import styled from "styled-components";

export const Container = styled.div`
  height: 250px;
  width: 100%;
  padding: 1rem;
  border: 0.5rem solid ${({theme})=> theme.COLORS.BACKGROUND_700};
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h2 {
    font-size: 2rem;
  }

  p {
    font-size: 1.6rem;
  }
`