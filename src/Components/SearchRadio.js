import React from 'react';
import {FormControl, FormControlLabel, Radio, RadioGroup} from "@mui/material";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles({
    formControlLabel: {
        '&&': {
            '& > span': {
                fontFamily: 'TTNorms-Regular',
                fontSize: '14px',
                lineHeight: '20px',
            }
        },
    },
})

export const SearchRadio = () => {
    const classes = useStyles()

    return (
        <FormControl component="fieldset">
            <RadioGroup
                aria-label="gender"
                defaultValue="female"
                name="radio-buttons-group"
            >
                <FormControlLabel value="female"
                                  className={classes.formControlLabel}
                                  control={<Radio style={{padding: '6px 12px 6px 10px'}}/>}
                                  label="Calibration" />
                <FormControlLabel value="mail"
                                  className={classes.formControlLabel}
                                  control={<Radio style={{padding: '6px 12px 6px 10px'}}/>}
                                  label="Measuring" />
                <FormControlLabel value="other"
                                  className={classes.formControlLabel}
                                  control={<Radio style={{padding: '6px 12px 6px 10px'}}/>}
                                  label="Using" />
            </RadioGroup>
        </FormControl>
    );
};