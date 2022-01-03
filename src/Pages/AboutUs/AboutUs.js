import React from 'react';
import './AboutUs.css';
// import { ProgressBar } from 'react-bootstrap';
import AboutUsBanner from './AboutUsBanner/AboutUsBanner';
import AboutTextilery from './AboutTextilery/AboutTextilery';
import Works from './Works/Works';
import Team from './OurTeam/Team';
import ContactBanner from './ContactBanner/ContactBanner';

const AboutUs = () => {
    return (
        <div>
            <AboutUsBanner></AboutUsBanner>
            <AboutTextilery></AboutTextilery>
            <Works></Works>
            <ContactBanner></ContactBanner>
            <Team></Team>
        </div>
    );
};

export default AboutUs;