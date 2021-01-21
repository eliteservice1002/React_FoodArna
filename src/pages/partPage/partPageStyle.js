import styled from 'styled-components';
export const StyledContainer = styled.div`
    width: 100%;
    height: 100vh;
    position:relative;
    display:flex;
    justify-content:center;
    align-items:center;
    color:rgb(70, 70, 70);
`;

export const OpacityLayer = styled.div`
    width: ${props => (
        props.background === 'cookDetail2' ?  '30vh': '100%')};
    height: ${props => (
        props.background === 'cookDetail2' ?  '40vh': '100vh')};
    background-image: url(${props => (
        props.background === 'foodlist' ? './images/partPage/foodlist_bg.jpg' :
        props.background === 'profileBg' ? './images/partPage/profile_bg.png' :
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
        props.background === 'resell2' ? './images/partPage/resellBack2.png' : 
        props.background === 'cookDetail1' ? './images/partPage/cookDetail1Back.png' :
        props.background === 'cookDetail2' ? './images/partPage/cookDetail2Back.png' :''
        
    )});
    background-repeat: ${props => (
        props.background === 'foodlist' ? 'no-repeat' :
        props.background === 'authenticFood' ? 'no-repeat' :
        props.background === 'onlineCookery' ? 'no-repeat' :
        props.background === 'orderOnline1' ? 'no-repeat' :
        props.background === 'orderOnline2' ? 'no-repeat' :
        props.background === 'profile2_1' ? 'no-repeat' :
        props.background === 'profile2_2' ? 'no-repeat' :
        props.background === 'profile2_3' ? 'no-repeat' :
        props.background === 'resell1' ? 'no-repeat' :
        props.background === 'resell2' ? 'no-repeat' :
        props.background === 'cookDetail2' ? 'no-repeat' :    
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
    background-size: ${props => (
        props.background === 'foodlist' ? 'cover' :''
    )};
    
    opacity: .5;
    position: absolute;
    @media (max-width: 599px) {
       height: 235vh;
       display: ${props => (
        props.background === 'orderOnline2' ? 'none' :'orderOnline1'?'none':''
    )};
    }
    @media (max-width:959px){
        display:${props=>(
            props.background==='foodlist'?'none':''
        )};
    }
    @media (max-width:1279px){
        display:${props=>(
            props.background==='profile1'?'none':''
        )};
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
        props.img === 'orderOnlinefood' ? './images/partPage/orderOnline.png':
        props.img === 'orderOnlinechef' ? './images/partPage/tryCook4.png':''
    )});
    height: 30vh;
    width: ${props => (
        props.img === 'orderOnline' ? '30%':'60%')};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    border-radius: 5%;
    
    @media (max-width: 959px) {
       width: 60%;
    }
    
    
    
    margin-left: ${props => (
        props.img === 'list1' ? '6vw':
        props.img === 'list2' ? '0':
        props.img === 'list3' ? '6vw':
        props.img === 'list4' ? '0':
        props.sell === 'list1' ? '6vw':
        props.sell === 'list2' ? '0':
        props.sell === 'list3' ? '6vw':
        props.sell === 'list4' ? '0':'0'
    )};
    margin-right: ${props => (
        props.img === 'list1' ? '0':
        props.img === 'list2' ? '6vw':
        props.img === 'list3' ? '0':
        props.img === 'list4' ? '6vw':
        props.sell === 'list1' ? '0':
        props.sell === 'list2' ? '6vw':
        props.sell === 'list3' ? '0':
        props.sell === 'list4' ? '6vw':'0'
    )};
    margin-top: ${props => (
        props.img === 'list1' ? '4vh':
        props.img === 'list2' ? '4vh':
        props.img === 'list3' ? '2vh':
        props.img === 'list4' ? '2vh':
        props.sell === 'list1' ? '4vh':
        props.sell === 'list2' ? '4vh':
        props.sell === 'list3' ? '2vh':
        props.sell === 'list4' ? '2vh':'0'
    )};
    
    @media (max-width: 599px) {
        margin-left: ${props => (
            props.img === 'list1' ? '0':
            props.img === 'list2' ? '0':
            props.img === 'list3' ? '0':
            props.img === 'list4' ? '0':
            props.sell === 'list1' ? '0':
            props.sell === 'list2' ? '0': 
            props.sell === 'list3' ? '0': 
            props.sell === 'list4' ? '0':'0'
        )};
        margin-right: ${props => (
            props.img === 'list1' ? '0':
            props.img === 'list2' ? '0':
            props.img === 'list3' ? '0':
            props.img === 'list4' ? '0':
            props.sell === 'list1' ? '0':
            props.sell === 'list2' ? '0':
            props.sell === 'list3' ? '0':
            props.sell === 'list4' ? '0':'0'
        )};
        margin-top: ${props => (
            props.img === 'list1' ? '0':
            props.img === 'list2' ? '0':
            props.img === 'list3' ? '0':
            props.img === 'list4' ? '0':
            props.sell === 'list1' ? '0':
            props.sell === 'list2' ? '0':
            props.sell === 'list3' ? '0':
            props.sell === 'list4' ? '0':'0'
        )};
    } 
    &:hover {
        cursor: pointer;
        animation-name: example;
        animation-duration: 0.5s;
    
        @keyframes example {
          from {transform: scale(1);}
          to {transform: scale(1.03);}
        }
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
        width:860px;
    }
    @media(max-width:959px){
        font-size: 80%;
        width: 540px;
        height: 31px;
    }
    @media(max-width:555px){
        font-size: 100%;
        width:100%
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
    border:2px solid #e91e63;
    display:flex;
    // transform: scale(0.5);
    font-size:110%;
    border-radius: 35px;
    width: 70%;
    justify-content: center;
    align-items: center;
    cursor:pointer;
    background-color: #fff;
    padding:3%;
    margin:3% auto;
    box-shadow: 0px 5px 5px 2px rgba(55,26,26,0.12),0px 5px 5px 2px rgba(223,65,65,0.12),0px 5px 5px 2px rgba(185,174,174,0.12)
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
    // display:flex;
    transform: scale(0.5);
    font-size:300%;
    border-radius:35px;
    // width:60%;
    padding:5%;
    justify-content: space-around;
    align-items: center;
    height:65%;
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
    @media(max-width:959px){
        font-size: 130%;
    }
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
        width: ${props => (props.stylePros==='thankyou'?'200px':props.stylePros === 'deliverylocation'?'90%':'')};
        height: ${props => (props.stylePros==='thankyou'?'200px':props.stylePros === 'deliverylocation'?'190px':'')};
        margin-top: ${props => (props.stylePros === 'deliverylocation'?'95%':'22%')};
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

export const cookDetailBtnRow = styled.div`
    margin-top: 5%;
