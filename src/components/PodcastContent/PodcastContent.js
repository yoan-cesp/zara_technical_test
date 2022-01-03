import * as React from 'react';
import { Box, Card, CardActionArea, CardActions, CardContent, CardMedia, Link, makeStyles, Typography } from '@material-ui/core';
import { appStyles } from '../common/styles';

const PodcastContent = ({ podcastItem }) => {
  const classes = appStyles();

  return (
    <Card elevation={ 4 } className={ classes.podcastItemDetailCardStyle }>
      <Link className={ classes.podcastItemDetailLinkStyles } href={ `/podcast/${ podcastItem.id }` }>
        <img className={ classes.podcastItemDetailImgStyle } src={ podcastItem.image } alt={ podcastItem.name } />
      </Link>

      <Typography className={classes.podcastItemDetailCardTittleStyle} gutterBottom variant='h6' component='h5'>
        <Link className={ classes.podcastItemDetailLinkStyles } href={ `/podcast/${ podcastItem.id }` }>
          <Typography className={ classes.podcastItemDetailAlbumNameStyle } gutterBottom variant='h6' component='h1'>
            { podcastItem.name }
          </Typography>
          <Typography className={ classes.podcastItemDetailByTextStyle}variant='body2' color='textSecondary' component='p'>
            { `by ${ podcastItem.author }` }
          </Typography>
        </Link>
      </Typography>

      { podcastItem.description ?
        <>
          <p className={ classes.podcastItemDetailTitleStyle }>Description</p>
          <div className={ classes.podcastItemDetailTextStyle } dangerouslySetInnerHTML={ { __html: podcastItem.description } } />
        </>
        : null }
    </Card>
  );
};

export default PodcastContent;
