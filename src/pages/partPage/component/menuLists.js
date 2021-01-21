import React from "react";
import { HeroImage} from "./../partPageStyle";
import { makeStyles } from "@material-ui/core";

const heroText = {
    textAlign: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
    width: '100%'
}

const useStyle=makeStyles({
    menuTitle:{
        fontFamily: 'Montaga',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '250%',
        lineHeight: '59px',
        color: '#FCD652',
        "@media (max-width: 959px)": {  fontSize: '30px' }
    },
    menuDetail:{
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '180%',
        lineHeight: '41px',
        color: '#FFFFFF',
        "@media (max-width: 959px)": {  fontSize: '22px' }
    }
})

export default function MenuLists(props) {
    const classes=useStyle();
        return (
            <HeroImage img={props.img} sell={props.sell}>
                <div style={heroText}>
                    <h1 className={classes.menuTitle}>{props.img === 'list1'?'Order Online':
                                           props.img === 'list2'?'Reserve':
                                           props.img === 'list3'?'Learn':
                                           props.img === 'list4'?'Date':
                                           props.img === 'orderOnlinechef'?'Order Online':
                                           props.img === 'orderOnlinefood'?'Order Online':
                                           props.sell === 'list1'?'Sell Online':
                                           props.sell === 'list2'?'Share or Gift':
                                           props.sell === 'list3'?'Teach':
                                           props.sell === 'list4'?'Culinary Event':''}</h1>
                    <p className={classes.menuDetail}>{props.img === 'list1'?'from your favourite chef':
                                           props.img === 'list2'?'a culture experience':
                                           props.img === 'list3'?'from your favourite chef':
                                           props.img === 'list4'?'looking for a cooking date':
                                           props.sell === 'list1'?'to your loyal customers':
                                           props.sell === 'list2'?'your family and freinds':
                                           props.sell === 'list3'?'make your cuisine viral':
                                           props.sell === 'list4'?'hosts guests or a date':
                                           props.img === 'orderOnlinechef'?'from your favourite chefs':
                                           props.img==='orderOnlinefood'?'from your favourite foods':''}</p>
                </div>
            </HeroImage>
        );
}
