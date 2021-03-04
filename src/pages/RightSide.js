import React from 'react';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/styles/withStyles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CastForEducationIcon from '@material-ui/icons/CastForEducation';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const styles = (theme) => ({
    image: {
        width:'150px',
        paddingTop:'10px'
    },
    grid1: {
        borderRight: '1px solid lightgrey'
    },
    profileAlign : {
        display:'flex'
    }
});

const RightSide = (props) => {
    const {profileInfo, classes} = props;
    const imageUrl = profileInfo && profileInfo.photo && profileInfo.photo.fields.file.url;
    const education = profileInfo && profileInfo.education;

    let skills = profileInfo && profileInfo.skillSets && profileInfo.skillSets.map((item) => {
            return (
                <div>
                   <Box component="fieldset" mb={3} borderColor="transparent">
                        <Typography component="legend">{item.skill}</Typography>
                        <Rating name="read-only" value={item.rating} readOnly />
                    </Box>
                </div>
            )
});
    return (
       
        <Grid className={classes.grid1} item xs={3}> 
        <img className={classes.image} src={imageUrl} alt="Profile No found"></img>
        <h2>{profileInfo.name}</h2>
        <h3>{profileInfo.designation}</h3>
        <div className={classes.profileAlign}>
            <div>
                <AccountCircleIcon />
            </div>
            <div>Profile</div>
        </div>
        <div>
            {profileInfo.description}
        </div>
        <div className={classes.profileAlign}>
            <div>
                <CastForEducationIcon />
            </div>
            <div>Education</div>
        </div>
        <div>
            <div>
                {education ? education.year : education}
            </div>
            <div>
            {education ? education.degree: education}
            </div>
            <div>
            {education ? education.college : education}
            </div>
            <div>
            {education ? education.place: education}
            </div>
        </div>
        <div>
           {skills}
        </div>
        </Grid>
        
    );
}

export default withStyles(styles)(RightSide);