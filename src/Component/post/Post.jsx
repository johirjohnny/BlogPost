import React from 'react';
import "../post/post.css";
import postImg from "../../ImageBlog/post.jpg"

const Post = () => {
    return (
        <div className = "post">
            <img className ="postImg" src={postImg} alt="" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Health</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">Lorem ipsum dolor sit.</span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, harum. Mollitia distinctio ipsa exercitationem voluptates quasi ab cumque, aut sequi incidunt rerum corrupti debitis doloremque possimus doloribus. Explicabo nisi placeat harum deserunt deleniti minima, dignissimos laudantium, amet distinctio cum possimus nobis non vero? Unde sequi minima rem a voluptatibus tenetur!

            </p>
        </div>
        
    );
};

export default Post;