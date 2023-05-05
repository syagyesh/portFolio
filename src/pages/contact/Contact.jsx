import { useState, useRef } from 'react'
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaDribbble,
} from "react-icons/fa";

import {FiSend} from "react-icons/fi";
import emailjs from '@emailjs/browser';

import "./contact.css";

const Contact = () => {

  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setForm({...form, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send('service_syagyesh','template_y2pnz0m', {
      from_name: form.name,
      to_name: 'Yagyesh',
      from_email: form.email,
      to_email: 'syagyesh91@gmail.com',
      subject: form.subject,
      message: form.message,
    },'md7YQtS7gAPV6BIM1'
    )
    .then(() => {
      setLoading(false);
      alert("Thank you. I'll reply soon.");

      setForm({
        name: '',
        email:'',
        message: '',
      })
    }, (error) => {
      setLoading(false);
      alert("Something went wrong.");
    })
  }

  return (
    <section className="contact section">
      <h2 className="section__title">Get In <span>Touch</span></h2>
      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">Don't be Shy!</h3>
          <p className="contact__description">
            Feel Free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </p>

          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className='info__icon' />
              <div>
                <span className="info__title">Mail Me</span>
                <h4 className="info__desc">syagyesh91@gmail.com</h4>
              </div>
            </div>

            <div className="info__item">
              <FaPhoneSquareAlt className='info__icon' />
              <div>
                <span className="info__title">Call Me</span>
                <h4 className="info__desc">+918769302009</h4>
              </div>
            </div>
          </div>

          <div className="contact__socials">
            <a href="https://facebook.com" className="contact__social-link">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" className="contact__social-link">
              <FaTwitter />
            </a>
            <a href="https://youtube.com" className="contact__social-link">
              <FaYoutube />
            </a>
            <a href="https://dribble.com" className="contact__social-link">
              <FaDribbble />
            </a>
          </div>
        </div>
        <form ref={formRef} onSubmit={handleSubmit} className="contact__form">
          <div className="form__input-group">
            <div className="form__input-div">
              <input type="text" placeholder='Your Name' name='name' className="form__control" value={form.name} onChange={handleChange} required/>
            </div>
            <div className="form__input-div">
              <input type="email" placeholder='Your Email' name='email' className="form__control" value={form.email} onChange={handleChange} required/>
            </div>
            <div className="form__input-div">
              <input type="text" placeholder='Your Subject' name='subject' className="form__control" value={form.subject} onChange={handleChange} required/>
            </div>
          </div>
          <div className="form__input-div">
              <textarea name="message" id="" cols="30" rows="10" placeholder='Your Message' className="form__control textarea" value={form.message} 
              onChange={handleChange} required></textarea>
          </div>
          <button className="button" type='submit' value='send'>
            {loading ? "Sending..." : "Send Message" }
            <span className="button__icon contact__button-icon">
              <FiSend />
            </span>
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
