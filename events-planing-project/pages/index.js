import {getFeaturedEvents} from "../dummy-data";
import EventList from "../components/events/event-list";
import MainHeader from "../components/layout/main-header";
import React from "react";

function HomePage() {
    const featuredEvents = getFeaturedEvents();
    return (
        <>
            <MainHeader/>
            <main>
                <EventList items={featuredEvents}/>
            </main>
        </>

    )
}

export default HomePage
