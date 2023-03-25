import styled from "styled-components";

export const Container = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: flex-start;
   height: 100vh;
   width: 100vw;
   aside {
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    border-radius: 0 2rem 2rem 0;
}
    nav {
        display: flex;
        flex-direction: column;
    }
    a {
        width: 100%;
        height: 50px;
    }
    

`
