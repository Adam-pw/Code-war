import React from 'react'
import styles from "./About.module.scss"
import teams from "../../metadata/team_meta"
import Image from 'next/image'
import Card from "../Card/Card"

export default function Aboutcomp() {
    return (
        <>
            <div className={styles.head}><b>ABOUT US</b></div>
            <div className={styles.content}>
                <div className={styles.text}>
                    {"Greetings Everyone, Welcome to the Madhav Institute of Technology & Science, Gwalior's CodeWar Club. We are creating a community that will concentrate on learning and creating various kinds of programming and development-related initiatives. Numerous webinars, workshops, industry lectures, coding marathons, hackathons, and other events are organised by us. Our primary goal is to advance coding and programming in the college so that everyone is aware of its significance. Coding is a necessary ability in today's technologically advanced period, and all IT-related companies only hire people with this knowledge.As a result, we continuously work to promote this cause while simultaneously learning these lessons as a group. Being a member of this club will provide you the chance to learn various skills not only coding but skills such as public speaking, designing, managing events, and other relevant tasks."}
                </div>
            </div>
            <div className={styles.text}><b>Team Heads</b></div>
            <div className={styles.container}>
                <Card
                    name="Antesh Tiwari"
                    img="/images/Team/Antesh_Tiwari.jpg"
                    branch="EC"
                    instagram=""
                    linkedin=""
                />
                <Card

                    name="Megha Tomar"
                    img="/images/Team/Megha_Tomar.jpg"
                    branch="ITIOT"
                    instagram=""
                    linkedin=""
                />
                <Card

                    name="Rishi Chhabra"
                    img="/images/Team/Rishi_Chhabra.jpeg"
                    branch="EC"
                    instagram=""
                    linkedin=""
                />
            </div>
            <div className={styles.text}><b>Web-Dev Team</b></div>
            <div className={styles.container}>
                <Card
                    name="Spandita Dwivedi"
                    img="/images/Team/Spandita_dwivedi.jpeg"
                    branch="AIADS"
                    instagram=""
                    linkedin=""
                />
                <Card
                    name="Adam Pithenwala"
                    img="/images/Team/Adam_Pithenwala.jpeg"
                    branch="AIADS"
                    instagram=""
                    linkedin=""
                />
                <Card
                    name="Tanvi Shah"
                    img="/images/Team/Tanvi_Shah.jpeg"
                    branch="AIADS"
                    instagram=""
                    linkedin=""
                />
            </div>
            <div className={styles.text}><b>Team Design</b></div>
            <div className={styles.container}>
                <Card
                    name="Teena Chhabra"
                    img="/images/Team/Teena_Chhabra.jpeg"
                    branch="CSD"
                    instagram=""
                    linkedin=""
                />
                <Card
                    name="Naman Dubey"
                    img="/images/Team/Naman_Dubey.jpeg"
                    branch="ITIOT"
                    instagram=""
                    linkedin=""
                />
                <Card
                    name="Abhay Sonakiyaa"
                    img="/images/Team/Abhay_Sonakiyaa.jpg"
                    branch="CSD"
                    instagram=""
                    linkedin=""
                />
            </div>
            <div className={styles.text}><b>Core Team Members</b></div>
            <div className={styles.container}>
                <Card
                    name="Aditya Soni"
                    img="/images/Team/Aditya_Soni.jpg"
                    branch="CSD"
                    instagram=""
                    linkedin=""
                />
                <Card
                    name="Satyam Singh Tomar"
                    img="/images/Team/Satyam_SIngh_Tomar.jpg"
                    branch="IT"
                    instagram=""
                    linkedin=""
                />
            </div>
        </>
    )
}
