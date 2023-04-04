import styled from "styled-components";
import { Dialog } from "@headlessui/react";

export const Overlay = styled.div `
    position: fixed;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.4rem;
    background-color: #00000050;
`
export const Panel = styled(Dialog.Panel)`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 75rem;
    height: 50rem;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    border-radius: 0.4rem;
    padding: 3rem;
    text-align: center;
`

export const StyledButton = styled(Button)`
    width: 13.5rem;
`

export const Title = styled(Dialog.Title)`
    font-size: 2.5em;
`
