import React from 'react'
import styles from "./About.module.scss"
import Card from "../Card/Card"
import teams from "../../metadata/team_meta"
import TeamGrid from "../Card/Teamgrid"


export default function Aboutcomp() {
    return (
        <>
            <h1 className={styles.head}>ABOUT US</h1>
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
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit adipisci culpa quia veniam accusamus quas illo repellendus cum aspernatur quod, facere consectetur! Ullam, cumque vel! Eaque minima, id sapiente voluptate nulla voluptas distinctio iure necessitatibus consectetur obcaecati at iste voluptates atque, recusandae autem quo molestiae in quaerat impedit suscipit corporis repudiandae, nemo cum. Voluptate eius itaque delectus ex nulla. Dolorum, laboriosam reiciendis quis, sed doloremque vero rerum totam amet et aspernatur illum saepe consectetur laudantium sequi mollitia tempora alias qui quae sapiente, quidem porro odit? Sint at illo similique? Nulla amet hic numquam molestiae aperiam quidem tenetur quibusdam esse ipsam eos. Eum ab dignissimos sint distinctio nostrum quis maiores dolores cum nam delectus! Ab vitae exercitationem culpa vero perferendis odit neque
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
            <div>
                <h1 className={styles.heading}><b>{teams.team_all.title}</b></h1>
                <div className={styles.cardp}>
                    <TeamGrid team={teams.team_all} />
                </div>
            </div>
        </>
    )
}
