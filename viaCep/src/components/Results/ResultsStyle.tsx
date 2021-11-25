import styled from "styled-components";

export const ResulstContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 80px 0;
    align-items: center;

    @media (max-width: 375px) {
        padding: 40px;
    }

    a {
        margin-top: 24px;
    }

    p {
        max-width: 80%;
        text-align: center;
    }
`

export const BackButton = styled.button`
    padding: 8px 16px;
    border-radius: 4px;
    margin-top: 32px;
    cursor: pointer;
    color: #fff;
    background-color: #029AFF;
    font-size: 18px;
`