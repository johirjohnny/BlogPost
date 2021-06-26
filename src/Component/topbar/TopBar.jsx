import React from 'react';
import "./topbar.css";
import homeBarImage from "../../ImageBlog/jny1.jpg"

const topBar = () => {
    return (
        <div className = "top">
            <div className="topLeft">
                <i className=" topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-linkedin"></i>
                <i className=" topIcon fab fa-twitter-square"></i>
                <i className="topIcon fab fa-instagram-square"></i>
            </div>
            <div className="topCenter">
                <div className="topList">
                    <div className="topListItem">HOME</div>
                    <div className=" topListItem">ABOUT</div>
                    <div className=" topListItem">CONTACT</div>
                    <div className=" topListItem">BLOG</div>
                    <div className=" topListItem">LOGOUT</div>
                </div>
            </div>
            <div className="topRight">
                    <img
                    className= "topImg"
                    src={homeBarImage} alt="" />
                    <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    );
};

export default topBar;