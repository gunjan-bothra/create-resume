import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles, withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
    image: {
        width:'200px',
        height:'200px'
    },
    grid1: {
        border: '2px solid black',
        height:'400px',
        borderRadius: '5px',
        fontSize: '1rem',
    color: 'black',
    margin:'40px',
    width:'200px'
    },
    profileAlign : {
        display:'flex'
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }
});

const Work = (props) => {
    const {profileInfo, classes} = props;
    const skills = profileInfo && profileInfo.projectImage && 
                profileInfo.projectImage.map((image)=> {
                    return (
                        // <Grid 
                        //     className={classes.paper} 
                        //     item xs={6}
                        //     > 
                            <div 
                            // style={{width:'200px', margin:'40px'}}
                            className={classes.grid1}
                            >
                                <img 
                                className={classes.image} 
                                src={image.fields.file.url} alt="Profile No found"></img>
                                <div style={{padding:'5px'}}>
                                {image.fields.description}
                                </div>
                            </div>
                        // </Grid>
                    )
                });
    return (
        <div>
             {/* <Grid container spacing={5}> */}
             <div style={{display:'flex', paddingTop: '80px', paddingLeft: '60px'}}>
                {skills}
                </div>
                {/* </Grid> */}
        </div>
    );
}

export default withStyles(styles)(Work);