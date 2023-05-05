import React from 'react'
import Profile from "../../assets/home.jpg";
import { Link } from 'react-router-dom';
import {FaArrowRight} from "react-icons/fa";
import "./home.css";

const Home = () => {
  return (
    <section className="home section grid">
        <img src={Profile} alt="profile" className="home__img" />

        <div className="home__content">
            <div className="home__data">
                <h1 className="home__title">
                    <span>I'm Yagyesh Sharma,</span> Web Developer
                </h1>
                <p className="home__description">
                    I'm basically front-end web developer and learning backend to build my career.
                    I'm passionate about my work and 
                    an optimistic person with great enthusiasm about my goal.
                </p>

                <Link to="/about" className='button'>
                    More About Me 
                    <span className='button__icon'>
                        <FaArrowRight />
                    </span>
                </Link>
            </div>
        </div>

        <div className="color__block"></div>
    </section>
  )
}

export default Home
