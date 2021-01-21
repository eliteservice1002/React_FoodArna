
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import AutoComplete from './auto_complete';
// import PropTypes from 'prop-types';
const styles = theme => ({
    input: {
      display: 'none',
    },
    privacy: { 
        width:"100%",
        color:"black",
        backgroundColor:"white",
        borderRadius: "5px",
        borderColor:"white",
        border:"10px solid",
        [theme.breakpoints.down('md')]: {
        border:"0px",
        },
         
    },
    textdivfiled: {
        padding:"10px",
        borderBottom:"2px solid rgb(212, 219, 232)",
        [theme.breakpoints.down('md')]: {
            borderBottom:"0px solid rgb(212, 219, 232)",
            height:"120px",
          }, 
    },
    textdivfilededit: {
        borderBottom:"2px solid rgb(212, 219, 232)",
        [theme.breakpoints.down('md')]: {
            borderBottom:"0px solid rgb(212, 219, 232)",
            //height:"570px",
          }, 
    },
    general: {
        padding:"10px",
        borderBottom:"2px solid rgb(212, 219, 232)",
        [theme.breakpoints.down('md')]: {
            borderBottom:"0px solid rgb(212, 219, 232)",
            height:"270px"
          },
        
      },
    abouttext: {
       padding:"10px",
       [theme.breakpoints.down('md')]: {
            height:50,
      },  
    },
    abouttextedit: {
        padding:"10px",
        [theme.breakpoints.down('md')]: {
             height:"20px",
       },  
     },
    bestround: {
        display:"flex",
        [theme.breakpoints.down('md')]: {
            display:"none",
        }, 
    },
    bestroundedit: {
        display:"flex",
        [theme.breakpoints.down('md')]: {
            height:"100px",
            marginTop:"-50px"
            //display:"none",
        }, 
    },
    bestroundeditcontact: {
        display:"flex",
        [theme.breakpoints.down('md')]: {
            height:"150px",
            marginTop:"-50px"
            //display:"none",
        }, 
    },
    favgolfcourc_edit: {
        display:"flex",
        [theme.breakpoints.down('md')]: {
            height:"100px"
            //display:"none",
        }, 
    },
    generaltext: {
        [theme.breakpoints.down('md')]: {
            height:"40px",
        }, 
    },
    generaldata: {
        padding:"10px",
        fontSize:"13px", 
        color:"#9CADBA",
        fontWeight:"bold",
        fontStyle: "italic",
        [theme.breakpoints.down('md')]: {
            padding:"0px",
        },
    },
    generaldiv: {
        padding: "10px",
        [theme.breakpoints.down('md')]: {
           height:"20px",
        },
    },
    generaldivedit: {
        padding: "10px",
        [theme.breakpoints.down('md')]: {
           height:"20px",
        },
    },
    generaldatadiv: {
        padding: "10px",
        [theme.breakpoints.down('md')]: {
           height:"50px",
        },
    },
    generalhead: {
        padding:"10px",
        color:"#727F95",
        fontWeight:"bold",
        [theme.breakpoints.down('md')]: {
            padding:"0px",
        },
    },
    biocareer: {
        padding:"10px",
        fontSize:"25px",
        color:"#727F95",
        fontWeight:"bold",
        verticalAlign: 'middle',
        [theme.breakpoints.down('md')]: {
            paddingLeft:"20px",
        },
    },
    textField: {
        padding:"10px",
        [theme.breakpoints.down('md')]: {
          padding:"30px",
          height:"250px"
        },
    },
    textField1: {
        paddingTop:"10px",
        paddingLeft:"30px",
        paddingRight:"10px",
        [theme.breakpoints.down('md')]: {
          padding:"30px",
          height:"250px"
        },
    },
    generaltextfield: {
        paddingTop:"20px",
        [theme.breakpoints.down('md')]: {
        },
    },
    generaltextfieldedit: {
        paddingTop:"20px",
        [theme.breakpoints.down('md')]: {
            marginTop:"40px"
        },
    },
    aboutedit: {
        padding:"20px", 
        fontSize:"16px", 
        color:"#727F95",
        fontWeight:"bold",
        [theme.breakpoints.down('md')]: {
            paddingTop:"10px"
        },
    },
    numberedit: {
        paddingRight:"20px",
        color:"black",
        fontWeight:"bold",
        [theme.breakpoints.down('md')]: {
            paddingRight: "30px",
            marginTop:"13px"
        },
    },
    textFieldBestRound: {
        width:"20%",
        padding:"10px",
        [theme.breakpoints.down('md')]: {
          padding:"30px",
          height:"250px",
          width:"100%",
        },
    },
    textarea: {
        width:"99%",
        height:"300px",
        padding:"10px",
        fontSize:"15px",
        [theme.breakpoints.down('md')]: {
          padding:"30px",
          height:"250px",
          width:"100%",
        },
    },
    textFieldEdit: {
        padding:"20px 0px 0px 30px",
        [theme.breakpoints.down('md')]: {
          paddingRight:"30px",
        },
    },
    textareapattern: {
        width:"99%",
        height:"300px",
        padding:"30px",
        fontSize:"15px",
        border:"0px",
        overflow:"hidden",
        resize:"none",
        [theme.breakpoints.down('md')]: {
          padding:"8px",
          height:"250px",
          width:"100%",
        },
    },
  });
