import * as React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import { appStyles, cardContainerStyles } from '../common/styles';
import { Link } from 'react-router-dom';

const PodcastItemList = ({ item }) => {
  const classes = appStyles();
  return (
    /*<Link className={cardContainerStyles} key={ item.id } to={ '/' }>
     <img src={ item.image } alt={ item.name } />

     <div>
     <h4>{ item.name }</h4>
     <span>Author: { item.author }</span>
     </div>
     </Link>*/
    <Link className={cardContainerStyles} key={ item.id }>
      <Card elevation={ 4 } className={ classes.card }>
        <CardMedia
          className={ classes.cardMedia }
          image={ item.image }
          title={ item.name }
        />
        <CardContent className={ classes.cardContent }>
          <Typography className={ classes.cardTitle } align={ 'center' } gutterBottom component='h2'>
            { item.name }
          </Typography>
          <Typography className={ classes.cardSubTitle } align={ 'center' }>
            Author: { item.author }
          </Typography>
        </CardContent>
      </Card>
    </Link>


  );
};

export default PodcastItemList;
