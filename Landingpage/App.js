

import './App.css';
import './style.css';
import brochure from './brochure.pdf';
import image from './image.jpg';
import images from './images.jpg';
import place from './place.jpg';
import work from './work.jpg';

import React, { useState } from 'react';



function LandingPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    setSubmitted(true);
  };
    const handleDownload = () => {
      fetch(brochure)
        .then(response => response.blob())
        .then(blob => {
          const url = URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.download = 'brochure.pdf';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        });
    };
  
  
  return (
    <div className="landing-page">
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#service">Breeds</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#FAQ">FAQ</a></li>
        </ul>
      </nav>
      <section id="home">
        <header>
          <h1>Welcome to our Online Pet Shop</h1>
          <p>Get ready to buy</p>
          <button onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>Learn More</button>
        </header>
      </section>
      <section id="about">
        <h2>About Us</h2>
        <p> Supertails: Unleash Joy with Our Online Pet Store.
Welcome to Supertails, your ultimate online pet store in India! At Supertails, we're more than just a pet shop online - we're your partners in pet parenting. With a passion for enhancing the lives of pets and pet parents with our pet products, we offer a wide array of pet essentials that cater to your pets' every need.As the best online pet store in India, we bring you a curated selection of pet products that are not only of the highest quality but also designed to make your pets' lives happier and healthier.

Gone are the days of searching for a "pet store near me" or "pet shop near me".With Supertails, pet online shopping is a breeze. As your trusted online pet shop in India, we understand the unique bond you share with your pets. That's why we ensure that every pet product we offer is chosen with care and consideration.

We take pride in being the best online cat and dog store as well. Your pets deserve the best, and we are here to provide it. With a variety of cat and dog shop products, you can keep your pets wagging their tails with joy.</p>
      </section>
      <section id="service">
        <h2>Our Breeds</h2>
        <div className="image-section-container">
          <div className="image-section">
            <img src={image} alt="Example Image" />
            <h5></h5>
          </div>
          <div className="image-section">
            <img src={images} alt="Example Image" />
            <h5></h5>
          </div>
          <div className="image-section">
            <img src={work} alt="Example Image" />
            <h5></h5>
          </div>
          <div className="image-section">
            <img src={place} alt="Example Image" />
            <h5></h5>
          </div>
        </div>
      </section>
      <section id="contact">
        <h2>Contact Us</h2>
        {submitted ? (
          <p>Thank you for shopping!</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
            <button type="submit">Send</button>
          </form>
        )}
      </section>
      
      
      <section id="FAQ">
        <h2>Frequently Asked Questions</h2>
        <details>
          <summary>Are pet shops a good place to buy a pet?</summary>
          <p>Pet shops can be a source for purchasing pets, but it's essential to research and consider adopting from animal shelters or reputable breeders.</p>
        </details>
        <details>
          <summary>How do I choose the right dog for my lifestyle?</summary>
          <p>The right dog breed or mix depends on your living situation, activity level, and the time you can dedicate to dog care.</p>
        </details>
        <details>
          <summary>Do dog shops offer grooming services?</summary>
          <p>Many dog shops offer grooming services or sell grooming supplies, including shampoos, brushes, and clippers. </p>
        </details>
        <details>
          <summary>Are there training resources available at dog shops?</summary>
          <p>Many dog shops sell training aids, books, and products that can assist with dog training. </p>
        </details>
      </section>
      <footer>
        <p>&copy; Supertails</p>
      </footer>
    </div>
  );
}

export default LandingPage;
