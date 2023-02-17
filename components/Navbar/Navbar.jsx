import React from "react";
import { useState, useEffect } from 'react';
import styles from "./Navbar.module.scss"
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineBulb } from 'react-icons/ai';
import { AiOutlineMenu } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import { FiCamera } from 'react-icons/fi';
import { FiInstagram } from 'react-icons/fi';
import { BiMessageDetail } from 'react-icons/bi';
import { AiOutlineLinkedin } from 'react-icons/ai';
import Image from "next/image";
import { CSSTransition } from "react-transition-group";
import Link from "next/link";
import { AiOutlineMail } from 'react-icons/ai';
import { BsInstagram } from 'react-icons/bs';



export default function Navbarcomp() {
  let fix;
  if (typeof window !== "undefined") {
    fix = window.innerWidth;
  }

  const [windowWidth, setWindowWidth] = useState(fix);

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
                <Image src="/images/logo.webp" alt="logo_codewar_vlub" height={200} width={200} />
              </div>
            </Link>
            <div className={styles.iconnav}>
              <Link href="/">
                <div className={styles.icon}><AiOutlineHome /></div>
              </Link>
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
              <Link href="https://www.instagram.com/code_war_mits/">
                <div className={styles.icon}><FiInstagram /></div>
              </Link>
              <Link href="https://in.linkedin.com/company/codewar-club-mits">
                <div className={styles.icon}><AiOutlineLinkedin /></div>
              </Link>
              <Link href="https://www.instagram.com/code_war_mits/">
                <div className={styles.icon}><BiMessageDetail /></div>
              </Link>
            </div>
          </nav>
          {isHovering && (
            <nav className={styles.nav2} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
              <Link href="/">
                <div className={styles.img}>
                 <h1 className={styles.hea}> Codewar Club</h1>
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
                <Link href="https://www.instagram.com/code_war_mits/">
                  <div className={styles.icon}>Instagram</div>
                </Link>
                <Link href="https://in.linkedin.com/company/codewar-club-mits">
                  <div className={styles.icon}>Linkedin</div>
                </Link>
                <Link href="https://www.instagram.com/code_war_mits/">
                  <div className={styles.icon}>Message</div>
                </Link>
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
        <div className={styles.burger}>
          <div className={styles.imgs}>
            <Image src="/images/logo.png" alt="logo_codewar_vlub" height={30} width={30} />
          </div>
          <div className={styles.img1} onClick={handleMouseClicked}>
            <h1 className={styles.hea} >Codewar Club</h1>
          </div>
          <div className={styles.img} onClick={handleMouseClicked}>
            <AiOutlineMenu />
          </div>
        </div>
        {isClicked &&
          <div >
            <div className={styles.iconnav}>
              <Link href="/">
                <div className={styles.icon}>Home</div>
              </Link>
              <hr className={styles.hrr} style={{ width: '30%', marginLeft: '4vw' }} />
              <Link href="/about">
                <div className={styles.icon}>About Us</div>
              </Link>
              <hr className={styles.hrr} style={{ width: '30%', marginLeft: '4vw' }} />
              <Link href="/gallery">
                <div className={styles.icon}>Gallery</div>
              </Link>
              <hr className={styles.hrr} style={{ width: '30%', marginLeft: '4vw' }} />
              <Link href="/events">
                <div className={styles.icon}>Events</div>
              </Link>
              <hr className={styles.hrr} style={{ width: '30%', marginLeft: '4vw' }} />
              <div className={styles.list}>
                <Link href="https://www.instagram.com/code_war_mits/">
                  <div className={styles.icon}><BsInstagram />Instagram</div>
                </Link>
                <Link href="https://in.linkedin.com/company/codewar-club-mits">
                  <div className={styles.icon}><AiOutlineLinkedin />LinkedIn</div>
                </Link>
                <Link href="https://www.instagram.com/code_war_mits/">
                  <div className={styles.icon}><AiOutlineMail />Message</div>
                </Link>
              </div>
            </div>
          </div>
        }
      </nav>
    </>
  )
}