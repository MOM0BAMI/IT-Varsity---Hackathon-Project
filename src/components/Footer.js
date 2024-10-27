// src/components/Footer.js
import React, { useEffect, useState } from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [hidden, setHidden] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      setHidden(true); // Scrolling down
    } else {
      setHidden(false); // Scrolling up
    }

    setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop); // For mobile or negative scrolling
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <footer className={hidden ? 'hidden' : ''}>
      <Link to="/terms">Terms and Conditions</Link>
      <Link to="/emergency-contact">Emergency Contacts</Link> {/* Link for Emergency Contacts */}
      <Link to="/health-resources">Health Resources</Link> {/* Link for Health Resources */}
      <p>&copy; 2024 Telemedicine App. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
