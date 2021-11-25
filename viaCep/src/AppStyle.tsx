import styled from 'styled-components';

interface IProps{
    height: number
}

export const MainContainer = styled.div`
    min-height: ${(props: IProps) => props.height}px;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Raleway', sans-serif;
    position: relative;
`