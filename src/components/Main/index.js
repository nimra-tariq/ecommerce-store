
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { useStyles } from './styles';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function Main() {
    const classes = useStyles();
    return (
        <Box sx={{ width: '100%' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12} md={12} sm={12}>
                    <Item> <div className={classes.bodyBgImg}>
                        <div className={classes.textContainer}>
                            <Typography className={classes.tagLine} variant="h3" component="h3">
                                Design You Wear
                            </Typography>
                            <div className='container'>
                                <Typography paragraph={true} className={classes.paragraph} >
                                    Designer has been your companion in happiness, both big and small, for over 50 years. Our roots are firmly grounded in Pakistan and with its people.
                                </Typography>
                            </div>
                        </div>
                    </div>
                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
}
