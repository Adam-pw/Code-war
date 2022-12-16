import React from 'react'
import styles from "./Event.module.scss"
import EventCard from "../Eventcard/Eventcard.jsx";
import events from "../../metadata/events_meta.js";

export default function Eventcomp() {
    return (
        <>
            <div className={styles.head}><b>EVENTS</b></div>            <div className={styles.events}>
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
