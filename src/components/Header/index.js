import React from 'react';
import './style.css';

export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png" alt="Netflix" />
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTTSaJI_GbtJB_R82YCUaz_-gqZDg4ukHMXkg&usqp=CAU" alt="Usuario" />
                </a>
            </div>
        </header>
    );
}