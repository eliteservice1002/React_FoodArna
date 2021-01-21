import styled from 'styled-components';
export const StyledContainer = styled.div`
    width: 100%;
    height: 100vh;
    position:relative;
    display:flex;
    justify-content:center;
    align-items:center;
`;

export const OpacityLayer = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(${props => (
        props.background === 'mainmenu' ? './images/partPage/mainMenuBack.png' :
        props.background === 'authenticFood' ? './images/partPage/authenticFoodBack.png':
        props.background === 'onlineCookery' ? './images/partPage/onlineCookeryBack.png' :
        props.background === 'orderOnline1' ? './images/partPage/orderOnlineBack1.png' :
        props.background === 'orderOnline2' ? './images/partPage/orderOnlineBack2.png' :
        props.background === 'tryCook' ? './images/partPage/tryCookBack.png' :
        props.background === 'profile1' ? './images/partPage/profileBack1.png' :
        props.background === 'profile2_1' ? './images/partPage/profileBack2_1.png' :
        props.background === 'profile2_2' ? './images/partPage/profileBack2_2.png' :
        props.background === 'profile2_3' ? './images/partPage/profileBack2_3.png' :
        props.background === 'orderStatus' ? './images/partPage/orderStatusBack.png' :
        props.background === 'orderConfirm' ? './images/partPage/orderConfirmBack.png' :
        props.background === 'fiveStar' ? './images/partPage/fiveStarBack.png' :
        props.background === 'resell1' ? './images/partPage/resellBack1.png' :
        props.background === 'resell2' ? './images/partPage/resellBack2.png' :''
    )});
    background-repeat: ${props => (
        props.background === 'authenticFood' ? 'no-repeat' :
        props.background === 'onlineCookery' ? 'no-repeat' :
        props.background === 'orderOnline1' ? 'no-repeat' :
        props.background === 'orderOnline2' ? 'no-repeat' :
        props.background === 'profile2_1' ? 'no-repeat' :
        props.background === 'profile2_2' ? 'no-repeat' :
        props.background === 'profile2_3' ? 'no-repeat' :
        props.background === 'resell1' ? 'no-repeat' :
        props.background === 'resell2' ? 'no-repeat' :
                    'round'
    )};
    background-position: ${props => (
        props.background === 'authenticFood' ? 'top right' :
        props.background === 'orderOnline1' ? 'bottom right' :
        props.background === 'orderOnline2' ? 'bottom left' :
        props.background === 'profile2_1' ? 'top left' :
        props.background === 'profile2_2' ? 'bottom left' :
        props.background === 'profile2_3' ? 'top right' :
        props.background === 'resell1' ? 'top right' :
        props.background === 'resell2' ? 'bottom left' :    
        props.background === 'onlineCookery' ? 'top left' :''
    )};
    
    opacity: .4;
    position: absolute;
    @media (max-width: 599px) {
       height: 235vh;
    }
`;

export const HeroImage = styled.div`
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props => (
        props.img === 'list1' ? './images/partPage/mainMenu1.png':
        props.img === 'list2' ? './images/partPage/mainMenu2.png':
        props.img === 'list3' ? './images/partPage/mainMenu3.png':
        props.img === 'list4' ? './images/partPage/mainMenu4.png':
        props.sell === 'list1' ? './images/partPage/mainMenu1.png':
        props.sell === 'list2' ? './images/partPage/mainMenu2.png':
        props.sell === 'list3' ? './images/partPage/mainMenu3.png':
        props.sell === 'list4' ? './images/partPage/mainMenu4.png':
        props.img === 'orderOnline' ? './images/partPage/orderOnline.png':''
    )});
    height: 30vh;
    width: 70%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    border-radius: 5%;
    @media (max-width: 1280px) {
       width: 100%;
    }
    @media (max-width: 959px) {
       width: 120%;
    }
`;

export const PageTitleStyle = styled.div`
    border:2px solid #FCD652;
    border-radius: 25px;
    width: 950px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FCD652;
    color:  rgba(221,53,77,1);
    font-family: Montaga;
    font-style: normal;
    font-weight: normal;
    font-size: 150%;
    @media(max-width:1279px){
        font-size: 130%;
    }
    @media(max-width:959px){
        font-size: 80%;
        width: 600px;
    }
`;

export const BetH = styled.div`
    font-family: Montaga;
    font-style: normal;
    font-weight: normal;
    font-size: 47px;
    line-height: 58px;
    text-align: center;
    color: #DD354D;
    @media(max-width:959px){
        font-size: 150%;
    }
    @media(max-width:430px){
        font-size: 100%;
    }
