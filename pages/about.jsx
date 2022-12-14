import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ParticleBackground from '../components/particles/ParticleBackground'
import Maincomp from '../components/Main/Main'
import Aboutcomp from '../components/About/About'
import Eventcomp from '../components/Event/Event'
import Navbarcomp from '../components/Navbar/Navbar'
import Cardscomp from '../components/Cards/Cards'





export default function About() {
  return (
    <>
      <Head>
        <title>Codewar Club</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <ParticleBackground />
      <Navbarcomp/>
      <Aboutcomp/>
      
      
     

      
    </>
  )
}