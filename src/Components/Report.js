import React from 'react';
import {Card, CardContent, Table, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {ReportTableHead} from "./ReportTableHead";
import {ReportTableBody} from "./ReportTableBody";

const useStyles = makeStyles({
    card: {
        '&&': {
            height: '660px',
            width: '900px',
            border: '1px dotted rgba(147, 157, 166, 1)',
        },
    },
    cardContent: {
        '&&': {
            padding: '20px',
        },
    },
    typography: {
        '&&': {
            fontFamily: 'TTNorms-Bold',
            fontSize: '16px',
            lineHeight: '18px',
            padding: '20px 0 0 20px',
        },
    },
})

export const Report = () => {
    const classes = useStyles()

    return (
        <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
                <Typography className={classes.typography}>Calibration report</Typography>
                <Table>
                    <ReportTableHead/>
                    <ReportTableBody/>
                </Table>
            </CardContent>
        </Card>
    );
};