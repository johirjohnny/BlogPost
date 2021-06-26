import React from 'react';
import Sidebar from "../../Component/sidebar/Sidebar";
import SinglePost from '../../Component/singlePost/SinglePost';
import "../single/single.css"

const Single = () => {
    return (
        <div className="single">
            <SinglePost/>
            <Sidebar/>
        </div>
    );
};

export default Single;