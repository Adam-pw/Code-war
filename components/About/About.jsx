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
                    name="Teena Chhabra"
                    img="/images/Team/Teena_Chhabra.jpeg"
                    branch="CSD"
                    position="President"
                    instagram="teena_chhabra_19"
                    linkedin=""
                />
                <Card
                    name="Kratagya Shrivastava"
                    img="/images/Team/Kratagya_Shrivastava.jpg"
                    branch="EC"
                    position="Vice President"
                    instagram="kush__2722"
                    linkedin=""
                />
            </div>
            <div className={styles.text}><b>Web-Redesigned By</b></div>
            <div className={styles.container}>
               <Card
                    name="Ankur Sharma"
                    img="/images/Team/Ankur_Sharma.jpg"
                    branch="CSE"
                    position="Operations Head | Social Media Handler"
                    instagram="ron_ankur_3"
                    linkedin=""
                />
                <Card
                    name="Krishna Tiwari"
                    img="/images/Team/Krishna_Tiwari.jpg"
                    branch="IT"
                    position="Tech Member"
                    instagram="krish.na_tiwari"
                    linkedin=""
                />
            </div>
            <div className={styles.text}><b>Core Team Members</b></div>
            <div className={styles.container}>
                <Card
                    name="Shubhrat Tripathi"
                    img="/images/Team/Shubhrat_Tripathia.jpg"
                    branch="EEiot"
                    position="Secretary"
                    instagram=""
                    linkedin=""
                />
                <Card
                    name="Aditya Soni"
                    img="/images/Team/Aditya_Soni.jpg"
                    branch="CSD"
                    position="Secretary"
                    instagram=""
                    linkedin=""
                />
                <Card
                    name="Saksham Tandel"
                    img="/images/Team/Saksham_Tandel.png"
                    branch="CSE"
                    position="Technical Head"
                    instagram="saksham__140"
                    linkedin=""
                />
            </div>
            <div className={styles.container}>
                 <Card
                    name="Rishabh Pandey"
                    img="/images/Team/Rishabh_Pandey.png"
                    branch="ITiot"
                    position="Content Head"
                    instagram=""
                    linkedin=""
                />
                <Card
                    name="Sagar Shukla"
                    img="/images/Team/Sagar_Shukla.jpg"
                    branch="EC"
                    position="Graphics Head"
                    instagram=""
                    linkedin=""
                />
                <Card
                    name="Areen Chouksey"
                    img="/images/Team/Areen_Chouksey.jpg"
                    branch="EC"
                    position="Management Head"
                    instagram=""
                    linkedin=""
                />
            </div>
            <div className={styles.container}>
               
                <Card
                    name="Archit Singh Baghel"
                    img="/images/Team/Archit_Singh_Baghel.jpg"
                    branch="CSD"
                    position="Finance Head"
                    instagram=""
                    linkedin=""
                />
                <Card
                    name="Aditya Khash"
                    img="/images/Team/Aditya_Khash.jpg"
                    branch="CSD"
                    position="Multimedia Head"
                    instagram=""
                    linkedin=""
                />
            </div>
        </>
    )
}
