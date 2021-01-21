import React from "react";
import './../commonStyle.css';
import {
    makeStyles,
} from '@material-ui/core/styles';
// date start
import TextField from '@material-ui/core/TextField';
// date end
// select start
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
//select end

const useStyles = makeStyles((theme) => ({
    flag: {
        marginBottom: '10%',
    },
    // date start
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        width: '50%'
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        // width: 200,
    },
    //   date end
    // select start
    formControl: {
        width: '50% '
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    //   select end
}));
export default function CookDetailRow(props) {
    const classes = useStyles();

    var d = new Date();
    let year = 0, month = 0, day = 0, date = "", hour = 0, minute = 0, time = "";
    year = d.getFullYear();
    month = d.getMonth() + 1;
    if (month < 10)
        month = '0' + month;
    day = d.getDate();
    if (day < 10)
        day = '0' + day;
    date = (year + "-" + month + "-" + day);
    hour = d.getHours();
    if (hour < 10)
        hour = "0" + hour;
    minute = d.getMinutes();
    if (minute < 10)
        minute = "0" + minute;
    time = hour + ":" + minute;
    return (
        <div style={{ display: 'flex', fontSize: '130%', color: 'rgba(60, 60, 60, 1)', fontFamily: 'Roboto', fontStyle: 'normal', marginTop: '7%' }} className={props.title === "Time to be ready" ? classes.flag : ""}>
            <div style={{ fontWeight: '500', width: '80%' }}>{props.title}</div>
            <div style={{ width: '10%' }}>:</div>
            {
                props.func === "setdate" ?
                    <form className={classes.container} noValidate>
                        <TextField
                            id="date"
                            type="date"
                            defaultValue={date}
                            className={classes.textField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            name={props.func} onChange={props.onchange} key={props.title}
                        />
                    </form> :
                    props.func === "settime" ?
                        <form className={classes.container} noValidate>
                            <TextField
                                id="time"
                                type="time"
                                defaultValue={time}
                                className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                inputProps={{
                                    step: 300,
                                }}
                                name={props.func} onChange={props.onchange} key={props.title}
                            />
                        </form> :
                        props.func === "setportion" ?
                            <FormControl className={classes.formControl}>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    // value={portion}
                                    defaultValue="plate"
                                    // onChange={handleChange}
                                    name={props.func} onChange={props.onchange} key={props.title}
                                >
                                    <MenuItem value={'plate'}>plate</MenuItem>
                                    <MenuItem value={'bole'}>bole</MenuItem>
                                </Select>
                            </FormControl> :
                            props.func === "setquantity" ?
                                <div style={{ display: 'flex' }}>
                                    <TextField
                                        id="outlined-number"
                                        type="number"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        placeholder={props.content}
                                        style={{ width: '50%' }}
                                        name={props.func} onChange={props.onchange} key={props.title}
                                    />
                                    <FormControl className={classes.formControl}>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            // value={portion}
                                            defaultValue="gms"
                                            // onChange={handleChange}
                                            name="setquantityUnit" onChange={props.onchange} key={props.title}
                                        >
                                            <MenuItem value={'gms'}>Grams (gms)</MenuItem>
                                            <MenuItem value={'kgs'}>Kilograms (kgs)</MenuItem>
                                            <MenuItem value="lb">Pounds (lb)</MenuItem>
                                            <MenuItem value="ml">Mililiter (ml)</MenuItem>
                                            <MenuItem value="l">Litre (l)</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div> :
                                props.func === "setnumberPiece" ?
                                    <TextField
                                        id="outlined-number"
                                        type="number"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        placeholder={props.content}
                                        style={{ width: '50%' }}
                                        name={props.func} onChange={props.onchange} key={props.title}
                                    /> :
                                    props.func === "setperPrice" ?
                                        <TextField
                                            id="outlined-number"
                                            type="number"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            placeholder={props.content + " *"}
                                            style={{ width: '50%' }}
                                            name={props.func} onChange={props.onchange} key={props.title}
                                        /> :
                                        props.func === "setforSell" ?
                                            <TextField
                                                id="outlined-number"
                                                type="number"
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                placeholder={props.content}
                                                style={{ width: '50%' }}
                                                name={props.func} onChange={props.onchange} key={props.title}
                                            /> :
                                            props.func === "setforFree" ?
                                                <TextField
                                                    id="outlined-number"
                                                    type="number"
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                    placeholder={props.content}
                                                    style={{ width: '50%' }}
                                                    name={props.func} onChange={props.onchange} key={props.title}
                                                /> :
                                                <TextField id="standard-search" placeholder={props.content + " *"} type="search" name={props.func} onChange={props.onchange} key={props.title} style={{ width: '50%' }} />
            }
        </div>
    );
}