`;


// export const ChefProfile = styled.div`
//     border: 1px solid rgb(221, 53, 77);
//     margin-top:15%;
//     border-radius:15px;
//     height:70%;
//     width:100%;
//     background-color:white;
// `;
export const ContainerOrderDivStyle = styled.div`
    border:2px solid #DD354D;
    display:flex;
    transform: scale(0.5);
    font-size:300%;
    border-radius: 35px;
    width: 120%;
    justify-content: center;
    align-items: center;
    height: 155%;
    @media(max-width:959px){
        font-size:240%;
        width: 543px;
        height: 120%;
        margin-top:0%
    }
`;

export const ContainerStatusDivStyle = styled.div`
    border:2px solid #DD354D;
    backgroundColor:${props => (props.state==='chef1Status'?'':'#DD354D')};
    display:flex;
    transform: scale(0.5);
    font-size:300%;
    border-radius:35px;
    width:60%;
    justify-content: space-around;
    align-items: center;
    height:140%;
    @media(max-width:959px){
        font-size:250%;
        width:100%;
        height:100%;
        margin-top:0%
    }
`;
export const OrderConfirmationDiv = styled.div`
    display:flex;
    fontFamily: Roboto;
    font-style: normal;
    font-weight: 500;
    color: black;
    font-size:150%;
    @media(max-width:959px){
        font-size:120%;
    }
`;

export const PayViewFont = styled.div`
    color: black;
    font-size: 200%;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    @media(max-width:959px){
        font-size:120%;
    }
`;

export const ButtonStyle = styled.div`
    fontFamily: Roboto;
    font-style: normal;
    font-weight: normal;
    width: 483px;
    border-radius: 20px;
    height: 89px;
    font-size: 35px;
    color:${props => (props.id==='addNew'?'#DD354D':'#FCD652')};
    border: 1px solid ${props => (props.id==='addNew'?'#464646':'#DD354D')};
    
    background-color: ${props => (props.id==='addNew'?'#ffffff':'#DD354D')};
    border-radius: 33px;
    fontSize:200%;
    display: flex;
    justify-content:center;
    align-items:center;
    @media(max-width:1279px){
        
        font-size: 150%;  
        height: 60px;
    }
    
`;

export const TitleFont = styled.div`
    font-size: 150%;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
`;

export const ContentFont = styled.div`
    font-size: 130%;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
`;

export const GoogleMapSearchResultErrorFont1 = styled.div`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 110%;
`;
export const GoogleMapSearchResultErrorFont2 = styled.div`
    font-family: Roboto;
    font-style: italic;
    font-weight: normal;
    font-size: 100%;
`;

export const RadioContainerStyledDiv = styled.div`
    border: 1px solid black;
    width: 70%;
    border-radius: 15px;
    justify-content: center;
    display: flex;
    margin-left: 15%;
    margin-top: 12%;
`;

export const MapDiv = styled.div`

    width: ${props => (props.stylePros==='thankyou'?'450px':props.stylePros === 'deliverylocation'? '300px':'')};
    height: ${props => (props.stylePros==='thankyou'?'450px':props.stylePros === 'deliverylocation'? '250px':'')};
    border-radius: 15px;
    @media(max-width:1279px){
        width: ${props => (props.stylePros==='thankyou'?'350px':'')};
        height: ${props => (props.stylePros==='thankyou'?'350px':'')};
        margin-top: 12%;
    }
    @media(max-width:959px){
        width: ${props => (props.stylePros==='thankyou'?'200px':'')};
        height: ${props => (props.stylePros==='thankyou'?'200px':'')};
        margin-top: 12%;
    }
    
    // width: props.id === 'thankyou'?450 : props.id === 'deliverylocation'? 300:'', height: props.id === 'thankyou'?450:props.id === 'deliverylocation'? 250:'', borderRadius: '15px'
`;

export const StyledComplainFont = styled.div`
    font-size: 150%;
    color: #DD354D;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    margin-top: 7%;
    @media(max-width:959px){
        font-size: 100%;
        margin-top: -50%;
    }
    
    @media(max-width:599px){
        margin-top: -25%;
    }    
`;

export const DeliveryProgressBTN = styled.div`
    border-radius: 25px;
    background-color: #DD354D;
    color: #FCD652;
    font-size: 150%;
    display: flex;
    justify-content: center;
    align-items: center;
    width:70%;
    height:60px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 200%;
    line-height: 37px;
    @media(max-width:959px){
        font-size: 100%;
        height: 50px;
        margin-top: -20%;
    }
    @media(max-width:344px){
        font-size: 80%;
        height: 50px;
    }
`;
