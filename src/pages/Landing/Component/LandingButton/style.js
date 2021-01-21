import styled from 'styled-components';

export const ButtonStyle = styled.div`
    width: 100%;
    height: 68px;
    border: ${(props)=>props.border};
    box-sizing: border-box;
    border-radius: 49px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color:${(props)=>props.backColor}
`;

export const ButtonText = styled.div`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    line-height: 37px;
    color: ${(props)=>props.fontColor};
`;