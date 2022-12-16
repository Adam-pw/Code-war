import React from 'react'
import styles from "./About.module.scss"
import teams from "../../metadata/team_meta"
import TeamGrid from "../Card/Teamgrid"
import { Carousel } from 'react-responsive-carousel';
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
            <h1 className={styles.text}>Team Heads</h1>
            <div className={styles.container}>
                <Card
                    name="Antesh Tiwari"
                    img="/images/Team/Antesh_Tiwari.jpg"
                    branch="EC"
                    github=""
                    linkedin=""
                />
                <Card

                    name="Megha Tomar"
                    img="/images/Team/Megha_Tomar.jpg"
                    branch="ITIOT"
                    github=""
                    linkedin=""
                />
            </div>
            <h1 className={styles.text}>Web-Dev Team</h1>
            <div className={styles.container}>
                <Card
                    name="Spandita Dwivedi"
                    img="/images/Team/Spandita_dwivedi.jpeg"
                    branch="AIADS"
                    github=""
                    linkedin=""
                />
                <Card
                    name="Adam Pithenwala"
                    img="/images/Team/Adam_Pithenwala.jpeg"
                    branch="AIADS"
                    github=""
                    linkedin=""
                />
                <Card
                    name="Tanvi Shah"
                    img="/images/Team/Tanvi_Shah.jpeg"
                    branch="AIADS"
                    github=""
                    linkedin=""
                />
            </div>
            <h1 className={styles.text}>Team Design</h1>
            <div className={styles.container}>
                <Card
                    name="Teena Chhabra"
                    img="/images/Team/Teena_Chhabra.jpeg"
                    branch="CSD"
                    github=""
                    linkedin=""
                />
                <Card
                    name="Naman Dubey"
                    img="/images/Team/Naman_Dubey.jpeg"
                    branch="ITIOT"
                    github=""
                    linkedin=""
                />
                <Card
                    name="Abhay Sonakiyaa"
                    img="/images/Team/Abhay_Sonakiyaa.jpg"
                    branch="CSD"
                    github=""
                    linkedin=""
                />
            </div>
        </>
    )
}
