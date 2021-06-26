import React from 'react';
import "../write/write.css"
import singlePostImg from "../../ImageBlog/post.jpg"

const Write = () => {
    return (
        <div className ="write">
            <img className =" writeImg" src={singlePostImg} alt="" />
            <form className= "writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className = "writeIcon fas fa-plus"></i>
                    </label>
                    <input type="file" id ="fileInput" style = {{display:"none"}}></input>
                    <input type="text" placeholder="Title" className="writeInput" autoFocus={true}></input>
                </div>  
                <div className="writeFormGroup">
                    <textarea
                        className="writeInput writeText"
                        placeholder="Tell your story..."
                        type="text"
                        autoFocus={true}
                    />
                </div>
                <button className="writeSubmit" type="submit">
                    Publish
                </button>
            </form>
        </div>
    );
};

export default Write;