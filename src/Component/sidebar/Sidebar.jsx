import React from 'react';
import "../sidebar/sidebar.css"
import sideBarImg from "../../ImageBlog/jny2.jpg"

const sidebar = () => {
    return (
        <div className = "sidebar">
            <div className="sidebarItem">
                <span className ="sidebarTitle">ABOUT ME</span>
                <img src={sideBarImg} alt="" />
                
                <p><span className ="name">Yo! I’m Johnny.</span>If you’re reading this, you’ve probably just come across Lost With Purpose for the first time. Well, hold on to your seat: your life is about to change forever.</p> 
                <p>… no, I kid. You can let go of your seat now..   </p>
                    
            </div>
            <div className="sidebarItem">
            <span className ="sidebarTitle">CATAGORIES</span>
                <ul className = "sidebarList">
                    <li className="sidebarListItem">Life</li>                        
                    <li className="sidebarListItem">Religion</li>                        
                    <li className="sidebarListItem">Style</li>                        
                    <li className="sidebarListItem">Sport</li>                        
                    <li className="sidebarListItem">Technologies</li>                        
                    <li className="sidebarListItem">Movie</li>                        
                    
                </ul>
            </div>
            <div className="sidebarItem">
            <span className ="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
                <i className="SidebarIcon fab fa-facebook-square"></i>
                <i className="SidebarIcon fab fa-linkedin"></i>
                <i className="SidebarIcon fab fa-twitter-square"></i>
                <i className="SidebarIcon fab fa-instagram-square"></i>
            </div>

            </div>                      

        </div>
        
    );
};

export default sidebar;