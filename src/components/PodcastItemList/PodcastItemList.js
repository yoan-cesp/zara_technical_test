import * as React from 'react';
import { Card, Link, Typography } from '@material-ui/core';
import { appStyles } from '../common/styles';

const PodcastItemList = ({ item }) => {
  const classes = appStyles();
  return (
    <Link className={ classes.podcastItemListContainerStyle } key={ item.id } href={ `/podcast/${ item.id }` }>
      <img className={ classes.podcastItemListImgStyle } src={ item.image } alt={ item.name } />

      <Card elevation={ 4 } className={ classes.podcastItemListCardStyle }>
        <Typography align={ 'center' } gutterBottom
          className={ classes.podcastItemListTitleStyle }>{ item.name }</Typography>
        <Typography className={ classes.podcastItemListAuthorStyle }>Author: { item.author }</Typography>
      </Card>
    </Link>
  );
};

export default PodcastItemList;
