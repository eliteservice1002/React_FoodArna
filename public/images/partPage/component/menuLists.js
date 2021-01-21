import React from "react";
import { HeroImage} from "./../partPageStyle";

const heroText = {
    textAlign: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
    width: '100%'
}

const menuTitle = {
    fontFamily: 'Montaga',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '250%',
    lineHeight: '59px',
    color: '#FCD652'
}

const menuDetail = {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '180%',
    lineHeight: '41px',
    color: '#FFFFFF'
}


export default class menuLists extends React.Component {

    render() {
        return (
            <HeroImage img={this.props.img} sell={this.props.sell}>
                <div style={heroText}>
                    <h1 style={menuTitle}>{this.props.img === 'list1'?'Order Online':
                                           this.props.img === 'list2'?'Reserve':
                                           this.props.img === 'list3'?'Learn':
                                           this.props.img === 'list4'?'Date':
                                           this.props.img === 'orderOnline'?'Order Online':
                                           this.props.sell === 'list1'?'Sell Online':
                                           this.props.sell === 'list2'?'Share or Gift':
                                           this.props.sell === 'list3'?'Teach':
                                           this.props.sell === 'list4'?'Culinary Event':''}</h1>
                    <p style={menuDetail}>{this.props.img === 'list1'?'from your favourite chef':
                                           this.props.img === 'list2'?'a culture experience':
                                           this.props.img === 'list3'?'from your favourite chef':
                                           this.props.img === 'list4'?'looking for a cooking date':
                                           this.props.sell === 'list1'?'to your loyal customers':
                                           this.props.sell === 'list2'?'your family and freinds':
                                           this.props.sell === 'list3'?'make your cuisine viral':
                                           this.props.sell === 'list4'?'hosts guests or a date':
                                           this.props.img === 'orderOnline'?'from your favourite chef':''}</p>
                </div>
            </HeroImage>
        );
    }
}
