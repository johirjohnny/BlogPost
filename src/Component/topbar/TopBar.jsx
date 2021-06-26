import React from 'react';
import "./topbar.css";
import homeBarImage from "../../ImageBlog/jny1.jpg"
import { Link } from "react-router-dom";
 
const topBar = () => {
    const user = false;
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
                    <div className="topListItem">
                        <Link className="link" to="/">HOME</Link>
                    </div>
                    <div className=" topListItem">
                    <Link className="link" to="/single">ABOUT</Link>
                    </div>
                    <div className=" topListItem">
                    <Link className="link" to="/settings">CONTACT</Link>
                    </div>
                    <div className=" topListItem">
                    <Link className="link" to="/write">BLOG</Link>
                    </div>
                    <div className=" topListItem">
                   {user && "LOGOUT"}
                    </div>
                </div>
            </div>
            <div className="topRight">
                {
                user?(
                    <img
                    className= "topImg"
                    src={homeBarImage} alt="" />
                    
                ) :(
                    <ul className="topList">
                    <li className="topListItem">
                      <Link className="link" to="/login">
                        LOGIN
                      </Link>
                    </li>
                    <li className="topListItem">
                      <Link className="link" to="/register">
                        REGISTER
                      </Link>
                    </li>
                  </ul>
                )
                }
                   <i className="topSearchIcon fas fa-search"></i> 
            </div>
        </div>
    );
};

export default topBar;