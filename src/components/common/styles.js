import { makeStyles } from '@material-ui/core/styles';
import { styled } from '@material-ui/core';

export const appStyles = makeStyles((theme) => ({
  body: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.palette.background.paper,
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  toolbar: {
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    backgroundColor: theme.palette.background.paper,
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '80.25%',
    borderRadius: '50%',
    margin: '12px',
  },
  cardContent: {
    flexGrow: 1,
    paddingBottom: '0 !important',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  cardTitle: {
    textTransform: 'uppercase',
    fontSize: 14,
    fontWeight: 'bold',
  },
  cardSubTitle: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#6d6d6d',
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  searchInput: {
    width: '100%',
    textAlign: 'center',
    color: theme.palette.text.secondary,
    display: 'flex',
    justifyContent: 'flex-end',

  },
  searchContainer: {
    backgroundColor: theme.palette.background.paper,
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    display: 'flex',
    justifyContent: 'end',
  },
  podcastAmongText: {
    ...theme.typography.button,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.light,
    width: '45px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    borderRadius: '18%',
    height: '25px',
    marginTop: '8px',
    marginRight: 12,
  },
  podcastItem: {
    float: 'left',
    width: '23%',
    marginRight: '2.6%',
    position: 'relative',
    display: 'flex',
    animation: 'ease-in',
    animationDelay: '0.3s',
  },
  podcastItemImg: {
    display: 'table',
    margin: '0 auto',
    borderRadius: '100%',
    position: 'absolute',
    left: '50%',
    right: '50%',
    transform: 'translate(-50%, 0%)',
  },
}));

export const cardContainerStyles = styled('div')`
  float: left;
  width: 23%;
  margin-right: 2.6%;
  position: relative;
  display: flex;
@include animation(0.3s);
  img {
    margin: 0 auto;
    border-radius: 100px;
    position: absolute;
    display: table;
    left: 50%;
    right: 50%;
  @include transform(translate(-50%, 0%));
  }

  div {
    width: 100%;
    border: 1px solid #868686;
    text-align: center;
    padding: 70px 10px 14px 10px;
    margin: 100px 0px 70px 0px;

    h4 {
      color: #868686;
      text-transform: uppercase;
      margin-top: 10px;
      margin-bottom: 5px;
      line-height: 15px;
    }

    span {
      color: #868686;
    }
  }

  &:nth-child(4n) {
    margin-right: 0;
  }

  &:hover {
  @include transform(scale(1.1));
  }
`;

