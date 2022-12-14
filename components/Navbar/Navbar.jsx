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
import Link from "next/link";

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
            <Link href="/">
              <div className={styles.img}>
                <Image src="/images/logo.png" alt="logo_codewar_vlub" height={200} width={200} />
              </div>
            </Link>
            <div className={styles.iconnav}>
              <div className={styles.icon}><AiOutlineHome /></div>
              <Link href="/about">
                <div className={styles.icon}><BsPerson /></div>
              </Link>
              <Link href="/gallery">

                <div className={styles.icon}><FiCamera /></div>
              </Link>
              <Link href="/events">
                <div className={styles.icon}><AiOutlineBulb /></div>
              </Link>
            </div>
            <div className={styles.social}>
              <div className={styles.icon}><FiInstagram /></div>
              <div className={styles.icon}><AiOutlineLinkedin /></div>
              <div className={styles.icon}><BiMessageDetail /></div>
            </div>
          </nav>
          {isHovering && (
            <nav className={styles.nav2} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
              <Link href="/">
                <div className={styles.img}>
                  Codewar Club
                </div>
              </Link>
              <div className={styles.iconnav}>
                <Link href="/">
                  <div className={styles.icon}>Home</div>
                </Link>
                <Link href="/about">
                  <div className={styles.icon}>About Us</div>
                </Link>
                <Link href="/gallery">
                  <div className={styles.icon}>Gallery</div>
                </Link>
                <Link href="/events">
                  <div className={styles.icon}>Events</div>
                </Link>
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
  return (
    <>
      <nav className={styles.nav3}>
        <div className={styles.img} onClick={handleMouseClicked}>
          Codewar Club
        </div>
        {isClicked &&
          <div >
            <div className={styles.iconnav}>
              <Link href="/">
                <div className={styles.icon}>Home</div>
              </Link>
              <Link href="/about">
                <div className={styles.icon}>About Us</div>
              </Link>
              <Link href="/gallery">
                <div className={styles.icon}>Gallery</div>
              </Link>
              <Link href="/events">
                <div className={styles.icon}>Events</div>
              </Link>
            </div>
            <div className={styles.social}>
              <Link href="/">
                <div className={styles.icon}>Instagram</div>
              </Link>
              <div className={styles.icon}>Linkedin</div>
              <div className={styles.icon}>Gmail</div>
            </div>
          </div>
        }
      </nav>
    </>
  )
}