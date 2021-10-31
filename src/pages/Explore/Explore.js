import React from 'react';
import './Explore.css'
import Sidebar from '../../components/Sidebar/Sidebar';
import ExploreMiddle from '../../components/ExploreMiddle/ExploreMiddle';
import FollowAdvice from '../../components/FollowAdvice/FollowAdvice';

function Explore() {
    return (
        <div className="explore-container">
           
            <Sidebar />
            <ExploreMiddle />
            <FollowAdvice />            
        </div>
    )
}

export default Explore
