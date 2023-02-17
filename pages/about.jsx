import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ParticleBackground from '../components/particles/ParticleBackground'
import Maincomp from '../components/Main/Main'
import Aboutcomp from '../components/About/About'

import Navbarcomp from '../components/Navbar/Navbar'

export default function About() {
  return (
    <>
      <Head>
        <title>CodeWar Club MITS</title>
        <meta name="description" content="CodeWar Club, The one and only Coding Club in Madhav Institute of Technoloogy & Science, Gwalior. Our main aim is to code and spread code." />
        <meta name="keywords" content="Codewar Club MITS, Coding Club, MITS gwl, mitsgwl, codewar, codewar club, coding club." />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <link rel="icon" href="/images/logo.webp" />
      </Head>
      <ParticleBackground />
      <Navbarcomp/>
      <Aboutcomp/>
    </>
  )
}