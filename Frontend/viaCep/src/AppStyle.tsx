import styled from 'styled-components';

interface IProps{
    imgBack: string
}

export const MainContainer = styled.div`
    height: 100vh;
    background: url(${(props: IProps) => props.imgBack});
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`