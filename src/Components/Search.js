import React from 'react';
import {Box, Button, Card, CardContent, Grid, SvgIcon, TextField, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {UnitSVG} from "../Icons/UnitSVG";
import {SearchList} from "./SearchList";
import {SearchRadio} from "./SearchRadio";

const useStyles = makeStyles({
    card: {
        '&&': {
            minHeight: '400px',
            width: '320px',
            '&&': {
                boxShadow: 'none',
            },
        },
    },
    typography: {
        '&&': {
            fontFamily: 'TTNorms-Regular',
            fontSize: '16px',
            fontWeight: 400,
            lineHeight: '24px',
            color: '#8C8C8C',
        },
    },
    textField: {
        '&&': {
            display: 'flex',
            justifyContent: 'center',
            height: '30px',
            width: '210px',
            paddingRight: '20px',
            '& div': {
                fontFamily: 'TTNorms-Regular',
                fontSize: '16px',
                lineHeight: '24px',
                borderRadius: 0,
            },
            '& input': {
                padding: '0 10px 0 12px',
                border: '1px solid rgba(233, 233, 233, 1)',
            },
        },
    },
    grid: {
        paddingTop: '16px',
        alignItems: 'center',
    },
    button: {
        '&&': {
            fontFamily: 'TTNorms-Regular',
            fontSize: '14px',
            fontWeight: 400,
            lineHeight: '24px',
            height: '40px',
            width: '90px',
            borderRadius: '4px',
            textTransform: 'none',
            background: '#353535',
            '&:hover': {
                background: '#353535',
            }
        },
    },
    typographyUnit: {
        '&&': {
            fontFamily: 'TTNorms-Medium',
            fontSize: '20px',
            fontWeight: 500,
            lineHeight: '24px',
        },
    },
    buttonGenerate: {
        '&&': {
            textTransform: 'none',
            height: '40px',
            width: '180px',
            background: 'rgba(73, 144, 226, 1) !important',
        }
    },
    paperShadow: {
        '&&': {
            boxShadow: 'none',
        }
    },
})

export const Search = () => {
    const classes = useStyles()

    return (
        <Card className={classes.card} classes={{paper: classes.paperShadow}}>
            <CardContent style={{padding: 0}}>
                <Grid container>
                    <Grid item>
                        <Typography className={classes.typography}>
                            Enter inventory number, guid or bims id
                        </Typography>
                    </Grid>

                    <Grid container item className={classes.grid}>
                        <TextField className={classes.textField}
                                    defaultValue='A-001234'
                        />
                        <Button className={classes.button}
                                variant='contained'
                        >
                            Search
                        </Button>
                    </Grid>

                    <Grid container item
                          alignItems='flex-start'
                          pt='30px'
                    >
                        <Grid item pr='20px'>
                            <SvgIcon style={{width: '40px', height: '40px'}}
                                     viewBox='0 0 40 40'
                            >
                                <UnitSVG/>
                            </SvgIcon>
                        </Grid>
                        <Grid item>
                            <Box sx={{height: '80px', width: '225px'}}>
                                <Typography className={classes.typographyUnit}>
                                    Аналитические весы OHAUS Adventurer АХ324 (B715976163)
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>

                    <Grid container item pt='30px'>
                        <Grid item>
                            <SearchList/>
                        </Grid>
                        <Grid item pt='20px'>
                            <SearchRadio/>
                        </Grid>
                    </Grid>

                    <Grid container item pt='50px'>
                        <Button className={classes.buttonGenerate}
                                variant='contained'
                        >
                            Generate report
                        </Button>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};