import React from "react";
import { useState, useEffect } from 'react';
import styles from "./Navbar.module.scss"
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineBulb } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import { FiCamera } from 'react-icons/fi';
import { FiInstagram } from 'react-icons/fi';
import { BiMessageDetail } from 'react-icons/bi';
import { AiOutlineLinkedin } from 'react-icons/ai';
import Image from "next/image";
import { CSSTransition } from "react-transition-group";

export default function Navbarcomp() {
  const [windowWidth, setWindowWidth] = useState(1045);

  const setWindowDimensions = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', setWindowDimensions);
    return () => {
      window.removeEventListener('resize', setWindowDimensions)
    }
  }, [])

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const [isClicked, setIsClicked] = useState(false);

  const handleMouseClicked = () => {
    setIsClicked(!isClicked);
  };

  if (windowWidth > 768) {
    return (
      <>
        <div>
          <nav className={styles.nav} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <div className={styles.img}>
              <Image src="/images/logo.png" alt="logo_codewar_vlub" height={200} width={200} />
            </div>
            <div className={styles.iconnav}>
              <div className={styles.icon}><AiOutlineHome /></div>
              <div className={styles.icon}><BsPerson /></div>
              <div className={styles.icon}><FiCamera /></div>
              <div className={styles.icon}><AiOutlineBulb /></div>
            </div>
            <div className={styles.social}>
              <div className={styles.icon}><FiInstagram /></div>
              <div className={styles.icon}><AiOutlineLinkedin /></div>
              <div className={styles.icon}><BiMessageDetail /></div>
            </div>
          </nav>
          {isHovering && (
            <nav className={styles.nav2} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
              <div className={styles.img}>
                Codewar Club
              </div>
              <div className={styles.iconnav}>
                <div className={styles.icon}>Home</div>
                <div className={styles.icon}>About Us</div>
                <div className={styles.icon}>Gallery</div>
                <div className={styles.icon}>Events</div>
              </div>
              <div className={styles.social}>
                <div className={styles.icon}>Instagram</div>
                <div className={styles.icon}>Linkedin</div>
                <div className={styles.icon}>Gmail</div>
              </div>
            </nav>
          )}
        </div>
      </>
    );
  }
}