class BioCareer extends React.Component {

    constructor(props) {
        super(props);
        this.onUpdateInput = this.onUpdateInput.bind(this); 
        this.state = {
          textAboutvalue: "",
          flag: 1,
          saveFlag:0,
          pstyle:'italic',
          aboutChartNum:0,
          aboutChartNumColor:"black",
          aboutText:"Describe what you have done, what you are doing, and the kinds of things you are interested in.",
          bestRound:"Add your best round so far",
          golfCourse:"Add your favorite golf course",
          birthday:"Add your birthday",
          education:"Add education",
          interests:"Add interests",
          jobTitle:"Risk Analyst",
          company:"ING Deutshe Bank",
          industry:"Finance",
          email1:"pablolarrazabal@gmail.com",
          phone:"+1 472 281 1928",

          aboutChartNumColor_e:"",
          aboutText_e:"",
          bestRound_e:"",
          golfCourse_e:"",
          birthday_e:"",
          education_e:"",
          interests_e:"",
          jobTitle_e:"",
          company_e:"",
          industry_e:"",
          email1_e:"",
          phone_e:"",


        dataSource : [],
        inputValue : ''

        };
      }
      changeflag = () => {
        this.setState({flag:0});
      }

      saveData = () => {
        this.setState({pstyle:"normal"});
        this.setState({flag:1});
      }
      changeflagcancel = () => {
        this.setState({flag:1});
        this.setState({saveFlag:0})
        this.setState({
            aboutChartNumColor:"black",
            aboutText:"Describe what you have done, what you are doing, and the kinds of things you are interested in.",
            bestRound:"Add your best round so far",
            golfCourse:"Add your favorite golf course",
            birthday:"Add your birthday",
            education:"Add education",
            interests:"Add interests",
            jobTitle:"Risk Analyst",
            company:"ING Deutshe Bank",
            industry:"Finance",
            email1:"pablolarrazabal@gmail.com",
            phone:"+1 472 281 1928",
        });
        this.setState({
            aboutChartNumColor_e:"",
            aboutText_e:"",
            bestRound_e:"",
            golfCourse_e:"",
            birthday_e:"2017/05/24",
            education_e:"",
            interests_e:"",
            jobTitle_e:"",
            company_e:"",
            industry_e:"",
            email1_e:"",
            phone_e:"",

        });
      }
      myChangeaboutfield= (event) =>{
        this.setState({aboutChartNum:event.target.value.length});
        this.setState({aboutText:event.target.value});
        this.setState({aboutText_e:event.target.value});
        if(event.target.value.length>300){
            this.setState({aboutChartNumColor:"red"});
        }
      }
      handlChangefield=(e)=>{
        this.setState({
            [e.target.id]: e.target.value,
            [e.target.id+"_e"]: e.target.value
        })
      }
      onUpdateInput(inputValue,id) {
            this.setState({
                [id]: inputValue,
                [id+"_e"]: inputValue
            })
    }
  
