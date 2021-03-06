import { makeStyles } from '@material-ui/core/styles';
import { display, width } from '@material-ui/system';

export const appStyles = makeStyles((theme) => ({
  home: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.palette.background.paper,
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  cardGrid: {
    backgroundColor: theme.palette.background.paper,
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  AppHeader: {
    backgroundColor: theme.palette.background.paper,
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
  searchInput: {
    width: '100%',
    textAlign: 'center',
    color: theme.palette.text.secondary,
    display: 'flex',
    justifyContent: 'flex-end',

  },
  searchTextField: {
    width: '50%',
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
  podcastListGridContainerStyle: {
    padding: '4px 32px 0 32px',
  },
  podcastItemListContainerStyle: {
    float: 'left',
    position: 'relative',
    display: 'flex',
    minWidth: '200px',
    minHeight: '330px',
    '&:nth-child(4n)': {
      marginRight: 0,
    },
    '&:hover': {
      transform: 'scale(1.1)',
      transition: 'all 0.3s linear',
      textDecoration: 'none',
    },
  },
  podcastItemListImgStyle: {
    margin: '0 auto',
    borderRadius: '100px',
    position: 'absolute',
    display: 'table',
    left: '50%',
    right: '50 %',
    transform: 'translate(-50%, 0%)',
  },
  podcastItemListTitleStyle: {
    textTransform: 'uppercase',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: '10px',
    marginBottom: '5px',
    lineHeight: '15px',
  },
  podcastItemListAuthorStyle: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#6d6d6d',
    textTransform: 'capitalize',
    marginTop: '10px',
    marginBottom: '5px',
    lineHeight: '15px',
  },
  podcastItemListCardStyle: {
    color: 'black',
    textTransform: 'uppercase',
    width: '100%',
    border: '1px solid #CCCCCC',
    textAlign: 'center',
    padding: '70px 10px 14px 10px',
    margin: '100px 0px 70px 0px',
  },
  podcastItemDetailLinkStyles: {
    '&:hover': {
      textDecoration: 'none',
    },
  },
  podcastItemDetailCardGridItemContainer: {
    minWidth: '300px',
  },
  podcastItemDetailCardStyle: {
    float: 'left',
    padding: '10px',
    marginBottom: '50px',
    color: 'black',
  },
  podcastItemDetailImgStyle: {
    width: '77%',
    maxWidth: 'auto',
    display: 'block',
    float: 'none',
    margin: '10px auto 15px auto',
    borderRadius: '7px',
  },
  podcastItemDetailAlbumNameStyle: {
    fontWeight: 'bold',
    color: 'black',
  },
  podcastItemDetailTitleStyle: {
    fontWeight: 'bold',
  },
  podcastItemDetailTextStyle: {
    fontStyle: 'italic',
    lineHeight: '20px',
    'p': {
      margin: '10px 0',
    },
  },
  podcastItemDetailCardTittleStyle: {
    borderTop: '1px solid #C5C5C5',
    borderBottom: '1px solid #C5C5C5',
    margin: '12px 0 20px 0',
    padding: '24px 11px',
    fontSize: '18px',
    lineHeight: '22px',
  },
  podcastItemDetailByTextStyle: {
    fontStyle: 'italic',
  },
}));
