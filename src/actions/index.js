
export const textFieldChange = (textFieldValue,itemid, itemname) => ({
    type: 'textFieldChange',
    textFieldValue: textFieldValue,
    itemid: itemid,
    itemname:itemname
});
export const changeSettingCheck = (checkitemid) => ({
    type: 'changeSettingCheck',
    checkitemid: checkitemid,

});


