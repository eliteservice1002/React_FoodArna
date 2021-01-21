import iconCap from '../../../assets/images/icon_cap.png';
import iconHouse from '../../../assets/images/icon_house.png';
import iconPlay from '../../../assets/images/icon_play.png';
import land21 from '../../../assets/images/Landing2-1.svg';
import land22 from '../../../assets/images/Landing2-2.svg';
import land23 from '../../../assets/images/Landing2-3.svg';
import land24 from '../../../assets/images/Landing2-4.svg';
import land25 from '../../../assets/images/Landing2-5.svg';
import land26 from '../../../assets/images/Landing2-6.svg';
import iconHand from '../../../assets/images/icon_hand.png';
import iconHeart from '../../../assets/images/icon_heart.png';
import iconBack from '../../../assets/images/icon_back.png';
import land51 from '../../../assets/images/land51.svg';
import land52 from '../../../assets/images/land52.svg';
import land53 from '../../../assets/images/land53.svg';

export const backContainerSize=['1240px']

export const constants={
    'bannerTitle':'Welcome to the world’s largest network of Food Lovers',
    'dropMenu':[
        {'src': iconHouse, 'title':'Consumer Services'},
        {'src': iconCap, 'title':'Cheff Services'},
        {'src': iconPlay, 'title':'Delivery'}
    ],
    'oneStop':'One Stop Shop of Food Lovers',
    'tileImage':[
        {'src':land21, title:'Landing2-1'},
        {'src':land22, title:'Landing2-2'},
        {'src':land23, title:'Landing2-3'},
        {'src':land24, title:'Landing2-4'},
        {'src':land25, title:'Landing2-5'},
        {'src':land26, title:'Landing2-6'}
    ],
    'tileImageIcon':[iconHand, iconHeart, iconBack],
    'audienceLabel':['Food lovers / Food Enthusiasts / Expats who want to eat authentic national food.',
                     'People who love to share photos, videos, receipes, real - time broadcast cookery shows online',
                     'People who want to buy homemade food (instead ordering food from Commercial kitchens like restaurant)',
                     'Food Companies that want to advertise their ingredients & food products to be used by Home Chefs of FOODARNA'],
    'imageAndlabel':[
        {src:land51, text:' Foodarna provides a 5 STAR experience of socializing with home Chefs directly'},
        {src:land52, text:'Foodarna tells the customer the story about the food they are eating'},
        {src:land53, text:' Home (Sellers) can announce the start of their cooking, share live streaming videos, take orders and Foodarna Delivery Crew will deliver it Hot & fresh to the customer’s address'}
    ],
    'landing6label':[
        {label1:'502', label2:'Clients'},
        {label1:'635', label2:'Foods'},
        {label1:'36', label2:'Orders'},
        {label1:'723', label2:'Recommended'},
    ],
}

export const OrderStatusData = [
    {
        'order':'17:00pm',
        'name':'TomeHolmen',
        'location':'Kaista',
        'quantity':'2 Plates'
    },
    {
        'order':'17:25pm',
        'name':'SureshTripathi',
        'location':'Tyresso',
        'quantity':'5 Plates'
    }
]