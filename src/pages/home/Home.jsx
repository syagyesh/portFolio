import React , {useEffect, useRef} from 'react'
import Profile from "../../assets/home.jpg";
import { Link } from 'react-router-dom';
import {FaArrowRight} from "react-icons/fa";
import "./home.css";
import Typed from 'typed.js';


const Home = () => {

    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Web-Developer','Front-End-Developer', 'Freelancer', 'UI Designer'],
            typeSpeed: 60,
            backSpeed: 100,
            backDelay: 2000,
        });

        return () => {
            typed.destroy();
        };
    }, []);
   
  return (
    <section className="home section grid">
        <img src={Profile} alt="profile" className="home__img" />

        <div className="home__content">
            <div className="home__data">
                <h1 className="home__title">
                    <span>I'm Yagyesh Sharma,</span> <span ref={el}></span>
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
