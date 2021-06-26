import React from 'react';
import "../settings/settings.css"
import Sidebar from '../../Component/sidebar/Sidebar';
import settingsPP from "../../ImageBlog/jny1.jpg"
const Settings = () => {
    return (
        <div className ="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsTitleUpdate">Update Your Account</span>
                    <span className="settingsTitleDelete">Delete Account</span>
                </div>
                <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                    <img src={settingsPP} alt="" />      
                    <label htmlFor="fileInput">
                        <i className="settingsPPIcon far fa-user-circle"></i>
                        Upload Picture  
                    </label>
                    </div>
                    <input
                        id="fileInput"
                        type="file"
                        style={{ display: "none" }}
                        className="settingsPPInput"
                        />
                    <label>Username</label>
                    <input type="text" placeholder="Your name" name="name" />
                    <label>Email</label>
                    <input type="email" placeholder="Your email" name="email" />
                    <label>Password</label>
                    <input type="password" placeholder="Password" name="password" />
                    <button className="settingsSubmitButton" type="submit">
                        Update
                    </button>
                </form>
            </div>
            <Sidebar/>
        </div>
    );
};

export default Settings;