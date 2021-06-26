import React from 'react';
import Header from '../../Component/header/Header';
import Posts from '../../Component/posts/Posts';
import Sidebar from '../../Component/sidebar/Sidebar';
import "./home.css"

const Home = () => {
    return (
    <>
         <Header/>
        <div className ="home">
            <Posts/>
            <Sidebar/>
            
        </div>
    </>
    );
};

export default Home;