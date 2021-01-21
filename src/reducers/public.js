
import * as actionTypes from './constants';
export const initialState = {
    // autho state
    authen: "",
    // cart count state
    phoneIcon: 0,
    userIcon: 0,
    addCartIcon: 0,
    mailIcon: 0,
    // user info
    email: '',
    id: 0,
    user_name: '',
    avatarimg: '',
    address: '',
    city: '',
    country: '',
    postcode: '',
    // another user info
    chef_id: 0,
    chef_name: '',
    chef_email: '',
    // per food info
    food_per_id: 0,
    food_per_id_flag: 0,
    food_per_portion: '',
    food_per_img: '',
    food_per_price: 0,
    food_per_quantity: 0,
    food_per_cuisine: '',
    comment_to_chef: '',
    // cart info start
    cartFlag: false,
    orderData: [],
    orderimgData: []
    // cart info end
}

export default function (state = initialState, action) {
    switch (action.type) {
        // authen start
        case actionTypes.CHANGEAUTHEN:
            return {
                ...state,
                authen: action.authen1,
            }
            break;
        // cartcount start
        case actionTypes.ADDCARTICON:
            return {
                ...state,
                addCartIcon: action.addCart,
            }
            break;
        // cartcount end
        // user info start
        case actionTypes.CHANGEEMAIL:
            return {
                ...state,
                email: action.email1,
            }
            break;
        case actionTypes.CHANGEUSERNAME:
            return {
                ...state,
                user_name: action.name1,
            }
            break;
        case actionTypes.CHANGEID:
            return {
                ...state,
                id: action.id1,
            }
            break;
        case actionTypes.CHANGEAVATARIMG:
            return {
                ...state,
                avatarimg: action.avatar,
            }
            break;
        case actionTypes.CHANGEADDRESS:
            return {
                ...state,
                address: action.address1,
            }
            break;
        case actionTypes.CHANGECITY:
            return {
                ...state,
                city: action.city1,
            }
            break;
        case actionTypes.CHANGECOUNTRY:
            return {
                ...state,
                country: action.country1,
            }
            break;
        case actionTypes.CHANGEPOSTCODE:
            return {
                ...state,
                postcode: action.postcode1,
            }
            break;
        // user info end
        // another user info start
        case actionTypes.CHANGECHEFID:
            return {
                ...state,
                chef_id: action.chef_id1,
            }
        case actionTypes.CHANGECHEFNAME:
            return {
                ...state,
                chef_name: action.chef_name1,
            }
            break;
        case actionTypes.CHANGECHEFEMAIL:
            return {
                ...state,
                chef_email: action.chef_email1,
            }
            break;
        // another user info end
        // per food info start
        case actionTypes.CHANGEPERID:
            return {
                ...state,
                food_per_id: action.food_id,
            }
            break;
        case actionTypes.CHANGEPERIDFLAG:
            return {
                ...state,
                food_per_id_flag: action.food_id_flag,
            }
            break;
        case actionTypes.CHANGEPERPORTION:
            return {
                ...state,
                food_per_portion: action.portion,
            }
            break;
        case actionTypes.CHANGEPERIMG:
            return {
                ...state,
                food_per_img: action.img,
            }
            break;
        case actionTypes.CHANGEPERCOST:
            return {
                ...state,
                food_per_price: action.price,
            }
            break;
        case actionTypes.CHANGEPERQUANTITY:
            return {
                ...state,
                food_per_quantity: action.quantity,
            }
            break;
        case actionTypes.CHANGEPERCUISINENAME:
            return {
                ...state,
                food_per_cuisine: action.cuisine,
            }
            break;
        case actionTypes.CHANGECOMMENTTOCHEF:
            return {
                ...state,
                comment_to_chef: action.comment,
            }
            break;
        case actionTypes.CHANGEPERRATING:
            return {
                ...state,
                per_rating: action.rating,
            }
            break;
        // per food info end
        // cart info start
        case actionTypes.CHANGECARTFLAG:
            return {
                ...state,
                cartFlag: action.cartFlag1,
            }
            break;
        case actionTypes.CHANGEORDERDATA:
            return {
                ...state,
                orderData: action.orderData1,
            }
            break;
        case actionTypes.CHANGEORDERIMGDATA:
            return {
                ...state,
                orderimgData: action.orderimgData1,
            }
            break;
        // cart info end
        default:
            return state
    }
}