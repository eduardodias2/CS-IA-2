import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  input {
    background-color: transparent;
    border: 0.1rem solid ${({ theme }) => theme.COLORS.BACKGROUND_500};
    border-radius: 100px;
    margin-bottom: 2rem;
    padding: 1rem 1.5rem;
    color: ${({theme}) => theme.COLORS.FONT_100};
    width: 100%;
  }

  input:focus {
    outline: none;
    border-color: ${({theme}) => theme.COLORS.BACKGROUND_E_700};
  }
  label {
    font-size: 1.6rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }
`;
