import React from 'react';
import PropTypes from 'prop-types';
import deburr from 'lodash/deburr';
import Downshift from 'downshift';
import { makeStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import { useState } from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import UnfoldMore from '@material-ui/icons/UnfoldMore';

const suggestions = [
  { course: "Golf Course 1", key: 1 },
  { course: "Golf Course 2", key: 2 },
  { course: "Golf Course 3", key: 3 },
  { course: "Golf Course 4", key: 4 },
];

function renderInput(inputProps) {
  const { InputProps, classes, ref, ...other } = inputProps;

  return (
    <TextField
      fullWidth
      InputProps={{
        endAdornment: <InputAdornment position="start"><UnfoldMore style={{ marginLeft: "8px" }} /></InputAdornment>,
        inputRef: ref,
        classes: {
        },

        ...InputProps,
        style: {
          padding: '0px 0px',
          alignitems: "auto",
          fontSize: "18px",
          height: 57,
          fontFamily: "Sentinel-Black,Roboto,sans-serif",
        },
      }}
      variant="outlined"
      {...other}
    />
  );
}

function renderSuggestion(suggestionProps) {
  const { suggestion, index, itemProps, highlightedIndex, selectedItem } = suggestionProps;
  const isHighlighted = highlightedIndex === index;
  const isSelected = (selectedItem || '').indexOf(suggestion.course) > -1;
  return (
    <MenuItem
      {...itemProps}
      key={suggestion.key}
      selected={isHighlighted}
      component="div"
      style={{
        fontWeight: isSelected ? 500 : 400,
      }}
    >
      {suggestion.course}
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
        count < 3 && suggestion.course.slice(0, inputLength).toLowerCase() === inputValue;

      if (keep) {
        count += 1;
      }
      return keep;
    });
}
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    paddingLeft: 10,
    paddingRight: 10,
  },
  container: {
    flexGrow: 1,
    position: 'relative',
  },
  paper: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing(1),
    left: 0,
    right: 0,
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
  overridesUnderline: {
    '&:hover:before': {
      backgroundColor: 'rgba(0, 0, 0, 0.42)'
    }
  },
}));
export default function IntegrationDownshift(props) {
  const classes = useStyles();
  const [addData, setData] = useState();
  const value=props.value;
  function addDataItem(e) {
    suggestions.push({ label: addData });
  }
  const handleChange = (event) => {
    props.onSelect(event);
  }

  return (
    <div className={classes.root}>
      <Downshift>
        {({
          clearSelection,
          getInputProps,
          getItemProps,
          getMenuProps,
          highlightedIndex,
          inputValue,
          isOpen,
          openMenu,
          selectedItem,
        }) => {
          const { onBlur, onChange, onFocus, ...inputProps } = getInputProps({
            onChange: event => {
              if (event.target.value === '') {
                clearSelection();
              }
              setData(event.target.value)
            },
            onSelect: event => {
              handleChange(event);
            },
            onFocus: openMenu,
            placeholder: 'Location',
          });

          return (
            <div className={classes.container}>
              {renderInput({
                fullWidth: true,
                classes,
                value: value,
                label: '',
                InputProps: {
                  onChange, onFocus,
                },
                inputProps,
              })}

              <div {...getMenuProps()}>
                {isOpen ? (
                  <Paper className={classes.paper}>
                    <MenuItem style={{ color: "#D0DBEA" }}>recent results</MenuItem>
                    {getSuggestions(inputValue, { showEmpty: true }).map((suggestion, index) =>
                      renderSuggestion({
                        suggestion,
                        index,
                        itemProps: getItemProps({ item: suggestion.course }),
                        highlightedIndex,
                        selectedItem,
                      }),
                    )}
                    {/* {addData.length > 0 && ( */}
                    <MenuItem onClick={addDataItem} style={{ color: "#529BFF" }}>+Add "{addData}"</MenuItem>
                    {/* )} */}
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