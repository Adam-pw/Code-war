import React from 'react'
import styles from "./Event.module.scss"
import Image from 'next/image'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function Eventcomp() {
    return (
        <>
            <h1 className={styles.head}><b>EVENTS</b></h1>
            {/*ongoing events*/}
            <h2 className={styles.ongoing}>ONGOING EVENTS</h2>
            <div className={styles.ongoing_banner}>
                <Image
                    src="/images/ongoing_banner.jpg"
                    alt="ongoing_banner"
                    width={900}
                    height={900}

                />
            </div>

            {/*past events*/}
            <h2 className={styles.past_events}>OUR PAST EVENTS</h2>

            <Carousel className={styles.carousel}>
                <div>
                    <Image
                        alt='assests'
                        src="/images/ongoing_banner.jpg"
                        width={900}
                        height={900} />
                    <p className="legend">Event 1</p>
                </div>
                <div>
                    <Image
                        alt='assests'
                        src="/images/ongoing_banner.jpg"
                        width={900}
                        height={900} />
                    <p className="legend">Event 2</p>
                </div>
                <div>
                    <Image
                        alt='assests'
                        src="/images/ongoing_banner.jpg"
                        width={900}
                        height={900} />
                    <p className="legend">Event 3</p>
                </div>
            </Carousel>

          <h1 className={styles.content}><b>Follow for more updates and exciting events!</b></h1> 
        </>
    )
}
