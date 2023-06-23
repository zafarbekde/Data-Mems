import React from 'react';
import './home.css';


function Home() {
    return (
        <div className="container">
            <nav className="menu">
                <ul>
                    <div className="left-logo"><li><a href="/">Memes</a></li></div>
                    <div className="right-menu">
                        <li><button className='upload-btn' id='upload'> + Upload</button></li>

                        <li className='menu-profile'><a href="/profile"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        </a></li>
                    </div>
                </ul>
            </nav>

            <div className="content-upload">
                <h2>Welcom!</h2>
            </div>

            <div className="profile">
                <h3>Профиль</h3>
            </div>
        </div>
    );
}

export default Home;
