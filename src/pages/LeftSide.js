import React from 'react';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/styles/withStyles';

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

const LeftSide = (props) => {
    const {profileInfo, classes} = props;
    let experienceList = profileInfo && profileInfo.experience && profileInfo.experience.result.map((item) => {
                        let items = item.roleDescription.map((roleItem) => {
                            return (
                                <li>{roleItem.description}</li>
                            )
                        });
                            return (
                                <div>
                                    <div>{item.company}</div>
                                    <div className={classes.profileAlign}>
                                        <div>{item.role}</div>
                                        <div>{item.durationFrom} - {item.durationTo}</div>
                                    </div>
                                    <div>
                                        <ul>
                                        {items}
                                        </ul>
                                    </div>
                                </div>
                            )
    });
    return (
        <Grid item xs={9}> 
            <div>WORK EXPERIENCE</div>
            {experienceList}
        </Grid>
    )
}

export default withStyles(styles)(LeftSide);