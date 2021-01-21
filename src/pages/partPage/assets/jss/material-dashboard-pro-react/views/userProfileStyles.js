import {
  cardTitle,
  grayColor
} from "../../material-dashboard-pro-react.js";

const userProfileStyles = {
  cardTitle,
  cardIconTitle: {
    ...cardTitle,
    marginTop: "15px",
    marginBottom: "0px",
    "& small": {
      fontSize: "80%",
      fontWeight: "400"
    }
  },
  cardCategory: {
    marginTop: "10px",
    color: grayColor[0] + " !important",
    textAlign: "center"
  },
  description: {
    color: grayColor[0]
  },
  updateProfileButton: {
    float: "right"
  },
  button: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '100%',
    color: '#464646',
    cursor: 'pointer',
    border: '1px solid red',
    borderRadius: '10px',
    width: '40%',
    margin: 'auto',
  },
  submit: {
    // margin: theme.spacing(3, 0, 2),
    width: '40%',
    // height: '67px',
    borderRadius: '19px',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '32px',
    lineHeight: '37px',
    textAlign: 'center',
    color: '#FFFFFF'
  },
  showing: {
    display: 'initial'
  },
  hidding: {
    display: 'none'
  },
  dshowing: {
    marginTop: '43px',
    justifyContent: 'space-between',
    display: 'flex',
    flexWrap: 'wrap'
  },
  container: {
    padding: "60px 15px",
    width: '70%',
    margin: 'auto',
    "@media (max-width: 1090px)": { width: '100%' }
  }
};
export default userProfileStyles;
