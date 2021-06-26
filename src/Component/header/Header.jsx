import React from 'react';
import "../header/header.css"

import headerImg from "../../ImageBlog/HOMEBAR.jpg"

const Header = () => {
    return (
        <div className = "header">
            <div className="headerTitles">
                <span className = "headerTitleSm">Publish your passions, your way</span>
                <span className = "headerTitleLg">Digital Diary</span>
            </div>
            <img className = "headerImage"
            src= {headerImg}alt="" />
        </div>
    );
};

export default Header;