import * as actionTypes from './constants';
// cart count start
export function AddCartIcon(cartVal) {
  return { type: actionTypes.ADDCARTICON, addCart: cartVal + 1 };
}

// user info start
export function ChangeEmail(emailval) {
  return { type: actionTypes.CHANGEEMAIL, email1: emailval };
}
export function ChangeUserName(val) {
  return { type: actionTypes.CHANGEUSERNAME, name1: val };
}
export function ChangeID(idval) {
  return { type: actionTypes.CHANGEID, id1: idval };
}

// another user info start
export function ChangeChefID(idval) {
  return { type: actionTypes.CHANGECHEFID, chef_id1: idval };
}

export function ChangeChefName(val) {
  return { type: actionTypes.CHANGECHEFNAME, chef_name1: val };
}

export function ChangeChefEmail(val) {
  return { type: actionTypes.CHANGECHEFEMAIL, chef_email1: val };
}

export function ChangeAvatarImg(val) {
  return { type: actionTypes.CHANGEAVATARIMG, avatar: val };
}

export function ChangeAddress(val) {
  return { type: actionTypes.CHANGEADDRESS, address1: val };
}

export function ChangeCity(val) {
  return { type: actionTypes.CHANGECITY, city1: val };
}

export function ChangeCountry(val) {
  return { type: actionTypes.CHANGECOUNTRY, country1: val };
}

export function ChangePostCode(val) {
  return { type: actionTypes.CHANGEPOSTCODE, postcode1: val };
}
// per food info start
export function ChangePerFoodId(val) {
  return { type: actionTypes.CHANGEPERID, food_id: val };
}

export function ChangePerFoodIdFlag(val) {
  return { type: actionTypes.CHANGEPERIDFLAG, food_id_flag: val };
}

export function ChangePerPotion(val) {
  return { type: actionTypes.CHANGEPERPORTION, portion: val };
}

export function ChangePerImg(val) {
  return { type: actionTypes.CHANGEPERIMG, img: val };
}

export function ChangePerCost(val) {
  return { type: actionTypes.CHANGEPERCOST, price: val };
}

export function ChangePerQuantity(val) {
  return { type: actionTypes.CHANGEPERQUANTITY, quantity: val };
}

export function ChangePerCuisine(val) {
  return { type: actionTypes.CHANGEPERCUISINENAME, cuisine: val };
}

export function ChangeCommentToChef(val) {
  return { type: actionTypes.CHANGECOMMENTTOCHEF, comment: val };
}

export function ChangePerRating(val) {
  return { type: actionTypes.CHANGEPERRATING, rating: val };
}

export function ChangeAuthen(val) {
  return { type: actionTypes.CHANGEAUTHEN, authen1: val };
}

// cart info start
export function ChangeCartFlag(val) {
  return { type: actionTypes.CHANGECARTFLAG, cartFlag1: val };
}

export function ChangeOrderData(val) {
  return { type: actionTypes.CHANGEORDERDATA, orderData1: val };
}

export function ChangeOrderImgData(val) {
  return { type: actionTypes.CHANGEORDERIMGDATA, orderimgData1: val };
}
// cart info end