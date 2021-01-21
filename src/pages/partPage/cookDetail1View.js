import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { StyledContainer, OpacityLayer} from "./partPageStyle";
import Grid from '@material-ui/core/Grid';
import './commonStyle.css';
import Button from '@material-ui/core/Button';
import CookDetailRow from './component/cookDetailRow';
import CookFeedbackRow from './component/cookFeedbackRow';
import SocialSiteRow from './component/socialSiteRow';


const detailTitle = [
    'Date of Serving',
    'Time to be ready',
    'Name of Cuisine',
    'Portion',
    'Quantity',
    'Number of Pieces',
    'Price per plate',
    'For Sell',
    'For Free Promotion'
];

const detailContent = [
    'Date/Month/Year',
    '3 Hours from Clock',
    'Tandoori Chicken',
    'By Plate',
    '150grms per plate',
    '2 per plate',
    '70 SEK',
    '10',
    '0',
];

const foodFeedbackTitle = [
    'Ingredients:',
    'Food Safety (Pick from list)'
];

const foodFeedbackContent = [
    'Turmeric, Turkish Curd,...',
    'Clean heated water only, Clean hands with cooking gloves, Chef Hat used, Organic Products...'
];

const social = [
    {'img':'./images/partPage/social/TikTok.svg','title':'TikTok','state':'./images/partPage/social/Ellipse1.svg'},
    {'img':'./images/partPage/social/Facebook.svg','title':'Facebook','state':'./images/partPage/social/Ellipse2.svg'},
    {'img':'./images/partPage/social/Instagram.svg','title':'Instagram','state':'./images/partPage/social/Ellipse2.svg'},
    {'img':'./images/partPage/social/Likee.svg','title':'Likee','state':'./images/partPage/social/Ellipse1.svg'},
    {'img':'./images/partPage/social/Snapchat.svg','title':'Snapchat','state':'./images/partPage/social/Ellipse2.svg'},
    {'img':'./images/partPage/social/Helo.svg','title':'Helo','state':'./images/partPage/social/Ellipse1.svg'},
    {'img':'./images/partPage/social/Twitter.svg','title':'Twitter','state':'./images/partPage/social/Ellipse1.svg'},
    {'img':'./images/partPage/social/Kuaishou.svg','title':'Kuaishou','state':'./images/partPage/social/Ellipse1.svg'},
    {'img':'./images/partPage/social/Pinterest.svg','title':'Pinterest','state':'./images/partPage/social/Ellipse2.svg'},
    {'img':'./images/partPage/social/Vmate.svg','title':'VMate','state':'./images/partPage/social/Ellipse1.svg'},
];

export default function CookDetail1 (){
    return (
        <StyledContainer>
            <OpacityLayer background='cookDetail1'/>
            <Container fixed style={{position:'absolute'}}>
                <Typography component="div" style={{ height: '100vh' }} >
                    <Grid container spacing={3}>
                        <Grid item xs={8} sm={8} className='centerStyle' style={{borderRight:'1px solid #DD354D'}}>
                            <div style={{display:'block',color:'black'}}>
                                <div style={{marginTop:'5%',display:'flex',justifyContent:'space-around'}}>
                                    <Button variant="outlined" style={{backgroundColor:'#DD354D',color:'#FCD652',width:'30%',borderRadius:'25px',border:'2px solid #DD354D'}}>Browse n Pick</Button>
                                    <Button variant="outlined" style={{backgroundColor:'',color:'#DD354D',width:'30%',borderRadius:'25px',border:'2px solid #DD354D'}}>Edit</Button>
                                </div>
                                <div style={{marginTop:'4%'}}>
                                    {
                                        detailTitle.map((val, index) => {
                                            return (<CookDetailRow title={val} content={detailContent[index]}/>);
                                        })
                                    }
                                </div>

                                {
                                    foodFeedbackTitle.map((val, index) => {
                                        return (<CookFeedbackRow title={val} content={foodFeedbackContent[index]}/>);
                                    })
                                }
                            </div>
                        </Grid>
                        <Grid item xs={4} sm={4} className='centerStyle'>
                            <div style={{display:'block',color:'black'}}>
                                <div style={{marginTop:'23%'}}>
                                    <Button variant="outlined" style={{backgroundColor:'',color:'#DD354D',width:'130%',borderRadius:'25px',border:'2px solid #DD354D'}}>Edit</Button>
                                </div>
                                <div style={{display:'block'}}>
                                    {
                                        social.map((val, index) => {
                                            return (<SocialSiteRow index={index+1} img={val.img} title={val.title} state={val.state} key={index}/>);
                                        })
                                    }
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} className='centerStyle'>
                            <Button variant="outlined" style={{backgroundColor:'#DD354D',color:'#FCD652',width:'23%',borderRadius:'25px',border:'2px solid #DD354D'}}>Submit</Button>
                        </Grid>
                    </Grid>
                </Typography>
            </Container>
        </StyledContainer>
    );
}


