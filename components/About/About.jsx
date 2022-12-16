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
            {/* <div>
                <h1 className={styles.heading}>{teams.team_heads.title}</h1>
                <div className={styles.cardp}>
                    <TeamGrid team={teams.team_heads} />
                </div>
            </div>
            <div>
                <h1 className={styles.heading}>{teams.team_dev.title}</h1>
                <div className={styles.cardp}>
                    <TeamGrid team={teams.team_dev} />
                </div>
            </div>
            <div>
                <h1 className={styles.heading}>{teams.team_design.title}</h1>
                <div className={styles.cardp}>
                    <TeamGrid team={teams.team_design} />
                </div>
            </div>
            <div>
                <h1 className={styles.heading}>{teams.team_all.title}</h1>
                <div className={styles.cardp}>
                    <TeamGrid team={teams.team_all} />
                </div>
            </div> */}





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
