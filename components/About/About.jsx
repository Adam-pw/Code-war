import React from 'react'
import styles from "./About.module.scss"



export default function Aboutcomp() {
    return (
        <>
            <h1 className={styles.head}>ABOUT US</h1>\
            <div className={styles.content}>
                <div className={styles.image}>
                    {/* <Image
                        src="/images/logo.png"
                        alt="logo_codewar_club"
                        width={300}
                        height={300}
                    /> */}
                </div>
                <div className={styles.text}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit adipisci culpa quia veniam accusamus quas illo repellendus cum aspernatur quod, facere consectetur! Ullam, cumque vel! Eaque minima, id sapiente voluptate nulla voluptas distinctio iure necessitatibus consectetur obcaecati at iste voluptates atque, recusandae autem quo molestiae in quaerat impedit suscipit corporis repudiandae, nemo cum. Voluptate eius itaque delectus ex nulla. Dolorum, laboriosam reiciendis quis, sed doloremque vero rerum totam amet et aspernatur illum saepe consectetur laudantium sequi mollitia tempora alias qui quae sapiente, quidem porro odit? Sint at illo similique? Nulla amet hic numquam molestiae aperiam quidem tenetur quibusdam esse ipsam eos. Eum ab dignissimos sint distinctio nostrum quis maiores dolores cum nam delectus! Ab vitae exercitationem culpa vero perferendis odit neque
                </div>
            </div>

            <div>
                {/* <h1>OUR CORE TEAM</h1> */}
                <div className={styles.cards_list}>
                    <div className={styles.cards-1}>
                        <div className={styles.card_image}> <img src="https://images.unsplash.com/photo-1464696975841-6ba97576dbb8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MjR8NDU5OTk2N3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" /> </div>
                        <div className={styles.card_title }>
                            <p>Card Title</p>
                        </div>
                    </div>

                    <div className={styles.cards-1}>
                        <div className={styles.card_image}> <img src="https://images.unsplash.com/photo-1464696975841-6ba97576dbb8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MjR8NDU5OTk2N3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" /> </div>
                        <div className={styles.card_title }>
                            <p>Card Title</p>
                        </div>
                    </div>

                    <div className={styles.cards-1}>
                        <div className={styles.card_image}> <img src="https://images.unsplash.com/photo-1464696975841-6ba97576dbb8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MjR8NDU5OTk2N3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" /> </div>
                        <div className={styles.card_title }>
                            <p>Card Title</p>
                        </div>
                    </div>
                   
                  

                    
                </div>

            </div>
        </>
    )
}
