import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  aside {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    height: 100%;
    width: 30rem;
    border-radius: 0 2rem 2rem 0;
    padding: 0 2rem;
    > button {
      position: absolute;
      bottom: 3.5rem;
      width: 80%;
    }
  }
  nav {
    display: flex;
    flex-direction: column;
  }
  a {
    width: 100%;
    height: 50px;
  }
  section {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    margin-left: 30rem;
    padding: 2rem;
  }
  header {
    width: 100%;
    font-size: 2.5em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
      color: #ffffff;
      font-family: "Inter";
      font-weight: bold;
      padding: 1rem;
      width: 15rem;
      font-size: 20px;
      background-color: transparent;
      border: none;
      border: 1px solid #35bd78;
      border-radius: 9px;
      background: #35bd78;
    }
  }
  .note-wrapper {
    width: 100%;
    border: 0.5rem solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
    border-radius: 1rem;
    padding: 1rem;
    justify-content: center;
    overflow-y: scroll;
  }
  .notes {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    flex-wrap: wrap;
    gap: 1rem 1rem;
  }
`;
