import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const StyledTabs = withStyles({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    '& > div': {
      maxWidth: 40,
      width: '100%',
      backgroundColor: '#635ee7',
    },
  },
})((props) => <Tabs {...props} TabIndicatorProps={{children: <div />}} />);

const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    color: '#fff',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    '&:focus': {
      opacity: 1,
    },
  },
}))((props) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  padding: {
    padding: theme.spacing(3),
  },
  demo1: {
    backgroundColor: theme.palette.background.paper,
  },
  demo2: {
    backgroundColor: '#2e1534',
  },
  image: {
    width: '200px',
    paddingTop: '10px',
    display: 'block',
    marginLeft: 'auto',
    // marginRight: 'auto',
    marginRight: '550px',
    borderRadius: '50%',
  },
  skillImage: {
    width: '150px',
    paddingTop: '10px',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: '50%',
  },
  name: {
    textAlign: 'center',
  },
  role: {
    margin: 'auto',
    maxWidth: '300px',
    background: 'red',
    borderRadius: '10px',
  },
}));

const Portfolio = (props) => {
  const [value, setValue] = React.useState(0);
  const classes = useStyles();
  const {profileInfo} = props;
  const imageUrl =
    profileInfo && profileInfo.photo && profileInfo.photo.fields.file.url;
  const skills =
    profileInfo &&
    profileInfo.skillSets &&
    profileInfo.skills.map((skill) => {
      return (
        <Grid className={classes.grid1} item xs={3}>
          <img
            className={classes.skillImage}
            src={skill.fields.file.url}
            alt="Profile No found"
          ></img>
        </Grid>
      );
    });
  return (
    <div>
      <div>
        <img
          className={classes.image}
          src={imageUrl}
          alt="Profile No found"
        ></img>
        <h1 classname={classes.name} style={{textAlign: 'center'}}>
          Hi, I am {profileInfo.name}
        </h1>
        <h1 style={{textAlign: 'center'}}>
          I am a Frontend Developer. I like to{' '}
        </h1>
        <h1 style={{textAlign: 'center'}}>
          explore and learn about new technologies.
        </h1>
        <div></div>
      </div>

      <div style={{position:'relative'}}>
        <h1 style={{textAlign: 'center', color:'#862a84'}}>Skill sets</h1>
        <div>
          <Grid container spacing={2}>
            {skills}
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
