import React from 'react';
import Hero from '../Hero/Hero';
import Services from '../Services/Services';
import Banner from '../Banner/Banner';
// import Bannar2 from "./components/Banner/Bannar2";
import { Instructor } from '../Instructor/Instructor';
import Subscribe from '../subscribe/Subscribe';
import ContactUs from '../Contuct/Contuct';
import Banner2 from '../Banner/Bannar2';

const Home = () => {
    return (
        <div>
      <Hero />
      <Services />
      <Banner />
      <Banner2 />
      <Instructor />
      <Subscribe />
      <ContactUs />
        </div>
    );
};

export default Home;