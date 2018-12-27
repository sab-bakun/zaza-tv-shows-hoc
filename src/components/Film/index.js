import React from 'react';
import { Card, CardHeader, CardMedia, CardContent, Typography } from '@material-ui/core';

import './Film.css';

const Film = ({ film }) => 
    <Card className='Film'>
        <CardHeader
            title={ film.name }
            subheader={ film.year + ' - ' + film.country }
        />
        <CardMedia
            className='Film-banner'
            image={ film.banner || 'images/banner.jpg' }
            title={ film.name }
        />
        <CardContent>
            <Typography className='Film-description'>
                { film.description }
            </Typography>
        </CardContent>
    </Card>

export default Film;