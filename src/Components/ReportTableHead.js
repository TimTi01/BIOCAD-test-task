import React from 'react';
import {TableCell, TableHead, TableRow, Typography} from "@mui/material";
import {reportDataHead} from "../Data/reportDataHead";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles({
    tableRow: {
        '&&': {
            verticalAlign: 'top',
        },
    },
    tableCell: {
        '&&': {
            padding: '27px 20px 24px 20px',
            border: 0,
        },
    },
    typography: {
        '&&': {
            fontFamily: 'TTNorms-Regular',
            fontSize: '13px',
            lineHeight: '15px',
            color: 'rgba(147, 157, 166, 1)',
        },
    },
})

function getTypography(index, value, classes) {
    if (index === 0) {
        return (
            <Typography className={classes.typography}>
                {value}
            </Typography>
        )
    } else if (index === 1) {
        return (
            <Typography className={classes.typography}>
                {value}
            </Typography>
        )
    } else if (index === 2 || 3) {
        return (
            <Typography className={classes.typography}>
                {value}
            </Typography>
        )
    } else if (index === 4) {
        return (
            <Typography className={classes.typography}>
                {value}
            </Typography>
        )
    }

}

export const ReportTableHead = () => {
    const classes = useStyles()

    return (
        <TableHead className={classes.tableHead}>
            <TableRow className={classes.tableRow}>
                {reportDataHead.map((data) => (
                    Object.values(data.dataHeadName).map((value, index) => (
                        <TableCell key={value} className={classes.tableCell}>
                            {getTypography(index, value, classes)}
                        </TableCell>
                    ))
                ))}
            </TableRow>
        </TableHead>
    );
};
