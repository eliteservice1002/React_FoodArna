import styled from "styled-components";

export const LabelContainer = styled.div`
    width: 100%;
    height: 154px;
    background: #fac947;
    border-radius: 60px;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    margin-top:3%;
`;

export const Label1 = styled.div`
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 35px;
    line-height: 41px;
    text-align: center;
    color: #dd354d;
`;

export const Label2 = styled.div`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    @media (max-width:1600x){
        font-size: 20px;
    }
    @media (min-width:1600x){
        font-size: 35px;
    }
    line-height: 41px;
    text-align: center;
    
    color: #464646;

`;