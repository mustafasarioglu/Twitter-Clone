import React from 'react';
import MiddleSection from '../../components/MiddleSection/MiddleSection';
import Sidebar from '../../components/Sidebar/Sidebar';
import Widgets from '../../components/Widget/Widgets';


function Home() {
    
    

    // if (!id && pathname ==="") return <Redirect to="/login"/>
    return (
        <div className="app">
            <Sidebar />
            <MiddleSection />
            <Widgets />
        </div>
    )
}

export default Home