      render() {
        const{classes}=this.props;
        return (
        (() => {                                                       
             if (this.state.flag ===1&&this.state.saveFlag===0) {
                return(
                        <div className={classes.privacybody} >  
                            <p className={classes.biocareer}>
                                Bio & Career
                                <Button style={{backgroundColor:"#EBEEF4",color:"#1796F7",verticalAlign: 'middle',float:"right"}} className={classes.button} onClick={this.changeflag}>Edit</Button>
                            </p>
                            <div className={classes.privacy} >
                                <div className={classes.textdivfiled}>
                                    <Grid style={{margin:"0px"}} container>
                                        <Grid className={classes.abouttext}  item xs={12} md={3}>
                                            <p style={{padding:"10px", fontSize:"16px", color:"#727F95",fontWeight:"bold"}}>About</p>
                                        </Grid>
                                        <Grid align="left" style={{padding:"10px"}} item xs={12} md={9}>
                                        {/* <div className={classes.textFieldEdit}> */}
                                            <textarea value={this.state.aboutText} onChange={this.myChangeaboutfield} className={classes.textareapattern}  style={{fontFamily:"Arial", fontSize:"13px", color:"#9CADBA",fontWeight:"bold",fontStyle: this.state.pstyle}} />
                                        {/* </div> */}
                                            {/* <p style={{padding:"20px", fontSize:"13px", color:"#9CADBA",fontWeight:"bold",fontStyle: this.state.pstyle}}>{this.state.aboutText.replace('\n', ' ')}</p> */}
                                            <div className={classes.bestround}>
                                                <Grid  style={{margin:"0px"}} container>
                                                    <Grid style={{padding:"10px"}} item xs={12} md={3}>
                                                        <p style={{padding:"10px",color:"#727F95",fontWeight:"bold"}}>Best Round</p>
                                                    </Grid>
                                                    <Grid align="left" style={{padding:"10px"}} item xs={12} md={9}>
                                                        <p style={{padding:"10px", fontSize:"13px", color:"#9CADBA",fontWeight:"bold",fontStyle: this.state.pstyle}}>{this.state.bestRound}</p>  
                                                    </Grid>
                                                </Grid>
                                            </div> 
                                            <div className={classes.bestround}>
                                                <Grid style={{margin:"0px"}} container>
                                                    <Grid style={{padding:"10px"}} item xs={12} md={3}>
                                                        <p style={{padding:"10px",color:"#727F95",fontWeight:"bold"}}>Fav Golf Course</p>
                                                    </Grid>
                                                    <Grid align="left" style={{padding:"10px"}} item xs={12} md={9}>
                                                        <p style={{padding:"10px", fontSize:"13px", color:"#9CADBA",fontWeight:"bold",fontStyle: this.state.pstyle}}>{this.state.golfCourse}</p>
                                                    </Grid>
                                                </Grid>
                                            </div> 
                                        </Grid>
                                    </Grid>
                                </div>
                            <div className={classes.general}>
                                    <Grid style={{margin:"0px"}} container>
                                        <Grid className={classes.generaltext} style={{padding:"10px"}} item xs={12} md={3}>
                                            <p style={{padding:"10px",fontSize:"16px",color:"#727F95",fontWeight:"bold"}}>General</p>
                                        </Grid>
                                        <Grid align="left" style={{padding:"10px"}} item xs={12} md={9}>
                                                <div>
                                                <Grid style={{margin:"0px"}} container>
                                                    <Grid className={classes.generaldiv} style={{padding:"10px"}} item xs={12} md={3}>
                                                        <p className={classes.generalhead}>Birthday</p>
                                                    </Grid>
                                                    <Grid className={classes.generaldatadiv} align="left" item xs={12} md={9}>
                                                        <p className={classes.generaldata} style={{fontStyle: this.state.pstyle}}>{this.state.birthday}</p>
                                                    </Grid>
                                                </Grid>
                                            </div>
                                            <div>
                                                <Grid style={{margin:"0px"}} container>
                                                    <Grid className={classes.generaldiv} style={{padding:"10px"}} item xs={12} md={3}>
                                                        <p className={classes.generalhead} >Education</p>
                                                    </Grid>
                                                    <Grid className={classes.generaldatadiv} align="left" item xs={12} md={9}>
                                                        <p className={classes.generaldata} style={{fontStyle: this.state.pstyle}}>{this.state.education}</p>
                                                    </Grid>
                                                </Grid>
                                            </div> 
                                            <div>
                                                <Grid style={{margin:"0px"}} container>
                                                    <Grid className={classes.generaldiv} style={{padding:"10px"}} item xs={12} md={3}>
                                                        <p className={classes.generalhead}>Interests</p>
                                                    </Grid>
                                                    <Grid className={classes.generaldatadiv} align="left">
                                                        <p className={classes.generaldata} style={{fontStyle: this.state.pstyle}}>{this.state.interests}</p>
                                                    </Grid>
                                                </Grid>
                                                </div> 
                                        </Grid>
                                    </Grid>
                            </div>
                            <div className={classes.general}>
                                    <Grid style={{margin:"0px"}} container>
                                        <Grid className={classes.generaltext} style={{padding:"10px"}} item xs={12} md={3}>
                                            <p style={{padding:"10px",fontSize:"16px",color:"#727F95",fontWeight:"bold"}}>Career</p>
                                        </Grid>
                                        <Grid align="left" style={{padding:"10px"}} item xs={9}>
                                                <div>
                                                <Grid style={{margin:"0px"}} container>
                                                    <Grid className={classes.generaldiv} style={{padding:"10px"}} item xs={12} md={3}>
                                                        <p className={classes.generalhead}>Job Title</p>
                                                    </Grid>
                                                    <Grid className={classes.generaldatadiv} align="left">
                                                        <p className={classes.generaldata} style={{fontStyle: this.state.pstyle}}>{this.state.jobTitle}</p>
                                                    </Grid>
                                                </Grid>
                                            </div>
                                            <div>
                                                <Grid style={{margin:"0px"}} container>
                                                    <Grid className={classes.generaldiv} style={{padding:"10px"}} item xs={12} md={3}>
                                                        <p className={classes.generalhead} >Company</p>
                                                    </Grid>
                                                    <Grid className={classes.generaldatadiv} align="left">
                                                        <p className={classes.generaldata} style={{fontStyle: this.state.pstyle}}>{this.state.company}</p>
                                                    </Grid>
                                                </Grid>
                                            </div> 
                                            <div>
                                                <Grid style={{margin:"0px"}} container>
                                                    <Grid className={classes.generaldiv} style={{padding:"10px"}} item xs={12} md={3}>
                                                        <p className={classes.generalhead}>Industry</p>
                                                    </Grid>
                                                    <Grid className={classes.generaldatadiv} align="left" >
                                                        <p className={classes.generaldata} style={{fontStyle: this.state.pstyle}}>{this.state.industry}</p>
                                                    </Grid>
                                                </Grid>
                                                </div> 
                                        </Grid>
                                    </Grid>
                            </div>
                            <div className={classes.general}>
                                    <Grid style={{margin:"0px"}} container>
                                        <Grid className={classes.generaltext} style={{padding:"10px"}} item xs={12} md={3}>
                                            <p style={{padding:"10px",fontSize:"16px",color:"#727F95",fontWeight:"bold"}}>Contact</p>
                                        </Grid>
                                        <Grid align="left" style={{padding:"10px"}} item xs={9}>
                                                <div>
                                                <Grid style={{margin:"0px"}} container>
                                                    <Grid className={classes.generaldiv} style={{padding:"10px"}} item xs={12} md={3}>
                                                        <p className={classes.generalhead}>Email</p>
                                                    </Grid>
                                                    <Grid className={classes.generaldatadiv} align="left">
                                                        <p className={classes.generaldata} style={{fontStyle: this.state.pstyle}}>{this.state.email1}</p>
                                                    </Grid>
                                                </Grid>
                                            </div>
                                            <div>
                                                <Grid style={{margin:"0px"}} container>
                                                    <Grid className={classes.generaldiv} style={{padding:"10px"}} item xs={12} md={3}>
                                                        <p className={classes.generalhead} >Phone</p>
                                                    </Grid>
                                                    <Grid className={classes.generaldatadiv} align="left">
                                                        <p className={classes.generaldata} style={{fontStyle: this.state.pstyle}}>{this.state.phone}</p>
                                                    </Grid>
                                                </Grid>
                                            </div> 
                                        </Grid>
                                    </Grid>
                            </div>
                            </div>
                        </div>
                )  
                
            }
            else 
             return(
                <div className={classes.privacybody} >  
                <p className={classes.biocareer}>
                    Bio & Career
                    <Button style={{backgroundColor:"#2883D4",width:"80px",verticalAlign: 'middle',float:"right"}} variant="contained" color="primary" className={classes.button} onClick={this.saveData}>Save</Button>
                    <Button style={{backgroundColor:"#EBEEF4",color:"#1796F7",verticalAlign: 'middle',float:"right"}} className={classes.button} onClick={this.changeflagcancel}>Cancel</Button>
                </p>
                <div className={classes.privacy} >
                    <div className={classes.textdivfilededit}>
                        <Grid style={{margin:"0px"}} container>
                            <Grid className={classes.abouttextedit}  item xs={12} md={3}>
                                <p className={classes.aboutedit}>About</p>
                            </Grid>

                            <Grid className={classes.generaltextfield} item xs={12} md={9}>
                                <div className={classes.textFieldEdit}>
                                    <textarea value={this.state.aboutText_e} onChange={this.myChangeaboutfield} className={classes.textarea} style={{fontFamily:"Arial", fontSize:"13px"}} />
                                </div>
                                <p className={classes.numberedit} align="right">
                                    <span style={{fontSize:"14px",color:this.state.aboutChartNumColor}}>{this.state.aboutChartNum}</span>/
                                    <span style={{fontSize:"14px"}}>300</span>
                                </p>
                                <div className={classes.bestroundedit}>
                                    <Grid  style={{margin:"0px"}} container>
                                        <Grid className={classes.generaldivedit} item xs={12} md={3}>
                                            <p style={{padding:"20px",color:"#727F95",fontWeight:"bold"}}>Best Round</p>
                                        </Grid>
                                        <Grid align="left" item xs={12} md={9}>
                                            <TextField
                                                    id="bestRound"
                                                    placeholder=""
                                                    //fullWidth
                                                    className={classes.textFieldBestRound}
                                                    inputProps={{
                                                    style: {
                                                        height:"45px",
                                                        width:"100%",
                                                        padding: '0 14px',
                                                        alignitems:"auto",
                                                        fontSize:"18px",
                                                        fontFamily:"Arial"
                                                    },
                                                    }}
                                                    value={this.state.bestRound_e}
                                                    margin="normal"
                                                    variant="outlined"
                                                   onChange={this.handlChangefield}
                                                />
                                        
                                        </Grid>
                                    </Grid>
                                </div> 
                                <div className={classes.favgolfcourc_edit}>
                                    <Grid style={{margin:"0px"}} container>
                                        <Grid className={classes.generaldivedit} style={{padding:"10px"}} item xs={12} md={3}>
                                            <p style={{padding:"20px",color:"#727F95",fontWeight:"bold"}}>Fav Golf Course</p>
                                        </Grid>
                                        <Grid align="left" style={{padding:"10px"}} item xs={12} md={9}>
                                            <AutoComplete    
                                               action={this.onUpdateInput}  
                                               value = {this.state.golfCourse_e}
                                               id="golfCourse"
                                            >
                                            </AutoComplete>
                                        </Grid>
                                    </Grid>
                                </div> 
                            </Grid>
                        </Grid>
                    </div>
                    <div className={classes.textdivfilededit}>
                        <Grid style={{margin:"0px"}} container>
                            <Grid className={classes.abouttextedit}  item xs={12} md={3}>
                                <p className={classes.aboutedit}>General</p>
                            </Grid>

                            <Grid className={classes.generaltextfieldedit} item xs={12} md={9}>
                                <div className={classes.bestroundedit}>
                                    <Grid  style={{margin:"0px"}} container>
                                        <Grid className={classes.generaldivedit} item xs={12} md={3}>
                                            <p style={{padding:"20px",color:"#727F95",fontWeight:"bold"}}>Birthday</p>
                                        </Grid>
                                        <Grid align="left" item xs={12} md={9}>
                                        <TextField
                                                          id="birthday"
                                                          type="date"
                                                          className={classes.textField}
                                                          fullWidth
                                                          InputLabelProps={{
                                                            //shrink: true,
                                                          }}
                                                          inputProps={{
                                                            style: {
                                                              height:"45px",
                                                              padding: '0 14px',
                                                              alignitems:"auto",
                                                              fontSize:"18px",
                                                              fontFamily:"Arial"
                                                            },
                                                          }}
                                                          value={this.state.birthday_e}
                                                          margin="normal"
                                                          variant="outlined"
                                                          onChange={this.handlChangefield}
                                                        />
                                        </Grid>
                                    </Grid>
                                </div> 
                                <div className={classes.favgolfcourc_edit}>
                                    <Grid style={{margin:"0px"}} container>
                                        <Grid className={classes.generaldivedit} style={{padding:"10px"}} item xs={12} md={3}>
                                            <p style={{padding:"20px",color:"#727F95",fontWeight:"bold"}}>Education</p>
                                        </Grid>
                                        <Grid align="left" style={{padding:"10px"}} item xs={12} md={9}>
                                        <AutoComplete
                                            value={this.state.education_e}
                                            action={this.onUpdateInput}  
                                            id="education"
                                        >
                                        </AutoComplete>
                                        </Grid>
                                    </Grid>
                                </div> 
                                <div className={classes.favgolfcourc_edit}>
                                    <Grid style={{margin:"0px"}} container>
                                        <Grid className={classes.generaldivedit} style={{padding:"10px"}} item xs={12} md={3}>
                                            <p style={{padding:"20px",color:"#727F95",fontWeight:"bold"}}>Interests</p>
                                        </Grid>
                                        <Grid align="left" style={{padding:"10px"}} item xs={12} md={9}>
                                        <AutoComplete
                                            value={this.state.interests_e}
                                            action={this.onUpdateInput}  
                                            id="interests"
                                        >
                                        </AutoComplete>
                                        </Grid>
                                    </Grid>
                                </div> 
                            </Grid>
                        </Grid>
                    </div>
                    <div className={classes.textdivfilededit}>
                        <Grid style={{margin:"0px"}} container>
                            <Grid className={classes.abouttextedit}  item xs={12} md={3}>
                                <p className={classes.aboutedit}>Career</p>
                            </Grid>

                            <Grid className={classes.generaltextfieldedit} item xs={12} md={9}>
                                <div className={classes.bestroundedit}>
                                    <Grid  style={{margin:"0px"}} container>
                                        <Grid className={classes.generaldivedit} item xs={12} md={3}>
                                            <p style={{padding:"20px",color:"#727F95",fontWeight:"bold"}}>Job Title</p>
                                        </Grid>
                                        <Grid align="left" style={{padding:"10px"}} item xs={12} md={9}>
                                        <AutoComplete
                                            value={this.state.jobTitle_e}
                                            action={this.onUpdateInput}  
                                            id="jobTitle"
                                        >
                                        </AutoComplete>
                                        </Grid>
                                    </Grid>
                                </div> 
                                <div className={classes.favgolfcourc_edit}>
                                    <Grid style={{margin:"0px"}} container>
                                        <Grid className={classes.generaldivedit} style={{padding:"10px"}} item xs={12} md={3}>
                                            <p style={{padding:"20px",color:"#727F95",fontWeight:"bold"}}>Company</p>
                                        </Grid>
                                        <Grid align="left"  item xs={12} md={9}>
                                            <TextField
                                                id="company"
                                                placeholder=""
                                                fullWidth
                                                className={classes.textField}
                                                inputProps={{
                                                    style: {
                                                    height:"45px",
                                                    width:"100%",
                                                    padding: '0 14px',
                                                    alignitems:"auto",
                                                    fontSize:"18px",
                                                    fontFamily:"Arial"
                                                    
                                                    },
                                                }}
                                                value={this.state.company_e}
                                                onChange={this.handlChangefield}
                                                margin="normal"
                                                variant="outlined"
                                            />
                                        </Grid>
                                    </Grid>
                                </div> 
                                <div className={classes.favgolfcourc_edit}>
                                    <Grid style={{margin:"0px"}} container>
                                        <Grid className={classes.generaldivedit} style={{padding:"10px"}} item xs={12} md={3}>
                                            <p style={{padding:"20px",color:"#727F95",fontWeight:"bold"}}>Industry</p>
                                        </Grid>
                                        <Grid align="left" style={{padding:"10px"}} item xs={12} md={9}>
                                            <AutoComplete
                                                value={this.state.industry_e}
                                                action={this.onUpdateInput}  
                                                id="industry"
                                            >
                                            </AutoComplete>
                                        </Grid>
                                    </Grid>
                                </div> 
                            </Grid>
                        </Grid>
                    </div>
                    <div className={classes.textdivfilededit}>
                        <Grid style={{margin:"0px"}} container>
                            <Grid className={classes.abouttextedit}  item xs={12} md={3}>
                                <p className={classes.aboutedit}>Contact</p>
                            </Grid>

                            <Grid className={classes.generaltextfieldedit} item xs={12} md={9}>
                                <div className={classes.bestroundeditcontact}>
                                    <Grid  style={{margin:"0px"}} container>
                                        <Grid className={classes.generaldivedit} item xs={12} md={3}>
                                            <p style={{padding:"20px",color:"#727F95",fontWeight:"bold"}}>Email</p>
                                        </Grid>
                                        <Grid align="left" item xs={12} md={9}>
                                            <TextField
                                                id="email1"
                                                placeholder=""
                                                fullWidth
                                                className={classes.textField}
                                                inputProps={{
                                                    style: {
                                                    height:"45px",
                                                    width:"100%",
                                                    padding: '0 14px',
                                                    alignitems:"auto",
                                                    fontSize:"18px",
                                                    fontFamily:"Arial"
                                                    },
                                                }}
                                                value={this.state.email1_e}
                                                onChange={this.handlChangefield}
                                                margin="normal"
                                                variant="outlined"
                                            />
                                        </Grid>
                                    </Grid>
                                </div> 
                                <div className={classes.bestroundeditcontact}>
                                    <Grid  style={{margin:"0px"}} container>
                                        <Grid className={classes.generaldivedit} item xs={12} md={3}>
                                            <p style={{padding:"20px",color:"#727F95",fontWeight:"bold"}}>Phone</p>
                                        </Grid>
                                        <Grid align="left" item xs={12} md={9}>
                                            <TextField
                                                id="phone"
                                                placeholder=""
                                                fullWidth
                                                className={classes.textField}
                                                inputProps={{
                                                    style: {
                                                    height:"45px",
                                                    width:"100%",
                                                    padding: '0 14px',
                                                    alignitems:"auto",
                                                    fontSize:"18px",
                                                    fontFamily:"Arial"
                                                    },
                                                }}
                                                value={this.state.phone_e}
                                                onChange={this.handlChangefield}
                                                margin="normal"
                                                variant="outlined"
                                            />
                                        </Grid>
                                    </Grid>
                                </div> 
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div>  
             )  
        })()
        );
      }
  }
  export default withStyles(styles)(BioCareer);