`;

export const ChefNameDiv = styled.div`
    color: black;
    font-size: 18px;
    display: flex;
    align-items: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    @media(max-width:959px){
        font-size: 100%;
        
    }
`;

export const ProfileLink = styled.div`
    @media(max-width:959px){
        font-size: 80%;
    }
`;

export const ChefRank = styled.div`
    color: black;
    display: flex;
    justify-content: center;
    align-item: center;
    margin-top: 5%;
    margin-bottom: 5%;
    font-size: 100%;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    @media(max-width:959px){
        font-size: 80%;
    }
`;

export const CookDetailDiv = styled.div`
    font-size: 130%;
    @media(max-width:959px){
        font-size: 150%;
    }
`;

export const MenuTitleDiv = styled.div`
    @media(max-width:959px){
        font-size: 50%;
    }
`;

export const ImgDivStyled = styled.div`
    @media(max-width:959px){
        width: 90%;
    }
`;

export const StyledFoodTotalTitle = styled.div`
    margin-top : 45%;
    @media(max-width:959px){
        margin-top : 19%;
    }
`;

export const StyledSearchDiv = styled.div`
    border: 1px solid black;
    width: 300px;
    height: 200px;
    border-radius: 15px;
    @media(max-width:959px){
        width: 200px;
        height: 170px;
    }
`;

export const DeliveryLocationInfoFont = styled.div`
    color: black;
    font-size: 100%;
    @media(max-width:959px){
        font-size: 90%;
    }
`;

export const SearchResultStyledDiv = styled.div`
    padding: 15px;
    @media(max-width:959px){
        font-size: 80%;
    }
`;
