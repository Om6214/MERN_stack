import React from 'react';
import './About.css';
import {useAuth} from '../storage/auth'
import Footer from "../components/Footer"

const About = () => {
  const {detail}= useAuth()
    return (
      <>
        <div className="about-container">
            <h1>Hey {detail ? detail.Name : `to aur website`} </h1>
            <p>Welcome to GadgetGroove, your ultimate destination for all things electronics! Whether you're a tech enthusiast, a casual shopper, or someone looking to upgrade their gadgets, we've got you covered.</p>

            <h2>Our Mission</h2>
            <p>At GadgetGroove, our mission is to provide our customers with the latest and greatest in electronics at competitive prices. We believe that everyone should have access to high-quality technology that enhances their lives, and we strive to make that a reality.</p>

            <h2>What We Offer</h2>
            <ul className='aboutli'>
                <li><strong>Wide Selection:</strong> From smartphones and laptops to smart home devices and wearable tech, we offer a wide range of products to meet all your electronic needs.</li>
                <li><strong>Top Brands:</strong> We stock products from leading brands such as Apple, Samsung, Sony, and many more, ensuring you get the best in quality and innovation.</li>
                <li><strong>Customer Satisfaction:</strong> Your satisfaction is our top priority. We offer hassle-free returns, secure payment options, and reliable customer service to ensure you have the best shopping experience.</li>
            </ul>

            <h2>Why Choose Us?</h2>
            <ul className='aboutli'>
                <li><strong>Innovative Products:</strong> We keep our inventory updated with the latest releases, so you can always find the newest and most advanced gadgets on our site.</li>
                <li><strong>Competitive Pricing:</strong> We work hard to offer the best prices on the market, making top-notch technology accessible to everyone.</li>
            </ul>

            <h2>Join the GadgetGroove Community</h2>
            <p>At GadgetGroove, we’re more than just a store; we’re a community of tech lovers. Follow us on social media, subscribe to our newsletter, and join our blog to stay updated on the latest tech trends, reviews, and exclusive offers.</p>

            <p>Thank you for choosing GadgetGroove. We look forward to serving you and helping you find the perfect gadgets to groove your life!</p>
        </div>
        <Footer/>
    </>
    );
}

export default About;
