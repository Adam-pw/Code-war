import React from 'react'
import styles from "./Event.module.scss"
import Image from 'next/image'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import EventCard from "../Eventcard/Eventcard.jsx";
import events from "../../metadata/events_meta.js";

export default function Eventcomp() {
    return (
        <>
            <div className={styles.head}><b>EVENTS</b></div>
            {/*ongoing events*/}
            {/* <h2 className={styles.ongoing}>ONGOING EVENTS</h2>
            <div className={styles.ongoing_banner}>
                <Image
                    src="/images/ongoing_banner.jpg"
                    alt="ongoing_banner"
                    width={900}
                    height={900}

                />
            </div> */}

            {/*past events*/}
            {/* <h2 className={styles.past_events}>OUR PAST EVENTS</h2> */}

            {/* <Carousel className={styles.carousel}>
                <div>
                    <Image
                        alt='assests'
                        src="/images/ongoing_banner.jpg"
                        width={900}
                        height={900} />
                </div>
                <div>
                    <Image
                        alt='assests'
                        src="/images/ongoing_banner.jpg"
                        width={900}
                        height={900} />
                </div>
                <div>
                    <Image
                        alt='assests'
                        src="/images/ongoing_banner.jpg"
                        width={900}
                        height={900} />
                </div>
            </Carousel> */}
            <div className={styles.events}>
                {events.map((event_card, index) => {
                    return (
                        <EventCard
                            key={index}
                            title={event_card.title}
                            description={event_card.description}
                            images={event_card.images}
                        />

                    );
                })}
            </div>
        </>
    )
}
