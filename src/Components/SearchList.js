import React,{useState} from 'react';
import {FormControl, MenuItem, Select} from "@mui/material";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles({
    formControl: {
        width: '220px',
        height: '30px',
        '& > div': {
            borderRadius: '0',
            '& > div': {
                paddingLeft: '12px',
            },
        },
        '& > div > div': {
            padding: '3px 0 4px',
        }
    }
})

export const SearchList = () => {
    const classes = useStyles()
    const [month, setMonth] = useState('');

    const handleChange = (event) => {
        setMonth(event.target.value);
    };

    return (
        <FormControl className={classes.formControl}>
            <Select
                displayEmpty
                value={month}
                inputProps={{ 'aria-label': 'Without label' }}
                onChange={handleChange}
            >
                <MenuItem value="">1 month</MenuItem>
                <MenuItem value={20}>2 month</MenuItem>
                <MenuItem value={30}>3 month</MenuItem>
            </Select>
        </FormControl>
    );
};