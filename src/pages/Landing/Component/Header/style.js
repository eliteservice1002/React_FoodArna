import styled from 'styled-components';

export const StyledHeader=styled.div`
    display:flex;
    justify-content:space-between;
    z-index:5;
    position: fixed;
    top:0;
    left:0;
    width:100%;
    padding:20px 48px 0 48px;
    @media(min-width:1250px){
        flex-direction:row;
    }
    @media(max-width:992px){
        flex-direction:row;
    }
    @media(max-width:767px){
        flex-direction:column;
    }
`;