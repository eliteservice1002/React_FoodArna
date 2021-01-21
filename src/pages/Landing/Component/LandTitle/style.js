import styled from 'styled-components';

export const LandTitleContainer = styled.div`
    widhth:100%;
    height:60px;
    border-radius:70px;
    background-color:${(props) => props.color};
    display:flex;
    border:1px solid #464646;
`;

export const LandTitleText = styled.div`
    margin: auto;
    top:-10px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    line-height: 47px; 
    color: ${(props) => props.fontColor};
    text-decoration:${(props) => props.outline};
`;

export const LandTitleContainer1 = styled.div`
    widhth:100%;
    height:3vw;
    border-radius:70px;
    background-color:${(props) => props.color};
    display:flex;
    @media(max-width:768px){
        height: 5.3vw;
    }
    @media(min-width:769px){
        height: 4.3vw;
    }
    @media(min-width:1025px){
        height: 3.8vw;
    }
    @media(min-width:1280px){
        height: 2.8vw;
    }    
`;

export const LandTitleText1 = styled.div`
    margin: -24px auto;
    top:-10px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    line-height: 47px; 
    color: ${(props) => props.fontColor};
    text-decoration:${(props) => props.outline};
`;