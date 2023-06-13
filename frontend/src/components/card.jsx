import { Paper,Box,Typography,IconButton,Tooltip,Card,CardContent,LinearProgress } from "@mui/material";
import { makeStyles } from '@mui/styles';
import PhotoIcon from '@mui/icons-material/Photo';


const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.mode === 'light' ? 'white' : 'gray.800',
      maxWidth: theme.breakpoints.values.md,
      borderWidth: '1px',
      borderRadius: theme.shape.borderRadius,
      boxShadow: theme.shadows[8],
      position: 'relative',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      transition: 'transform 0.3s ease',
      '&:hover': {
        transform: 'translateY(-8px)',
      },
    },
    imageContainer: {
      height: '18em',
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
    },
    content: {
      padding: theme.spacing(6),
    },
    flexContainer: {
      marginTop: theme.spacing(1),
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: theme.spacing(2),
    },
    title: {
      fontSize: '2xl',
      fontWeight: 'semibold',
      lineHeight: 'tight',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    },
    tooltip: {
      backgroundColor: theme.palette.mode === 'light' ? 'white' : 'gray.700',
      color: theme.palette.mode === 'light' ? 'gray.800' : 'white',
      fontSize: '1.2em',
    },
    iconButton: {
      alignSelf: 'center',
      color: 'teal.400',
    },
    creatorContainer: {
      alignItems: 'center',
      paddingTop: theme.spacing(2),
    },
    creatorText: {
      color: 'gray.500',
      paddingRight: theme.spacing(2),
    },
    balanceContainer: {
      width: '100%',
    },
    balanceTitle: {
      fontSize: '2xl',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      paddingRight: theme.spacing(2),
      fontWeight: 'bold',
    },
    balanceText: {
      fontSize: 'md',
      fontWeight: 'normal',
    },
    progress: {
      marginTop: theme.spacing(2),
    },
  }));
  
function CampaignPaper() {
    const classes = useStyles();
    const imageURL = ''; // Provide the image URL
    const name = ''; // Provide the name
    const creatorId = ''; // Provide the creator ID
    const balance = 0; // Provide the balance
    const target = 100; // Provide the target
    const ethPrice = 5;
    const getWEIPriceInUSD = (ethPrice, balance) => {
      // Implement your logic for calculating the price
      return '';
    };
  
    return (
      <Card className={classes.root}>
        <Box className={classes.imageContainer}>
          <img src={imageURL} alt={`Picture of ${name}`} className={classes.image} />
        </Box>
        <CardContent className={classes.content}>
          <Box className={classes.flexContainer}>
            <Typography variant="h4" component="h4" className={classes.title}>
              {name}
            </Typography>
            <Tooltip title="Contribute" placement="top" classes={{ tooltip: classes.tooltip }}>
              <IconButton>
              <PhotoIcon className={classes.iconButton} />
            </IconButton>
          </Tooltip>
        </Box>
        <Box className={classes.creatorContainer}>
          <Typography variant="body2" color="textSecondary" className={classes.creatorText}>
            by
          </Typography>
          <Typography variant="h6" component="h6">
            {creatorId}
          </Typography>
        </Box>
        <Box className={classes.balanceContainer}>
          <Typography variant="h4" component="h4" className={classes.balanceTitle}>
            {balance > 0 ? (
              <>
                <span>{balance} ETH</span>
                <span> (${getWEIPriceInUSD(ethPrice, balance)})</span>
              </>
            ) : (
              '0, Become a Donor 😄'
            )}
          </Typography>
          <Typography variant="body1" className={classes.balanceText}>
            target of {target} ETH ($ {getWEIPriceInUSD(ethPrice, target)})
          </Typography>
          <LinearProgress
            variant="determinate"
            color="primary"
            value={balance}
            valueBuffer={target}
            className={classes.progress}
          />
        </Box>
      </CardContent>
    </Card>
  );

}

export default CampaignPaper;
