import React from 'react';
import {Container, Grid, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {testInfo} from "../Data/textInfo";

const useStyles = makeStyles({
    container: {
        '&&': {
            height: '330px',
            width: '550px',
            background: 'rgba(247, 247, 247, 1)',
            borderRadius: '5px',
            marginLeft: '30px',
            padding: 0,
        },
    },
    typographyKey: {
        '&&': {
            fontFamily: 'TTNorms-Medium',
            fontSize: '14px',
            fontWeight: '500',
            paddingRight: '5px',
            color: 'grey',
        }
    },
    typographyValue: {
        '&&': {
            fontFamily: 'TTNorms-Medium',
            fontSize: '14px',
            fontWeight: '500',
        },
    },
})

export const DeviceInfo = () => {
    const classes = useStyles()

    return (
        <Container className={classes.container}>
            <Grid container direction='column' p={'20px 18px'}>
                {testInfo.map((text) => (
                    <Grid container item key={text.id} direction='row'>
                        <Typography component='span' className={classes.typographyKey}>{text.key}</Typography>
                            {text.key === 'GUID:' || text.key === 'Bims ID:' || text.key === 'Tam:'
                                ? <Typography component='span' className={classes.typographyValue} color='#4990E2'>{text.value}</Typography>
                                : <Typography component='span' className={classes.typographyValue}>{text.value}</Typography>}
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};