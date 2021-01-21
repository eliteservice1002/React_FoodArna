import React from 'react';
import PropTypes from 'prop-types';
import deburr from 'lodash/deburr';
import Downshift from 'downshift';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import{ useState } from 'react';
const suggestions = [
  { label: 'Afghanistan' },
  { label: 'Aland Islands' },
  { label: 'Albania' },

];
function renderInput(inputProps) {
  const { InputProps, classes, ref, ...other} = inputProps;
  return (
    <TextField
        InputProps={{
        inputRef: ref,
        classes: {
          // root: classes.inputRoot,
          // input: classes.inputInput,
        },
        ...InputProps,
            style: {
              height:"45px",
              alignitems:"auto",
              fontSize:"18px",
              fontFamily:"Arial",
              },
      }}
      // value="123"
      
      margin="normal"
      variant="outlined"
      {...other}
    />
  );
}

function renderSuggestion(suggestionProps) {
  const { suggestion, index, itemProps, highlightedIndex, selectedItem } = suggestionProps;
  const isHighlighted = highlightedIndex === index;
  const isSelected = (selectedItem || '').indexOf(suggestion.label) > -1;
  return (
    <MenuItem
      {...itemProps}
      key={suggestion.label}
      selected={isHighlighted}
      component="div"
      style={{
        fontWeight: isSelected ? 500 : 400,
        fontFamily:"Arial",
      }}
    >
      {suggestion.label}
      
    </MenuItem>
  );
}
renderSuggestion.propTypes = {
  highlightedIndex: PropTypes.number,
  index: PropTypes.number,
  itemProps: PropTypes.object,
  selectedItem: PropTypes.string,
  suggestion: PropTypes.shape({ label: PropTypes.string }).isRequired,
};

function getSuggestions(value, { showEmpty = false } = {}) {
  const inputValue = deburr(value.trim()).toLowerCase();
  const inputLength = inputValue.length;
  let count = 0;

  return inputLength === 0 && !showEmpty
    ? []
    : suggestions.filter(suggestion => {
        const keep =
          count < 5 && suggestion.label.slice(0, inputLength).toLowerCase() === inputValue;

        if (keep) {
          count += 1;
        }

        return keep;
      });
}
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: 80,
   
  },
  container: {
    flexGrow: 1,
    position: 'relative',
    
    [theme.breakpoints.down('md')]: {
       padding:"20px"
  },
  },
  paper: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing(1),
    left: 0,
    right: 0,
    [theme.breakpoints.down('md')]: {
      left: "20px",
      right: "20px",
    },
  },
  chip: {
    margin: theme.spacing(0.5, 0.25),
  },
  inputRoot: {
    flexWrap: 'wrap',
  },
  inputInput: {
    width: 'auto',
    flexGrow: 1,
  },
  divider: {
    height: theme.spacing(2),
  },
  overridesUnderline: {
    
    '&:hover:before': {
      backgroundColor: 'rgba(0, 0, 0, 0.42)'
    },
  },
}));

export default function IntegrationDownshift(props) {
  const classes = useStyles();
  const [addData, setData] = useState();
  function addDataItem(e) {
    if(addData!==undefined){
      suggestions.push({ label: addData }); 
    }
  }
  return (
    <div className={classes.root}>
      <Downshift id="downshift-options"
        onChange = {(selectedItem, stateAndHelpers) =>{
          if(selectedItem!==null){
            props.action(selectedItem,props.id);
          }
          
      }}
      >
        {({
          clearSelection,
          getInputProps,
          getItemProps,
          getLabelProps,
          getMenuProps,
          highlightedIndex,
          inputValue,
          isOpen,
          openMenu,
          selectedItem,
        }) => {
          const { onBlur, onChange,onToggle, onFocus, ...inputProps } = getInputProps({
            onChange: event => {
              if (event.target.value === '') {
                
                clearSelection();
              }
              props.action(event.target.value,props.id)
              setData(event.target.value)
              
            },
            onFocus: openMenu,
            value : props.value
           // placeholder: 'With the clear & show empty options',
          });
          if(props.value!=="" && props.value!==null && props.value!==undefined){
            inputValue=props.value
          }
          return (
            <div className={classes.container}>
              {renderInput({
                fullWidth: true,
                classes,
                //label: 'Countries',
                //value:"123",
                //InputLabelProps: getLabelProps({ shrink: true }),
                InputProps: { onBlur, onChange, onFocus },
                inputProps,
                
              })}

              <div {...getMenuProps()}>
                {isOpen ? (
                  
                  <Paper className={classes.paper} square>
                    <MenuItem style={{color:"#D0DBEA"}}>recent results</MenuItem>
                    {getSuggestions(inputValue, { showEmpty: true }).map((suggestion, index) =>
                      renderSuggestion({
                        
                        suggestion,
                        index,
                        itemProps: getItemProps({ 
                          item: suggestion.label,
                        }),
                        highlightedIndex,
                        selectedItem,
                      }),
                    )}
                    <MenuItem onClick={addDataItem} style={{color:"#529BFF"}}>+Add "{addData}"</MenuItem>
                  </Paper>
                ) : null}
              </div>
            </div>
          );
        }}
      </Downshift>
    </div>
  );
}