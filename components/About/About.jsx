import React from 'react'
import styles from "./About.module.scss"
import teams from "../../metadata/team_meta"
import TeamGrid from "../Card/Teamgrid"
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image'

export default function Aboutcomp() {
    return (
        <>
            <h1 className={styles.head}><b>ABOUT US</b></h1>
            <div className={styles.content}>
                {/* <div className={styles.image}>
                     <Image
                        src="/images/logo.png"
                        alt="logo_codewar_club"
                        width={300}
                        height={300}
                    /> 
                </div> */}
                <div className={styles.text}>
                    {"Greetings Everyone, Welcome to the Madhav Institute of Technology & Science, Gwalior's CodeWar Club. We are creating a community that will concentrate on learning and creating various kinds of programming and development-related initiatives. Numerous webinars, workshops, industry lectures, coding marathons, hackathons, and other events are organised by us. Our primary goal is to advance coding and programming in the college so that everyone is aware of its significance. Coding is a necessary ability in today's technologically advanced period, and all IT-related companies only hire people with this knowledge.As a result, we continuously work to promote this cause while simultaneously learning these lessons as a group. Being a member of this club will provide you the chance to learn various skills not only coding but skills such as public speaking, designing, managing events, and other relevant tasks."}
                </div>
            </div>
            <div>
                <h1 className={styles.heading}><b>{teams.team_heads.title}</b></h1>
                <div className={styles.cardp}>
                    <TeamGrid team={teams.team_heads} />
                </div>
            </div>
            <div>
                <h1 className={styles.heading}><b>{teams.team_dev.title}</b></h1>
                <div className={styles.cardp}>
                    <TeamGrid team={teams.team_dev} />
                </div>
            </div>
            <div>
                <h1 className={styles.heading}><b>{teams.team_design.title}</b></h1>
                <div className={styles.cardp}>
                    <TeamGrid team={teams.team_design} />
                </div>
            </div>
            {/* <div>
                <h1 className={styles.heading}><b>{teams.team_all.title}</b></h1>
                <div className={styles.cardp}>
                    <TeamGrid team={teams.team_all} />
                </div>
            </div> */}
        </>
    )
}
