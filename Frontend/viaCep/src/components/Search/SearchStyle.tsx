import styled from 'styled-components';

export const SearchArea = styled.section `
    background-color: #00497a;
    padding: 32px 0;
    width: 100%;
    font-size: 32px;
    color:#fff;
    font-weight: 700;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    p {
        margin: 16px;

        @media (max-width: 768px) {
            font-size: 24px;
            text-align: center;
        }
    }
    
`

export const Container = styled.div `
    width: 100%;
    height: 100%;
`

export const Button = styled.button `
    padding: 12px 16px;
    border-radius: 4px;
    font-weight: 700;
    cursor: pointer;
    background-color: #002e4d;
    color: #fff;
    margin-top: 6px;

    :hover {
        background-color: #06273d;
    }
`

export const LastSearchArea = styled.section `
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    padding-top: 40px;
    
    @media (max-width: 768px) {
        gap: 20px;
        padding-top: 20px;
    }
`

export const CardsArea = styled.section `
    display: flex;
    gap: 20px;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 10px;
    }
`

export const SearchCard = styled.div `
    background-color: #195cd8;
    width: 200px;
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    padding: 16px;
    border-radius: 8px;
    color: #fff;
    cursor: pointer;
`