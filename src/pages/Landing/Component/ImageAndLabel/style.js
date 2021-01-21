import styled from 'styled-components';

export const TotalContainer = styled.div`
    width:100%;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media(max-width: 959px){
        flex-direction:row;
    }
`;

export const ImageContainer = styled.img`
    width:80%;
    border-radius: 30px;
    object-fit: fill;
    src: ${(props)=>props.src};
    @media(max-width:767px){
        width:40%;
        margin-top:5vh;
    }

    @media(min-width:768px){
        width:35%;
        margin-top:3vh;
    }
    @media(min-width:960px){
        width:90%;
        margin-top:3vh;
    }
`;

export const ImageLabel = styled.div`
    width: 80%;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    line-height: 37px;
    text-align: center;
    color: #fac947;
`;