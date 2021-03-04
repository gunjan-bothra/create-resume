import React from 'react';
import Grid from '@material-ui/core/Grid';
import RightSide from './RightSide';
import LeftSide from './LeftSide';

const Profile = (props) => {
    console.log("Check Pros:" +  props);
    
    const {profileInfo} = props;
    return (
        <Grid container spacing={2}>
            <RightSide profileInfo={profileInfo}></RightSide>
            <LeftSide profileInfo={profileInfo}></LeftSide>
        </Grid>
       
    )

}

export default Profile;