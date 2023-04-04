import styled from "styled-components";

export const Container = styled.div`
  height: 250px;
  width: 100%;
  padding: 1rem;
  border: 0.5rem solid ${({theme})=> theme.COLORS.BACKGROUND_700};
  border-radius: 1rem;
`