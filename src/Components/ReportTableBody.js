import React from 'react';
import {TableBody, TableCell, TableRow, Typography} from "@mui/material";
import {reportDataBody} from "../Data/reportDataHead";
import {BadSVG, GoodSVG} from "../Icons/UnitSVG";
import {makeStyles} from "@mui/styles";
import {Box} from "@material-ui/core";

const useStyles = makeStyles({
    tableRow: {
        '&&': {
            height: '120px',
            verticalAlign: 'top',
        },
    },
    tableCell: {
        '&&': {
            // borderBottom: 0,
            padding: '20px',
        },
    },
    box: {
        '&&': {
            display: 'flex',
        },
    },
    typography: {
        '&&': {
            fontFamily: 'TTNorms-Regular',
            fontWeight: '400',
            fontSize: '13px',
            lineHeight: '15px',
        },
    },
})
function getTypography(index, key, value, classes) {
    if (key === 'solutions') {
        return (
            <Typography style={
                {   maxWidth: '200px',
                    maxHeight: '100%',
                    fontFamily: 'TTNorms-Regular',
                    fontWeight: '400',
                    fontSize: '13px',
                    lineHeight: '14px',
                }
            }>
                {value}
            </Typography>
        )
    } else if (key === 'slope') {
        return (
            <Typography style={
                {
                    width: '50px',
                    height: '30px',
                    fontFamily: 'TTNorms-Regular',
                    fontSize: '13px',
                    lineHeight: '15px',
                }
            }>
                {value}
            </Typography>
        )
    } else if (key === 'data') {
        return (
            <Typography style={
                {
                    width: '100px',
                    fontFamily: 'TTNorms-Regular',
                    fontSize: '16px',
                    lineHeight: '18px',
                }
            }>
                {value}
            </Typography>
        )
    } else if (key === 'offset') {
        return (
            <Typography style={
                {
                    width: '50px',
                    height: '30px',
                    fontFamily: 'TTNorms-Regular',
                    fontSize: '13px',
                    lineHeight: '15px',
                }
            }>
                {value}
            </Typography>
        )
    } else {
        return (
            <Typography className={classes.typography}>
                {value}
            </Typography>
        )
    }
}

function getSVG(key, value) {
    if (key === 'slope') {
        if (Number(value) >= 95 && Number(value) <= 105) {
            return <GoodSVG/>
        } else {
            return <BadSVG/>
        }
    }

    if (key === 'offset') {
        if (Number(value) < -20 || Number(value) < 20) {
            return <GoodSVG/>
        } else {
            return <BadSVG/>
        }
    }
}

export const ReportTableBody = () => {
    const classes = useStyles()

    return (
        <TableBody>
            {reportDataBody.map((data) => (
                <TableRow key={data.id} className={classes.tableRow}>
                    {Object.entries(data.data).map(([key, value], index) => (
                        <TableCell key={key} className={classes.tableCell}>
                            <Box className={classes.box}>
                                {getTypography(index, key, value, classes)}
                                {getSVG(key, value)}
                            </Box>
                        </TableCell>
                    ))}
                </TableRow>
            ))}
        </TableBody>
    );
}